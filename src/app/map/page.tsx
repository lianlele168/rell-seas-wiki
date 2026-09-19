import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Compass, Navigation, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'RELL SEAS Map & Islands: Not Available Before Launch',
  description:
    'RELL Seas is in private Wave 1 testing, so no island list, level brackets, boss rosters or map layout have been published. What is confirmed about the world.',
  alternates: {
    canonical: '/map',
  },
};

export default function MapPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is there a RELL Seas map or island list?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No official one. RELL Seas has never been publicly playable, so no island names, level brackets, boss rosters or drop tables have been published. Island maps circulating before launch are speculation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is known about the RELL Seas world?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RELL Games describes an open ocean action-adventure RPG with island exploration, ships, more than 40 pirate factions, bosses and nonlinear progression. The specific islands and routes have not been revealed.',
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative rounded-3xl overflow-hidden border border-cyan-900/40 p-8 sm:p-12 bg-gradient-to-r from-[#060e1a] via-[#091527] to-[#040a14]">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-300 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>No map published yet</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            RELL SEAS Map &amp; Islands
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            There is no RELL Seas map to show. The game is in private Wave 1 testing, so no island
            names, level brackets, bosses or routes have been released — and a map drawn from
            guesswork is worse than no map.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-amber-900/40 bg-amber-950/20 p-6 space-y-3">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Compass className="w-4 h-4 text-amber-400" /> Why this page is empty
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Island guides need islands: names, level ranges, boss names, drop tables, travel routes.
          RELL Games has published none of them. Producing a twelve-island progression route with
          named bosses and item drops would mean inventing the entire world and presenting it as a
          navigation aid.
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          This is also the easiest kind of fabrication to spot after launch, because the real map
          will not match it. We would rather wait.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="rounded-2xl border border-cyan-900/40 bg-[#091527] p-6 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Navigation className="w-4 h-4 text-yellow-400" /> Confirmed about the world
          </h2>
          <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
            <li>Open-ocean naval action-adventure with island exploration</li>
            <li>Ships serve as transport and upgradeable bases</li>
            <li>More than 40 pirate factions with reputation effects</li>
            <li>Sea beasts and world bosses are part of the design</li>
            <li>Nonlinear progression — sail, fight, craft or trade</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-cyan-900/40 bg-[#091527] p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">Not revealed</h2>
          <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
            <li>Island names, order and level brackets</li>
            <li>Boss names, spawn locations and drop tables</li>
            <li>Sea boundaries and travel routes</li>
            <li>Any playable map or coordinate system</li>
          </ul>
        </section>
      </div>

      <p className="text-sm text-gray-400">
        See the{' '}
        <Link href="/guides" className="text-cyan-300 underline hover:text-white">
          beginner guide
        </Link>{' '}
        for what to prepare before launch, and the{' '}
        <Link href="/codes" className="text-cyan-300 underline hover:text-white">
          codes page
        </Link>{' '}
        for launch status. This page fills in once the game is playable.
      </p>
    </div>
  );
}
