import type { Metadata } from "next";
import DevelopmentsPreview from "@/components/home/DevelopmentsPreview";
import EnquireSection from "@/components/home/EnquireSection";
import GroupBand from "@/components/home/GroupBand";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import MilestoneBand from "@/components/home/MilestoneBand";
import PhilosophyTeaser from "@/components/home/PhilosophyTeaser";
import ProofStrip from "@/components/home/ProofStrip";
import ValuesGrid from "@/components/home/ValuesGrid";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dav-Ric Homes | Modern Homes in Ibadan & Abuja",
  description:
    "Crafting homes, building legacies. Five developments underway across Ibadan and Abuja from the real estate arm of the Dav-Ric Group.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dav-Ric Homes",
  slogan: "Crafting Homes. Building Legacies.",
  telephone: contact.phoneFormal,
  email: contact.email,
  sameAs: [contact.websiteHref],
  parentOrganization: {
    "@type": "Organization",
    name: "Dav-Ric Group",
    foundingDate: "2008",
    url: contact.websiteHref,
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "26a, Block 27, Alaafin Avenue, Oluyole",
      addressLocality: "Ibadan",
      addressCountry: "NG",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "305, King Street, West Suite",
      addressLocality: "Kitchener",
      addressRegion: "ON",
      postalCode: "N2G 1B9",
      addressCountry: "CA",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <ProofStrip />
      <Introduction />
      <PhilosophyTeaser />
      <DevelopmentsPreview />
      <MilestoneBand />
      <ValuesGrid />
      <GroupBand />
      <EnquireSection />
    </>
  );
}
