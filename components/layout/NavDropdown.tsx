"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDownIcon } from "@/components/ui/icons";
import type { NavLink } from "@/lib/content";

/**
 * Top-level nav item with a submenu. Opens on hover for pointer users and on
 * Enter/Space for keyboard users; Escape closes it and returns focus.
 */
export default function NavDropdown({
  link,
  isActive = false,
}: {
  link: NavLink;
  isActive?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className={`flex items-center gap-1.5 py-1 text-[17px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral ${
          isActive
            ? "border-b-2 border-plum text-plum"
            : "text-ink hover:text-plum"
        }`}
      >
        {link.label}
        <ChevronDownIcon
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id={menuId}
        hidden={!open}
        className="absolute top-full left-0 z-50 w-64 rounded-lg border border-lilac bg-white py-2 shadow-lg"
      >
        <ul>
          {link.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block px-4 py-2.5 text-[15px] text-ink transition-colors hover:bg-lilac hover:text-plum focus-visible:bg-lilac focus-visible:outline-none"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
