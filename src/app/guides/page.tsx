import React from 'react';
import { Compass, Sparkles, Anchor, Shield } from 'lucide-react';

export const metadata = {
  title: 'RELL SEAS Beginner Leveling & Haki Unlock Guide (August 2026)',
  description: 'Learn how to level up fast, unlock Armament & Conqueror Haki, build pirate ships, and farm Beli in Roblox RELL SEAS.',
};

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-cyan-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-semibold mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Starter & Crew Walkthrough</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          RELL SEAS Beginner Guide & Leveling (2026)
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Master Haki abilities, recruit pirate crews, build custom ships, and farm Beli efficiently.
        </p>
      </div>

      <div className="space-y-8">
        <section className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Anchor className="w-5 h-5 text-yellow-400" />
            1. Character Creation & Race Rerolls
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Upon joining RELL SEAS, redeem all working promo codes (check our <a href="/codes" className="text-yellow-400 underline font-semibold">Codes page</a>) to receive free Race Rerolls and Devil Fruit spins. Top races include Fishman (water immunity passive) and Mink (electro speed boost).
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            2. Island Navigation & Leveling (Levels 1 - 1000)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li><strong>Levels 1-100:</strong> Starter Island (Fousha Village). Defeat Bandit Captains to purchase your first Rowboat.</li>
            <li><strong>Levels 101-500:</strong> Marine Fort & Desert Island. Participate in Sea Beast Raids for Devil Fruit drops.</li>
            <li><strong>Levels 501-1000:</strong> Skypiea & Enies Lobby. Defeat World Bosses to unlock Haki Trainers.</li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-400" />
            3. How to Unlock Busoshoku & Haoshoku Haki
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Haki is essential for damaging Logia fruit users. Busoshoku (Armament) Haki can be purchased from Rayleigh on Snow Island for 100,000 Beli, while Haoshoku (Conqueror's) Haki is a rare 1% innate trait roll upon character creation.
          </p>
        </section>
      </div>
    </div>
  );
}
