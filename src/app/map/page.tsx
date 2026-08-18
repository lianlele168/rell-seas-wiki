'use client';

import React from 'react';
import Image from 'next/image';
import { Compass, Anchor, Trophy, ShieldAlert, Sparkles, Navigation } from 'lucide-react';
import { ISLANDS } from '@/data/wikiData';

export default function MapPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-cyan-900/40 p-8 sm:p-12 bg-gradient-to-r from-[#060e1a] via-[#091527] to-[#040a14]">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive World Map</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            First Sea Islands & Boss Navigation
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Plan your sailing route across the First Sea. Discover island level brackets, world boss spawn locations, exclusive weapon drops, and Fruit tree spawners.
          </p>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 hidden md:block">
          <Image src="/sea-map.png" alt="RELL SEAS Map" fill className="object-cover" />
        </div>
      </div>

      {/* Islands Grid */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Navigation className="w-5 h-5 text-yellow-400" />
          First Sea Progression Route
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ISLANDS.map((island, idx) => (
            <div
              key={island.name}
              className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 hover:border-yellow-500/50 transition-all space-y-4 relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-950 px-2.5 py-1 rounded-full border border-yellow-800">
                    Island #{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                    {island.levelRange}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white">{island.name}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{island.description}</p>
              </div>

              <div className="space-y-3 pt-3 border-t border-cyan-900/30">
                {/* Boss info */}
                <div className="p-3 rounded-xl bg-[#040a14] border border-rose-900/30 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-rose-400 block">Island Boss</span>
                  <p className="text-xs font-bold text-white">{island.boss}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {island.bossDrops.map((drop) => (
                      <span key={drop} className="text-[10px] font-mono text-gray-300 bg-gray-900 px-1.5 py-0.5 rounded">
                        {drop}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 block">Key Locations & Features</span>
                  <ul className="text-xs text-gray-400 space-y-1 font-mono">
                    {island.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-1.5">
                        <Anchor className="w-3 h-3 text-cyan-500" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
