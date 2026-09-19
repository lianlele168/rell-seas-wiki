import React from 'react';
import { Trophy, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'RELL SEAS Tier List: No Rankings Until Launch',
  description:
    'RELL Seas has never been publicly playable, so no Devil Fruit or Haki tier list can be sourced. What RELL Games has confirmed, and why every ranking you see is guesswork.',
  alternates: {
    canonical: '/tier-list',
  },
};

const CONFIRMED = [
  'Developed by RELL Games, the studio behind Shindo Life',
  'A naval action-adventure RPG inspired by One Piece',
  'Planned for PC, PlayStation/Xbox and mobile',
  'Over 40 pirate factions revealed in development media',
  'RELLI is the only publicly known in-game currency',
  'Monetisation planned as cosmetic gamepasses, not pay-to-win',
  'In development for roughly three years; first footage shown in 2021',
];

const UNCONFIRMED = [
  'Any Devil Fruit tier ranking or tier letter',
  'Fruit drop rates, spawn timers or rarity bands',
  'Haki types, progression or willpower thresholds',
  'Damage, defence or mobility stat values',
  'Island order, level brackets or boss rosters',
];

export default function TierListPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is there a RELL Seas tier list?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No sourced tier list exists. RELL Seas has never been publicly playable — the Roblox experience is private during Wave 1 testing — so no fruit or Haki has been observed in play. Any tier list published before launch ranks content that has not been released.',
        },
      },
      {
        '@type': 'Question',
        name: 'When will a real RELL Seas tier list be possible?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'After the game launches publicly and fruits, Haki and combat values can be observed and compared. Until then there is nothing to rank.',
        },
      },
      {
        '@type': 'Question',
        name: 'What has RELL Games actually confirmed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RELL Games has confirmed the studio, the One Piece-inspired naval RPG premise, planned platforms, more than 40 factions, the RELLI currency and a cosmetic-only monetisation plan. No release date has been announced and no fruit or Haki specifics have been revealed.',
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

      <div className="border-b border-cyan-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/50 text-amber-300 text-xs font-semibold mb-3">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>Pre-launch — nothing to rank yet</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          RELL SEAS Devil Fruit &amp; Haki Tier List
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          There is no sourced RELL Seas tier list. RELL Seas has never been publicly playable, so no
          fruit or Haki has been observed in actual play — and we do not rank things we have not seen.
        </p>
      </div>

      <div className="rounded-2xl border border-amber-900/40 bg-amber-950/20 p-6 space-y-3">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400" /> Why this page has no tiers
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          The Roblox experience is set to private while RELL Games runs Wave 1 testing, and the only
          publicly visible place is a pre-release test shell. That means nobody outside the test
          waves has played the game, so there is no basis for comparing fruits, Haki or any combat
          value. Ranking them anyway would mean inventing the entries and the scores.
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          Tier lists for unreleased games are one of the most common forms of fabricated Roblox
          content. If a RELL Seas tier list quotes drop rates, stat values out of 100 or mastery
          thresholds, check whether it cites an official source — before launch, it cannot.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="rounded-2xl border border-cyan-900/40 bg-[#091527] p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">Confirmed by RELL Games</h2>
          <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
            {CONFIRMED.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-cyan-900/40 bg-[#091527] p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">Not revealed — and not rankable</h2>
          <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
            {UNCONFIRMED.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
      </div>

      <p className="text-sm text-gray-400">
        Tracking launch status? See the{' '}
        <Link href="/codes" className="text-cyan-300 underline hover:text-white">
          codes page
        </Link>{' '}
        (no codes exist yet either) and the{' '}
        <Link href="/guides" className="text-cyan-300 underline hover:text-white">
          beginner guide
        </Link>
        . Tiers get added here once the game is playable and the values can be observed.
      </p>
    </div>
  );
}
