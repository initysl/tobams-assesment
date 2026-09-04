"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon, UserCircleIcon } from "@/components/ui/icons";
import { NAV_LINKS } from "@/lib/content";

/** Hamburger menu for the mobile and tablet header. */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      // Keep focus inside the panel while it is open.
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close main menu" : "Open main menu"}
        onClick={() => setOpen((value) => !value)}
        className="rounded-xl bg-ink p-3 text-white transition-colors hover:bg-plum focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral lg:hidden"
      >
        <MenuIcon className="size-7" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/50"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-white px-6 py-6 shadow-xl"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close main menu"
                className="rounded-xl bg-ink p-3 text-white transition-colors hover:bg-plum focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                <CloseIcon className="size-6" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-4">
              <ul className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-3 text-lg text-ink transition-colors hover:bg-lilac hover:text-plum focus-visible:bg-lilac focus-visible:outline-none"
                    >
                      {link.label}
                    </Link>
                    {link.children ? (
                      <ul className="mb-1 ml-4 space-y-1 border-l border-lilac pl-3">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-md px-2 py-2 text-[15px] text-slate-body transition-colors hover:text-plum focus-visible:bg-lilac focus-visible:outline-none"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6 flex flex-col gap-3 border-t border-lilac pt-6">
              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-plum px-6 py-3 font-medium text-white transition-colors hover:bg-plum-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                <UserCircleIcon className="size-6" />
                Account
              </Link>
              <Link
                href="/take-assessment"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-coral px-6 py-3 font-medium text-white transition-colors hover:bg-coral/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                Take Assessment
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
