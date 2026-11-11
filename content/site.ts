/**
 * All copy, links and data for leopoldhorne.com live in this file.
 *
 * Placeholders: wrap any text that still needs a verified fact in double
 * square brackets, e.g. "Reduced response time by [[X%]]". It renders as a
 * dashed, highlighted marker on the page so nothing unverified ships quietly.
 * Search this file for "[[" to find everything still to fill in.
 */

export const site = {
  name: "Leopold Horne",
  url: "https://leopoldhorne.com",
  title: "Leopold Horne — GTM Operations & Systems",
  description:
    "Leopold Horne builds the revenue systems behind growing businesses. GTM Operations at Air Labs, former JPMorgan investment banking analyst, and independent product builder.",
  role: "GTM Operations, Air Labs",
};

export const links = {
  email: "leopoldhorne1@gmail.com",
  // Set to null to render the LinkedIn buttons as a visible placeholder.
  linkedin: "https://www.linkedin.com/in/leopold-horne/" as string | null,
  github: "https://github.com/leopoldhorne",
};

export const hero = {
  eyebrow: "Revenue Operations · GTM Engineering · Product",
  headline: "Building the systems behind growing businesses.",
  intro:
    "I'm a GTM Operations professional at Air Labs, former investment banking analyst at JPMorgan, and independent product builder. I work at the intersection of revenue operations, engineering, and business strategy.",
  facts: [
    { label: "Now", value: "GTM Operations, Air Labs" },
    { label: "Previously", value: "JPMorgan M&A · $6.35B in transactions" },
    { label: "Education", value: "Cornell University, Magna Cum Laude" },
    { label: "Shipped", value: "ScaleCue on the App Store" },
  ],
};

export type Capability = {
  title: string;
  summary: string;
  items: string[];
};

export const capabilities: Capability[] = [
  {
    title: "Revenue Operations & GTM Systems",
    summary:
      "Architecting the revenue engine end to end: how demand is captured, routed, worked and handed off, with clean data and clear ownership at every stage of the funnel.",
    items: [
      "Lead routing & territory design",
      "Lead-to-account matching",
      "CRM architecture & data hygiene",
      "Funnel, SLA & handoff design",
    ],
  },
  {
    title: "Engineering & Automation",
    summary:
      "Building the automation layer that replaces manual RevOps work, and shipping complete products when a problem calls for one.",
    items: [
      "TypeScript, React & Next.js",
      "React Native & Expo (iOS)",
      "APIs, webhooks & integrations",
      "Workflow orchestration",
    ],
  },
  {
    title: "Business Strategy & Analytics",
    summary:
      "Investment banking discipline applied to go-to-market: model the problem, weigh the trade-offs, and communicate the decision clearly to leadership.",
    items: [
      "Financial modeling & valuation",
      "M&A execution: $6.35B across 4 deals",
      "Pipeline & funnel analytics",
      "Executive communication",
    ],
  },
];

export type DiagramStep = { label: string; detail?: string };

