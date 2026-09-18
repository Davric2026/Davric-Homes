import { ArrowLink, Eyebrow } from "@/components/ui";

const steps = [
  "We acquire the land.",
  "We market each unit.",
  "We construct the homes.",
  "We stay with each homeowner.",
];

export default function Introduction() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>About Us</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-tight font-bold text-ink sm:text-5xl">
            We handle every step, from land to homeowner.
          </h2>
          <span aria-hidden className="mx-auto mt-8 block h-0.5 w-14 bg-red" />
          <p className="mt-8 text-lg leading-relaxed">
            Dav-Ric Homes delivers modern homes and mixed-use properties in thriving communities. We acquire the
            land, market each unit, construct the homes and stay with each homeowner afterwards — with competent
            expertise at every stage of the cycle.
          </p>
          <p className="mt-5 text-lg leading-relaxed">
            That focus on Competence and Excellence is what sits behind our results, from our earliest communities
            to the five developments now underway across Ibadan and Abuja.
          </p>
        </div>

        <ol className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-brand bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step} className="bg-white px-7 py-8">
              <span className="font-display text-3xl font-bold text-red">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 font-display text-lg leading-snug text-ink">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <ArrowLink href="/about">More about who we are</ArrowLink>
        </div>
      </div>
    </section>
  );
}
