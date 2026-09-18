import Image from "next/image";
import { ArrowLink, Eyebrow } from "@/components/ui";

const facts = [
  { value: "HQ", label: "Corporate Headquarters" },
  { value: "Aug 2026", label: "Commissioned" },
  { value: "Oluyole", label: "Ibadan, Nigeria" },
];

const progressPhotos = [
  "/images/progress/towers-1.jpg",
  "/images/progress/towers-2.jpg",
  "/images/progress/towers-3.jpg",
  "/images/progress/towers-4.jpg",
];

export default function MilestoneBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div aria-hidden className="lattice absolute inset-y-0 right-0 -z-10 w-1/2 text-white/[0.03]" />
      <div className="container-x grid items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <Eyebrow tone="soft">Milestone</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-tight font-bold sm:text-5xl">
            Dav Ric Towers — a foundation realised.
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-white/75">
            Commissioned in August 2026 in Oluyole, Ibadan, the Group&apos;s head office is the architectural benchmark
            for everything that follows. Its material palette, massing discipline and detailing set the standard now
            carried into every estate we build.
          </p>

          <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {facts.map((f) => (
              <div key={f.label} className="flex items-baseline gap-6 py-4">
                <dt className="w-36 shrink-0 font-display text-2xl font-bold text-white">{f.value}</dt>
                <dd className="text-white/65">{f.label}</dd>
              </div>
            ))}
          </dl>

          <ArrowLink href="/philosophy" tone="light" className="mt-10">
            Read the story
          </ArrowLink>
        </div>

        <figure>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {progressPhotos.map((src, i) => (
              <div
                key={src}
                className={`relative aspect-[9/16] overflow-hidden bg-white/5 ${i % 2 === 1 ? "translate-y-6 sm:translate-y-10" : ""}`}
              >
                <Image
                  src={src}
                  alt={`Dav Ric Towers under construction, site photograph ${i + 1} of 4`}
                  fill
                  sizes="(min-width: 1024px) 13rem, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <figcaption className="mt-12 text-sm text-white/55 italic sm:mt-16">
            Real construction photographs of the Dav-Ric Group headquarters, captured as the building took shape on
            site.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
