import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" {...stroke} {...props}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" {...stroke} {...props}>
      <path d="M5 11l6-6M6 5h5v5" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" {...stroke} {...props}>
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" />
      <path d="M3 5.5l7 5 7-5" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M4.3 7.4h2.6V16H4.3zM5.6 3.2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8.5 7.4H11v1.2c.4-.7 1.3-1.4 2.6-1.4 2.8 0 3.3 1.8 3.3 4.2V16h-2.6v-4.1c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V16H8.5z" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M10 1.8a8.2 8.2 0 00-2.6 16c.4.1.6-.2.6-.4v-1.5c-2.3.5-2.8-1-2.8-1-.4-1-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.7 1.3 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.9-2.2-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.3.8a7.8 7.8 0 014.1 0c1.6-1 2.3-.8 2.3-.8.4 1.2.2 2 .1 2.2.5.6.9 1.3.9 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.5v2.3c0 .2.2.5.6.4A8.2 8.2 0 0010 1.8z" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M13.7 10.6c0-1.9 1.6-2.8 1.6-2.9-.9-1.3-2.2-1.5-2.7-1.5-1.2-.1-2.2.7-2.8.7-.6 0-1.5-.7-2.4-.6-1.3 0-2.4.7-3 1.8-1.3 2.3-.3 5.6.9 7.4.6.9 1.3 1.9 2.3 1.8.9 0 1.3-.6 2.4-.6s1.4.6 2.4.6c1 0 1.6-.9 2.2-1.8.7-1 1-2 1-2.1 0 0-1.9-.7-1.9-2.8zM11.9 5c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.3 1.2-.5.5-.9 1.4-.8 2.3.9.1 1.8-.5 2.3-1.1z" />
    </svg>
  );
}
