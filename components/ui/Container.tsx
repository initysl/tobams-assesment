import type { ReactNode } from "react";

/** Centres content on the 1440px Figma frame's 64px gutters. */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
