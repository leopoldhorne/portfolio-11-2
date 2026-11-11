import { contact, links, site } from "@/content/site";
import { ContactLinks } from "./SocialLinks";
import { Container } from "./ui";

export function Contact() {
  return (
      <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 border-t border-rule pt-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">
                <span className="text-accent">06</span> / Contact
              </p>
              <h2 id="contact-heading" className="mt-8 font-display text-5xl leading-none text-ink sm:text-6xl">
                {contact.heading}
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{contact.body}</p>
            </div>
            <div className="md:col-span-7 md:pt-14">
              <ContactLinks />
            </div>
          </div>
        </Container>
      </section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
      <footer className="border-t border-rule py-8">
        <Container className="flex flex-col gap-2 text-sm text-ink-faint sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p>
            <a href={`mailto:${links.email}`} className="transition-colors hover:text-ink">
              {links.email}
            </a>
          </p>
        </Container>
      </footer>
  );
}
