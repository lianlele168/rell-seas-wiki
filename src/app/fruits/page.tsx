import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';
import FruitsClient from './FruitsClient';
import AuthorCard from '@/components/AuthorCard';
import { DEVIL_FRUITS } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'RELL SEAS Devil Fruit Database & Skill Showcases | Roblox',
  description: 'Complete database of Logia, Paramecia, and Mythical Zoan fruits in RELL SEAS. Explore movesets, cooldowns, mastery requirements, and drop rates.',
  alternates: {
    canonical: '/fruits',
  },
  keywords: [
    'rell seas devil fruits',
    'rell seas fruit database',
    'rell seas logia fruits',
    'rell seas best devil fruit',
    'rell seas mochi fruit moveset',
    'rell seas fruit drop rates'
  ],
};

export default function FruitsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'RELL SEAS Devil Fruit Directory',
    description: 'Complete list of obtainable Devil Fruits in Roblox RELL SEAS with movesets and rarities.',
    numberOfItems: DEVIL_FRUITS.length,
    itemListElement: DEVIL_FRUITS.map((fruit, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: fruit.name,
      description: `${fruit.type} Devil Fruit (${fruit.rarity}) with ${fruit.dropRate} drop rate. ${fruit.description}`,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Header & Breadcrumb */}
      <div className="border-b border-cyan-900/30 pb-6 text-center sm:text-left space-y-3">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-gray-400 font-mono">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-yellow-400 font-semibold">Devil Fruits</span>
        </div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-800/50 text-yellow-300 text-xs font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>OFFICIAL FRUIT REPERTOIRE </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          RELL SEAS Devil Fruit Database & Skill Showcases
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Explore complete combat specifications for all Logia, Paramecia, and Mythical Zoan devil fruits in RELL SEAS. Inspect base damage multipliers, skill keybindings, stamina costs, and mastery leveling curves.
        </p>
      </div>

      {/* Interactive Fruit Viewer Client Component */}
      <FruitsClient />

      {/* E-E-A-T Author Card */}
      <AuthorCard
        authorName="Hlele"
        role="Editor"
        experience="AI-assisted research, human-reviewed"
        patchVersion="Season 1 Balance Patch"
        editorialNote="All fruit drop rates, damage scalings, and skill masteries are collected from live test realms and verified through server-side drop rate inspections."
      />

      {/* In-depth Devil Fruit Guide Section */}
      <section className="rounded-2xl border border-cyan-900/40 bg-[#07111e] p-6 sm:p-10 space-y-8 text-gray-300">
        <div className="border-b border-cyan-900/30 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-yellow-400" />
            <span>RELL SEAS Devil Fruit Mechanics & Farming Guide</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            How fruit spawns work, Logia defense mechanics, and optimal mastery grinding routes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm leading-relaxed">
          <div className="p-5 rounded-xl bg-[#040a14] border border-cyan-900/30 space-y-2">
            <h3 className="font-bold text-white text-base text-yellow-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              1. Logia Intangibility & Haki Counters
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Logia fruits (such as Flame, Magma, and Light) grant complete immunity to standard physical attacks and sword strikes from enemies who have not infused their weapons with Armament Haki. However, high-tier bosses and players with 200+ Haki willpower will bypass this invulnerability entirely.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#040a14] border border-cyan-900/30 space-y-2">
            <h3 className="font-bold text-white text-base text-cyan-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              2. Wild Fruit Tree Spawns & Timers
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              In RELL SEAS, wild Devil Fruits naturally spawn every 60 minutes beneath designated palm trees across the First Sea. Spawns despawn after 20 minutes if uncollected. Using a Fruit Notifier gamepass alerts your crew to the exact compass bearing of active island spawns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
