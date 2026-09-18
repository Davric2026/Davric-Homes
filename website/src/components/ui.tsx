import Link from "next/link";
import type { ReactNode } from "react";

type SmartLinkProps = { href: string; className?: string; children: ReactNode };

// Internal routes use next/link; external URLs open in a new tab; tel:/mailto:/#hash stay plain anchors.
export function SmartLink({ href, className, children }: SmartLinkProps) {
  if (href.startsWith("http")) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

const eyebrowTones = {
  red: "text-red",
  soft: "text-red-soft",
  gold: "text-gold",
  maroon: "text-maroon",
};

export function Eyebrow({
  children,
  tone = "red",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof eyebrowTones;
  className?: string;
}) {
  return <p className={`eyebrow ${eyebrowTones[tone]} ${className}`}>{children}</p>;
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-brand px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const buttonVariants = {
  primary: "bg-red text-white hover:bg-maroon focus-visible:outline-red",
  "outline-light":
    "border border-white/70 text-white hover:bg-white hover:text-ink focus-visible:outline-white",
  "outline-dark":
    "border border-ink/70 text-ink hover:bg-ink hover:text-white focus-visible:outline-ink",
  light: "bg-white text-maroon hover:bg-panel focus-visible:outline-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  className?: string;
}) {
  return (
    <SmartLink href={href} className={`${buttonBase} ${buttonVariants[variant]} ${className}`}>
      {children}
    </SmartLink>
  );
}

const arrowTones = {
  maroon: "text-maroon hover:text-red",
  light: "text-white hover:text-white/75",
};

export function ArrowLink({
  href,
  children,
  tone = "maroon",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: keyof typeof arrowTones;
  className?: string;
}) {
  return (
    <SmartLink
      href={href}
      className={`group/arrow inline-flex items-center gap-2 text-[0.9rem] font-bold tracking-wide transition-colors ${arrowTones[tone]} ${className}`}
    >
      {children}
      <span aria-hidden className="transition-transform duration-200 group-hover/arrow:translate-x-1">
        →
      </span>
    </SmartLink>
  );
}
