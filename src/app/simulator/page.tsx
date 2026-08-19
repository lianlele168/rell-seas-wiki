'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Dices, Trophy, RefreshCw, Layers, ShieldAlert, Zap, X, RotateCw } from 'lucide-react';
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

// Web Audio API Synthesizer for Genshin-style wish sound effects
class SoundEngine {
  ctx: AudioContext | null = null;

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playMeteorSound(rarity: string) {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    if (rarity === 'Mythical') {
      // Golden 5-Star sound: Sweep up with chord resonance
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 1.2);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(1320, now + 0.5);
      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);
      subGain.gain.setValueAtTime(0.15, now + 0.5);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);
      subOsc.start(now + 0.5);
      subOsc.stop(now + 2.0);
    } else if (rarity === 'Legendary') {
      // Purple 4-Star sound
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.8);
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
    } else {
      // Blue 3-Star sound
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.linearRampToValueAtTime(520, now + 0.5);
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    }

    osc.start(now);
    osc.stop(now + 2.5);
  }

  playFlipSound() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }
}

const soundEngine = new SoundEngine();

export default function SimulatorPage() {
  const [spins, setSpins] = useState(100);
  const [pity, setPity] = useState(0);
  const [inventory, setInventory] = useState<FruitData[]>([]);
  const [lastRolledBatch, setLastRolledBatch] = useState<FruitData[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [totalSpinsCount, setTotalSpinsCount] = useState(0);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [flippedCards, setFlippedCards] = useState<boolean[]>([]);

  const animCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const rollFruit = (currentPity: number) => {
    let probMythical = 0.005; // 0.5% base
    // Soft pity starting at 74th pull
    if (currentPity >= 74) {
      probMythical = 0.005 + (currentPity - 73) * 0.06;
    }
    if (currentPity >= 90) probMythical = 1.0; // Hard pity

    const rand = Math.random();

    if (rand < probMythical) {
      // Mythical Drop (Gold)
      const mythicals = ALL_GACHA_POOL.filter((f) => f.rarity === 'Mythical');
      return mythicals[Math.floor(Math.random() * mythicals.length)];
    } else if (rand < probMythical + 0.02) {
      // Legendary Drop (Purple)
      const legendaries = ALL_GACHA_POOL.filter((f) => f.rarity === 'Legendary');
      return legendaries[Math.floor(Math.random() * legendaries.length)];
    } else if (rand < probMythical + 0.07) {
      // Rare Drop (Blue)
      const rares = ALL_GACHA_POOL.filter((f) => f.rarity === 'Rare');
      return rares[Math.floor(Math.random() * rares.length)];
    } else if (rand < probMythical + 0.29) {
      // Uncommon Drop
      const uncommons = ALL_GACHA_POOL.filter((f) => f.rarity === 'Uncommon');
      return uncommons[Math.floor(Math.random() * uncommons.length)];
    } else {
      // Common Drop
      const commons = ALL_GACHA_POOL.filter((f) => f.rarity === 'Common');
      return commons[Math.floor(Math.random() * commons.length)];
    }
  };

  const runMeteorAnimation = (highestRarity: string, onComplete: () => void) => {
    const canvas = animCanvasRef.current;
    if (!canvas) {
      onComplete();
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      onComplete();
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    soundEngine.playMeteorSound(highestRarity);

    let startTime = performance.now();
    const duration = 2200; // 2.2s meteor flight

    let tailColor = highestRarity === 'Mythical' ? '#f7cf68' : highestRarity === 'Legendary' ? '#bf86fd' : '#4cbcf6';
    let coreColor = highestRarity === 'Mythical' ? '#ffffff' : tailColor;

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1.0);

      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Cosmic background overlay
      ctx!.fillStyle = `rgba(6, 14, 26, ${Math.min(progress * 2, 0.95)})`;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      // Meteor trajectory calculation
      const startX = -100;
      const startY = -100;
      const endX = canvas!.width + 200;
      const endY = canvas!.height + 200;

      const curX = startX + (endX - startX) * progress;
      const curY = startY + (endY - startY) * progress;

      // Meteor trail gradient
      const gradient = ctx!.createLinearGradient(curX, curY, curX - 300, curY - 300);
      gradient.addColorStop(0, coreColor);
      gradient.addColorStop(0.3, tailColor);
      gradient.addColorStop(1, 'transparent');

      ctx!.strokeStyle = gradient;
      ctx!.lineWidth = highestRarity === 'Mythical' ? 14 : 8;
      ctx!.lineCap = 'round';
      ctx!.beginPath();
      ctx!.moveTo(curX, curY);
      ctx!.lineTo(curX - 350, curY - 350);
      ctx!.stroke();

      // Glowing star core
      ctx!.fillStyle = coreColor;
      ctx!.shadowColor = tailColor;
      ctx!.shadowBlur = highestRarity === 'Mythical' ? 40 : 20;
      ctx!.beginPath();
      ctx!.arc(curX, curY, highestRarity === 'Mythical' ? 12 : 8, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.shadowBlur = 0;

      // Golden shockwave explosion at climax
      if (progress > 0.85 && highestRarity === 'Mythical') {
        const flashAlpha = (progress - 0.85) / 0.15;
        ctx!.fillStyle = `rgba(247, 207, 104, ${flashAlpha * 0.85})`;
        ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
        onComplete();
      }
    }

    requestAnimationFrame(animate);
  };

  const handleSpin = (count: number) => {
    if (spins < count || isSpinning) return;
    setIsSpinning(true);
    setSpins((prev) => prev - count);

    let tempPity = pity;
    const rolledResults: FruitData[] = [];

    for (let i = 0; i < count; i++) {
      const res = rollFruit(tempPity);
      if (res.rarity === 'Mythical') {
        tempPity = 0;
      } else {
        tempPity++;
      }
      rolledResults.push(res);
    }

    setPity(tempPity);

    // Highest rarity calculation
    const hasMythical = rolledResults.some((r) => r.rarity === 'Mythical');
    const hasLegendary = rolledResults.some((r) => r.rarity === 'Legendary');
    const highestRarity = hasMythical ? 'Mythical' : hasLegendary ? 'Legendary' : 'Rare';

    runMeteorAnimation(highestRarity, () => {
      setLastRolledBatch(rolledResults);
      setInventory((prev) => [...rolledResults, ...prev]);
      setTotalSpinsCount((prev) => prev + count);
      setFlippedCards(new Array(rolledResults.length).fill(false));
      setShowResultsModal(true);
      setIsSpinning(false);
    });
  };

  const handleFlipCard = (idx: number) => {
    soundEngine.playFlipSound();
    setFlippedCards((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  const handleRevealAll = () => {
    soundEngine.playFlipSound();
    setFlippedCards(new Array(lastRolledBatch.length).fill(true));
  };

  const handleRefillSpins = () => {
    setSpins((prev) => prev + 50);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 relative">
      {/* Canvas Fullscreen Animation Overlay */}
      <canvas
        ref={animCanvasRef}
        className={`fixed inset-0 z-50 pointer-events-none ${isSpinning ? 'block' : 'hidden'}`}
      />

      {/* Header Bar */}
      <div className="border-b border-cyan-900/30 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-800/50 text-yellow-300 text-xs font-semibold mb-3">
            <Dices className="w-3.5 h-3.5" />
            <span>Genshin-Style High-Fidelity Simulator</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            RELL SEAS Fruit Wish Gacha Simulator
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Experience Genshin Impact celestial meteor animations & 3D card reveals with real RELL SEAS drop rates.
          </p>
        </div>

        {/* Counters & Refill */}
        <div className="flex items-center space-x-4 bg-[#091527] px-5 py-3 rounded-2xl border border-cyan-800/40">
          <div>
            <span className="text-[10px] uppercase font-bold text-gray-400 block font-mono">Available Spins</span>
            <span className="text-2xl font-black text-yellow-400 font-mono">{spins}</span>
          </div>
          <div className="h-8 w-px bg-cyan-900/40" />
          <div>
            <span className="text-[10px] uppercase font-bold text-gray-400 block font-mono">Pity Counter</span>
            <span className="text-lg font-extrabold text-cyan-300 font-mono">{pity}/90</span>
          </div>
          <button
            onClick={handleRefillSpins}
            className="px-3 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs flex items-center space-x-1 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>+50 Spins</span>
          </button>
        </div>
      </div>

      {/* Simulator Banner Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Main Wish Stage */}
        <div className="lg:col-span-2 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#091527] via-[#060e1a] to-[#040a14] border border-cyan-900/40 text-center space-y-8 relative overflow-hidden flex flex-col justify-between min-h-[450px]">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-950/80 border border-yellow-500/50 text-yellow-300 text-xs font-bold font-mono">
              ✦ RATE UP: Mythical Mochi & Azure Dragon (0.5%)
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Celestial Devil Fruit Banner
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
              Guaranteed 5-Star Mythical Fruit at 90 spins (Soft Pity starts at 74th spin). Spin 10x to trigger full-screen meteor animation!
            </p>
          </div>

          {/* Featured Showcase Fruit Graphics */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto my-4">
            <div className="p-3 rounded-2xl bg-slate-950/80 border border-yellow-500/40 text-center space-y-2">
              <div className="w-16 h-16 mx-auto relative rounded-xl overflow-hidden border border-yellow-400">
                <Image src="/mochi-fruit.png" alt="Mochi Fruit" fill className="object-cover" />
              </div>
              <span className="text-[10px] font-bold text-yellow-400 block">Mochi (5★)</span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950/80 border border-cyan-500/40 text-center space-y-2">
              <div className="w-16 h-16 mx-auto relative rounded-xl overflow-hidden border border-cyan-400">
                <Image src="/dragon-fruit.png" alt="Dragon Fruit" fill className="object-cover" />
              </div>
              <span className="text-[10px] font-bold text-cyan-400 block">Dragon (5★)</span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950/80 border border-purple-500/40 text-center space-y-2">
              <div className="w-16 h-16 mx-auto relative rounded-xl overflow-hidden border border-purple-400">
                <Image src="/magma-fruit.png" alt="Magma Fruit" fill className="object-cover" />
              </div>
              <span className="text-[10px] font-bold text-purple-400 block">Magma (4★)</span>
            </div>
          </div>

          {/* Wish Buttons */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => handleSpin(1)}
                disabled={spins < 1 || isSpinning}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-black shadow-xl shadow-yellow-500/20 disabled:opacity-50 transition-all hover:scale-105 flex items-center space-x-2"
              >
                <Dices className="w-5 h-5" />
                <span>Wish 1x</span>
              </button>

              <button
                onClick={() => handleSpin(10)}
                disabled={spins < 10 || isSpinning}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black shadow-xl shadow-yellow-500/30 border-2 border-yellow-200 disabled:opacity-50 transition-all hover:scale-105 flex items-center space-x-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Wish 10x</span>
              </button>
            </div>
            <p className="text-[10px] text-gray-500 font-mono">
              Total Spins Simulated: {totalSpinsCount}
            </p>
          </div>
        </div>

        {/* Right Col: Drop Rates & Inventory */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-yellow-400" />
              Official Drop Rates (Gacha Odds)
            </h3>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between text-amber-400 font-bold border-b border-gray-800 pb-1">
                <span>Mythical (5★ Mochi, Dragon)</span>
                <span>0.5% (Pity 90)</span>
              </div>
              <div className="flex justify-between text-purple-400 font-bold border-b border-gray-800 pb-1">
                <span>Legendary (4★ Magma, Quake)</span>
                <span>2.0%</span>
              </div>
              <div className="flex justify-between text-cyan-400 border-b border-gray-800 pb-1">
                <span>Rare (3★ Light, Ice)</span>
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
            <h3 className="text-sm font-bold text-white flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-cyan-400" />
                Rolled Inventory ({inventory.length})
              </span>
            </h3>

            <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
              {inventory.length === 0 ? (
                <p className="text-xs text-gray-500 italic">No fruits rolled yet. Click Wish 10x above!</p>
              ) : (
                inventory.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-[#040a14] border border-cyan-900/30 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 relative rounded-lg overflow-hidden border border-cyan-800">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <span className="font-bold text-white">{item.name}</span>
                    </div>
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

      {/* Genshin-Style 10-Wish Card Results Modal */}
      {showResultsModal && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-yellow-500/20 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest block">
                CELESTIAL REVEAL
              </span>
              <h3 className="text-2xl font-black text-white">Wish Results ({lastRolledBatch.length} Items)</h3>
            </div>
            <button
              onClick={() => setShowResultsModal(false)}
              className="w-10 h-10 rounded-full bg-slate-900 border border-gray-700 text-gray-400 hover:text-white flex items-center justify-center font-bold"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 my-auto max-w-6xl mx-auto w-full">
            {lastRolledBatch.map((item, idx) => {
              const isFlipped = flippedCards[idx];
              const isGold = item.rarity === 'Mythical';
              const isPurple = item.rarity === 'Legendary';

              return (
                <div
                  key={idx}
                  onClick={() => handleFlipCard(idx)}
                  className="h-64 sm:h-72 w-full cursor-pointer relative group perspective-1000"
                >
                  <div
                    className={`w-full h-full relative duration-700 transition-all transform-style-3d ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Card Front (Face-down) */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-b from-[#091527] to-[#040a14] border-2 border-yellow-500/40 flex flex-col items-center justify-center p-4 shadow-xl">
                      <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
                      <span className="font-mono text-xs text-yellow-300 font-bold mt-3">WISH #{idx + 1}</span>
                      <span className="text-[10px] text-gray-500 mt-1">Click to reveal</span>
                    </div>

                    {/* Card Back (Revealed item) */}
                    <div
                      className={`absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-4 flex flex-col justify-between text-center border-2 shadow-2xl ${
                        isGold
                          ? 'bg-gradient-to-b from-amber-950 via-[#060e1a] to-[#040a14] border-yellow-400 shadow-yellow-500/30'
                          : isPurple
                          ? 'bg-gradient-to-b from-purple-950 via-[#060e1a] to-[#040a14] border-purple-400 shadow-purple-500/30'
                          : 'bg-gradient-to-b from-cyan-950 via-[#060e1a] to-[#040a14] border-cyan-700'
                      }`}
                    >
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-gray-300">{item.type}</span>
                        <span
                          className={`font-bold px-2 py-0.5 rounded ${
                            isGold ? 'bg-yellow-500 text-slate-950' : isPurple ? 'bg-purple-600 text-white' : 'bg-cyan-600 text-white'
                          }`}
                        >
                          {item.rarity}
                        </span>
                      </div>

                      {/* Fruit Graphic */}
                      <div className="my-auto space-y-2">
                        <div className="w-20 h-20 mx-auto relative rounded-2xl overflow-hidden border border-yellow-500/50 shadow-lg">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <h4 className="font-extrabold text-white text-xs sm:text-sm leading-tight">{item.name}</h4>
                      </div>

                      <div className="pt-2 border-t border-cyan-900/30 text-[10px] font-mono text-cyan-300">
                        DPS: {item.dps} | DEF: {item.defense}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modal Footer Controls */}
          <div className="flex items-center justify-center space-x-4 pt-4 border-t border-yellow-500/20">
            <button
              onClick={handleRevealAll}
              className="px-6 py-3 rounded-full bg-yellow-500/20 border border-yellow-400 text-yellow-300 font-bold text-xs hover:bg-yellow-500/30 transition-colors"
            >
              ✨ Reveal All Cards
            </button>
            <button
              onClick={() => setShowResultsModal(false)}
              className="px-8 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-xs transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
