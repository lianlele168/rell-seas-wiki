'use client';

import React, { useState } from 'react';
import { Sliders, Shield, Zap, Flame, Sword, Heart, Compass } from 'lucide-react';

export default function BuildPlannerPage() {
  const [level, setLevel] = useState(500);
  const [strength, setStrength] = useState(300);
  const [defense, setDefense] = useState(400);
  const [fruit, setFruit] = useState(500);
  const [haki, setHaki] = useState(200);
  const [sword, setSword] = useState(100);

  const totalPointsEarned = level * 3;
  const totalPointsSpent = strength + defense + fruit + haki + sword;
  const remainingPoints = totalPointsEarned - totalPointsSpent;

  // Real-time calculations
  const maxHp = 100 + defense * 15 + level * 5;
  const maxStamina = 100 + strength * 8 + level * 2;
  const fruitDamage = Math.round(fruit * 4.2 + strength * 1.1);
  const swordDamage = Math.round(sword * 4.5 + strength * 1.5);
  const hakiArmorBoost = Math.round(haki * 0.8);

  const presets = [
    { name: 'Mochi Fruit Burst', str: 200, def: 400, frt: 700, hk: 200, swd: 0 },
    { name: 'Pure Swordmaster', str: 400, def: 400, frt: 0, hk: 300, swd: 400 },
    { name: 'Magma Raid Tank', str: 100, def: 700, frt: 500, hk: 200, swd: 0 },
  ];

  const applyPreset = (p: typeof presets[0]) => {
    setStrength(p.str);
    setDefense(p.def);
    setFruit(p.frt);
    setHaki(p.hk);
    setSword(p.swd);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-cyan-900/30 pb-6 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-semibold mb-3">
          <Sliders className="w-3.5 h-3.5" />
          <span>Interactive Calculator</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          RELL SEAS Stat Point & Build Planner
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Theorycraft your character build from Level 1 to 1000. Allocate Stat Points to maximize Fruit DPS, HP, and Haki armor.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Allocation Controls */}
        <div className="lg:col-span-2 space-y-6">
          {/* Level Slider */}
          <div className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-3">
            <div className="flex justify-between items-center">
              <label className="font-bold text-white text-sm">Character Level</label>
              <span className="font-mono font-extrabold text-yellow-400 text-lg">Level {level}</span>
            </div>
            <input
              type="range"
              min="1"
              max="1000"
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              className="w-full accent-yellow-500 bg-gray-900 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 font-mono">
              <span>Total Points: {totalPointsEarned}</span>
              <span className={remainingPoints < 0 ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                Remaining: {remainingPoints}
              </span>
            </div>
          </div>

          {/* Stat Sliders */}
          <div className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-6">
            <h3 className="font-bold text-white text-base">Allocate Stat Points</h3>

            {/* Strength */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white flex items-center gap-1.5"><Flame className="w-4 h-4 text-amber-400" /> Strength</span>
                <span className="text-amber-400 font-mono">{strength} pts</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={strength}
                onChange={(e) => setStrength(Number(e.target.value))}
                className="w-full accent-amber-500 bg-gray-900 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Defense */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-400" /> Defense (HP)</span>
                <span className="text-emerald-400 font-mono">{defense} pts</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={defense}
                onChange={(e) => setDefense(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-gray-900 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Devil Fruit */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white flex items-center gap-1.5"><Zap className="w-4 h-4 text-yellow-400" /> Devil Fruit Mastery</span>
                <span className="text-yellow-400 font-mono">{fruit} pts</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={fruit}
                onChange={(e) => setFruit(Number(e.target.value))}
                className="w-full accent-yellow-400 bg-gray-900 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Haki */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white flex items-center gap-1.5"><Compass className="w-4 h-4 text-cyan-400" /> Haki Willpower</span>
                <span className="text-cyan-400 font-mono">{haki} pts</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={haki}
                onChange={(e) => setHaki(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-gray-900 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Sword */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white flex items-center gap-1.5"><Sword className="w-4 h-4 text-indigo-400" /> Swordsmanship</span>
                <span className="text-indigo-400 font-mono">{sword} pts</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={sword}
                onChange={(e) => setSword(Number(e.target.value))}
                className="w-full accent-indigo-400 bg-gray-900 h-2 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Quick Presets */}
          <div className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Popular Meta Presets</h4>
            <div className="flex flex-wrap gap-3">
              {presets.map((p) => (
                <button
                  key={p.name}
                  onClick={() => applyPreset(p)}
                  className="px-3.5 py-2 rounded-xl bg-[#040a14] border border-cyan-800/40 hover:border-yellow-400 text-xs font-semibold text-gray-200 transition-all"
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Calculated Stats Output */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
            <h3 className="font-bold text-white text-base border-b border-cyan-900/30 pb-2">
              Calculated Combat Stats
            </h3>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#040a14] border border-emerald-900/40 flex justify-between items-center">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-400" /> Max Health Points (HP)
                </span>
                <span className="font-mono font-bold text-emerald-400 text-sm">{maxHp} HP</span>
              </div>

              <div className="p-3 rounded-xl bg-[#040a14] border border-amber-900/40 flex justify-between items-center">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" /> Max Stamina
                </span>
                <span className="font-mono font-bold text-amber-400 text-sm">{maxStamina} ST</span>
              </div>

              <div className="p-3 rounded-xl bg-[#040a14] border border-yellow-900/40 flex justify-between items-center">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-yellow-400" /> Fruit Burst Skill DPS
                </span>
                <span className="font-mono font-bold text-yellow-400 text-sm">{fruitDamage} DMG</span>
              </div>

              <div className="p-3 rounded-xl bg-[#040a14] border border-indigo-900/40 flex justify-between items-center">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Sword className="w-4 h-4 text-indigo-400" /> Sword Combo Damage
                </span>
                <span className="font-mono font-bold text-indigo-400 text-sm">{swordDamage} DMG</span>
              </div>

              <div className="p-3 rounded-xl bg-[#040a14] border border-cyan-900/40 flex justify-between items-center">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-cyan-400" /> Haki Damage Reduction
                </span>
                <span className="font-mono font-bold text-cyan-400 text-sm">+{hakiArmorBoost}% DEF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
