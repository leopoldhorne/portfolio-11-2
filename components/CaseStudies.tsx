import { caseStudies, type CaseStudy, type DiagramStep } from "@/content/site";
import { RichText, Section, Tag } from "./ui";

/** A conceptual, high-level flow. Horizontal on desktop, vertical on mobile. */
function FlowDiagram({ steps, title }: { steps: DiagramStep[]; title: string }) {
  return (
    <figure className="rounded-xl border border-rule bg-paper-deep/60 p-5 sm:p-6">
      <figcaption className="eyebrow mb-5 flex items-center justify-between">
        <span>System flow</span>
        <span className="normal-case tracking-normal text-ink-faint">Conceptual</span>
      </figcaption>
      <ol aria-label={`${title}: conceptual flow`} className="flow">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <li key={step.label} className="flow-step">
              <span
                className={`flow-node ${i === 0 ? "flow-node--start" : ""} ${isLast ? "flow-node--end" : ""}`}
              >
                <span className="font-mono text-[0.65rem] text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm leading-tight text-ink">{step.label}</span>
              </span>
              {!isLast && <span aria-hidden="true" className="flow-link" />}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow text-accent">{label}</h4>
      <div className="mt-3 space-y-2 leading-relaxed text-ink">{children}</div>
    </div>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article
      id={study.id}
      aria-labelledby={`${study.id}-title`}
      className="group rounded-2xl border border-rule bg-paper p-6 transition-[border-color,box-shadow] duration-300 hover:border-ink/25 hover:shadow-[0_1px_0_rgba(0,0,0,0.02),0_12px_40px_-24px_rgba(31,29,26,0.35)] sm:p-10"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <header className="lg:col-span-4">
          <p className="font-mono text-xs text-ink-faint">Case {String(index + 1).padStart(2, "0")}</p>
          <h3 id={`${study.id}-title`} className="mt-4 font-display text-[1.75rem] leading-tight text-ink text-balance">
            {study.title}
          </h3>
          <p className="mt-3 text-sm text-ink-soft">{study.context}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        <div className="grid gap-8 lg:col-span-8">
          <Block label="Problem">
            <p className="text-ink-soft">
              <RichText text={study.problem} />
            </p>
          </Block>
          <Block label="Approach">
            <ul className="space-y-2">
              {study.approach.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-ink/40" />
                  <span>
                    <RichText text={line} />
                  </span>
                </li>
              ))}
            </ul>
          </Block>
          <Block label="Outcome">
            <ul className="space-y-2">
              {study.outcome.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                  <span>
                    <RichText text={line} />
                  </span>
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>

      <div className="mt-10">
        <FlowDiagram steps={study.diagram} title={study.title} />
      </div>
    </article>
  );
}

export function CaseStudies() {
  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      title="Systems I've designed and built."
      intro="Selected GTM systems I've architected at Air Labs. Each one started as a revenue problem and ended as infrastructure the team runs on. Descriptions stay at the architecture level, with no confidential details, code or customer data."
    >
      <div className="grid gap-6">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.id} study={study} index={i} />
        ))}
      </div>
    </Section>
  );
}
