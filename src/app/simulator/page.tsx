'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Dices, Trophy, RefreshCw, Layers, ShieldAlert } from 'lucide-react';
import { DEVIL_FRUITS, FruitData } from '@/data/wikiData';

const COMMON_FRUITS: FruitData[] = [
  {
    id: 'bomb',
    name: 'Bomb-Bomb Fruit',
    type: 'Paramecia',
    rarity: 'Common',
    dropRate: '35.0%',
    image: '/fruit-gacha.png',
    description: 'Explosive body parts dealing minor damage.',
    skills: [{ key: 'Z', name: 'Explosive Booger', mastery: 1, description: 'Fires explosive projectile.' }],
    dps: 60,
    defense: 50,
    mobility: 50
  },
  {
    id: 'chop',
    name: 'Bara-Bara Fruit (Chop)',
    type: 'Paramecia',
    rarity: 'Common',
    dropRate: '35.0%',
    image: '/fruit-gacha.png',
    description: 'Immunity to sword attacks.',
    skills: [{ key: 'Z', name: 'Chop Cannon', mastery: 1, description: 'Launches fist at enemy.' }],
    dps: 65,
    defense: 70,
    mobility: 55
  },
  {
    id: 'kilo',
    name: 'Kilo-Kilo Fruit',
    type: 'Paramecia',
    rarity: 'Uncommon',
    dropRate: '22.5%',
    image: '/fruit-gacha.png',
    description: 'Change weight from 1kg to 10,000kg.',
    skills: [{ key: 'Z', name: '10,000kg Press', mastery: 1, description: 'Crushes area below.' }],
    dps: 70,
    defense: 65,
    mobility: 60
  }
];

const ALL_GACHA_POOL: FruitData[] = [...DEVIL_FRUITS, ...COMMON_FRUITS];

