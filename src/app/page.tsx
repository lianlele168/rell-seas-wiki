import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Compass,
  ShieldAlert,
  Sparkles,
  Trophy,
  BookOpen,
  Dices,
  Sliders,
  Zap,
  Map,
  ArrowRight,
  CheckCircle2,
  Anchor,
  Flame
} from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { GAME_INFO, ACTIVE_CODES, DEVIL_FRUITS, FAQ_ITEMS } from '@/data/wikiData';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <StructuredData faq={FAQ_ITEMS} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#091527] via-[#060e1a] to-[#040a14] border-b border-cyan-900/40 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-yellow-950/80 border border-yellow-700/60 text-yellow-300 text-xs font-bold tracking-wide">
                <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                <span>RELL Games Official One Piece RPG Database</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
                Master the Seas in <br />
                <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
                  RELL SEAS
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {GAME_INFO.description} Explore interactive tools, test gacha rates, calculate stat builds, and claim verified active codes.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/simulator"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-black shadow-xl shadow-yellow-500/20 flex items-center space-x-2 transition-all hover:scale-105"
                >
                  <Dices className="w-5 h-5" />
                  <span>Try Fruit Gacha Sim</span>
                </Link>
                <Link
                  href="/codes"
                  className="px-6 py-3.5 rounded-2xl bg-[#091527] border border-cyan-800/60 hover:border-cyan-400 text-white font-bold flex items-center space-x-2 transition-all hover:bg-cyan-950/60"
                >
                  <ShieldAlert className="w-5 h-5 text-cyan-400" />
                  <span>Get Active Codes</span>
                </Link>
                <Link
                  href="/build-planner"
                  className="px-6 py-3.5 rounded-2xl bg-[#091527] border border-cyan-800/60 hover:border-cyan-400 text-white font-bold flex items-center space-x-2 transition-all hover:bg-cyan-950/60"
                >
                  <Sliders className="w-5 h-5 text-cyan-400" />
                  <span>Build Planner</span>
                </Link>
              </div>
            </div>

            {/* Hero Graphic Card */}
            <div className="relative">
              <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-yellow-500/50 shadow-2xl shadow-yellow-500/10">
                <Image src="/sea-map.png" alt="RELL SEAS Sea Exploration" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#060e1a]/90 backdrop-blur-md border border-cyan-800/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-yellow-400 block font-mono">First Sea Realm</span>
                    <p className="text-sm font-bold text-white">Interactive Island Map & Boss Spawns</p>
                  </div>
                  <Link href="/map" className="px-3 py-1.5 rounded-xl bg-yellow-500 text-slate-950 font-bold text-xs">
                    Explore Map
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Interactive Gamer Utilities</h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Powered by real game mechanics data to maximize your gameplay efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/simulator"
            className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 hover:border-yellow-400 transition-all space-y-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
              <Dices className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg group-hover:text-yellow-400 transition-colors">
                Fruit Gacha Sim
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Spin 100+ fruits. Test gacha odds for Mochi & Dragon Fruit.
              </p>
            </div>
            <div className="text-xs font-bold text-yellow-400 flex items-center gap-1">
              <span>Start Spinning</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/build-planner"
            className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 hover:border-cyan-400 transition-all space-y-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg group-hover:text-cyan-400 transition-colors">
                Stat Build Planner
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Allocate Level 1-1000 stats into Fruit, Sword, HP, and Haki.
              </p>
            </div>
            <div className="text-xs font-bold text-cyan-400 flex items-center gap-1">
              <span>Calculate Stats</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/fruits"
            className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 hover:border-amber-400 transition-all space-y-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg group-hover:text-amber-400 transition-colors">
                Fruit Skill Moveset
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Visual cards for Z, X, C, V, F skills and mastery requirements.
              </p>
            </div>
            <div className="text-xs font-bold text-amber-400 flex items-center gap-1">
              <span>Browse Fruits</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/map"
            className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 hover:border-emerald-400 transition-all space-y-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg group-hover:text-emerald-400 transition-colors">
                Sea Map & Bosses
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                First Sea island levels, boss drops, and sailing speed guides.
              </p>
            </div>
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              <span>View Map</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Active Codes Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-cyan-900/30 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-yellow-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Active Working Codes (August 2026)</h2>
              <p className="text-xs text-gray-400">Tested and verified daily</p>
            </div>
          </div>
          <Link href="/codes" className="text-xs font-bold text-yellow-400 hover:underline flex items-center gap-1">
            <span>View All Codes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item) => (
            <div
              key={item.code}
              className="p-5 rounded-2xl bg-[#091527] border border-cyan-900/40 flex items-center justify-between"
            >
              <div className="space-y-1">
                <span className="font-mono font-extrabold text-yellow-400 text-base">{item.code}</span>
                <p className="text-xs text-gray-300">{item.rewards}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold font-mono">
                ACTIVE
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Game Stats Overview Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="p-8 rounded-3xl bg-[#091527] border border-cyan-900/40 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Anchor className="w-5 h-5 text-cyan-400" />
            RELL SEAS Technical Specifications & Data
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {GAME_INFO.stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-[#040a14] border border-cyan-900/30">
                <span className="text-[10px] font-mono uppercase text-gray-400 block">{stat.label}</span>
                <span className="font-bold text-white text-xs sm:text-sm mt-1 block">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
