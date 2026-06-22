/**
 * Lightweight, deterministic policy-topic classifier. Each matter is tagged by
 * keyword matching against its title/name. Intentionally transparent so the
 * "what does this supervisor focus on?" charts are explainable, not a black box.
 */

export interface TopicDef {
  slug: string;
  name: string;
  emoji: string;
  color: string;
  keywords: string[];
}

export const TOPICS: TopicDef[] = [
  {
    slug: "housing",
    name: "Housing",
    emoji: "🏠",
    color: "#5b8def",
    keywords: [
      "housing", "affordable", "rezon", "density", "tenant", "eviction", "rent",
      "adu", "dwelling unit", "homeless", "shelter", "sro", "inclusionary",
      "residential", "real property", "subdivision",
    ],
  },
  {
    slug: "public-safety",
    name: "Public Safety",
    emoji: "🚓",
    color: "#ff5d6c",
    keywords: [
      "police", "public safety", "crime", "fire department", "sheriff",
      "surveillance", "emergency", "gun", "firearm", "violence", "traffic safety",
      "law enforcement", "sfpd", "district attorney",
    ],
  },
  {
    slug: "transit",
    name: "Transportation",
    emoji: "🚌",
    color: "#2fd17a",
    keywords: [
      "transit", "muni", "sfmta", "bicycle", "pedestrian", "parking", "street",
      "vision zero", "bart", "transportation", "highway", "road", "bike",
      "speed limit", "great highway",
    ],
  },
  {
    slug: "budget",
    name: "Budget & Taxes",
    emoji: "💸",
    color: "#ffce4d",
    keywords: [
      "budget", "appropriat", "tax", "fee", "fund", "grant", "bond",
      "fiscal", "revenue", "expenditure", "contract", "lease agreement",
      "supplemental", "bonds",
    ],
  },
  {
    slug: "health",
    name: "Public Health",
    emoji: "🏥",
    color: "#c77dff",
    keywords: [
      "health", "mental health", "behavioral", "overdose", "drug", "fentanyl",
      "substance", "hospital", "medical", "covid", "public health", "dph",
      "treatment", "addiction",
    ],
  },
  {
    slug: "environment",
    name: "Environment",
    emoji: "🌱",
    color: "#3ddc97",
    keywords: [
      "climate", "environment", "clean energy", "emission", "solar", "recycl",
      "pollution", "green", "sustainab", "park", "open space", "tree", "water",
      "carbon", "sea level",
    ],
  },
  {
    slug: "business",
    name: "Business & Economy",
    emoji: "🏪",
    color: "#ff9f1c",
    keywords: [
      "business", "small business", "permit", "license", "economic", "nightlife",
      "cannabis", "entertainment", "vendor", "commercial", "downtown", "tourism",
      "workforce", "employment", "minimum wage", "labor",
    ],
  },
  {
    slug: "governance",
    name: "Governance & Elections",
    emoji: "🏛️",
    color: "#8ecae6",
    keywords: [
      "charter amendment", "election", "ethics", "commission", "ballot",
      "campaign", "redistrict", "sunshine", "administrative code", "ordinance amending the administrative",
      "appointment", "reappoint", "rules of order", "civil service",
    ],
  },
  {
    slug: "land-use",
    name: "Land Use & Planning",
    emoji: "🏗️",
    color: "#e07a5f",
    keywords: [
      "planning code", "zoning", "landmark", "historic", "conditional use",
      "development agreement", "environmental review", "ceqa", "general plan",
      "special use district", "height", "building code", "construction",
    ],
  },
  {
    slug: "social-services",
    name: "Social Services & Equity",
    emoji: "🤝",
    color: "#f4a261",
    keywords: [
      "children", "youth", "senior", "disab", "immigrant", "equity", "reparations",
      "food", "childcare", "education", "library", "family", "social services",
      "domestic violence", "lgbtq", "civil rights",
    ],
  },
  {
    slug: "honorary",
    name: "Honorary / Symbolic",
    emoji: "🎀",
    color: "#adb5bd",
    keywords: [
      "declaring", "commend", "recogniz", "honoring", "proclaim", "in memoriam",
      "urging", "supporting", "opposing", "month", "day", "celebrat", "anniversary",
      "national", "awareness", "findings", "support of", "opposition to",
    ],
  },
];

export function classify(text: string): { slug: string; weight: number }[] {
  const t = (text || "").toLowerCase();
  const hits: { slug: string; weight: number }[] = [];
  for (const topic of TOPICS) {
    let count = 0;
    for (const kw of topic.keywords) {
      if (t.includes(kw)) count++;
    }
    if (count > 0) hits.push({ slug: topic.slug, weight: count });
  }
  if (hits.length === 0) hits.push({ slug: "governance", weight: 0.5 });
  // keep the strongest few topics
  return hits.sort((a, b) => b.weight - a.weight).slice(0, 3);
}

export const TOPIC_BY_SLUG = Object.fromEntries(TOPICS.map((t) => [t.slug, t]));
