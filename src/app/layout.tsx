import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'RELL SEAS Codes & Devil Fruit Tier List (August 2026) - Roblox Wiki',
  description: 'Find active RELL SEAS codes, Devil Fruit tier lists (Logia, Paramecia, Zoan), Haki unlock guides, and beginner tips for Roblox RELL SEAS.',
  keywords: ['RELL SEAS codes', 'RELL SEAS tier list', 'Roblox RELL SEAS', 'RELL Games One Piece', 'Mochi Mochi Fruit RELL SEAS'],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'RELL SEAS Codes & Devil Fruit Tier List (August 2026)',
    description: 'Get free Spins, Beli, and Stat Resets in Roblox RELL SEAS with daily updated codes.',
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
