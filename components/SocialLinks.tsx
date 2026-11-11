import { links } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { Placeholder } from "./ui";

/** LinkedIn link, or a visible placeholder until links.linkedin is set. */
export function LinkedInLink({ className = "", children }: { className?: string; children: React.ReactNode }) {
  if (!links.linkedin) {
    return (
      <span className={className}>
        <LinkedInIcon />
        <Placeholder>LinkedIn URL</Placeholder>
      </span>
    );
  }
  return (
    <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={className}>
      <LinkedInIcon />
      {children}
    </a>
  );
}

export function ContactLinks() {
  const row =
    "group flex items-center justify-between gap-4 border-b border-rule py-5 text-lg text-ink transition-colors hover:text-accent sm:text-xl";
  return (
    <ul className="border-t border-rule">
      <li>
        <a href={`mailto:${links.email}`} className={row}>
          <span className="flex items-center gap-3">
            <MailIcon />
            {links.email}
          </span>
          <span className="eyebrow transition-transform group-hover:translate-x-1">Email</span>
        </a>
      </li>
      <li>
        <LinkedInLink className={`${row} [&>svg]:shrink-0`}>
          <span className="flex-1">LinkedIn</span>
          <span className="eyebrow transition-transform group-hover:translate-x-1">Profile</span>
        </LinkedInLink>
      </li>
      <li>
        <a href={links.github} target="_blank" rel="noopener noreferrer" className={row}>
          <span className="flex items-center gap-3">
            <GitHubIcon />
            github.com/leopoldhorne
          </span>
          <span className="eyebrow transition-transform group-hover:translate-x-1">Code</span>
        </a>
      </li>
    </ul>
  );
}
