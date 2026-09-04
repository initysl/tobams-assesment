import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { UserCircleIcon, ChevronDownIcon } from '@/components/ui/icons';
import MobileMenu from '@/components/layout/MobileMenu';
import NavDropdown from '@/components/layout/NavDropdown';
import { NAV_LINKS } from '@/lib/content';

export default function SiteHeader() {
  return (
    <header className='bg-white'>
      <Container className='flex h-18 items-center justify-between lg:h-26'>
        <Link
          href='/'
          className='focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral'
        >
          <Image
            src='/images/tobams-group-logo.png'
            alt='Tobams Group home'
            width={900}
            height={600}
            preload
            fetchPriority='high'
            className='h-11 w-auto lg:h-13'
          />
        </Link>

        <div className='hidden items-center gap-6 lg:flex'>
          <Link
            href='/account'
            className='inline-flex items-center gap-2.5 rounded-md bg-plum py-3.5 pr-5 pl-3.5 text-[17px] text-white transition-colors hover:bg-plum-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral'
          >
            <UserCircleIcon className='size-7' />
            Account
            <ChevronDownIcon className='size-4' />
          </Link>
          <Link
            href='/take-assessment'
            className='inline-flex items-center rounded-md bg-coral px-6 py-3.5 text-[17px] text-white transition-colors hover:bg-coral/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral'
          >
            Take Assessment
          </Link>
        </div>

        <MobileMenu />
      </Container>

      <div className='hidden border-t border-lilac lg:block'>
        <nav aria-label='Main'>
          <ul className='flex items-center justify-center gap-8 py-4'>
            {NAV_LINKS.map((link) =>
              link.children ? (
                <li key={link.href}>
                  <NavDropdown link={link} isActive={link.label === 'About'} />
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='py-1 text-[17px] text-ink transition-colors hover:text-plum focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral'
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
