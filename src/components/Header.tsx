import React from 'react';
import Link from 'next/link';
import { Compass, ShieldAlert, Dices, Sliders, Zap, Map, Trophy, BookOpen } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#060e1a]/95 backdrop-blur-md border-b border-cyan-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-500 via-amber-600 to-cyan-500 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#060e1a] rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-yellow-400 group-hover:rotate-45 transition-transform" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-lg text-white tracking-wider flex items-center gap-1.5">
                RELL SEAS <span className="text-xs px-2 py-0.5 bg-yellow-950/80 text-yellow-300 rounded-full border border-yellow-700/50">WIKI</span>
              </span>
              <p className="text-[10px] text-gray-400 tracking-tight">August 2026 Interactive Database</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1 font-medium text-xs">
            <Link
              href="/codes"
              className="px-2.5 py-2 rounded-lg text-yellow-300 hover:text-white hover:bg-yellow-950/40 flex items-center space-x-1 transition-colors"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
              <span>Codes</span>
            </Link>
            <Link
              href="/simulator"
              className="px-2.5 py-2 rounded-lg text-amber-300 hover:text-white hover:bg-amber-950/40 flex items-center space-x-1 transition-colors"
            >
              <Dices className="w-3.5 h-3.5 text-yellow-400" />
              <span>Fruit Gacha</span>
            </Link>
            <Link
              href="/build-planner"
              className="px-2.5 py-2 rounded-lg text-cyan-300 hover:text-white hover:bg-cyan-950/40 flex items-center space-x-1 transition-colors"
            >
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              <span>Build Planner</span>
            </Link>
            <Link
              href="/fruits"
              className="px-2.5 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-950/40 flex items-center space-x-1 transition-colors"
            >
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              <span>Fruits DB</span>
            </Link>
            <Link
              href="/map"
              className="px-2.5 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-950/40 flex items-center space-x-1 transition-colors"
            >
              <Map className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sea Map</span>
            </Link>
            <Link
              href="/tier-list"
              className="px-2.5 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-950/40 flex items-center space-x-1 transition-colors"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Tier List</span>
            </Link>
            <Link
              href="/guides"
              className="px-2.5 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-950/40 flex items-center space-x-1 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Guides</span>
            </Link>
          </nav>

          {/* Mobile Quick Navigation */}
          <div className="flex lg:hidden items-center space-x-2 text-xs font-bold">
            <Link href="/simulator" className="px-2.5 py-1.5 rounded-lg bg-yellow-500 text-slate-950">
              Gacha Sim
            </Link>
            <Link href="/codes" className="px-2.5 py-1.5 rounded-lg bg-cyan-600 text-white">
              Codes
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