export type CaseStudy = {
  id: string;
  title: string;
  context: string;
  problem: string;
  approach: string[];
  outcome: string[];
  /** Conceptual flow shown as a diagram. Keep it high level — no internals. */
  diagram: DiagramStep[];
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "lead-routing",
    title: "Lead Routing & Assignment Architecture",
    context: "Air Labs · GTM Operations",
    problem:
      "Inbound demand was arriving faster than it could be triaged by hand. Without a single source of truth for ownership, leads risked sitting unassigned, landing with the wrong rep, or colliding with existing account relationships, eroding speed-to-lead and trust in the pipeline.",
    approach: [
      "Mapped the full lead lifecycle with sales leadership, then codified territory, segment and capacity rules into one deterministic routing model the whole team can reason about.",
      "Built lead-to-account matching so new leads attach to existing accounts and owners before any round-robin logic runs, preventing channel conflict and duplicate outreach.",
      "Designed fallback paths, SLA-based escalation and an audit trail, so every assignment is explainable and every exception is visible.",
    ],
    outcome: [
      "Leads reach the right owner automatically, without a manual triage queue in between.",
      "Ownership questions are answered by a single, documented source of truth instead of Slack debates.",
      "Territory and headcount changes become a configuration update rather than a rebuild.",
    ],
    diagram: [
      { label: "Inbound lead" },
      { label: "Lead-to-account match" },
      { label: "Territory & segment rules" },
      { label: "Capacity-aware assignment" },
      { label: "SLA & alerts" },
    ],
    tags: ["Lead routing", "Territory design", "Speed-to-lead"],
  },
  {
    id: "contact-resolution",
    title: "Contact Ingestion & Identity Resolution",
    context: "Air Labs · GTM Engineering",
    problem:
      "Person-level data arrived from forms, product signups, enrichment vendors and list imports, each with its own schema. Duplicates and partial records quietly degraded routing accuracy, attribution and outbound targeting.",
    approach: [
      "Designed a single intake layer that standardizes every source onto one canonical person schema before anything touches the CRM.",
      "Implemented identity resolution: normalizing emails, domains and names, matching against existing contacts and accounts, and merging instead of duplicating.",
      "Layered enrichment and validation so records arrive complete and ready for routing, scoring and sequencing.",
    ],
    outcome: [
      "A clean, deduplicated contact base that downstream routing, scoring and reporting can trust.",
      "New data sources plug in by mapping to the schema, not by writing one-off imports.",
      "Sales and marketing work from the same view of every person and account.",
    ],
    diagram: [
      { label: "Source systems" },
      { label: "Standardize" },
      { label: "Resolve identity" },
      { label: "Enrich & validate" },
      { label: "CRM of record" },
    ],
    tags: ["Data pipelines", "Identity resolution", "CRM hygiene"],
  },
  {
    id: "onboarding-automation",
    title: "Customer Onboarding Automation",
    context: "Air Labs · GTM Operations",
    problem:
      "The handoff from closed-won to live customer depended on Slack threads, spreadsheets and memory. Context captured during the sales cycle got lost, kickoff timing varied deal to deal, and nobody had a clear view of where each new customer stood.",
    approach: [
      "Triggered onboarding directly from closed-won, provisioning the account, tasks and internal channels the moment a deal is signed.",
      "Carried deal context, stakeholders and commitments from the opportunity into a structured handoff, so post-sales starts with the full picture.",
      "Built stage tracking and alerting so stalled onboardings surface early, before they turn into retention risk.",
    ],
    outcome: [
      "Every new customer gets the same consistent, fast start, regardless of who closed the deal.",
      "The sales-to-post-sales handoff became a system instead of a meeting.",
      "Leadership has live visibility into onboarding status across every new account.",
    ],
    diagram: [
      { label: "Closed-won" },
      { label: "Auto-provision" },
      { label: "Structured handoff" },
      { label: "Kickoff" },
      { label: "Live & tracked" },
    ],
    tags: ["Workflow automation", "Sales-to-CS handoff", "Customer lifecycle"],
  },
];

export const featuredProject = {
  name: "ScaleCue",
  tagline: "The scale is noisy. The trend is the truth.",
  category: "iOS · Health & Fitness",
  released: "Released September 2026",
  appStoreUrl: "https://apps.apple.com/us/app/scalecue/id6767923955",
  icon: "/images/scalecue/icon.png",
  summary:
    "Daily weight jumps around with water, sodium, sleep and stress. ScaleCue looks past that noise and shows the direction you're actually heading, with a 7-day trend weight, recent pace and an estimated time to goal.",
  features: [
    "Logs a weigh-in in seconds, with optional context tags like sleep, sodium, alcohol or a workout.",
    "Separates what's just noise from what's actually moving the trend, based on each person's own data.",
    "Reads a high morning against the trend rather than treating it as a setback.",
  ],
  role:
    "I built and released ScaleCue independently, covering product definition, design, engineering and App Store release. It began as WeightSense and was repositioned as ScaleCue in version 1.01.",
  stack: ["React Native", "Expo", "App Store"],
  screenshots: [
    { src: "/images/scalecue/screen-2.webp", caption: "See the trend, not the noise", alt: "ScaleCue Insights screen showing a 7-day trend weight, recent pace, time to goal and a weight trend chart" },
    { src: "/images/scalecue/screen-1.webp", caption: "Log in seconds", alt: "ScaleCue weigh-in screen with a number pad and context tags such as Alcohol and Cardio" },
    { src: "/images/scalecue/screen-3.webp", caption: "What's noise, what's working", alt: "ScaleCue Personal Patterns screen separating factors that are usually just noise from ones helping the trend" },
  ],
};

