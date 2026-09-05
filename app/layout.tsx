import type { Metadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import ClosingCta from '@/components/sections/ClosingCta';
import { SITE_NAME, SITE_URL } from '@/lib/site';
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

const TITLE = 'Training and Development';
const DESCRIPTION =
  "Tobams Group's training and development programs - corporate training, personalised individual training, capacity development and the TG Academy learning management system - designed to enhance skills, broaden knowledge and propel careers forward.";

export const metadata: Metadata = {
  // Lets the OG/Twitter/canonical URLs below stay relative. See lib/site.ts.
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${TITLE} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  keywords: [
    'Tobams Group',
    'training and development',
    'corporate training',
    'capacity development',
    'TG Academy',
    'tech talent',
    'leadership development',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/',
    locale: 'en_GB',
    // Image, dimensions and alt come from app/opengraph-image.png + .alt.txt.
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
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
