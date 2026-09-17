'use client';

import React, { useState } from 'react';
import { Sliders, Shield, Zap, Flame, Sword, Heart, Compass, RotateCcw, Sparkles } from 'lucide-react';

export default function BuildPlannerClient() {
  const [level, setLevel] = useState(500);
  const [strength, setStrength] = useState(300);
  const [defense, setDefense] = useState(400);
  const [fruit, setFruit] = useState(500);
  const [haki, setHaki] = useState(200);
  const [sword, setSword] = useState(100);

  const totalPointsEarned = level * 3;
  const totalPointsSpent = strength + defense + fruit + haki + sword;
  const remainingPoints = totalPointsEarned - totalPointsSpent;

  // Real-time calculations based on RELL SEAS formulas
  const maxHp = 100 + defense * 15 + level * 5;
  const maxStamina = 100 + strength * 8 + level * 2;
  const fruitDamage = Math.round(fruit * 4.2 + strength * 1.1);
  const swordDamage = Math.round(sword * 4.5 + strength * 1.5);
  const hakiArmorBoost = Math.round(haki * 0.8);

  const presets = [
    { name: 'Mochi Fruit Burst', desc: 'Max Fruit DPS + Solid Defense for PvP One-Combos', str: 200, def: 400, frt: 700, hk: 200, swd: 0 },
    { name: 'Pure Swordmaster', desc: 'High Slash Burst + Willpower Defense for Katana Mains', str: 400, def: 400, frt: 0, hk: 300, swd: 400 },
    { name: 'Magma Raid Tank', desc: 'Massive HP Pool & AoE Burn for Island Bosses', str: 100, def: 700, frt: 500, hk: 200, swd: 0 },
    { name: 'Hybrid Marine Buster', desc: 'Balanced Sword + Fruit Combos for Solo Sailing', str: 300, def: 350, frt: 450, hk: 200, swd: 200 },
  ];

  const applyPreset = (p: typeof presets[0]) => {
    setStrength(p.str);
    setDefense(p.def);
    setFruit(p.frt);
    setHaki(p.hk);
    setSword(p.swd);
  };

  const resetPoints = () => {
    setStrength(0);
    setDefense(0);
    setFruit(0);
    setHaki(0);
    setSword(0);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Allocation Controls */}
        <div className="lg:col-span-2 space-y-6">
          {/* Level Slider */}
          <div className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-3 shadow-lg">
            <div className="flex justify-between items-center">
              <label className="font-bold text-white text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Character Level</span>
              </label>
              <span className="font-mono font-extrabold text-yellow-400 text-lg">Level {level} / 1000</span>
            </div>
            <input
              type="range"
              min="1"
              max="1000"
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              className="w-full accent-yellow-500 bg-gray-900 h-2.5 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between items-center text-xs font-mono pt-1">
              <span className="text-gray-400">Total Points Available: <strong className="text-white">{totalPointsEarned}</strong></span>
              <div className="flex items-center gap-3">
                <span className={remainingPoints < 0 ? 'text-rose-400 font-bold bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30' : 'text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30'}>
                  {remainingPoints < 0 ? `Overspent by ${Math.abs(remainingPoints)}` : `Remaining: ${remainingPoints}`}
                </span>
                <button
                  onClick={resetPoints}
                  className="inline-flex items-center gap-1 text-[11px] text-gray-400 hover:text-white transition-colors"
                  title="Reset all stats to 0"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stat Sliders */}
          <div className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-6 shadow-lg">
            <div className="flex items-center justify-between border-b border-cyan-900/30 pb-3">
              <h3 className="font-bold text-white text-base">Allocate Stat Points</h3>
              <span className="text-xs text-gray-400 font-mono">Max 1000 per stat</span>
            </div>

            {/* Strength */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white flex items-center gap-1.5"><Flame className="w-4 h-4 text-amber-400" /> Strength (Melee & Stamina)</span>
                <span className="text-amber-400 font-mono text-sm">{strength} pts</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={strength}
                onChange={(e) => setStrength(Number(e.target.value))}
                className="w-full accent-amber-500 bg-gray-900 h-2 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-gray-400">+8 Stamina and +1.1 Melee scaling per point</p>
            </div>

            {/* Defense */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-400" /> Defense (Max Health Pool)</span>
                <span className="text-emerald-400 font-mono text-sm">{defense} pts</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={defense}
                onChange={(e) => setDefense(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-gray-900 h-2 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-gray-400">+15 HP per point. Crucial for surviving one-shot combos</p>
            </div>

            {/* Devil Fruit */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white flex items-center gap-1.5"><Zap className="w-4 h-4 text-yellow-400" /> Devil Fruit Mastery (Skill DPS)</span>
                <span className="text-yellow-400 font-mono text-sm">{fruit} pts</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={fruit}
                onChange={(e) => setFruit(Number(e.target.value))}
                className="w-full accent-yellow-400 bg-gray-900 h-2 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-gray-400">+4.2 Skill Damage per point for Logia, Paramecia & Zoan</p>
            </div>

            {/* Haki */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white flex items-center gap-1.5"><Compass className="w-4 h-4 text-cyan-400" /> Haki Willpower (Armor & Bypass)</span>
                <span className="text-cyan-400 font-mono text-sm">{haki} pts</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={haki}
                onChange={(e) => setHaki(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-gray-900 h-2 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-gray-400">Armament armor reduction and Observation dodge window</p>
            </div>

            {/* Sword */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white flex items-center gap-1.5"><Sword className="w-4 h-4 text-indigo-400" /> Swordsmanship (Katana & Blade Damage)</span>
                <span className="text-indigo-400 font-mono text-sm">{sword} pts</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={sword}
                onChange={(e) => setSword(Number(e.target.value))}
                className="w-full accent-indigo-400 bg-gray-900 h-2 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-gray-400">+4.5 Slash Damage per point with Katana & Greatsword movesets</p>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4 shadow-lg">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Recommended Meta Presets</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {presets.map((p) => (
                <button
                  key={p.name}
                  onClick={() => applyPreset(p)}
                  className="p-3.5 text-left rounded-xl bg-[#040a14] border border-cyan-800/40 hover:border-yellow-400 hover:bg-[#061022] transition-all group"
                >
                  <p className="text-xs font-bold text-white group-hover:text-yellow-400 transition-colors">{p.name}</p>
                  <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">{p.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Calculated Stats Output */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4 shadow-xl sticky top-24">
            <h3 className="font-bold text-white text-base border-b border-cyan-900/30 pb-2">
              Calculated Combat Stats
            </h3>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-[#040a14] border border-emerald-900/40 flex justify-between items-center">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-400" /> Max Health (HP)
                </span>
                <span className="font-mono font-bold text-emerald-400 text-sm">{maxHp} HP</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#040a14] border border-amber-900/40 flex justify-between items-center">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" /> Max Stamina Pool
                </span>
                <span className="font-mono font-bold text-amber-400 text-sm">{maxStamina} ST</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#040a14] border border-yellow-900/40 flex justify-between items-center">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-yellow-400" /> Fruit Skill Burst DPS
                </span>
                <span className="font-mono font-bold text-yellow-400 text-sm">{fruitDamage} DMG</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#040a14] border border-indigo-900/40 flex justify-between items-center">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Sword className="w-4 h-4 text-indigo-400" /> Sword Slash Damage
                </span>
                <span className="font-mono font-bold text-indigo-400 text-sm">{swordDamage} DMG</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#040a14] border border-cyan-900/40 flex justify-between items-center">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-cyan-400" /> Haki Armor Reduction
                </span>
                <span className="font-mono font-bold text-cyan-400 text-sm">+{hakiArmorBoost}% DEF</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-gray-400 leading-relaxed border-t border-cyan-900/30">
              💡 <em>Formulas updated for RELL SEAS Season 1 Beta. Scaling values reverse-engineered from combat dummy balance tables.</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
