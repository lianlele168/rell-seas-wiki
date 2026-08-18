export interface CodeItem {
  code: string;
  rewards: string;
  status: 'active' | 'expired';
  addedDate: string;
}

export interface TierItem {
  name: string;
  tier: 'S+' | 'S' | 'A' | 'B';
  type: 'Logia Fruit' | 'Paramecia Fruit' | 'Zoan Fruit' | 'Haki Ability' | 'Fighting Style';
  description: string;
  stats: string;
}

export const GAME_INFO = {
  title: "RELL SEAS Wiki",
  subtitle: "Official Fan-Made Community Wiki for Roblox RELL SEAS (One Piece RPG)",
  description: "The ultimate community database for RELL SEAS on Roblox. Get active codes, Devil Fruit tier lists, Haki unlock guides, and island navigation maps.",
  url: "https://rellseas.robloxwikihub.com",
  stats: [
    { label: "Developer", value: "RELL Games (Shindo Life Creators)" },
    { label: "Platform", value: "Roblox (PC, Mobile, Console)" },
    { label: "Genre", value: "Open-World Anime RPG" },
    { label: "Anticipation", value: "1.2M+ YouTube Views" },
    { label: "Max Level", value: "Level 1000 (First Sea)" },
    { label: "Fruit Types", value: "Logia, Paramecia, Mythical Zoan" }
  ]
};

export const ACTIVE_CODES: CodeItem[] = [
  {
    code: "RELL_SEAS_RELEASE_SOON",
    rewards: "100 Devil Fruit Spins, 50 Beli Boosts, 2 Hours Double EXP",
    status: "active",
    addedDate: "2026-08-18"
  },
  {
    code: "SHINDO_TO_RELLSEAS",
    rewards: "50 Race Rerolls, 25 Stat Resets, 10,000 Beli",
    status: "active",
    addedDate: "2026-08-15"
  },
  {
    code: "FIRST_SEA_EXPLORER",
    rewards: "30 Devil Fruit Spins, Boat Speed Boost",
    status: "active",
    addedDate: "2026-08-10"
  },
  {
    code: "CONQUEROR_HAKI_BOOST",
    rewards: "15 Clan Spins, 5,000 Beli",
    status: "active",
    addedDate: "2026-08-01"
  }
];

export const EXPIRED_CODES: CodeItem[] = [
  {
    code: "BETA_TEST_RELL_2025",
    rewards: "20 Spins",
    status: "expired",
    addedDate: "2025-12-01"
  }
];

export const TIER_LIST: TierItem[] = [
  {
    name: "Mochi-Mochi Fruit (Special Paramecia)",
    tier: "S+",
    type: "Paramecia Fruit",
    description: "Awakened dough manipulation with future-sight Kenbunshoku Haki synergy. High burst combos and infinite stuns.",
    stats: "DPS: 99/100 | Mobility: S+ | Range: AoE"
  },
  {
    name: "Magu-Magu Fruit (Magma)",
    tier: "S+",
    type: "Logia Fruit",
    description: "Highest elemental DPS in the game. Intangibility passive negates physical attacks without Haki.",
    stats: "DPS: 100/100 | Defense: Intangible | Raid: S+"
  },
  {
    name: "Uo-Uo no Mi: Model Seiryu (Dragon)",
    tier: "S+",
    type: "Zoan Fruit",
    description: "Full Mythical Dragon transformation. Unmatched HP pool, Blast Breath AoE, and flight mobility.",
    stats: "DPS: 97/100 | Defense: 100/100 | Boss Raid: S+"
  },
  {
    name: "Pika-Pika Fruit (Light)",
    tier: "S",
    type: "Logia Fruit",
    description: "Extreme flight speed and light-speed laser beams. Excellent for fast sea travel and farming.",
    stats: "DPS: 92/100 | Speed: 100/100 | Farming: S"
  },
  {
    name: "Gura-Gura Fruit (Tremor)",
    tier: "S",
    type: "Paramecia Fruit",
    description: "Devastating sea-quake waves capable of destroying enemy pirate ships from extreme range.",
    stats: "DPS: 95/100 | Ship PvP: S+ | Range: S"
  },
  {
    name: "Conqueror's Haki (Haoshoku)",
    tier: "S",
    type: "Haki Ability",
    description: "Unleash supreme willpower to knock out low-level NPCs instantly and stun enemy players.",
    stats: "Stun: 100/100 | Cooldown: 45s | Radius: Massive"
  },
  {
    name: "Black Leg Style (Diable Jambe)",
    tier: "A",
    type: "Fighting Style",
    description: "Fire-infused kick combos with aerial sky-walk jumps. Ideal for Fruitless builds.",
    stats: "DPS: 86/100 | Air Mobility: A+ | Combo: A"
  }
];

export const START_CARDS = [
  {
    number: "1",
    title: "Beginner Guide & Quest Line",
    description: "Learn how to leave Fousha Island, complete Starter Quests, and gain your first boat."
  },
  {
    number: "2",
    title: "Devil Fruit Spawning & Tier List",
    description: "Understand Fruit spawn timer (every 1 hour under trees) and rank the strongest Logia & Zoan fruits."
  },
  {
    number: "3",
    title: "Haki Unlock Walkthrough",
    description: "How to unlock Busoshoku (Armament), Kenbunshoku (Observation), and Haoshoku (Conqueror's) Haki."
  },
  {
    number: "4",
    title: "Ship Building & Sea Raids",
    description: "Build custom pirate ships, recruit crew members, and defeat Sea Beasts for legendary drops."
  }
];

export const FAQ_ITEMS = [
  {
    question: "How do I redeem codes in RELL SEAS?",
    answer: "Launch RELL SEAS on Roblox, press 'M' to open the main menu, select 'Options / Codes', paste an active code into the text field, and press Redeem."
  },
  {
    question: "Who is the developer of RELL SEAS?",
    answer: "RELL SEAS is developed by RELL Games, the renowned Roblox development studio behind Shindo Life (formerly Shinobi Life 2)."
  },
  {
    question: "How do Devil Fruits work in RELL SEAS?",
    answer: "Devil Fruits grant extraordinary powers (Logia, Paramecia, Zoan) but render you unable to swim in water unless saved by your ship crew."
  }
];

export const HOWTO_STEPS = [
  {
    step: 1,
    name: "Join RELL SEAS",
    text: "Launch Roblox and join the official RELL SEAS game server."
  },
  {
    step: 2,
    name: "Open Game Menu",
    text: "Press 'M' on keyboard or tap the Menu icon in the top left corner."
  },
  {
    step: 3,
    name: "Select Codes",
    text: "Click on Options / Twitter Codes button."
  },
  {
    step: 4,
    name: "Claim Spins & Beli",
    text: "Paste a working code from our list and click Submit to claim free Spins and Beli!"
  }
];
