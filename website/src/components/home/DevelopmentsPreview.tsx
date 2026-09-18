import Image from "next/image";
import { ArrowLink, ButtonLink, Eyebrow } from "@/components/ui";
import { developmentHref, developments, type Development } from "@/lib/content";

function CategoryBadge({ children }: { children: string }) {
  return (
    <span className="absolute top-4 left-4 bg-red px-3 py-1.5 text-[0.66rem] font-bold tracking-[0.14em] text-white uppercase">
      {children}
    </span>
  );
}

function ImageLabel({ children }: { children: string }) {
  return (
    <span className="absolute right-3 bottom-3 bg-ink/75 px-2.5 py-1 text-[0.66rem] tracking-wide text-white/90">
      {children}
    </span>
  );
}

function Status({ children, prominent }: { children: string; prominent?: boolean }) {
  return (
    <p
      className={`mt-5 border-l-2 border-red pl-3 text-sm leading-relaxed ${prominent ? "bg-red/5 py-2 pr-3 font-bold text-ink" : "text-ink"}`}
    >
      <span className="sr-only">Status: </span>
      {children}
    </p>
  );
}

function FeatureCard({ d, reverse }: { d: Development; reverse: boolean }) {
  const contain = d.image?.fit === "contain";
  return (
    <article className="group grid overflow-hidden rounded-brand bg-white shadow-card lg:grid-cols-2">
      <div
        className={`relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[32rem] ${reverse ? "lg:order-2" : ""} ${contain ? "bg-panel" : "bg-ink"}`}
      >
        {d.image && (
          <Image
            src={d.image.src}
            alt={d.image.alt}
            fill
            sizes="(min-width: 1024px) 40rem, 100vw"
            className={
              contain
                ? "object-contain p-6 sm:p-10"
                : "object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            }
          />
        )}
        <CategoryBadge>{d.category}</CategoryBadge>
        {d.image && <ImageLabel>{d.image.label}</ImageLabel>}
      </div>

      <div className="flex flex-col p-8 sm:p-10 lg:p-12">
        <Eyebrow>
          Project {d.number} · {d.city}
        </Eyebrow>
        <h3 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{d.cardName}</h3>
        <p className="mt-2 text-sm text-maroon italic">{d.meta}</p>
        <p className="mt-5 text-lg leading-relaxed">{d.oneLiner}</p>
        {d.status && <Status>{d.status}</Status>}

        <dl className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
          {d.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-panel px-3 py-4 sm:px-4">
              <dt className="mt-1 text-xs leading-snug text-muted">{s.label}</dt>
              <dd className="font-display text-xl font-bold text-maroon sm:text-2xl">{s.value}</dd>
            </div>
          ))}
        </dl>

        {d.highlights.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {d.highlights.map((h) => (
              <li key={h} className="border border-line px-3 py-1.5 text-xs text-ink">
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-7 gap-y-4 pt-9">
          <ButtonLink href={developmentHref(d.slug)}>View This Development</ButtonLink>
          <ArrowLink href="/#enquire">{d.enquiryLabel}</ArrowLink>
        </div>
      </div>
    </article>
  );
}

function CompactCard({ d }: { d: Development }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-brand bg-white shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-maroon">
        {d.image ? (
          <>
            <Image
              src={d.image.src}
              alt={d.image.alt}
              fill
              sizes="(min-width: 1024px) 26rem, (min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <ImageLabel>{d.image.label}</ImageLabel>
          </>
        ) : (
          // Text-only panel until approved imagery exists.
          <div className="absolute inset-0">
            <div aria-hidden className="lattice absolute inset-0 text-white/10" />
            <dl className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-4 p-6 text-white">
              {d.stats.slice(1).map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs text-white/70">{s.label}</dt>
                  <dd className="font-display text-2xl font-bold sm:text-3xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
        <CategoryBadge>{d.category}</CategoryBadge>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <Eyebrow>
          Project {d.number} · {d.city}
        </Eyebrow>
        <h3 className="mt-3 font-display text-2xl font-bold text-ink">{d.cardName}</h3>
        <p className="mt-1.5 text-sm text-maroon italic">{d.meta}</p>
        <p className="mt-4 leading-relaxed">{d.oneLiner}</p>
        {d.status && <Status prominent={d.slug === "guzape"}>{d.status}</Status>}
        <div className="mt-auto pt-7">
          <ArrowLink href={developmentHref(d.slug)}>View This Development</ArrowLink>
        </div>
      </div>
    </article>
  );
}

export default function DevelopmentsPreview() {
  const featured = developments.filter((d) => d.featured);
  const others = developments.filter((d) => !d.featured);

  return (
    <section className="bg-panel py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Current Developments</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-tight font-bold text-ink sm:text-5xl">
            Five projects. One design language.
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            From a thirteen-unit gated estate in Jericho to a forty-four-plot serviced land development on Ring Road,
            here is what we are building right now.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {featured.map((d, i) => (
            <FeatureCard key={d.slug} d={d} reverse={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {others.map((d) => (
            <CompactCard key={d.slug} d={d} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <ButtonLink href="/developments" variant="outline-dark">
            View all developments
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
