import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Dices, Calendar } from 'lucide-react';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: 'RELL SEAS Fruit Gacha Simulator: No Odds Published Yet',
  description:
    'RELL Seas has no public gacha odds, so a fruit roll simulator cannot replicate anything. What is actually known about the roll system.',
  alternates: {
    canonical: '/simulator',
  },
  keywords: [
    'rell seas gacha',
    'rell seas fruit rolls',
    'rell seas spin rates',
    'rell seas pity system',
  ],
};

export default function SimulatorPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are the RELL Seas gacha odds known?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. RELL Seas has never been publicly playable, so RELL Games has published no rarity bands, drop percentages or pity thresholds. Any simulator quoting exact odds such as 0.5% Mythical or a 90-spin pity counter is using invented numbers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will RELL Seas have a fruit roll system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fruits are described as a core progression system and community discussion centres on rolling and trading them, but RELL Games has not published how rolls are earned, what the rarity tiers are, or whether a pity system exists.',
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="border-b border-cyan-900/30 pb-6 text-center sm:text-left space-y-3">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-gray-400 font-mono">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-yellow-400 font-semibold">Gacha Simulator</span>
        </div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/50 text-amber-300 text-xs font-semibold">
          <Calendar className="w-3.5 h-3.5" />
          <span>NO ODDS PUBLISHED — SIMULATOR OFFLINE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          RELL SEAS Fruit Gacha Simulator
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          There is nothing to simulate. RELL Games has never published rarity bands, drop
          percentages or a pity threshold, so any roll simulator for this game is demonstrating
          numbers it made up.
        </p>
      </div>

      <AuthorCard
        authorName="Hlele"
        role="Editor"
        experience="AI-assisted research, human-reviewed"
        patchVersion="Pre-launch"
        editorialNote="RELL Games has published no drop-rate disclosure table, rarity bands or pity values. This page therefore reports no odds. The simulator is switched off until real values exist to reproduce."
      />

      <div className="rounded-2xl border border-amber-900/40 bg-amber-950/20 p-6 space-y-3">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Dices className="w-4 h-4 text-amber-400" /> Why the simulator is switched off
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          A drop-rate simulator only means something if the rates are real. Ours previously used
          0.5% Mythical, 2% Legendary and a 90-spin pity counter — figures that looked precise and
          were invented. A working spinner makes invented odds feel measured, which is exactly the
          problem: the interface lends the numbers credibility they have not earned.
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          Until RELL Games publishes actual roll data, the honest version of this page is an empty
          one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="rounded-2xl border border-cyan-900/40 bg-[#091527] p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">What suggests a roll system exists</h2>
          <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
            <li>Fruits are described as central to combat and build identity</li>
            <li>Fruit trading and rerolling are core to the One Piece genre</li>
            <li>Community discussion focuses heavily on fruit acquisition</li>
          </ul>
          <p className="text-xs text-gray-500 pt-1">
            None of this is confirmation of specific mechanics — RELL Games has not detailed them.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-900/40 bg-[#091527] p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">Not published</h2>
          <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
            <li>Rarity tiers and their names</li>
            <li>Any drop percentage</li>
            <li>Pity or guaranteed-roll thresholds</li>
            <li>How rolls are earned — currency, codes or gamepasses</li>
          </ul>
        </section>
      </div>

      <p className="text-sm text-gray-400">
        The{' '}
        <Link href="/fruits" className="text-cyan-300 underline hover:text-white">
          fruits page
        </Link>{' '}
        covers what is known about the fruit system, and the{' '}
        <Link href="/codes" className="text-cyan-300 underline hover:text-white">
          codes page
        </Link>{' '}
        tracks launch status. The simulator returns once real odds exist.
      </p>
    </div>
  );
}
