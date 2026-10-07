export const categories = [
  "Brand & Web",
  "Interactive",
  "Creative Coding",
  "3D / WebGL",
] as const;

export const projects = [
  {
    slug: "lumen-finance",
    title: "Lumen Finance",
    category: "Brand & Web",
    year: "2026",
    role: "Brand, web design, development",
    timeline: "11 weeks",
    description:
      "A full rebrand and marketing site for a fintech startup moving away from the generic blue-gradient look of its category.",
    challenge:
      "Lumen came to us with a product that worked well and a brand that looked like every other fintech landing page in the category — the same blue gradient, the same stock photo of a smiling person holding a phone, the same three-column feature grid. Investors and early users had trouble telling them apart from competitors at a glance.",
    approach:
      "We rebuilt the identity around a warmer, more editorial palette and a confident serif typeface rarely seen in fintech, then carried that restraint into the site itself — fewer sections, each one doing more work, with motion used to explain the product rather than just decorate the page.",
    outcome:
      "The new site shipped alongside the rebrand in a single coordinated launch. Time-on-page on the product explainer increased noticeably, and Lumen's team reported the brand was the first thing new hires and investors commented on.",
    services: ["Brand Identity", "Web Design", "Web Development"],
    pattern: "mesh",
    colors: ["#8b5cf6", "#22d3ee"],
    image: "/images/work/lumen-finance.jpg",
  },
  {
    slug: "verve-audio",
    title: "Verve Audio",
    category: "Interactive",
    year: "2026",
    role: "Interactive build, 3D viewer, motion",
    timeline: "8 weeks",
    description:
      "A product launch microsite with a scroll-driven 3D viewer, letting visitors rotate and inspect the hardware before it shipped.",
    challenge:
      "Verve was launching a physical product months before it would be available to touch in person. Static renders weren't communicating the build quality or the materials, and the team was worried pre-orders would suffer without a way to actually inspect the thing.",
    approach:
      "We built a scroll-driven 3D viewer around the product render, synced to the page's narrative — as you scroll through the story of the product, the model rotates, explodes into its components, and reassembles, with each beat timed to the copy rather than running on a separate autoplay loop.",
    outcome:
      "The microsite became the primary pre-order driver for the launch. Visitors spent an average of several minutes interacting with the viewer alone — longer than most product pages hold attention at all.",
    services: ["Interactive Build", "3D Product Viewer", "Motion Design"],
    pattern: "lines",
    colors: ["#f472b6", "#8b5cf6"],
    image: "/images/work/verve-audio.jpg",
  },
  {
    slug: "studio-arc",
    title: "Studio Arc",
    category: "Brand & Web",
    year: "2025",
    role: "Web design, development",
    timeline: "6 weeks",
    description:
      "A portfolio site for an architecture studio, built around large-format imagery and restrained, confident typography.",
    challenge:
      "Studio Arc's previous site buried genuinely excellent architectural photography under heavy UI chrome — navigation bars, filter dropdowns, card shadows — that competed with the work instead of framing it.",
    approach:
      "We stripped the interface back to almost nothing: full-bleed imagery, a single persistent wordmark, and typography that only appears when it has something specific to say. Navigation between projects happens through a minimal filmstrip rather than a conventional grid.",
    outcome:
      "The studio now sends the site directly to prospective clients in lieu of a PDF deck — something they couldn't do with the previous version without a lengthy caveat about 'ignoring the navigation.'",
    services: ["Web Design", "Web Development"],
    pattern: "grid",
    colors: ["#22d3ee", "#f472b6"],
    image: "/images/work/studio-arc.jpg",
  },
  {
    slug: "nightshade-records",
    title: "Nightshade Records",
    category: "Creative Coding",
    year: "2025",
    role: "Creative coding, generative system, development",
    timeline: "9 weeks",
    description:
      "A generative visualizer that turns a record label's catalog into a living canvas — every release renders a unique visual pattern.",
    challenge:
      "Nightshade wanted a site that felt as experimental as the music on the label, without relying on a single hero video that would date quickly and cost a fortune to replace every time they wanted to refresh the homepage.",
    approach:
      "Instead of a fixed visual, we built a generative system — each release's metadata (tempo, key, duration) feeds a set of rules that render a unique, reproducible pattern for that track. The homepage becomes a living index of the catalog rather than a static hero image.",
    outcome:
      "The generative covers are now used across the label's own social promotion for new releases, extending the system well past the original brief of 'build us a homepage.'",
    services: ["Creative Coding", "Generative Art", "Web Development"],
    pattern: "noise",
    colors: ["#8b5cf6", "#f472b6"],
    image: "/images/work/nightshade-records.jpg",
  },
  {
    slug: "marrow-skincare",
    title: "Marrow Skincare",
    category: "Brand & Web",
    year: "2025",
    role: "Brand identity, e-commerce, web design",
    timeline: "10 weeks",
    description:
      "A DTC skincare launch with a custom ingredient-visualizer and a checkout flow designed to feel as considered as the product.",
    challenge:
      "Marrow's formulations were built around a small number of carefully chosen active ingredients, but that story was getting lost in a template e-commerce theme that looked identical to a hundred other skincare drops.",
    approach:
      "We designed a custom ingredient visualizer that shows exactly what's in each product and why, built directly into the product page rather than buried in a separate tab, and rebuilt checkout from scratch to remove the generic theme's friction points.",
    outcome:
      "Marrow launched to a waitlist of several thousand with a conversion rate on launch day well above typical DTC skincare benchmarks, which the founders credited directly to the ingredient visualizer holding attention long enough to convert.",
    services: ["Brand Identity", "E-commerce", "Web Design"],
    pattern: "mesh",
    colors: ["#f472b6", "#22d3ee"],
    image: "/images/work/marrow-skincare.jpg",
  },
  {
    slug: "continuum-festival",
    title: "Continuum Festival",
    category: "3D / WebGL",
    year: "2024",
    role: "3D/WebGL, interactive build, motion",
    timeline: "7 weeks",
    description:
      "An immersive lineup site for a music festival — a WebGL scene visitors navigate to discover artists, stages, and set times.",
    challenge:
      "A packed, multi-stage lineup is hard to communicate as a flat list without it reading as overwhelming or generic — every festival site ends up looking like a spreadsheet with a background image.",
    approach:
      "We built a navigable 3D scene representing the festival grounds, where each stage is a distinct space you move between, with artist and set-time information surfacing contextually as you approach — turning lineup discovery into something closer to exploring a map than scanning a table.",
    outcome:
      "The site became a shareable moment in its own right — clips of people exploring the 3D lineup circulated on social media well before the festival itself, extending its reach past the usual lineup-announcement post.",
    services: ["3D/WebGL", "Interactive Build", "Motion Design"],
    pattern: "lines",
    colors: ["#22d3ee", "#8b5cf6"],
    image: "/images/work/continuum-festival.jpg",
  },
];

