import React from 'react';
import { ShieldAlert, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES, FAQ_ITEMS } from '@/data/wikiData';
import StructuredData from '@/components/StructuredData';

export const metadata = {
  title: 'RELL SEAS Codes — No Codes Released Yet',
  description: 'RELL Seas has not launched and no codes exist yet. Where RELL Games will post codes, and what to expect at launch.',
  alternates: {
    canonical: '/codes',
  },
};

export default function CodesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <StructuredData faq={FAQ_ITEMS} />

      <div className="border-b border-cyan-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-800/50 text-yellow-300 text-xs font-semibold mb-3">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>RELL Seas Has Not Launched — No Codes Exist Yet</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Roblox RELL SEAS Codes
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          RELL Games has not released RELL Seas, and no promo codes exist for it. Every site listing &ldquo;working RELL Seas codes&rdquo; right now is showing invented strings. When the game launches and RELL Games posts its first code, we will verify it in-game and add it here.
        </p>
      </div>

      {/* Active Codes */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          Active Codes ({ACTIVE_CODES.length})
        </h2>

        {ACTIVE_CODES.length === 0 ? (
          <div className="rounded-2xl border border-cyan-800/40 bg-[#091527] p-8 text-center">
            <p className="text-sm font-bold text-white">No codes have been released.</p>
            <p className="text-xs text-gray-400 mt-2 max-w-xl mx-auto">
              RELL Games historically drops codes around update milestones on its official X account and Discord server. This page stays empty until a code is officially confirmed, so you never copy-paste a dead string.
            </p>
          </div>
        ) : (
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
        )}
      </section>

      {/* Where Codes Will Be Posted */}
      <section className="p-6 rounded-2xl bg-[#091527] border border-cyan-900/40 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-yellow-400" />
          Where RELL Seas Codes Will Appear First
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#040a14] border border-cyan-900/40">
            <span className="w-6 h-6 rounded-full bg-yellow-500 text-slate-950 font-bold text-xs flex items-center justify-center mb-2">1</span>
            <h3 className="font-bold text-white text-sm mb-1">Official X Account</h3>
            <p className="text-xs text-gray-400">RELL Games announces updates and milestone codes on its official X profile.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#040a14] border border-cyan-900/40">
            <span className="w-6 h-6 rounded-full bg-yellow-500 text-slate-950 font-bold text-xs flex items-center justify-center mb-2">2</span>
            <h3 className="font-bold text-white text-sm mb-1">Discord Server</h3>
            <p className="text-xs text-gray-400">The RELL Games Discord is where launch news and code drops are posted first.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#040a14] border border-cyan-900/40">
            <span className="w-6 h-6 rounded-full bg-yellow-500 text-slate-950 font-bold text-xs flex items-center justify-center mb-2">3</span>
            <h3 className="font-bold text-white text-sm mb-1">This Page</h3>
            <p className="text-xs text-gray-400">Once codes are confirmed, we list them here with their exact rewards and expiry behavior.</p>
          </div>
        </div>
      </section>

      {/* Expired Codes */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-400 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-rose-400" />
          Expired Codes ({EXPIRED_CODES.length})
        </h2>
        {EXPIRED_CODES.length === 0 ? (
          <div className="rounded-2xl border border-gray-800/60 bg-[#091527]/50 p-6">
            <p className="text-xs text-gray-400 text-center">Nothing to archive yet — no code has ever been released.</p>
          </div>
        ) : (
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
        )}
      </section>
    </div>
  );
}
