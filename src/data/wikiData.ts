/**
 * RELL Seas has never been publicly playable — the Roblox experience is set to
 * private while RELL Games runs Wave 1 testing. That means there is no fruit
 * roster, no island list, no stat system and no combat values to publish.
 *
 * DEVIL_FRUITS, ISLANDS and TIER_LIST previously held fully invented data:
 * 17 fruits with five-skill movesets, mastery gates and drop rates; 12 islands
 * with level brackets, named bosses and drop tables; and 23 tier entries scored
 * "DPS: 99/100 | Defense: 92/100". None of it came from any source, because no
 * source exists yet. All three are now empty on purpose.
 *
 * Do not repopulate them from community guesswork. Fruit tier lists, island
 * maps and drop-rate tables for unreleased games are the most common form of
 * fabricated Roblox content, and the specificity is what makes them convincing.
 * Fill these in only when values can be observed in the released game.
 *
 * Context: indexing-diagnosis/reports/unaudited-7-sites-screening-2026-09-19.md
 */

export interface CodeItem {
  code: string;
  rewards: string;
  status: 'active' | 'expired';
  addedDate: string;
}

export interface FruitData {
  id: string;
  name: string;
  type: 'Logia' | 'Paramecia' | 'Zoan';
  rarity: 'Mythical' | 'Legendary' | 'Rare' | 'Uncommon' | 'Common';
  dropRate: string;
  image: string;
  description: string;
  skills: {
    key: string;
    name: string;
    mastery: number;
    description: string;
  }[];
  dps: number;
  defense: number;
  mobility: number;
}

export interface IslandData {
  name: string;
  levelRange: string;
  description: string;
  boss: string;
  bossDrops: string[];
  features: string[];
}

export interface TierItem {
  name: string;
  type: string;
  tier: 'S+' | 'S' | 'A' | 'B';
  description: string;
  stats: string;
}

// Only what RELL Games and Roblox have actually announced. Planned platforms,
// faction count, currency and monetisation stance come from the official wiki
// FAQ and the Roblox listing; nothing gameplay-numeric has been released.
export const GAME_INFO = {
  title: "RELL SEAS Wiki",
  subtitle: "Unofficial Launch Tracker & Pre-Launch Guide",
  description:
    "An unofficial RELL Seas tracker. RELL Seas has not launched publicly, so this wiki covers launch status, confirmed announcement facts and what has not been revealed — rather than inventing fruit, island or stat data.",
  url: "https://rellseas.robloxwikihub.com",
  stats: [
    { label: "Developer", value: "RELL Games (Shindo Life creators)" },
    { label: "Platform", value: "Roblox — PC, console and mobile planned" },
    { label: "Genre", value: "Naval action-adventure RPG" },
    { label: "Status", value: "Unreleased — private during Wave 1 testing" },
    { label: "Release Date", value: "Not announced" },
    { label: "Factions Revealed", value: "40+ pirate factions" },
  ],
};

export const DEVIL_FRUITS: FruitData[] = [];

export const ISLANDS: IslandData[] = [];

export const TIER_LIST: TierItem[] = [];

// No RELL Seas code has ever existed — there is no game to redeem one in.
export const ACTIVE_CODES: CodeItem[] = [];

export const EXPIRED_CODES: CodeItem[] = [];

export const FAQ_ITEMS = [
  {
    question: "Are there any RELL SEAS codes?",
    answer:
      "No. RELL Seas has not launched yet, so no codes exist. Any site listing working RELL Seas codes right now is showing invented strings. RELL Games will post codes on its official X account and Discord when the game launches.",
  },
  {
    question: "Who is the developer of RELL SEAS?",
    answer:
      "RELL SEAS is developed by RELL Games, the Roblox studio behind Shindo Life (formerly Shinobi Life 2).",
  },
  {
    question: "Is RELL SEAS playable yet?",
    answer:
      "No. The Roblox experience is private while RELL Games runs Wave 1 testing, which is why the game page shows 'Experience currently unavailable'. No release date has been announced.",
  },
  {
    question: "Do you have a RELL SEAS fruit tier list or island map?",
    answer:
      "No, and neither does anyone else with a source. Fruits, islands, stats and bosses have not been revealed, so our tier list, fruits and map pages stay empty until the game is playable. Rankings published before launch are guesswork.",
  },
];

// Removed: previously contained invented code-redemption steps for a code
// system that does not exist. Restored only when the game actually ships one.
export const HOWTO_STEPS: { step: number; name: string; text: string }[] = [];
