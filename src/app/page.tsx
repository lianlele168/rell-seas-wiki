import React from 'react';
import Link from 'next/link';
import { Compass, ShieldAlert, Trophy, ArrowRight, CheckCircle2, Sparkles, Anchor, Video } from 'lucide-react';
import { GAME_INFO, ACTIVE_CODES, TIER_LIST, START_CARDS, FAQ_ITEMS, HOWTO_STEPS } from '@/data/wikiData';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <div className="space-y-12 pb-16">
      <StructuredData
        faq={FAQ_ITEMS}
        howTo={{
          name: "How to Redeem Codes in RELL SEAS",
          description: "Step-by-step tutorial on claiming free spins and Beli in RELL SEAS.",
          steps: HOWTO_STEPS,
        }}
      />

      {/* Module 1: Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-cyan-900/30 bg-gradient-to-b from-yellow-950/20 via-[#060e1a] to-[#060e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-yellow-950/60 border border-yellow-700/50 text-yellow-300 text-xs font-semibold mb-6">
            <Anchor className="w-4 h-4 text-yellow-400" />
            <span>Fan-Made Community Wiki — Official Release Coming Soon</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            Roblox <span className="gradient-ocean-text">RELL SEAS</span> Wiki
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
            {GAME_INFO.description}
          </p>

          {/* 3 CTA Buttons as per SOP */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link
              href="/guides"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-bold shadow-lg shadow-yellow-500/20 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
            >
              <Compass className="w-5 h-5" />
              <span>Start Beginner Guide</span>
            </Link>
            <Link
              href="/tier-list"
              className="px-6 py-3.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-800/40 text-cyan-300 font-bold flex items-center space-x-2 transition-all"
            >
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span>Compare Fruit Tiers</span>
            </Link>
            <Link
              href="/codes"
              className="px-6 py-3.5 rounded-xl bg-gray-900/80 hover:bg-gray-800 border border-gray-700/50 text-gray-200 font-bold flex items-center space-x-2 transition-all"
            >
              <ShieldAlert className="w-5 h-5 text-yellow-400" />
              <span>Check Active Codes</span>
            </Link>
          </div>

          {/* Stats Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              Dev: RELL Games
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              Status: First Sea Update
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              Fruits: Logia / Paramecia / Zoan
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              Level Cap: 1000
            </span>
          </div>
        </div>
      </section>

      {/* Module 2: Start Here Section (新手引导卡片区) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 bg-yellow-950/60 px-3 py-1 rounded-full border border-yellow-800/40">
            Start Here
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            Your RELL SEAS Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {START_CARDS.map((card) => (
            <div
              key={card.number}
              className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 hover:border-yellow-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="w-8 h-8 rounded-lg bg-yellow-500 text-slate-950 font-black text-sm flex items-center justify-center mb-4 shadow-md">
                  {card.number}
                </span>
                <h3 className="font-bold text-white text-base mb-2 group-hover:text-yellow-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <Link
                href="/guides"
                className="mt-4 text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
              >
                <span>Read More</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Module 3: Active Codes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-yellow-400" />
              Active RELL SEAS Codes (August 2026)
            </h2>
            <p className="text-xs text-gray-400">Tested & Verified Community Codes</p>
          </div>
          <Link
            href="/codes"
            className="text-xs font-semibold text-yellow-400 hover:text-yellow-300 flex items-center space-x-1"
          >
            <span>All Codes ({ACTIVE_CODES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.slice(0, 4).map((c) => (
            <div
              key={c.code}
              className="p-5 rounded-2xl bg-gradient-to-r from-yellow-950/30 to-cyan-950/20 border border-yellow-800/40 flex items-center justify-between group hover:border-yellow-500/60 transition-all"
            >
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-mono font-extrabold text-lg text-yellow-300 tracking-wider">
                    {c.code}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                    Active
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-medium">{c.rewards}</p>
              </div>
              <div className="text-xs text-gray-400 font-mono">
                {c.addedDate}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Module 4: About Game Section (游戏介绍与真实数据表) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#091527] border border-cyan-900/40">
          <h2 className="text-2xl font-bold text-white mb-4">What is RELL SEAS?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 text-sm text-gray-300 leading-relaxed">
              <p>
                <strong>RELL SEAS</strong> is an upcoming open-world anime RPG developed on Roblox by RELL Games, the acclaimed creators of <em>Shindo Life</em>. Inspired by the One Piece universe, players embark on an epic ocean voyage to explore distant islands, engage in sea combat, and unlock mythical Devil Fruit powers.
              </p>
              <p>
                Whether you choose to become an admiral or assemble your own pirate crew, RELL SEAS features custom boat crafting, Haki mastery systems, and high-octane PvP battlegrounds.
              </p>
              <Link
                href="/guides"
                className="inline-flex items-center space-x-2 text-yellow-400 font-bold hover:underline pt-2 text-xs"
              >
                <span>Explore All RELL SEAS Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Label + Value Paired Stats Table as per SOP */}
            <div className="bg-[#040a14] p-5 rounded-2xl border border-cyan-900/30 space-y-3">
              <h3 className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2">Game Specifications</h3>
              {GAME_INFO.stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between text-xs border-b border-gray-800/60 pb-1.5">
                  <span className="text-gray-400 font-medium">{stat.label}</span>
                  <span className="text-white font-mono font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Module 5: Final CTA Section (底部号召区) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-yellow-950/40 via-cyan-950/30 to-[#060e1a] border border-yellow-700/40 text-center space-y-6">
          <h2 className="text-3xl font-black text-white">Ready to Master RELL SEAS?</h2>
          <p className="max-w-xl mx-auto text-gray-300 text-sm leading-relaxed">
            From setting sail on Fousha Island to awakening your Mythical Zoan Fruit, our community wiki has everything you need for the official release.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/guides"
              className="px-6 py-3 rounded-xl bg-yellow-500 text-slate-950 font-bold hover:bg-yellow-400 transition-all text-sm"
            >
              Read the Beginner Guide
            </Link>
            <Link
              href="/codes"
              className="px-6 py-3 rounded-xl bg-gray-900 text-yellow-400 border border-yellow-800/40 font-bold hover:bg-gray-800 transition-all text-sm"
            >
              Claim Free Codes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
