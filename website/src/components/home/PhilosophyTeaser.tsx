import Image from "next/image";
import { ArrowLink, Eyebrow } from "@/components/ui";
import { signatureElements } from "@/lib/content";

export default function PhilosophyTeaser() {
  return (
    <section className="relative overflow-hidden bg-ink-deep py-24 text-white lg:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div>
          <Eyebrow tone="soft">Design Intent</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-tight font-bold sm:text-5xl">
            One continuous vision, carried across every address.
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-white/75">
            A signature red-lattice facade. Sculpted stone volumes. Rooftop pergolas. The architectural language first
            realised at Dav Ric Towers — the Group&apos;s own headquarters in Oluyole — now runs through every Dav-Ric
            Homes development.
          </p>

          <ol className="mt-12 space-y-8">
            {signatureElements.map((el, i) => (
              <li key={el.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-white/10 pt-7">
                <span className="font-display text-2xl font-bold text-red-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{el.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/65">{el.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <ArrowLink href="/philosophy" tone="light" className="mt-12">
            See how we design
          </ArrowLink>
        </div>

        <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden className="lattice absolute -top-6 -right-6 h-3/4 w-3/4 text-red/50 sm:-top-10 sm:-right-10" />
          <div className="relative bg-white/5 p-3">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/dav-ric-towers-2.jpg"
                alt="The red-lattice screen and dark stone volume of Dav Ric Towers, lit at dusk"
                fill
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover object-[30%_45%]"
              />
            </div>
          </div>
          <figcaption className="mt-4 text-sm text-white/55">
            Dav Ric Towers, Oluyole, Ibadan — artist&apos;s impression
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
