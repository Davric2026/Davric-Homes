import { ButtonLink } from "@/components/ui";
import { contact } from "@/lib/content";

export default function GroupBand() {
  return (
    <section className="relative isolate overflow-hidden bg-maroon text-white">
      <div aria-hidden className="absolute inset-y-0 right-0 -z-10 w-[55%] bg-maroon-deep cut-left" />
      <div aria-hidden className="lattice absolute inset-0 -z-10 text-white/[0.05]" />

      <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-[1.5fr_1fr] lg:py-24">
        <div>
          <h2 className="font-display text-4xl leading-tight font-bold sm:text-5xl">
            Backed by two decades of the Dav-Ric Group.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            What began in 2008 as a petroleum trading and distribution business has grown into a group of four
            companies operating across seven industries — Energy, Telecoms, Construction and Real Estate. Dav-Ric
            Homes carries that record into every home we build.
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 lg:items-end lg:text-right">
          <div className="flex flex-col-reverse">
            <p className="mt-1 text-sm text-white/70">Group Founded</p>
            <p className="font-display text-6xl font-bold sm:text-7xl">2008</p>
          </div>
          <ButtonLink href={contact.websiteHref} variant="light">
            Visit davricgroup.com →
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
