import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ArrowUpRightIcon } from '@/components/ui/icons';
import { NOT_FOUND, NOT_FOUND_LINKS } from '@/lib/content';

/**
 * Root 404. Every nav item other than "/" is a placeholder route, so this page
 * is reachable from the header on almost every click - it carries a way back
 * rather than just an apology.
 *
 * Deliberately still: this is above-the-fold content, and the root layout
 * already animates the closing CTA below it. Nothing here moves on load.
 */
export default function NotFound() {
  return (
    <main className='relative isolate overflow-hidden bg-canvas'>
      {/* Soft brand wash behind the numerals. */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blush opacity-60 blur-3xl sm:h-128 sm:w-lg'
      />

      <Container className='flex flex-col items-center py-16 text-center sm:py-20 lg:py-28'>
        <p className='rounded-full bg-lilac px-6 py-2.5 text-xs tracking-[0.12em] text-plum sm:text-sm'>
          {NOT_FOUND.eyebrow}
        </p>

        <p className='mt-6 font-heading text-[88px] leading-none font-semibold tracking-tight text-plum sm:text-[132px] lg:text-[168px]'>
          {NOT_FOUND.code}
        </p>

        <span
          aria-hidden='true'
          className='mt-6 block h-1 w-16 rounded-full bg-coral'
        />

        <h1 className='mt-6 max-w-2xl font-heading text-2xl leading-tight font-semibold text-ink sm:text-3xl lg:text-[40px]'>
          {NOT_FOUND.title}
        </h1>

        <p className='mt-4 max-w-xl text-sm leading-relaxed text-slate-body sm:text-base'>
          {NOT_FOUND.body}
        </p>

        <div className='mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
          <Button href={NOT_FOUND.primaryCta.href}>
            {NOT_FOUND.primaryCta.label}
          </Button>
          <Button href={NOT_FOUND.secondaryCta.href} variant='outline'>
            {NOT_FOUND.secondaryCta.label}
          </Button>
        </div>

        <section
          aria-labelledby='not-found-links-title'
          className='mt-14 w-full max-w-3xl'
        >
          <h2
            id='not-found-links-title'
            className='text-xs tracking-[0.12em] text-plum-muted uppercase'
          >
            {NOT_FOUND.linksLabel}
          </h2>
          <ul className='mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
            {NOT_FOUND_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='group flex items-center justify-between gap-3 rounded-lg border border-lilac-deep bg-white px-5 py-4 text-left text-sm font-medium text-ink transition-colors hover:border-plum hover:bg-lilac focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral'
                >
                  {link.label}
                  <ArrowUpRightIcon className='size-4 shrink-0 text-plum-muted transition-colors group-hover:text-plum' />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}
