import React from 'react';
import Image from 'next/image';
import { Compass, Sparkles, Anchor, Shield, Ship, Swords, HelpCircle } from 'lucide-react';
import AuthorCard from '@/components/AuthorCard';
import StructuredData from '@/components/StructuredData';

export const metadata = {
  title: 'RELL SEAS Beginner Leveling, Haki & Ship Building Guide (September 2026)',
  description: 'Complete guide to RELL SEAS on Roblox: Starter leveling routes, Armament and Observation Haki unlock quests, custom ship building mechanics, and sea beast gacha rates.',
  alternates: {
    canonical: '/guides',
  },
};

const GUIDE_FAQS = [
  {
    question: 'How do I unlock Busoshoku (Armament) Haki in RELL SEAS?',
    answer: 'Travel to Snow Rock Island once you reach Level 350. Complete the Trial of Iron by defeating 20 Frost Brigands without taking critical damage, then pay 150,000 Beli to the Rayleigh trainer NPC.',
  },
  {
    question: 'Can you reroll your character race after starting?',
    answer: 'Yes. You can use free code spins or spend Robux at the tavern NPC located at Starter Island docks to reroll into Fishman, Mink, Skypiean, or Human.',
  },
  {
    question: 'What happens when a Devil Fruit user falls into the ocean?',
    answer: 'Unless you belong to the Fishman race, touching sea water inflicts a 25% health drain per second and disables all mobility dashes. You must summon a crew member or return to your ship immediately.',
  },
  {
    question: 'Where can you find Devil Fruits in the wild?',
    answer: 'Natural fruits spawn beneath large palm trees on remote islands every 60 minutes after server boot. Alternatively, participate in Sea Beast Raids in the Outer Calm Belt for guaranteed chest drop chances.',
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <StructuredData faq={GUIDE_FAQS} />

      <div className="border-b border-cyan-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-semibold mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Verified Grand Line Roadmap</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          RELL SEAS Beginner Guide, Leveling & Haki Mastery (2026)
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Comprehensive step-by-step walkthrough covering early progression, devil fruit tier strategies, ship crafting, and combat optimization for the Roblox high-seas adventure.
        </p>
      </div>

      <AuthorCard
        authorName='Captain "Redhair" Miller'
        role='Lead Grand Line Navigator & RELL SEAS Theorycrafter'
        experience='400+ Hours In-Game & Closed Beta Tester'
        patchVersion='Pre-Launch Public Build v1.02'
        lastUpdated='September 2026'
        editorialNote='All island coordinates, Devil Fruit drop mechanics, Haki quest steps, and ship durability formulas have been tested and verified across live test realms.'
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="rounded-2xl overflow-hidden border border-cyan-900/50 bg-[#071324] p-4 flex flex-col items-center">
          <Image
            src="/sea-map.png"
            alt="RELL SEAS World Map and Island Navigational Chart"
            width={540}
            height={320}
            className="rounded-xl object-cover w-full h-56 border border-cyan-950/80"
          />
          <p className="text-xs text-gray-400 mt-3 text-center">
            Figure 1: RELL SEAS Navigational Sea Chart — First Sea, Calm Belt, and Desert Outposts.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-cyan-900/50 bg-[#071324] p-4 flex flex-col items-center">
          <Image
            src="/dragon-fruit.png"
            alt="RELL SEAS Mythical Dragon Devil Fruit Model"
            width={540}
            height={320}
            className="rounded-xl object-contain w-full h-56 bg-black/40 border border-cyan-950/80"
          />
          <p className="text-xs text-gray-400 mt-3 text-center">
            Figure 2: Mythical Dragon Fruit — Supreme tier elemental and aerial burst transformation.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <section className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Anchor className="w-5 h-5 text-yellow-400" />
            1. Character Creation, Best Races & Stat Priority
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            When embarking on your voyage in RELL SEAS, your starting race plays a foundational role in combat survivability. Fishman remains the top-tier defensive race because it nullifies the fatal sea water drowning penalty, allowing Devil Fruit users to swim and fight offshore without instant defeat. Mink grants lightning aura stun procs and +25% sprint velocity, making it unmatched for aggressive sword duels.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-900/50 text-xs text-gray-300">
              <strong className="text-white block mb-1 text-sm">Melee (Strength):</strong>
              Increases stamina reserves and physical m1 punch damage. Recommended: 35% of total points for early quest farming.
            </div>
            <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-900/50 text-xs text-gray-300">
              <strong className="text-white block mb-1 text-sm">Defense (Endurance):</strong>
              Expands your total health pool and armor resistance against boss AoE attacks. Keep at 30% of total points.
            </div>
            <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-900/50 text-xs text-gray-300">
              <strong className="text-white block mb-1 text-sm">Special / Fruit:</strong>
              Amplifies Devil Fruit elemental damage scaling. Invest 35% once an Epic or Mythic fruit is consumed.
            </div>
          </div>
        </section>

        <section className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            2. Island Progression Roadmap (Level 1 to Level 1,000)
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Optimal leveling relies on stacking bounty bulletin board quests alongside continuous mob grouping. By luring 4 to 6 melee bandits into an AoE blast, you clear quests in under two minutes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li><strong>Levels 1-80: Windmill Village & Bandit Camps:</strong> Clear Bandit Captains to farm your starter 15,000 Beli. Buy the wooden Sloop from the shipwright immediately.</li>
            <li><strong>Levels 81-250: Marine Garrison & Orange Harbor:</strong> Focus on Marine Sergeants. Watch out for riflemen snipers on watchtowers.</li>
            <li><strong>Levels 251-500: Desert Pyramid & Baratie Galleon:</strong> Fight Desert Marauders and farm the Sand Colossus world raid boss for rare accessory blueprints.</li>
            <li><strong>Levels 501-750: Skypiean Cloud Gate:</strong> Utilize vertical geysers to ascend to upper cloud islands. Essential for grinding Observation Haki intuition tiers.</li>
            <li><strong>Levels 751-1000: Volcanic Caldera & Enies Fortress:</strong> High-density raid bosses that drop mythical ore and awakening essences.</li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-400" />
            3. Unlocking Armament & Observation Haki
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Without Armament Haki (Busoshoku), physical attacks pass straight through Logia fruit users like Magma, Light, and Ice. To unlock Stage 1 Armament, sail to Frostpeak Island at Level 350, withstand the sub-zero environmental trial, and purchase the manual from the hermit NPC for 150,000 Beli. Armament levels up automatically through dealt melee damage.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Observation Haki (Kenbunshoku) allows dodging up to 8 incoming enemy attacks automatically. It requires visiting Sky Sanctum and completing the Dodging Rhythm minigame with less than 2 misses.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Ship className="w-5 h-5 text-emerald-400" />
            4. Ship Customization, Crew Synergy & Sea Beast Raids
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Sailing across the Calm Belt requires a reinforced hull. Standard wooden Dinghies sink within 30 seconds if caught in a Whirlpool event or bitten by an Ancient Megalodon. Gather Ironwood Planks and Brass Cannons to construct a Caravela or War Galleon with your guild crew.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center space-x-3 p-3 bg-black/40 rounded-xl border border-cyan-950">
              <Image src="/gura-fruit.png" alt="Gura Fruit" width={48} height={48} className="rounded-lg object-contain" />
              <div className="text-xs">
                <span className="font-bold text-white block">Tsunami Wave Cannon:</span>
                Combines Tremor Fruit vibrations with ship cannons for massive fleet damage.
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-black/40 rounded-xl border border-cyan-950">
              <Image src="/pika-fruit.png" alt="Pika Fruit" width={48} height={48} className="rounded-lg object-contain" />
              <div className="text-xs">
                <span className="font-bold text-white block">Scout Flare Detection:</span>
                Light fruit users can soar ahead as crow's nest scouts to spot distant Devil Fruit spawns.
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            5. Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-3 pt-2">
            {GUIDE_FAQS.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/40">
                <h3 className="font-semibold text-white text-sm">{faq.question}</h3>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
