import { ButtonLink, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden className="lattice absolute inset-0 -z-10 text-white/[0.04]" />
      <div className="container-x py-32 lg:py-44">
        <div className="max-w-2xl">
          <Eyebrow tone="soft">404</Eyebrow>
          <h1 className="mt-5 font-display text-5xl leading-tight font-bold sm:text-6xl">
            This address doesn&apos;t exist yet.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            The page you&apos;re looking for has moved or was never built. Our developments, however, are very real.
          </p>
          <ButtonLink href="/developments" className="mt-10">
            View Our Developments
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
