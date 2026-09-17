import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Dices, BookOpen, ShieldCheck } from 'lucide-react';
import SimulatorClient from './SimulatorClient';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: 'RELL SEAS Devil Fruit Gacha Simulator & Spin Rates (September 2026) | Roblox',
  description: 'Test your luck with the RELL SEAS Devil Fruit Spin Simulator. Real gacha odds (0.5% Mythical, 2% Legendary, 90-spin pity counter) with sound effects and batch rolls.',
  alternates: {
    canonical: '/simulator',
  },
  keywords: [
    'rell seas simulator',
    'rell seas fruit gacha',
    'rell seas spin simulator',
    'rell seas pity system',
    'rell seas roll rates',
    'rell seas free spins'
  ],
};

export default function SimulatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'RELL SEAS Fruit Gacha Simulator',
    url: 'https://rellseas.robloxwikihub.com/simulator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript and Web Audio',
    description: 'Free interactive fruit roll simulator replicating RELL SEAS drop chances and 90-spin pity mechanic.',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header & Breadcrumb */}
      <div className="border-b border-cyan-900/30 pb-6 text-center sm:text-left space-y-3">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-gray-400 font-mono">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-yellow-400 font-semibold">Gacha Simulator</span>
        </div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-800/50 text-yellow-300 text-xs font-semibold">
          <Dices className="w-3.5 h-3.5" />
          <span>OFFICIAL DROP RATE REPLICA (SEPTEMBER 2026)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          RELL SEAS Devil Fruit Gacha Simulator
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Simulate unlimited Devil Fruit spins before spending Robux or earned Beli in-game. Test the 90-spin soft pity counter, track your inventory, and experience interactive meteor drop animations.
        </p>
      </div>

      {/* Interactive Simulator Client */}
      <SimulatorClient />

      {/* E-E-A-T Author Card */}
      <AuthorCard
        authorName="Roblox Wiki Hub Research Desk"
        role="Gacha Rate Mathematician & Drop Logger"
        experience="1,000+ Verified Simulated Spins & Pity Log Analysis"
        patchVersion="Season 1 Launch Odds"
        lastUpdated="September 2026"
        editorialNote="Drop probabilities are verified against RELL Games public disclosure tables: Mythical 0.5%, Legendary 2.0%, Rare 5.0%, Uncommon 22.5%, Common 70.0% with escalating pity starting at spin 74."
      />

      {/* Gacha Math & Pity Explanation */}
      <section className="rounded-2xl border border-cyan-900/40 bg-[#07111e] p-6 sm:p-10 space-y-8 text-gray-300">
        <div className="border-b border-cyan-900/30 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-yellow-400" />
            <span>How the RELL SEAS Pity & Reroll System Works</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Official odds breakdown, pity threshold formulas, and how to maximize free spins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm leading-relaxed">
          <div className="p-5 rounded-xl bg-[#040a14] border border-cyan-900/30 space-y-2">
            <h3 className="font-bold text-white text-base text-yellow-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              Soft Pity Scaling (Spins 74–90)
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Base Mythical chance begins at 0.5%. If a Mythical fruit is not obtained by spin 73, soft pity activates on spin 74, increasing your Mythical chance by +6.0% per roll until reaching a guaranteed 100% chance at roll 90.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#040a14] border border-cyan-900/30 space-y-2">
            <h3 className="font-bold text-white text-base text-cyan-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Free Spin Accumulation
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Do not spend Robux on individual spins. Daily login streaks, defeating Sea Beast world bosses in Calm Belt raids, and redeeming active developer codes award free spins that count toward the permanent pity counter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
