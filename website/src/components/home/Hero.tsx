import Image from "next/image";
import { ButtonLink, Eyebrow } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src="/images/guzape.jpg"
        alt="Concept design of the Guzape luxury terrace development in Abuja"
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[65%_50%]"
      />
      {/* Even dark wash over the photo, deepened on the left behind the text. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/60" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-ink/75 via-ink/35 to-transparent" />

      <div className="container-x flex min-h-[38rem] items-center py-24 lg:min-h-[46rem]">
        <div className="max-w-xl animate-rise">
          <Eyebrow tone="gold">Dav-Ric Homes</Eyebrow>
          <span aria-hidden className="mt-4 block h-0.5 w-14 bg-red" />
          <h1 className="mt-7 font-display text-[2.5rem] leading-[1.05] font-bold tracking-tight sm:text-6xl xl:text-7xl">
            Crafting Homes.
            <br />
            Building Legacies.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/85">
            Modern homes and mixed-use developments across Ibadan, Abuja and Ontario — built by the real estate arm
            of a group that has been delivering on its word since 2008.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/developments">Explore Our Developments</ButtonLink>
            <ButtonLink href="/#enquire" variant="outline-light">
              Speak to a Property Consultant
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Guzape is at concept stage — the render must stay labelled as indicative (SKILL.md §6.3). */}
      <p className="eyebrow absolute right-5 bottom-5 hidden bg-ink/70 px-2.5 py-1 text-[0.6rem] text-white/80 sm:block">
        Guzape, Abuja · Indicative design direction
      </p>
    </section>
  );
}
