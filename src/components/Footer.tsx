import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#030710] border-t border-cyan-900/30 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-base mb-2">RELL SEAS Wiki</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Fan-made community guide hub for Roblox RELL SEAS. Discover active codes, Logia & Mythical Zoan Fruit rankings, Haki unlock guides, and sailing tips.
            </p>
          </div>
          <div>
            <h4 className="text-yellow-300 font-semibold text-sm mb-2">Quick Navigation</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="/codes" className="hover:text-yellow-400 transition-colors">Active Codes (August 2026)</Link></li>
              <li><Link href="/tier-list" className="hover:text-yellow-400 transition-colors">Devil Fruit & Haki Tier List</Link></li>
              <li><Link href="/guides" className="hover:text-yellow-400 transition-colors">Beginner & Crew Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-300 font-semibold text-sm mb-2">Community Disclaimer</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Unofficial fan-made wiki created for Roblox RELL SEAS players. All game assets belong to RELL Games and their respective creators.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-cyan-900/20 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 RELL SEAS Wiki. Not affiliated with RELL Games or Roblox Corporation.</p>
          <p className="mt-2 sm:mt-0">Updated Daily for Official Release</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
