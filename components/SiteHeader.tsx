import { site } from "@/content/site";
import { Container } from "./ui";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#background", label: "Background" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-tight text-ink">
          {site.name}
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 text-sm sm:gap-2">
            {nav.map((item) => (
              <li key={item.href} className="hidden md:block">
                <a
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="rounded-full border border-ink/20 px-4 py-1.5 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
