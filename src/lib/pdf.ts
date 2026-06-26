/**
 * Fetch a PDF (e.g. a Legistar View.ashx attachment) and extract its plain text.
 *
 * Both the raw PDF bytes and the extracted text are cached on disk under
 * .cache/pdf/ so re-runs are fast and we don't hammer the city's server.
 */

import { PDFParse } from "pdf-parse";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const CACHE_DIR = path.join(process.cwd(), ".cache", "pdf");
// Legistar's View.ashx document endpoint rejects (HTTP 410) the descriptive
// crawler UA that its .aspx pages accept, so present a browser-like UA here.
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

/** Hard cap on extracted characters per document to keep LLM token use sane. */
const MAX_CHARS = 12000;

function keyFor(url: string): string {
  return createHash("sha1").update(url).digest("hex");
}

async function exists(p: string): Promise<boolean> {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

/**
 * Returns the extracted text of the PDF at `url`, or null if it can't be
 * fetched/parsed. Results are cached on disk indefinitely (attachments are
 * effectively immutable once filed).
 */
export async function fetchPdfText(url: string): Promise<string | null> {
  await mkdir(CACHE_DIR, { recursive: true });
  const base = path.join(CACHE_DIR, keyFor(url));
  const txtPath = `${base}.txt`;
  const pdfPath = `${base}.pdf`;

  if (await exists(txtPath)) {
    const cached = await readFile(txtPath, "utf8");
    return cached || null;
  }

  let bytes: Buffer;
  if (await exists(pdfPath)) {
    bytes = await readFile(pdfPath);
  } else {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": USER_AGENT,
          Accept: "application/pdf,application/octet-stream,*/*",
        },
      });
      if (!res.ok) return null;
      bytes = Buffer.from(await res.arrayBuffer());
      await writeFile(pdfPath, bytes);
    } catch {
      return null;
    }
  }

  let text: string;
  try {
    const parser = new PDFParse({ data: new Uint8Array(bytes) });
    const result = await parser.getText();
    await parser.destroy();
    text = (result.text || "").replace(/\s+\n/g, "\n").replace(/[ \t]{2,}/g, " ").trim();
  } catch {
    return null;
  }

  if (text.length > MAX_CHARS) text = text.slice(0, MAX_CHARS);
  await writeFile(txtPath, text, "utf8");
  return text || null;
}
