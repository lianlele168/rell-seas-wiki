import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://rellseas.robloxwikihub.com'),
  title: 'RELL SEAS: Release Status, Codes & Pre-Launch Guide',
  description:
    'RELL Seas has not launched publicly. Track release status and code availability, see what RELL Games has confirmed, and read why no fruit tier list or island map exists yet.',
  keywords: [
    'RELL SEAS release date',
    'RELL SEAS codes',
    'RELL SEAS status',
    'RELL Games One Piece Roblox',
    'RELL SEAS fruits',
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'RELL SEAS: Release Status, Codes & Pre-Launch Guide',
    description:
      'RELL Seas is still in private Wave 1 testing. Track launch status and codes, and see what has actually been confirmed.',
    type: 'website',
    url: 'https://rellseas.robloxwikihub.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#060e1a] text-gray-100 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
