import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, BookOpen, Calendar, ShieldCheck } from 'lucide-react';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: 'RELL SEAS Devil Fruits: Nothing Confirmed Yet',
  description:
    'RELL Seas is still in private Wave 1 testing, so no Devil Fruit names, movesets, rarities or drop rates have been published. Here is what is known and what is not.',
  alternates: {
    canonical: '/fruits',
  },
  keywords: [
    'rell seas devil fruits',
    'rell seas fruits',
    'rell seas logia fruits',
    'rell seas fruit drop rates',
    'rell seas release status',
  ],
};

export default function FruitsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which Devil Fruits are in RELL Seas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'None have been confirmed. RELL Seas has never been publicly playable, so no fruit names, types, rarities, movesets or drop rates have been published by RELL Games. Fruit databases that list specific fruits with drop percentages before launch are inventing them.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will RELL Seas have Logia, Paramecia and Zoan fruits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RELL Seas is a One Piece-inspired naval RPG and the developer media points to fruits, Haki, weapons and fighting styles as core systems, but RELL Games has not published the fruit roster or how the categories are implemented.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where will fruit information come from at launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'From the released game itself and RELL Games official channels — the RELL Games Discord, the official Roblox community, and the studio YouTube and X accounts. Anything published before then cannot be verified.',
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
          <span className="text-yellow-400 font-semibold">Devil Fruits</span>
        </div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/50 text-amber-300 text-xs font-semibold">
          <Calendar className="w-3.5 h-3.5" />
          <span>NO FRUIT ROSTER PUBLISHED YET</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          RELL SEAS Devil Fruits
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          No Devil Fruit has been confirmed for RELL Seas. The game is still in private Wave 1
          testing, so there is no public fruit roster, no movesets, no rarities and no drop rates —
          and we do not publish numbers that no source has released.
        </p>
      </div>

      <AuthorCard
        authorName="Hlele"
        role="Editor"
        experience="AI-assisted research, human-reviewed"
        patchVersion="Pre-launch"
        editorialNote="RELL Seas has no public build, so there is no test realm or server-side data to inspect. Every fruit detail on this page is limited to what RELL Games has publicly announced — currently nothing beyond the existence of a fruit system."
      />

      <div className="rounded-2xl border border-amber-900/40 bg-amber-950/20 p-6 space-y-3">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" /> Why there is no fruit database here
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          A fruit database needs names, categories, rarities, movesets and drop rates. RELL Games has
          published none of them. Writing a database anyway — Mochi at 0.5% drop, Magu-Magu at 100
          DPS, five skills gated behind mastery levels — produces something that looks authoritative
          and is entirely made up. The specificity is what makes it convincing, and what makes it
          wrong.
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          If you find a RELL Seas fruit wiki listing drop percentages or damage values, check what it
          cites. Before the game is playable, there is nothing to cite.
        </p>
      </div>

      <section className="rounded-2xl border border-cyan-900/40 bg-[#07111e] p-6 sm:p-10 space-y-8 text-gray-300">
        <div className="border-b border-cyan-900/30 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-yellow-400" />
            <span>What RELL Games has said about the fruit system</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Announcement-level facts only — no gameplay specifics have been released.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm leading-relaxed">
          <div className="p-5 rounded-xl bg-[#040a14] border border-cyan-900/30 space-y-2">
            <h3 className="font-bold text-white text-base text-yellow-300">
              1. Fruits are a core progression system
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Developer media and official listings describe fruits as central to combat and build
              identity, alongside Haki, weapons and fighting styles. The roster itself has not been
              revealed.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#040a14] border border-cyan-900/30 space-y-2">
            <h3 className="font-bold text-white text-base text-cyan-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> 2. Nothing below that is confirmed
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              No fruit names, no Logia or Zoan implementation details, no spawn mechanics, no drop
              rates, no notifier gamepass. These appear in community guesswork, not in anything RELL
              Games has published.
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-400">
          Launch and code status are tracked on the{' '}
          <Link href="/codes" className="text-cyan-300 underline hover:text-white">
            codes page
          </Link>
          . The fruit database gets filled in here once the game is playable and the values are
          observable.
        </p>
      </section>
    </div>
  );
}
