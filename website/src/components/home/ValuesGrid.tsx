import { Eyebrow } from "@/components/ui";
import { values } from "@/lib/content";

export default function ValuesGrid() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Core Values</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-tight font-bold text-ink sm:text-5xl">
            What we hold ourselves to
          </h2>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-brand border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <li
              key={v.title}
              className="group relative bg-white p-8 transition-colors hover:bg-panel sm:p-10"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="font-display text-sm font-bold tracking-widest text-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink">{v.title}</h3>
              <p className="mt-3 leading-relaxed">{v.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
