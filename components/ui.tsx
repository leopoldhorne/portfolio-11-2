import type { ReactNode } from "react";

/**
 * Renders a string, turning any [[double-bracketed]] text into a visible
 * placeholder marker. See content/site.ts.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[[") && part.endsWith("]]") ? (
          <Placeholder key={i}>{part.slice(2, -2)}</Placeholder>
        ) : (
          part
        )
      )}
    </>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <mark className="placeholder" title="Placeholder: replace in content/site.ts">
      {children}
    </mark>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <Container>
        <div className="grid gap-6 border-t border-rule pt-6 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">
            <span className="text-accent">{index}</span>
            <span aria-hidden="true"> / </span>
            {label}
          </p>
          <div className="md:col-span-9">
            <h2 id={headingId} className="font-display text-3xl leading-tight text-ink sm:text-[2.6rem] text-balance">
              {title}
            </h2>
            {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>}
          </div>
        </div>
        <div className="mt-12 sm:mt-16">{children}</div>
      </Container>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-rule px-2.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">
      {children}
    </span>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", external }: ButtonLinkProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-accent"
      : "border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.03]";
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