export type ArchiveProject = {
  name: string;
  description: string;
  stack: string;
  url: string;
  image: string;
};

export const archive: ArchiveProject[] = [
  {
    name: "PawCircle",
    description:
      "A platform for pet owners to bring their support circle together: updates, wishlists, and a way for friends to chip in on real needs.",
    stack: "Next.js · TypeScript · Google Sheets API",
    url: "https://pawcircle.app",
    image: "/images/pawcircle-landing.png",
  },
  {
    name: "Amex Points Calculator",
    description:
      "Visualizes the dollar value of Amex Membership Rewards across transfer partners and ranks where points go furthest.",
    stack: "Next.js · TypeScript · Recharts",
    url: "https://amex-points.vercel.app/",
    image: "/images/amex-tool.png",
  },
  {
    name: "AnimeDB",
    description:
      "A searchable anime database on the MyAnimeList API, with real-time tracking of trending searches.",
    stack: "React · Tailwind · Firebase",
    url: "https://animedb-blond.vercel.app",
    image: "/images/animedb-landing.png",
  },
];

export type Transaction = { parties: string; value: string };

export type TimelineEntry = {
  org: string;
  role: string;
  period: string;
  note?: string;
  /** Optional list shown under the entry, e.g. deal experience. */
  highlightsLabel?: string;
  highlights?: Transaction[];
};

// Most recent first.
export const timeline: TimelineEntry[] = [
  {
    org: "Air Labs",
    role: "GTM Operations Associate",
    period: "Jan 2026 – Present",
    note: "Build and run the systems behind the go-to-market motion: lead routing, contact data quality, and the closed-won to onboarding handoff.",
  },
  {
    org: "JPMorgan Chase",
    role: "Investment Banking Analyst, M&A",
    period: "Jun 2024 – Jun 2025",
    note: "Worked on $6.35B of closed and announced M&A transactions: valuation, financial modeling, diligence and execution.",
    highlightsLabel: "Selected transactions",
    highlights: [
      { parties: "Thermo Fisher / Olink", value: "$3.1B" },
      { parties: "Walmart / Vizio", value: "$2.3B" },
      { parties: "Astrana / Prospect Health Systems", value: "$745M" },
      { parties: "One Equity Partners / TechnipFMC", value: "$205M" },
    ],
  },
  {
    org: "Cornell University",
    role: "B.S. Applied Economics & Management",
    period: "May 2024",
    note: "Magna Cum Laude.",
  },
];

export const about = {
  paragraphs: [
    "I started my career in M&A at JPMorgan, working on $6.35B of transactions. Banking taught me how businesses are valued, how deals come together, and how to do careful work under real pressure. The part I enjoyed most was understanding how a company actually runs, and I kept noticing how much of that depends on systems nobody sees.",
    "So I taught myself to build. I started with web products like PawCircle and a points calculator, and eventually designed, built and released ScaleCue, an iOS app on the App Store, with React Native and Expo. Shipping something real, end to end, taught me more than any tutorial could.",
    "Today I work in GTM Operations at Air Labs, where both halves come together. I take a revenue problem, like who should own a lead, whether a contact record can be trusted, or how a new customer gets onboarded, and turn it into a system that runs reliably at scale. I care about understanding the problem first, building the simplest thing that works, and being able to explain why it matters to the business.",
  ],
};

export const contact = {
  heading: "Let's talk.",
  body:
    "I'm always glad to hear from founders, operators and teams working on interesting go-to-market problems. Email is the fastest way to reach me.",
};
