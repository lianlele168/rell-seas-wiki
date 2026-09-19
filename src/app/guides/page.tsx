import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Calendar, Compass, ShieldCheck } from 'lucide-react';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: 'RELL SEAS Beginner Guide: What to Prepare Before Launch',
  description:
    'RELL Seas is not playable yet, so there is no levelling route, Haki unlock or farming guide to give. Here is what RELL Games has confirmed and how to prepare for launch.',
  alternates: {
    canonical: '/guides',
  },
};

const GUIDE_FAQS = [
  {
    question: 'Is there a RELL Seas beginner guide?',
    answer:
      'Not a gameplay one. RELL Seas has never been publicly playable, so there is no levelling route, no Haki unlock method, no island order and no currency amounts to describe. This page covers what has been confirmed and how to prepare instead.',
  },
  {
    question: 'What has RELL Games confirmed about the game?',
    answer:
      'RELL Seas is a naval action-adventure RPG from RELL Games, the studio behind Shindo Life. It is One Piece-inspired, planned for PC, console and mobile, features more than 40 pirate factions, uses RELLI as its known currency, and is planned as cosmetic-only monetisation with no pay-to-win.',
  },
  {
    question: 'When does RELL Seas release?',
    answer:
      'No release date has been announced. The Roblox experience is private during Wave 1 testing, which is why the game page shows "Experience currently unavailable". Follow the RELL Games Discord and official channels for launch news.',
  },
  {
    question: 'Why do other sites have RELL Seas island maps and Haki guides?',
    answer:
      'Because the demand is there and the information is not. Before launch there is no source for island names, level brackets, Haki unlock levels or currency costs, so those details are invented. Specific numbers are what make them look credible.',
  },
];

export default function GuidesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: GUIDE_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
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
          <span>Pre-launch — no gameplay to guide yet</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          RELL SEAS Beginner Guide
        </h1>
        <p className="text-gray-300 text-sm mt-2 max-w-3xl leading-relaxed">
          There is no RELL Seas levelling route, Haki unlock or farming guide to publish — the game
          has never been publicly playable. This page covers what RELL Games has actually confirmed
          and how to be ready when the game opens.
        </p>
      </div>

      <AuthorCard
        authorName="Hlele"
        role="Editor"
        experience="AI-assisted research, human-reviewed"
        patchVersion="Pre-launch"
        editorialNote="RELL Seas has no public build, so no gameplay mechanic, island, level threshold or currency amount on this page comes from observation. Everything stated here traces to RELL Games or Roblox announcements."
      />

      <div className="rounded-2xl border border-amber-900/40 bg-amber-950/20 p-6 space-y-3">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-400" /> Why there is no walkthrough here
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          A beginner guide needs a game: islands to route through, levels to hit, vendors to buy
          from, bosses to farm. RELL Games has published none of it. Our previous version described
          a Level 350 Haki unlock, a 150,000 Beli manual purchase and a named island progression
          route — every one of those details was invented, and the level and currency figures are
          exactly what make that kind of guide feel researched.
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          If you are reading a RELL Seas guide elsewhere that names islands, trainers or prices,
          check what it cites. There is nothing to cite before launch.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="rounded-2xl border border-cyan-900/40 bg-[#091527] p-6 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" /> Confirmed by RELL Games
          </h2>
          <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
            <li>Developed by RELL Games, the studio behind Shindo Life</li>
            <li>One Piece-inspired naval action-adventure RPG</li>
            <li>Planned for PC, PlayStation/Xbox and mobile</li>
            <li>More than 40 pirate factions with reputation effects</li>
            <li>RELLI is the only publicly known currency</li>
            <li>Cosmetic-only monetisation — no pay-to-win planned</li>
            <li>In development roughly three years; first footage shown in 2021</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-cyan-900/40 bg-[#091527] p-6 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-yellow-400" /> How to prepare for launch
          </h2>
          <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
            <li>Join the official RELL Games Discord for launch and testing news</li>
            <li>Follow the RELL Games Roblox community and official X account</li>
            <li>Track the Roblox game page — it opens when the experience goes public</li>
            <li>Expect a long progression curve; the studio designs for weeks of play</li>
            <li>Skip any site selling you a build, tier list or island route before launch</li>
          </ul>
          <p className="text-xs text-gray-500 pt-1">
            Launch and code status are tracked on the{' '}
            <Link href="/codes" className="text-cyan-300 underline hover:text-white">
              codes page
            </Link>
            .
          </p>
        </section>
      </div>

      <section className="rounded-2xl border border-cyan-900/40 bg-[#07111e] p-6 sm:p-10 space-y-6">
        <h2 className="text-2xl font-bold text-white">Frequently asked</h2>
        <div className="space-y-5">
          {GUIDE_FAQS.map((f) => (
            <div key={f.question}>
              <h3 className="text-sm font-bold text-white">{f.question}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-1">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
