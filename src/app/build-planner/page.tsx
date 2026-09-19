import type { Metadata } from 'next';
import Link from 'next/link';
import { Sliders, Calendar, BookOpen } from 'lucide-react';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: 'RELL SEAS Build Planner: No Stat Data Published Yet',
  description:
    'RELL Seas has never been publicly playable, so no stat scaling, level cap or Haki formula has been released. Here is what is confirmed about progression instead.',
  alternates: {
    canonical: '/build-planner',
  },
  keywords: [
    'rell seas build planner',
    'rell seas stat calculator',
    'rell seas stats',
    'rell seas progression',
  ],
};

const faqs = [
  {
    q: 'Is there a RELL Seas stat calculator or build planner?',
    a: 'No sourced one. RELL Seas has never been publicly playable, so RELL Games has not published stat names, points per level, a level cap, scaling formulas or Haki values. A planner that outputs damage or HP totals before launch is computing from invented inputs.',
  },
  {
    q: 'What has RELL Games said about progression?',
    a: 'RELL Games describes nonlinear progression: players can sail, fight, craft, trade and build a pirate or marine identity at their own pace, with fruits, Haki, weapons, fighting styles and ships as the core systems. No numeric progression details have been released.',
  },
  {
    q: 'When will real build planning be possible?',
    a: 'Once the game launches publicly and stat behaviour can be observed and tested in game. Until then there is no way to verify any allocation advice.',
  },
];

export default function BuildPlannerPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
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
          <span>No stat data published</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          RELL SEAS Build Planner &amp; Stat Calculator
        </h1>
        <p className="text-gray-300 text-sm mt-2 max-w-3xl leading-relaxed">
          There is nothing to calculate. RELL Games has not published stat names, points per level, a
          level cap, damage scaling or Haki values, so any build planner for this game is computing
          from numbers it invented.
        </p>
      </div>

      <AuthorCard
        authorName="Hlele"
        role="Editor"
        experience="AI-assisted research, human-reviewed"
        patchVersion="Pre-launch"
        editorialNote="No stat formula, scaling value or Haki threshold for RELL Seas has been published by RELL Games. This page reports none of them and the planner stays offline until they exist."
      />

      <div className="rounded-2xl border border-amber-900/40 bg-amber-950/20 p-6 space-y-3">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Sliders className="w-4 h-4 text-amber-400" /> Why the planner is switched off
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Our previous version allocated 3,000 points across Strength, Defense, Fruit, Haki and Sword
          at a Level 1000 cap, applied 4.2 damage per Fruit point and 0.8% reduction per Haki point,
          and recommended a &ldquo;Magma Raid Tank&rdquo; distribution. Every one of those figures was
          invented. A calculator that returns a precise DPS or HP total makes invented inputs look
          measured — the output feels verified because the interface looks rigorous.
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          This page gets a real planner back the moment real stat behaviour can be observed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="rounded-2xl border border-cyan-900/40 bg-[#091527] p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">Confirmed about progression</h2>
          <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
            <li>Nonlinear — sail, fight, craft, trade or explore freely</li>
            <li>Fruits, Haki, weapons and fighting styles are core systems</li>
            <li>Ships act as upgradeable bases, not just transport</li>
            <li>More than 40 factions affect reputation and events</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-cyan-900/40 bg-[#091527] p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">Not published</h2>
          <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
            <li>Stat names and allocation rules</li>
            <li>Points per level or a level cap</li>
            <li>Damage, HP or stamina scaling formulas</li>
            <li>Haki values, thresholds or soft caps</li>
            <li>Any respec mechanic or its cost</li>
          </ul>
        </section>
      </div>

      <section className="rounded-2xl border border-cyan-900/40 bg-[#07111e] p-6 space-y-3">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-yellow-400" /> Frequently asked
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="text-sm font-bold text-white">{f.q}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-sm text-gray-400">
        See the{' '}
        <Link href="/fruits" className="text-cyan-300 underline hover:text-white">
          fruits page
        </Link>{' '}
        and the{' '}
        <Link href="/tier-list" className="text-cyan-300 underline hover:text-white">
          tier list
        </Link>{' '}
        for the same pre-launch status, and the{' '}
        <Link href="/codes" className="text-cyan-300 underline hover:text-white">
          codes page
        </Link>{' '}
        for launch tracking.
      </p>
    </div>
  );
}
