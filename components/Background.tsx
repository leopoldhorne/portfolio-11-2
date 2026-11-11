import { timeline } from "@/content/site";
import { RichText, Section } from "./ui";

export function Background() {
  return (
    <Section id="background" index="04" label="Background" title="Finance training, operator instincts.">
      <ol className="relative">
        {timeline.map((entry, i) => (
          <li
            key={entry.org}
            className="grid gap-2 border-t border-rule py-7 last:border-b md:grid-cols-12 md:gap-6"
          >
            <p className="font-mono text-sm text-ink-soft md:col-span-3">
              <RichText text={entry.period} />
            </p>
            <div className="md:col-span-9 md:flex md:items-baseline md:justify-between md:gap-8">
              <div>
                <h3 className="flex items-center gap-3 font-display text-2xl text-ink">
                  {i === 0 && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />}
                  {entry.org}
                </h3>
                <p className="mt-1 text-ink">{entry.role}</p>
              </div>
              {entry.note && (
                <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft md:mt-0">{entry.note}</p>
              )}
            </div>
            {entry.highlights && (
              <div className="mt-5 md:col-span-9 md:col-start-4 md:mt-2">
                <h4 className="eyebrow">{entry.highlightsLabel}</h4>
                <ul
                  className={`mt-3 grid gap-px overflow-hidden rounded-xl border border-rule bg-rule ${
                    entry.highlights.length > 1 ? "sm:grid-cols-2" : ""
                  }`}
                >
                  {entry.highlights.map((h) => (
                    <li key={h.parties} className="flex items-baseline justify-between gap-4 bg-paper px-4 py-3">
                      <span className="text-[0.95rem] text-ink">{h.parties}</span>
                      <span className="whitespace-nowrap font-mono text-sm text-accent">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
