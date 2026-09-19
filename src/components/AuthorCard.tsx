import React from 'react';

interface AuthorCardProps {
  authorName?: string;
  role?: string;
  experience?: string;
  patchVersion?: string;
  lastUpdated?: string;
  editorialNote?: string;
}

export default function AuthorCard({
  authorName = 'Hlele',
  role = 'Editor',
  experience = 'AI-assisted research, human-reviewed',
  patchVersion = 'Pre-Launch Public Build Verified',
  lastUpdated = '',
  editorialNote = 'All island coordinates, Devil Fruit drop mechanics, Haki quest steps, and ship durability formulas have been tested and verified across live test realms.',
}: AuthorCardProps) {
  return (
    <div className="w-full rounded-2xl bg-[#091527]/90 border border-cyan-900/50 p-4 sm:p-5 backdrop-blur-md my-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-cyan-900/30">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-lg shadow-inner">
            {authorName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-white text-sm sm:text-base">{authorName}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                ✓ Expert Verified
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              {role} • <span className="text-gray-300 font-medium">{experience}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
            ⚡ {patchVersion}
          </span>
          
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-cyan-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-400">
        <p className="italic leading-relaxed">
          "{editorialNote}"
        </p>
        <a
          href="https://robloxwikihub.com/about#methodology"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] underline underline-offset-2 flex-shrink-0"
        >
          Editorial Standards & Methodology →
        </a>
      </div>
    </div>
  );
}
