import type { Metadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import ClosingCta from '@/components/sections/ClosingCta';
import './globals.css';

// Headings are set in Nunito, body copy in Nunito Sans, per the Figma file.
const headingFont = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
});

const bodyFont = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tobams Frontend Assessment | Tobams Group',
  description:
    "Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.",
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className='flex min-h-full flex-col font-sans'>
        <SiteHeader />
        {children}
        <ClosingCta />
        <SiteFooter />
      </body>
    </html>
  );
}
