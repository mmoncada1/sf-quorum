import Image from "next/image";
import logoMark from "../../public/images/logo-mark.png";

/**
 * SF Quorum mark: an AI-generated City Hall dome emblem on a rounded ink badge.
 * Rendered from a raster asset so it matches the hero artwork's style.
 */
export function LogoMark({
  size = 32,
  className,
  title = "SF Quorum",
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  return (
    <Image
      src={logoMark}
      width={size}
      height={size}
      alt={title}
      priority
      className={className}
    />
  );
}

/** Mark + wordmark lockup for headers and footers. */
export function Logo({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark size={size} />
      <span className="font-display text-lg font-bold tracking-tight text-ink">
        Quorum
      </span>
    </span>
  );
}
