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

export const GAME_INFO = {
  title: "RELL SEAS Wiki",
  subtitle: "Official Interactive Guide & Tools Hub for Roblox RELL SEAS",
  description: "The ultimate interactive database for RELL SEAS on Roblox. Spin the Fruit Gacha Simulator, calculate stats in the Build Planner, browse Devil Fruit skills, and explore the Sea Map.",
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

export const TIER_LIST: TierItem[] = [
  {
    name: "Mochi-Mochi Fruit (Dough)",
    type: "Special Paramecia",
    tier: "S+",
    description: "God Tier fruit with sticky dough traps, peerless barrage combos, and water roll flight.",
    stats: "DPS: 99/100 | Defense: 92/100 | Mobility: 95/100"
  },
  {
    name: "Uo-Uo: Model Seiryu (Azure Dragon)",
    type: "Mythical Zoan",
    tier: "S+",
    description: "Highest HP multiplier, dragon flight, and island-wiping blast breath.",
    stats: "DPS: 97/100 | Defense: 100/100 | Mobility: 98/100"
  },
  {
    name: "Magu-Magu Fruit (Magma)",
    type: "Logia",
    tier: "S",
    description: "Highest raw damage output for Boss Raids with molten meteor rain.",
    stats: "DPS: 100/100 | Defense: 95/100 | Mobility: 88/100"
  },
  {
    name: "Conqueror's Haki (Haoshoku)",
    type: "Willpower Ability",
    tier: "S+",
    description: "Knocks out weak enemies automatically and stuns bosses during combos.",
    stats: "Stun Duration: 3.5s | AoE Radius: 50m"
  },
  {
    name: "Pika-Pika Fruit (Light)",
    type: "Logia",
    tier: "S",
    description: "Fastest travel fruit across First Sea, ideal for rapid questing and farming.",
    stats: "DPS: 92/100 | Defense: 85/100 | Mobility: 100/100"
  },
  {
    name: "Gura-Gura Fruit (Tremor)",
    type: "Paramecia",
    tier: "A",
    description: "Cracks air for ship-sinking sea tsunamis and heavy shockwave AoE.",
    stats: "DPS: 95/100 | Defense: 88/100 | Mobility: 75/100"
  }
];

export const DEVIL_FRUITS: FruitData[] = [
  {
    id: "mochi",
    name: "Mochi-Mochi Fruit",
    type: "Paramecia",
    rarity: "Mythical",
    dropRate: "0.5%",
    image: "/fruit-gacha.png",
    description: "Awakened Special Paramecia. Transform into sticky dough to dodge attacks, trap enemies, and unleash rapid barrage kicks.",
    skills: [
      { key: "Z", name: "Willow Mochi", mastery: 1, description: "Slams a giant spike dough hammer onto target area." },
      { key: "X", name: "Mochi Anvil", mastery: 50, description: "Drops heavy dough anvils from sky, crushing all opponents." },
      { key: "C", name: "Chestnut Mochi", mastery: 120, description: "Spawns sharp dough spikes along the ground causing bleed." },
      { key: "V", name: "Peerless Dough Barrage", mastery: 250, description: "Summons multiple dough arms delivering 100+ rapid punches." },
      { key: "F", name: "Dough Roll Flight", mastery: 30, description: "Morphs into a wheel of dough to roll across land and water." }
    ],
    dps: 99,
    defense: 92,
    mobility: 95
  },
  {
    id: "magma",
    name: "Magu-Magu Fruit (Magma)",
    type: "Logia",
    rarity: "Legendary",
    dropRate: "1.5%",
    image: "/fruit-gacha.png",
    description: "Highest offensive DPS Logia fruit. Intangible body nullifies physical hits without Armament Haki.",
    skills: [
      { key: "Z", name: "Magma Fist", mastery: 1, description: "Launches a giant volcanic fist that explodes on contact." },
      { key: "X", name: "Magma Hound", mastery: 40, description: "Fires a ravenous magma dog that tracks nearby targets." },
      { key: "C", name: "Volcanic Eruption", mastery: 100, description: "Causes volcanic magma pools to erupt under surrounding enemies." },
      { key: "V", name: "Great Eruption Rain", mastery: 200, description: "Rains down hundreds of molten meteors in a massive area." },
      { key: "F", name: "Magma Ride", mastery: 25, description: "Surfs across sea on a wave of lava." }
    ],
    dps: 100,
    defense: 95,
    mobility: 88
  },
  {
    id: "dragon",
    name: "Uo-Uo no Mi: Model Seiryu (Dragon)",
    type: "Zoan",
    rarity: "Mythical",
    dropRate: "0.5%",
    image: "/fruit-gacha.png",
    description: "Transform into a legendary Azure Dragon with massive HP boosts, flight, and destructive elemental breaths.",
    skills: [
      { key: "Z", name: "Blast Breath", mastery: 1, description: "Unleashes a beam of pure fiery plasma across the battlefield." },
      { key: "X", name: "Demolition Gust", mastery: 60, description: "Fires sharp air-blade wind slashes." },
      { key: "C", name: "Tatsumaki Wind Sythe", mastery: 150, description: "Summons giant tornadoes throwing enemies into the air." },
      { key: "V", name: "Full Dragon Transformation", mastery: 300, description: "Transform into full Dragon form with 2x defense." },
      { key: "F", name: "Flame Cloud Flight", mastery: 20, description: "Creates clouds under feet to fly freely in the sky." }
    ],
    dps: 97,
    defense: 100,
    mobility: 98
  },
  {
    id: "pika",
    name: "Pika-Pika Fruit (Light)",
    type: "Logia",
    rarity: "Rare",
    dropRate: "5.0%",
    image: "/fruit-gacha.png",
    description: "Light-speed mobility and explosive photon beams. Excellent for fast sea travel and farming.",
    skills: [
      { key: "Z", name: "Light Ray Kick", mastery: 1, description: "Teleports to enemy at light speed and delivers an explosive kick." },
      { key: "X", name: "Jewels of Yata", mastery: 45, description: "Fires a stream of light arrows at target location." },
      { key: "C", name: "Light Sword Slash", mastery: 110, description: "Creates a sword of light for melee slashing combos." },
      { key: "V", name: "Sacred Light Shower", mastery: 180, description: "Blinds surrounding targets and deals continuous AoE DPS." },
      { key: "F", name: "Light Speed Flight", mastery: 15, description: "Fastest flight speed in the entire game." }
    ],
    dps: 92,
    defense: 85,
    mobility: 100
  },
  {
    id: "gura",
    name: "Gura-Gura Fruit (Tremor)",
    type: "Paramecia",
    rarity: "Legendary",
    dropRate: "2.0%",
    image: "/fruit-gacha.png",
    description: "Cracks atmosphere to unleash devastating shockwaves capable of capsizing enemy pirate ships.",
    skills: [
      { key: "Z", name: "Quake Punch", mastery: 1, description: "Shatters air with a heavy punch creating forward shockwaves." },
      { key: "X", name: "Sea Tsunami", mastery: 70, description: "Summons giant sea waves that crash onto enemy boats." },
      { key: "C", name: "Island Shaker", mastery: 140, description: "Grasps air and tilts the island causing AoE stuns." },
      { key: "V", name: "Heaven & Earth Quake", mastery: 240, description: "Massive shockwave dome dealing supreme damage." }
    ],
    dps: 95,
    defense: 88,
    mobility: 75
  }
];

export const ISLANDS: IslandData[] = [
  {
    name: "Fousha Starter Village",
    levelRange: "Lv. 1 - 50",
    description: "Starting island for all new pirates and marines. Quest givers teach basic combat and boat controls.",
    boss: "Bandit Leader Higuma",
    bossDrops: ["Bandit Cape (+5% EXP)", "Basic Cutlass", "500 Beli"],
    features: ["Starter Boat Dealer", "Fruit Spawner Tree #1", "Quest Board"]
  },
  {
    name: "Shells Town Base",
    levelRange: "Lv. 51 - 150",
    description: "Heavily fortified Marine stronghold ruled by Captain Morgan. Beware of sniper towers.",
    boss: "Axe-Hand Morgan",
    bossDrops: ["Iron Axe Weapon", "Marine Officer Coat", "1,500 Beli"],
    features: ["Blacksmith Armor Shop", "Melee Trainer", "Quest Board"]
  },
  {
    name: "Baratie Sea Restaurant",
    levelRange: "Lv. 151 - 300",
    description: "Floating ocean restaurant located in the middle of the sea. Great spot for Black Leg kick style combat.",
    boss: "Don Krieg",
    bossDrops: ["MH5 Gas Bomb", "Wootz Steel Armor", "5,000 Beli"],
    features: ["Black Leg Style Fighting Coach", "Food Stamina Merchant", "Ship Repairs"]
  },
  {
    name: "Arlong Park Cove",
    levelRange: "Lv. 301 - 500",
    description: "Tropical island ruled by Fishman pirates. Water surrounding the island is extremely dangerous.",
    boss: "Saw-Tooth Arlong",
    bossDrops: ["Kiribachi Greatsword", "Arlong Shirt (+10% Water Defense)", "12,000 Beli"],
    features: ["Fishman Karate Trainer", "Rare Fruit Spawner", "High-Level Quests"]
  },
  {
    name: "Skypiea Cloud Realm",
    levelRange: "Lv. 501 - 1000",
    description: "Mystical floating sky islands reachable only by the Knock Up Stream. Home to God Enel.",
    boss: "God Enel",
    bossDrops: ["Nonosama Bo Staff", "Lightning Drum Cape", "Goro-Goro Fruit (0.1% Drop)"],
    features: ["Kenbunshoku Haki Master", "Dial Crafting Station", "Endgame Raid Portal"]
  }
];

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
