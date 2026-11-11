import Image from "next/image";
import { about, site } from "@/content/site";
import { Section } from "./ui";

export function About() {
  return (
    <Section id="about" index="05" label="About" title="From banking to building.">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image
            src="/images/pp.jpg"
            alt={`Portrait of ${site.name}`}
            width={800}
            height={800}
            sizes="(min-width: 768px) 30vw, 100vw"
            className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover object-top"
          />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-ink md:col-span-8 md:col-start-5 lg:col-span-7 lg:col-start-6">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "first-line:font-medium" : "text-ink-soft"}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
