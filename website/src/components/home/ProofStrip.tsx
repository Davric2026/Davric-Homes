import Counter from "@/components/Counter";
import { proofStats } from "@/lib/content";

// Grid dividers: 2 columns on mobile, 4 on desktop.
const cellBorders = ["", "border-l", "border-t lg:border-t-0 lg:border-l", "border-t border-l lg:border-t-0"];

export default function ProofStrip() {
  return (
    <section aria-label="Dav-Ric Homes in figures" className="border-b border-line bg-panel">
      <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
        {proofStats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col-reverse items-center border-line px-3 py-11 text-center lg:py-14 ${cellBorders[i]}`}
          >
            <dt className="mt-2 text-sm text-muted">{s.label}</dt>
            <dd className="font-display text-4xl font-bold text-red sm:text-5xl">
              {s.static ? s.value : <Counter value={s.value} suffix={s.suffix} />}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