export const serviceGroups = [
  {
    slug: "brand-identity",
    title: "Brand & Identity",
    description:
      "Visual identity systems built to hold up across a product, a site, and everything that comes after launch — not just a logo file.",
    details: [
      "Brand strategy and positioning",
      "Logo, type, and color systems",
      "Brand guidelines your team can actually use",
      "Naming and verbal identity, when it's needed",
    ],
  },
  {
    slug: "web-design",
    title: "Web Design & UI/UX",
    description:
      "Interfaces designed with motion and interaction considered from the first wireframe, not bolted on after the static comps are approved.",
    details: [
      "Marketing sites, product sites, and microsites",
      "Design systems for product UI",
      "Prototyping in-browser, not just in Figma",
      "Responsive design that's actually designed, not just scaled down",
    ],
  },
  {
    slug: "creative-development",
    title: "Creative Development",
    description:
      "The part most agencies hand off to a dev shop — we keep it in-house, because the build is where the craft either survives or dies.",
    details: [
      "Animation and scroll-driven interaction",
      "3D and WebGL experiences",
      "Creative coding and generative visuals",
      "Custom CMS integrations for teams who need to self-serve content",
    ],
  },
  {
    slug: "launch-support",
    title: "Launch & Support",
    description:
      "A site is never really finished. We stay on after launch to tune performance, extend features, and fix the things only real traffic reveals.",
    details: [
      "Performance and accessibility passes",
      "CMS setup for teams who need to self-serve",
      "Ongoing iteration after launch",
      "Monthly retainers for teams who need a standing creative-dev partner",
    ],
  },
];