export default function SimulatorPage() {
  const [spins, setSpins] = useState(50);
  const [inventory, setInventory] = useState<FruitData[]>([]);
  const [lastRolled, setLastRolled] = useState<FruitData | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [totalSpinsCount, setTotalSpinsCount] = useState(0);

  const rollFruit = () => {
    const rand = Math.random() * 100;
    let selected: FruitData;

    if (rand < 0.5) {
      // Mythical (0.5%)
      const mythicals = ALL_GACHA_POOL.filter((f) => f.rarity === 'Mythical');
      selected = mythicals[Math.floor(Math.random() * mythicals.length)];
    } else if (rand < 2.5) {
      // Legendary (2.0%)
      const legendaries = ALL_GACHA_POOL.filter((f) => f.rarity === 'Legendary');
      selected = legendaries[Math.floor(Math.random() * legendaries.length)];
    } else if (rand < 7.5) {
      // Rare (5.0%)
      const rares = ALL_GACHA_POOL.filter((f) => f.rarity === 'Rare');
      selected = rares[Math.floor(Math.random() * rares.length)];
    } else if (rand < 30.0) {
      // Uncommon (22.5%)
      const uncommons = ALL_GACHA_POOL.filter((f) => f.rarity === 'Uncommon');
      selected = uncommons[Math.floor(Math.random() * uncommons.length)];
    } else {
      // Common (70.0%)
      const commons = ALL_GACHA_POOL.filter((f) => f.rarity === 'Common');
      selected = commons[Math.floor(Math.random() * commons.length)];
    }
    return selected;
  };

  const handleSpin = (count: number) => {
    if (spins < count || isSpinning) return;
    setIsSpinning(true);
    setSpins((prev) => prev - count);

    setTimeout(() => {
      const rolledResults: FruitData[] = [];
      for (let i = 0; i < count; i++) {
        rolledResults.push(rollFruit());
      }
      setLastRolled(rolledResults[rolledResults.length - 1]);
      setInventory((prev) => [...rolledResults, ...prev]);
      setTotalSpinsCount((prev) => prev + count);
      setIsSpinning(false);
    }, 600);
  };

  const handleRefillSpins = () => {
    setSpins((prev) => prev + 50);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-cyan-900/30 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-800/50 text-yellow-300 text-xs font-semibold mb-3">
            <Dices className="w-3.5 h-3.5" />
            <span>Interactive Tool</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            RELL SEAS Devil Fruit Gacha Simulator
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Test your gacha luck before spending real spins in-game! Includes Mythical Mochi & Dragon Fruit drop rates.
          </p>
        </div>

        <div className="flex items-center space-x-3 bg-[#091527] px-5 py-3 rounded-2xl border border-cyan-800/40">
          <div>
            <span className="text-[10px] uppercase font-bold text-gray-400 block">Available Spins</span>
            <span className="text-2xl font-black text-yellow-400 font-mono">{spins}</span>
          </div>
          <button
            onClick={handleRefillSpins}
            className="px-3 py-1.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs flex items-center space-x-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>+50 Spins</span>
          </button>
        </div>
      </div>

      {/* Simulator Main Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Roll Stage */}
        <div className="lg:col-span-2 p-8 rounded-3xl bg-gradient-to-b from-[#091527] to-[#040a14] border border-cyan-900/40 text-center space-y-8 relative overflow-hidden">
          <div className="relative w-48 h-48 mx-auto rounded-3xl overflow-hidden border-2 border-yellow-500/50 shadow-2xl shadow-yellow-500/20 bg-slate-950 flex items-center justify-center">
            {lastRolled ? (
              <Image
                src={lastRolled.image}
                alt={lastRolled.name}
                width={192}
                height={192}
                className={`object-cover ${isSpinning ? 'animate-spin opacity-50' : 'scale-105 transition-transform'}`}
              />
            ) : (
              <div className="text-center p-4">
                <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-2 animate-bounce" />
                <p className="text-xs text-gray-400">Click Spin below to roll your first fruit!</p>
              </div>
            )}
          </div>

          {lastRolled && !isSpinning && (
            <div className="space-y-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase font-mono ${
                  lastRolled.rarity === 'Mythical'
                    ? 'bg-amber-400 text-slate-950'
                    : lastRolled.rarity === 'Legendary'
                    ? 'bg-purple-600 text-white'
                    : lastRolled.rarity === 'Rare'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700 text-gray-200'
                }`}
              >
                {lastRolled.rarity} ({lastRolled.type})
              </span>
              <h2 className="text-2xl font-black text-white">{lastRolled.name}</h2>
              <p className="text-xs text-gray-300 max-w-md mx-auto">{lastRolled.description}</p>
            </div>
          )}

          {/* Spin Buttons */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleSpin(1)}
              disabled={spins < 1 || isSpinning}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-black shadow-lg shadow-yellow-500/20 disabled:opacity-50 transition-all flex items-center space-x-2"
            >
              <Dices className="w-5 h-5" />
              <span>Spin 1x</span>
            </button>
            <button
              onClick={() => handleSpin(10)}
              disabled={spins < 10 || isSpinning}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-black shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all flex items-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Spin 10x</span>
            </button>
          </div>

          <p className="text-[11px] text-gray-500 font-mono">
            Total Spins Simulated: {totalSpinsCount}
          </p>
        </div>

        {/* Right Col: Inventory & Drop Rates */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-yellow-400" />
              Fruit Drop Rates (Gacha Odds)
            </h3>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between text-amber-400 font-bold border-b border-gray-800 pb-1">
                <span>Mythical (Mochi, Dragon)</span>
                <span>0.5%</span>
              </div>
              <div className="flex justify-between text-purple-400 font-bold border-b border-gray-800 pb-1">
                <span>Legendary (Magma, Quake)</span>
                <span>2.0%</span>
              </div>
              <div className="flex justify-between text-cyan-400 border-b border-gray-800 pb-1">
                <span>Rare (Light, Ice)</span>
                <span>5.0%</span>
              </div>
              <div className="flex justify-between text-green-400 border-b border-gray-800 pb-1">
                <span>Uncommon (Kilo, Smoke)</span>
                <span>22.5%</span>
              </div>
              <div className="flex justify-between text-gray-400 pb-1">
                <span>Common (Bomb, Chop)</span>
                <span>70.0%</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Trophy className="w-4 h-4 text-cyan-400" />
                Rolled Inventory ({inventory.length})
              </h3>
            </div>

            <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
              {inventory.length === 0 ? (
                <p className="text-xs text-gray-500 italic">No fruits rolled yet.</p>
              ) : (
                inventory.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#040a14] border border-cyan-900/30 flex items-center justify-between text-xs"
                  >
                    <span className="font-bold text-white">{item.name}</span>
                    <span
                      className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${
                        item.rarity === 'Mythical'
                          ? 'bg-amber-950 text-amber-400 border border-amber-800'
                          : item.rarity === 'Legendary'
                          ? 'bg-purple-950 text-purple-400 border border-purple-800'
                          : 'bg-gray-900 text-gray-400'
                      }`}
                    >
                      {item.rarity}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
