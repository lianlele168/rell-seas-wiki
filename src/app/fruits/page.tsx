'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ShieldAlert, Zap, Flame, Shield, Compass } from 'lucide-react';
import { DEVIL_FRUITS, FruitData } from '@/data/wikiData';

export default function FruitsPage() {
  const [filterType, setFilterType] = useState<string>('All');
  const [selectedFruit, setSelectedFruit] = useState<FruitData | null>(DEVIL_FRUITS[0]);

  const filteredFruits = filterType === 'All'
    ? DEVIL_FRUITS
    : DEVIL_FRUITS.filter((f) => f.type === filterType);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-cyan-900/30 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-800/50 text-yellow-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Visual Database</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            RELL SEAS Devil Fruit Database & Skill Showcases
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Complete specs for Logia, Paramecia, and Mythical Zoan fruits. Inspect skill keybindings (Z, X, C, V, F), DPS ratings, and mastery levels.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {['All', 'Logia', 'Paramecia', 'Zoan'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterType === type
                  ? 'bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/20'
                  : 'bg-[#091527] text-gray-300 border border-cyan-900/40 hover:border-yellow-500/50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: Fruit Selection List */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Select Fruit ({filteredFruits.length})</h2>
          <div className="space-y-3">
            {filteredFruits.map((fruit) => (
              <div
                key={fruit.id}
                onClick={() => setSelectedFruit(fruit)}
                className={`p-4 rounded-2xl cursor-pointer border transition-all flex items-center gap-4 ${
                  selectedFruit?.id === fruit.id
                    ? 'bg-[#0b1d36] border-yellow-500/80 shadow-lg shadow-yellow-500/10'
                    : 'bg-[#091527] border-cyan-900/40 hover:border-cyan-700'
                }`}
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-950 border border-yellow-500/30 flex-shrink-0">
                  <Image src={fruit.image} alt={fruit.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-sm truncate">{fruit.name}</h3>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        fruit.rarity === 'Mythical'
                          ? 'bg-amber-950 text-amber-400 border border-amber-800'
                          : fruit.rarity === 'Legendary'
                          ? 'bg-purple-950 text-purple-400 border border-purple-800'
                          : 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                      }`}
                    >
                      {fruit.rarity}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">{fruit.type} • Drop Rate: {fruit.dropRate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 2 Cols: Detailed Inspector Panel */}
        {selectedFruit && (
          <div className="lg:col-span-2 space-y-6 p-8 rounded-3xl bg-[#091527] border border-cyan-900/40">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-cyan-900/30 pb-6">
              <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-yellow-500/60 shadow-xl bg-slate-950 flex-shrink-0">
                <Image src={selectedFruit.image} alt={selectedFruit.name} fill className="object-cover" />
              </div>
              <div className="space-y-2 text-center sm:text-left flex-1">
                <div className="inline-flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-yellow-950 text-yellow-300 text-xs font-bold border border-yellow-800">
                    {selectedFruit.type}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-gray-300 text-xs font-mono">
                    Drop Rate: {selectedFruit.dropRate}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{selectedFruit.name}</h2>
                <p className="text-xs text-gray-300 leading-relaxed">{selectedFruit.description}</p>

                {/* Rating bars */}
                <div className="grid grid-cols-3 gap-4 pt-3 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[#040a14] border border-yellow-900/30">
                    <span className="text-gray-400 block text-[10px]">DPS Rating</span>
                    <span className="font-extrabold text-yellow-400 text-sm">{selectedFruit.dps} / 100</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#040a14] border border-emerald-900/30">
                    <span className="text-gray-400 block text-[10px]">Defense</span>
                    <span className="font-extrabold text-emerald-400 text-sm">{selectedFruit.defense} / 100</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#040a14] border border-cyan-900/30">
                    <span className="text-gray-400 block text-[10px]">Mobility</span>
                    <span className="font-extrabold text-cyan-400 text-sm">{selectedFruit.mobility} / 100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill Keybindings List */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-yellow-400" />
                Keybinding Skill Moveset (PC / Console Controls)
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {selectedFruit.skills.map((skill) => (
                  <div
                    key={skill.key}
                    className="p-4 rounded-xl bg-[#040a14] border border-cyan-900/30 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-yellow-500 text-slate-950 font-black text-base flex items-center justify-center flex-shrink-0 shadow-md">
                      {skill.key}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white text-sm">{skill.name}</h4>
                        <span className="text-[10px] font-mono text-yellow-400 bg-yellow-950 px-2 py-0.5 rounded border border-yellow-800">
                          Mastery Lv. {skill.mastery}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
