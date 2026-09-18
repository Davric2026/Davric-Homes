// Approved copy and facts for Dav-Ric Homes.
// Source of truth: .claude/skills/dav-ric-homes-website/SKILL.md — never add facts that aren't there.

export const contact = {
  phoneDisplay: "+234 803 915 4016",
  phoneFormal: "+234-803-915-4016",
  phoneHref: "tel:+2348039154016",
  email: "info@davricgroup.com",
  emailHref: "mailto:info@davricgroup.com",
  website: "www.davricgroup.com",
  websiteHref: "https://www.davricgroup.com",
  nigeriaOffice: "26a, Block 27, Alaafin Avenue, Oluyole, Ibadan, Nigeria.",
  canadaOffice: "305, King Street, West Suite, Kitchener, Ontario. N2G 1B9, Canada.",
};

export const primaryNav = [
  { label: "Developments", href: "/developments" },
  { label: "About", href: "/about" },
  { label: "Design Philosophy", href: "/philosophy" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const proofStats = [
  { value: 5, label: "Active Developments" },
  { value: 2, label: "Cities — Ibadan & Abuja" },
  { value: 40000, suffix: "+", label: "sqm Under Development" },
  { value: 2008, label: "Group Founded", static: true },
];

export type Stat = { value: string; label: string };

export type Development = {
  slug: string;
  number: string;
  cardName: string;
  city: "Ibadan" | "Abuja";
  category: "Residential" | "Land" | "Hospitality";
  meta: string;
  oneLiner: string;
  status?: string;
  stats: Stat[];
  highlights: string[];
  enquiryLabel: string;
  featured?: boolean;
  image?: {
    src: string;
    alt: string;
    label: string;
    fit?: "cover" | "contain";
  };
};

// Names for Beta, Guzape and Sigma are working titles — see SKILL.md §10.1.
export const developments: Development[] = [
  {
    slug: "pebblebrooks-estate",
    number: "01",
    cardName: "Pebblebrooks Estate",
    city: "Ibadan",
    category: "Residential",
    meta: "Jericho, Ibadan · ±3,218 sqm",
    oneLiner: "Thirteen gated homes around a central landscaped mall in Jericho.",
    status: "Structural works ongoing on site.",
    stats: [
      { value: "13", label: "Total Units" },
      { value: "G+2", label: "Building Height" },
      { value: "4", label: "Building Types" },
    ],
    highlights: [
      "7 × 4-bedroom terrace houses with maid's room",
      "6 × 4-bedroom semi-detached houses with 1-bedroom basement apartment",
      "Central landscaped mall",
      "Central badminton court",
    ],
    enquiryLabel: "Register Your Interest",
    featured: true,
    image: {
      src: "/images/pebblebrooks-aerial.jpg",
      alt: "Aerial view of Pebblebrooks Estate: white terrace and semi-detached houses along a tree-lined street at dusk",
      label: "Artist's impression",
    },
  },
  {
    slug: "project-sigma",
    number: "05",
    cardName: "Project Sigma",
    city: "Ibadan",
    category: "Land",
    meta: "Adeoyo Road, Ring Road, Ibadan · 2.4 Hectares",
    oneLiner: "Forty-four fully serviced plots on 2.4 hectares, infrastructure first.",
    stats: [
      { value: "44", label: "Serviced Plots" },
      { value: "405 sqm", label: "Typical Plot Size" },
      { value: "4", label: "Infrastructure Systems" },
    ],
    highlights: [
      "Fully serviced internal road network",
      "Drainage",
      "Central sewage",
      "Central gas reticulation",
    ],
    enquiryLabel: "Book a Site Visit",
    featured: true,
    image: {
      src: "/images/project-sigma-plan.jpg",
      alt: "Site layout of Project Sigma showing forty-four numbered plots arranged around an internal road network",
      label: "Site layout plan",
      fit: "contain",
    },
  },
  {
    slug: "project-beta",
    number: "02",
    cardName: "Project Beta",
    city: "Ibadan",
    category: "Residential",
    meta: "Alalubosa Estate, Ibadan · ±3,023 sqm",
    oneLiner:
      "An evolving Alalubosa estate stepping toward the street with a taller, more refined massing.",
    status: "Rear units at carcass stage. Street-frontage phase in development.",
    stats: [
      { value: "5", label: "Existing Terrace (4-bed)" },
      { value: "4+1", label: "New Semi-Detached + Compound" },
      { value: "G+2", label: "New Building Height" },
    ],
    highlights: [],
    enquiryLabel: "Register Your Interest",
    image: {
      src: "/images/project-beta.jpg",
      alt: "Three-storey semi-detached residence with stone cladding, balconies and a rooftop pergola",
      label: "Artist's impression",
    },
  },
  {
    slug: "guzape",
    number: "03",
    cardName: "Guzape",
    city: "Abuja",
    category: "Residential",
    meta: "Guzape, Abuja, FCT · ±1,667 sqm",
    oneLiner:
      "Our most exclusive address: luxury terraces in one of Abuja's most prestigious neighbourhoods.",
    status:
      "Concept design stage. Imagery shown is indicative of design direction and subject to change.",
    stats: [
      { value: "G+2", label: "Building Height" },
      { value: "Luxury", label: "Design Tier" },
      { value: "Concept", label: "Current Stage" },
    ],
    highlights: [],
    enquiryLabel: "Join the Guzape Interest List",
    image: {
      src: "/images/guzape.jpg",
      alt: "Concept design of angular white luxury terrace houses with glass balconies",
      label: "Indicative design direction",
    },
  },
  {
    slug: "grand-verdantia",
    number: "04",
    cardName: "Grand Verdantia",
    city: "Ibadan",
    category: "Hospitality",
    meta: "Onireke, Ibadan · ±8,000 sqm",
    oneLiner:
      "A hotel and grand event marquee on eight thousand square metres in Onireke.",
    status: "Event hall specified and under procurement. Hotel design concepts under review.",
    stats: [
      { value: "2", label: "Building Programmes" },
      { value: "25×52.5m", label: "Event Marquee Footprint" },
      { value: "1,500", label: "Guest Capacity" },
    ],
    highlights: [],
    enquiryLabel: "Enquire About the Venue",
    // Supplier photo from the profile deck, used at the client's request. It carries Liri Architecture
    // Technology's copyright watermark: get their permission, or replace it, before launch (SKILL.md §10.8).
    image: {
      src: "/images/grand-verdantia.jpg",
      alt: "Glass-roofed aluminium orangery event hall set for a ceremony, with rows of clear chairs, floral chandeliers and a reflecting pool",
      label: "Reference image · Liri Architecture Technology",
    },
  },
];

export const developmentHref = (slug: string) => `/developments/${slug}`;

export const signatureElements = [
  {
    title: "The Red Lattice",
    body: "A structural screen that has become the brand's most recognisable gesture. It filters light, shades glazing and gives every Dav-Ric building a face you can identify from the street.",
  },
  {
    title: "Sculpted Stone Volumes",
    body: "Massing handled as solid form rather than applied decoration, so the architecture reads clearly in daylight and holds its presence at night.",
  },
  {
    title: "Rooftop Pergolas",
    body: "The roof treated as habitable ground. Shade, structure and a defined silhouette against the skyline.",
  },
];

export const values = [
  {
    title: "Focus on Detail",
    body: "The difference between a house and a home is in the details, and we don't delegate them.",
  },
  {
    title: "Partnership",
    body: "We treat every client, contractor and consultant as a partner in the outcome.",
  },
  {
    title: "Excellence",
    body: "Delivering above expectation is the standard, not the stretch goal.",
  },
  {
    title: "Safety",
    body: "Every site, every crew, every stage — safety is non-negotiable.",
  },
  {
    title: "Innovation",
    body: "We keep looking for better ways to build, specify and serve.",
  },
  {
    title: "Competence",
    body: "The right expertise at every stage of the development cycle.",
  },
];

export const enquiryInterestOptions = [
  "Pebblebrooks Estate",
  "Alalubosa Estate",
  "Guzape, Abuja",
  "Grand Verdantia",
  "Project Sigma (serviced plots)",
  "Something else",
];

export const enquiryIntentOptions = [
  "Buy a home",
  "Buy a serviced plot",
  "Book an event venue",
  "Partner or invest",
  "Just exploring",
];

export const enquiryMessages = {
  success:
    "Thank you — your enquiry is with our property consultants. Expect a response within one business day.",
  error:
    "Something went wrong on our end. Please try again, or call us directly on +234 803 915 4016.",
};

export const footerDevelopments = [
  { label: "Pebblebrooks Estate", href: developmentHref("pebblebrooks-estate") },
  { label: "Alalubosa Estate", href: developmentHref("project-beta") },
  { label: "Guzape, Abuja", href: developmentHref("guzape") },
  { label: "Grand Verdantia", href: developmentHref("grand-verdantia") },
  { label: "Project Sigma", href: developmentHref("project-sigma") },
  { label: "Our Growing Legacy", href: "/legacy" },
];

export const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Design Philosophy", href: "/philosophy" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];