export const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We get specific about the brand, the audience, and what the site actually needs to do — before any visual direction starts.",
    detail:
      "Usually a week or two of working sessions, competitive teardown, and asking the questions that reveal what the project is actually about before anyone opens a design file.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Art direction, prototyping, and motion studies happen together, not in sequence — so the design is never a static comp we hope survives the build.",
    detail:
      "We prototype key interactions in-browser alongside the visual design, so by the time a direction is approved, we already know it's buildable at the quality bar we set.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Built by the same people who designed it. Animation, interaction, and performance are considered from the first commit.",
    detail:
      "No separate dev team re-interpreting a Figma file. The designer is in the codebase, which is the whole reason the motion and interaction detail survives into production.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We ship, watch how it performs with real traffic, and keep iterating — launch is a milestone, not the finish line.",
    detail:
      "Performance budgets are checked against real devices, not just a fast studio laptop, before anything goes live — then we watch analytics for the first few weeks and fix what real usage reveals.",
  },
];

export const values = [
  {
    title: "Craft over templates",
    text: "Every project starts from the brief, not from a theme we already have lying around. It takes longer. It looks like it.",
  },
  {
    title: "Motion is a design decision",
    text: "Animation isn't decoration added at the end — it's considered at the same time as layout and typography, because it changes how both should work.",
  },
  {
    title: "The build is part of the craft",
    text: "We don't hand designs off to a separate dev team and hope nothing gets lost in translation. The people who design it build it.",
  },
  {
    title: "Small team, senior output",
    text: "We stay deliberately small so every project gets senior attention, not a junior team supervised by someone you only meet in the kickoff call.",
  },
  {
    title: "Honest about fit",
    text: "If a project just needs a fast template site, we'll say so and point you somewhere faster and cheaper. We'd rather lose the project than do it badly.",
  },
  {
    title: "Performance is part of the design",
    text: "A beautiful site that loads slowly on a real connection isn't a beautiful site. Performance budgets are set alongside the visual direction, not bolted on after.",
  },
];

export const stats = [
  { value: "2024", label: "Founded" },
  { value: "Lalitpur", label: "Based in Nepal" },
  { value: "6+", label: "Shipped projects" },
  { value: "Small", label: "Deliberately so" },
];

export const capabilities = [
  "Brand identity",
  "Web design",
  "Creative development",
  "3D & WebGL",
  "Motion design",
  "Generative art",
  "UI/UX",
  "E-commerce",
];

export const industries = [
  "Fintech",
  "Consumer hardware",
  "Music & entertainment",
  "DTC retail",
  "Architecture & design",
  "Events & festivals",
];

export const quotes = [
  {
    text: "They treated the motion and the interaction detail as seriously as the visual design — which is rare, and it shows in the finished product.",
    role: "Founder, fintech startup",
  },
  {
    text: "We'd worked with two other studios before PixelFlux and watched both of them hand our design off to a dev team that flattened half of it. That didn't happen this time.",
    role: "Marketing lead, consumer hardware brand",
  },
  {
    text: "Fast, direct, and the person who scoped the project was the same person writing the code three months later.",
    role: "Creative director, independent record label",
  },
];
