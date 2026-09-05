import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "coral" | "inverse" | "outline";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-plum text-white hover:bg-plum-dark",
  coral: "bg-coral text-white hover:bg-coral/90",
  inverse: "bg-white text-plum hover:bg-lilac",
  outline: "border border-plum/30 text-plum hover:border-plum hover:bg-lilac",
};

/**
 * Every call to action in the design is a link, so this renders an anchor
 * rather than a <button> to keep the semantics honest.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 text-base leading-none font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
