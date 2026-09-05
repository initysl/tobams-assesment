import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  XIcon,
} from "@/components/ui/icons";
import {
  CONTACT,
  FOOTER_COLUMNS,
  FOOTER_TAGLINE,
  LEGAL_LINKS,
  REGISTERED_OFFICES,
} from "@/lib/content";

const SOCIALS = [
  { label: "Tobams Group on LinkedIn", href: "https://www.linkedin.com", Icon: LinkedInIcon },
  { label: "Tobams Group on Instagram", href: "https://www.instagram.com", Icon: InstagramIcon },
  { label: "Tobams Group on X", href: "https://www.x.com", Icon: XIcon },
];

export default function SiteFooter() {
  return (
    <footer className="bg-plum-dark">
      <div className="border-t border-white/20">
        <Container className="py-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr_0.8fr_0.9fr] lg:gap-8">
            <div>
              <Image
                src="/images/tobams-group-logo.png"
                alt="Tobams Group"
                width={794}
                height={197}
                className="h-10 w-auto"
              />
              <p className="mt-6 max-w-sm text-base leading-[1.6] text-white">
                {FOOTER_TAGLINE}
              </p>
              <ul className="mt-7 flex gap-4">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex size-10 items-center justify-center rounded-full bg-white text-plum-dark transition-colors hover:bg-lilac focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.title} aria-labelledby={`footer-${column.title}`}>
                <h2
                  id={`footer-${column.title}`}
                  className="font-heading text-lg font-semibold text-white"
                >
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-base text-white/90 transition-colors hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-12 grid gap-8 rounded-xl bg-white/5 p-6 lg:grid-cols-[1fr_1.05fr_0.62fr] lg:gap-0">
            <div className="lg:pr-8">
              <h2 className="font-heading text-lg font-semibold text-white">Registered Offices</h2>
              <address className="mt-4 space-y-1 not-italic">
                <p className="font-medium text-coral">
                  {REGISTERED_OFFICES[0].country}
                </p>
                {REGISTERED_OFFICES[0].lines.map((line) => (
                  <p key={line} className="text-base text-white/90">
                    {line}
                  </p>
                ))}
              </address>
            </div>

            <address className="not-italic lg:border-l lg:border-white/20 lg:px-8">
              <p className="mt-0 font-medium text-coral">
                {REGISTERED_OFFICES[1].country}
              </p>
              <div className="mt-1 space-y-1">
                {REGISTERED_OFFICES[1].lines.map((line) => (
                  <p key={line} className="text-base text-white/90">
                    {line}
                  </p>
                ))}
              </div>
            </address>

            <div className="lg:border-l lg:border-white/20 lg:pl-8">
              <h2 className="font-heading text-lg font-semibold text-white">
                Contact Information
              </h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3">
                  <MailIcon className="size-5 shrink-0 text-coral" />
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-base text-white/90 transition-colors hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon className="size-5 shrink-0 text-coral" />
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="text-base text-white/90 transition-colors hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-base text-white/90">
              Copyright &copy; Tobams Group, 2024. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white/90 underline underline-offset-4 transition-colors hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
