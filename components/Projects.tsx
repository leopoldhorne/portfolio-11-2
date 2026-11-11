import Image from "next/image";
import { archive, featuredProject as app } from "@/content/site";
import { AppleIcon, ArrowUpRight } from "./icons";
import { RichText, Section } from "./ui";

function ScaleCueFeature() {
  return (
    <article
      aria-labelledby="scalecue-title"
      className="overflow-hidden rounded-3xl bg-night text-paper"
    >
      <div className="grid gap-12 p-7 sm:p-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <Image
              src={app.icon}
              alt=""
              width={64}
              height={64}
              className="h-14 w-14 rounded-[22%] ring-1 ring-white/10"
            />
            <div>
              <h3 id="scalecue-title" className="font-display text-3xl leading-none">
                {app.name}
              </h3>
              <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-wider text-paper/55">
                {app.category} · {app.released}
              </p>
            </div>
          </div>

          <p className="mt-8 font-display text-2xl leading-snug text-paper/95 text-balance">
            &ldquo;{app.tagline}&rdquo;
          </p>
          <p className="mt-5 leading-relaxed text-paper/70">{app.summary}</p>

          <ul className="mt-6 space-y-2.5 text-[0.95rem] leading-relaxed text-paper/80">
            {app.features.map((f) => (
              <li key={f} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-signal" />
                {f}
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-paper/50">My role</dt>
              <dd className="mt-2 text-[0.95rem] leading-relaxed text-paper/80">{app.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-paper/50">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-2 text-sm">
                {app.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/15 px-3 py-1 text-paper/85">
                    <RichText text={s} />
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            <AppleIcon />
            View on the App Store
            <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="lg:col-span-7">
          <ul
            aria-label="ScaleCue screenshots"
            className="-mx-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-7 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0"
          >
            {app.screenshots.map((shot, i) => (
              <li key={shot.src} className={`w-[62%] shrink-0 snap-center sm:w-auto ${i === 1 ? "sm:translate-y-8" : ""}`}>
                <figure>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={800}
                    height={1730}
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 30vw, 62vw"
                    className="h-auto w-full rounded-2xl ring-1 ring-white/10"
                  />
                  <figcaption className="mt-3 text-center font-mono text-[0.7rem] uppercase tracking-wider text-paper/50">
                    {shot.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function Archive() {
  return (
    <div className="mt-20">
      <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-4">
        <h3 className="font-display text-2xl text-ink">Earlier projects</h3>
        <p className="eyebrow hidden sm:block">Archive</p>
      </div>
      <ul>
        {archive.map((p) => (
          <li key={p.name} className="border-b border-rule">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[88px_1fr] items-center gap-5 py-6 sm:grid-cols-[140px_1fr_auto] sm:gap-8"
            >
              <Image
                src={p.image}
                alt={`${p.name} screenshot`}
                width={280}
                height={210}
                className="aspect-[4/3] w-full rounded-lg border border-rule object-cover object-top grayscale-[35%] transition duration-300 group-hover:grayscale-0"
              />
              <div>
                <p className="flex items-center gap-2 text-lg font-medium text-ink transition-colors group-hover:text-accent">
                  {p.name}
                  <ArrowUpRight className="text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </p>
                <p className="mt-1 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft">{p.description}</p>
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-wider text-ink-faint sm:hidden">{p.stack}</p>
              </div>
              <p className="hidden text-right font-mono text-[0.7rem] uppercase tracking-wider text-ink-faint sm:block">
                {p.stack}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label="Independent projects"
      title="I also ship my own products."
      intro="Outside of work I build software end to end, from the first idea through design, engineering and release."
    >
      <ScaleCueFeature />
      <Archive />
    </Section>
  );
}
