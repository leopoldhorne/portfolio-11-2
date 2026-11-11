import { capabilities } from "@/content/site";
import { Section } from "./ui";

export function Expertise() {
  return (
    <Section
      id="expertise"
      index="01"
      label="Expertise"
      title="Where operations, engineering and strategy meet."
    >
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule md:grid-cols-3">
        {capabilities.map((cap, i) => (
          <li key={cap.title} className="flex flex-col bg-paper p-7 sm:p-8">
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="mt-6 font-display text-2xl leading-snug text-ink">{cap.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{cap.summary}</p>
            <ul className="mt-6 space-y-2 border-t border-rule pt-5 text-[0.95rem] text-ink">
              {cap.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.6em] h-px w-3 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
