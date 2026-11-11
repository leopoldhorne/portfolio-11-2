import { hero, site } from "@/content/site";
import { ArrowRight } from "./icons";
import { LinkedInLink } from "./SocialLinks";
import { ButtonLink, Container } from "./ui";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative pt-16 pb-20 sm:pt-28 sm:pb-28">
      <Container>
        <div className="reveal">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-heading" className="mt-5">
            <span className="block font-display text-2xl text-accent sm:text-[1.75rem]">{site.name}</span>
            <span className="mt-4 block font-display text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[5.25rem] text-balance">
              {hero.headline}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">{hero.intro}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="#work">
              View selected work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <LinkedInLink className="group inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink/[0.03]">
              LinkedIn
            </LinkedInLink>
          </div>
        </div>

        <dl className="reveal reveal-delay mt-16 grid grid-cols-2 border-t border-rule sm:mt-24 lg:grid-cols-4">
          {hero.facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`border-b border-rule py-5 pr-4 lg:border-b-0 ${i % 2 === 1 ? "pl-4 border-l lg:pl-6" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}
            >
              <dt className="eyebrow">{fact.label}</dt>
              <dd className="mt-2 text-[0.95rem] leading-snug text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
