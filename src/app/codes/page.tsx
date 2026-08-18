import React from 'react';
import { ShieldAlert, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES, FAQ_ITEMS, HOWTO_STEPS } from '@/data/wikiData';
import StructuredData from '@/components/StructuredData';

export const metadata = {
  title: 'RELL SEAS Codes (August 2026) - Free Spins & Beli Boosts',
  description: 'Full list of active RELL SEAS codes for August 2026. Redeem free Devil Fruit spins, Beli boosts, and stat resets.',
};

export default function CodesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <StructuredData
        faq={FAQ_ITEMS}
        howTo={{
          name: "How to Redeem Codes in RELL SEAS",
          description: "Tutorial for redeeming promo codes in Roblox RELL SEAS.",
          steps: HOWTO_STEPS,
        }}
      />

      <div className="border-b border-cyan-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-800/50 text-yellow-300 text-xs font-semibold mb-3">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Updated Daily for RELL SEAS Launch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Roblox RELL SEAS Codes (August 2026)
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Redeem these official promo codes from RELL Games for free Devil Fruit Spins, Beli Boosts, Stat Resets, and EXP boosts!
        </p>
      </div>

      {/* Active Codes */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          Active Codes ({ACTIVE_CODES.length})
        </h2>

        <div className="overflow-hidden rounded-2xl border border-cyan-800/40 bg-[#091527]">
          <div className="divide-y divide-cyan-900/30">
            {ACTIVE_CODES.map((c) => (
              <div
                key={c.code}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-cyan-950/20 transition-colors"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="font-mono font-black text-xl text-yellow-300 tracking-wider">
                      {c.code}
                    </span>
                    <span className="px-2.5 py-0.5 text-[10px] uppercase font-bold rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/50">
                      Working
                    </span>
                  </div>
                  <p className="text-sm text-gray-200 font-medium">{c.rewards}</p>
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  Added: {c.addedDate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Redeem */}
      <section className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-yellow-400" />
          How to Redeem Codes in RELL SEAS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HOWTO_STEPS.map((s) => (
            <div key={s.step} className="p-4 rounded-xl bg-[#040a14] border border-cyan-900/40">
              <span className="w-6 h-6 rounded-full bg-yellow-500 text-slate-950 font-bold text-xs flex items-center justify-center mb-2">
                {s.step}
              </span>
              <h3 className="font-bold text-white text-sm mb-1">{s.name}</h3>
              <p className="text-xs text-gray-400">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expired Codes */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-400 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-rose-400" />
          Expired Codes ({EXPIRED_CODES.length})
        </h2>
        <div className="rounded-2xl border border-gray-800/60 bg-[#091527]/50 p-4">
          <div className="flex flex-wrap gap-2">
            {EXPIRED_CODES.map((c) => (
              <span
                key={c.code}
                className="px-3 py-1 rounded-lg bg-gray-900/80 text-gray-500 font-mono text-xs line-through border border-gray-800"
              >
                {c.code}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
