var BLOCK_FUSION_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108">' +
  '<path d="M0,0 L108,0 L108,108 L0,108Z" fill="#0D1B2A"/>' +
  '<path d="M54,10 C78,10 98,30 98,54 C98,78 78,98 54,98 C30,98 10,78 10,54 C10,30 30,10 54,10Z" fill="#0A1929"/>' +
  '<path d="M54,25 C70,25 83,38 83,54 C83,70 70,83 54,83 C38,83 25,70 25,54 C25,38 38,25 54,25Z" fill="#0D2137"/>' +
  '<path d="M18,0 L18,108" stroke="#FFFFFF" stroke-opacity="0.031" stroke-width="0.5" fill="none"/>' +
  '<path d="M36,0 L36,108" stroke="#FFFFFF" stroke-opacity="0.031" stroke-width="0.5" fill="none"/>' +
  '<path d="M54,0 L54,108" stroke="#FFFFFF" stroke-opacity="0.051" stroke-width="0.5" fill="none"/>' +
  '<path d="M72,0 L72,108" stroke="#FFFFFF" stroke-opacity="0.031" stroke-width="0.5" fill="none"/>' +
  '<path d="M90,0 L90,108" stroke="#FFFFFF" stroke-opacity="0.031" stroke-width="0.5" fill="none"/>' +
  '<path d="M0,18 L108,18" stroke="#FFFFFF" stroke-opacity="0.031" stroke-width="0.5" fill="none"/>' +
  '<path d="M0,36 L108,36" stroke="#FFFFFF" stroke-opacity="0.031" stroke-width="0.5" fill="none"/>' +
  '<path d="M0,54 L108,54" stroke="#FFFFFF" stroke-opacity="0.051" stroke-width="0.5" fill="none"/>' +
  '<path d="M0,72 L108,72" stroke="#FFFFFF" stroke-opacity="0.031" stroke-width="0.5" fill="none"/>' +
  '<path d="M0,90 L108,90" stroke="#FFFFFF" stroke-opacity="0.031" stroke-width="0.5" fill="none"/>' +
  '<circle cx="18" cy="18" r="1.5" fill="#FFD700" fill-opacity="0.051"/>' +
  '<circle cx="90" cy="18" r="1.5" fill="#FFD700" fill-opacity="0.051"/>' +
  '<circle cx="18" cy="90" r="1.5" fill="#FFD700" fill-opacity="0.051"/>' +
  '<circle cx="90" cy="90" r="1.5" fill="#FFD700" fill-opacity="0.051"/>' +
  '<path d="M0,0 L20,0 L0,20Z" fill="#FFD700" fill-opacity="0.031"/>' +
  '<path d="M108,0 L88,0 L108,20Z" fill="#FFD700" fill-opacity="0.031"/>' +
  '<path d="M0,108 L20,108 L0,88Z" fill="#FFD700" fill-opacity="0.031"/>' +
  '<path d="M108,108 L88,108 L108,88Z" fill="#FFD700" fill-opacity="0.031"/>' +
  '<path d="M54,18 C73.88,18 90,34.12 90,54 C90,73.88 73.88,90 54,90 C34.12,90 18,73.88 18,54 C18,34.12 34.12,18 54,18Z" fill="#FFD700" fill-opacity="0.102"/>' +
  '<path d="M54,22 C71.67,22 86,36.33 86,54 C86,71.67 71.67,86 54,86 C36.33,86 22,71.67 22,54 C22,36.33 36.33,22 54,22Z" fill="#FFD700" fill-opacity="0.2"/>' +
  '<path d="M30,29 L78,29 Q83,29 83,34 L83,82 Q83,87 78,87 L30,87 Q25,87 25,82 L25,34 Q25,29 30,29Z" fill="#000000" fill-opacity="0.102"/>' +
  '<path d="M30,27 L78,27 Q82,27 82,31 L82,79 Q82,83 78,83 L30,83 Q26,83 26,79 L26,31 Q26,27 30,27Z" fill="#1A1A2E"/>' +
  '<path d="M30,27 L78,27 Q82,27 82,31 L82,55 L26,55 L26,31 Q26,27 30,27Z" fill="#0D2137"/>' +
  '<path d="M30,27 L78,27 Q82,27 82,31 L82,79 Q82,83 78,83 L30,83 Q26,83 26,79 L26,31 Q26,27 30,27Z" stroke="#FFD700" stroke-opacity="0.2" stroke-width="0.8" fill="none"/>' +
  '<path d="M32,33 L44,33 Q45,33 45,34 L45,46 Q45,47 44,47 L32,47 Q31,47 31,46 L31,34 Q31,33 32,33Z" fill="#00BCD4"/>' +
  '<path d="M32,33 L44,33 Q45,33 45,34 L45,38 L31,38 L31,34 Q31,33 32,33Z" fill="#FFFFFF" fill-opacity="0.149"/>' +
  '<path d="M33.5,35 L42.5,35 Q43,35 43,35.5 L43,44.5 Q43,45 42.5,45 L33.5,45 Q33,45 33,44.5 L33,35.5 Q33,35 33.5,35Z" stroke="#FFFFFF" stroke-opacity="0.102" stroke-width="0.5" fill="none"/>' +
  '<path d="M48,33 L60,33 Q61,33 61,34 L61,46 Q61,47 60,47 L48,47 Q47,47 47,46 L47,34 Q47,33 48,33Z" fill="#FFD700"/>' +
  '<path d="M48,33 L60,33 Q61,33 61,34 L61,38 L47,38 L47,34 Q47,33 48,33Z" fill="#FFFFFF" fill-opacity="0.2"/>' +
  '<path d="M54,35.5 L55.5,38.5 L58.5,39 L56.25,41.2 L56.8,44.3 L54,42.8 L51.2,44.3 L51.75,41.2 L49.5,39 L52.5,38.5Z" fill="#FFF8E1"/>' +
  '<path d="M64,33 L76,33 Q77,33 77,34 L77,46 Q77,47 76,47 L64,47 Q63,47 63,46 L63,34 Q63,33 64,33Z" fill="#9C27B0"/>' +
  '<path d="M64,33 L76,33 Q77,33 77,34 L77,38 L63,38 L63,34 Q63,33 64,33Z" fill="#FFFFFF" fill-opacity="0.149"/>' +
  '<path d="M65.5,35 L74.5,35 Q75,35 75,35.5 L75,44.5 Q75,45 74.5,45 L65.5,45 Q65,45 65,44.5 L65,35.5 Q65,35 65.5,35Z" stroke="#FFFFFF" stroke-opacity="0.102" stroke-width="0.5" fill="none"/>' +
  '<path d="M32,50 L44,50 Q45,50 45,51 L45,63 Q45,64 44,64 L32,64 Q31,64 31,63 L31,51 Q31,50 32,50Z" fill="#FF9800"/>' +
  '<path d="M32,50 L44,50 Q45,50 45,51 L45,55 L31,55 L31,51 Q31,50 32,50Z" fill="#FFFFFF" fill-opacity="0.149"/>' +
  '<path d="M33.5,52 L42.5,52 Q43,52 43,52.5 L43,61.5 Q43,62 42.5,62 L33.5,62 Q33,62 33,61.5 L33,52.5 Q33,52 33.5,52Z" stroke="#FFFFFF" stroke-opacity="0.102" stroke-width="0.5" fill="none"/>' +
  '<path d="M48,50 L60,50 Q61,50 61,51 L61,63 Q61,64 60,64 L48,64 Q47,64 47,63 L47,51 Q47,50 48,50Z" fill="#FFFFFF"/>' +
  '<path d="M50,52 L58,52 Q59,52 59,53 L59,61 Q59,62 58,62 L50,62 Q49,62 49,61 L49,53 Q49,52 50,52Z" fill="#FFD700"/>' +
  '<path d="M55.5,53 L52,57.5 L54.5,57.5 L52.5,61 L57,56.5 L54.5,56.5Z" fill="#1A1A2E"/>' +
  '<path d="M64,50 L76,50 Q77,50 77,51 L77,63 Q77,64 76,64 L64,64 Q63,64 63,63 L63,51 Q63,50 64,50Z" fill="#4CAF50"/>' +
  '<path d="M64,50 L76,50 Q77,50 77,51 L77,55 L63,55 L63,51 Q63,50 64,50Z" fill="#FFFFFF" fill-opacity="0.149"/>' +
  '<path d="M65.5,52 L74.5,52 Q75,52 75,52.5 L75,61.5 Q75,62 74.5,62 L65.5,62 Q65,62 65,61.5 L65,52.5 Q65,52 65.5,52Z" stroke="#FFFFFF" stroke-opacity="0.102" stroke-width="0.5" fill="none"/>' +
  '<path d="M32,67 L44,67 Q45,67 45,68 L45,80 Q45,81 44,81 L32,81 Q31,81 31,80 L31,68 Q31,67 32,67Z" fill="#2196F3"/>' +
  '<path d="M32,67 L44,67 Q45,67 45,68 L45,72 L31,72 L31,68 Q31,67 32,67Z" fill="#FFFFFF" fill-opacity="0.149"/>' +
  '<path d="M33.5,69 L42.5,69 Q43,69 43,69.5 L43,78.5 Q43,79 42.5,79 L33.5,79 Q33,79 33,78.5 L33,69.5 Q33,69 33.5,69Z" stroke="#FFFFFF" stroke-opacity="0.102" stroke-width="0.5" fill="none"/>' +
  '<path d="M48,67 L60,67 Q61,67 61,68 L61,80 Q61,81 60,81 L48,81 Q47,81 47,80 L47,68 Q47,67 48,67Z" fill="#F44336"/>' +
  '<path d="M48,67 L60,67 Q61,67 61,68 L61,72 L47,72 L47,68 Q47,67 48,67Z" fill="#FFFFFF" fill-opacity="0.149"/>' +
  '<path d="M49.5,69 L58.5,69 Q59,69 59,69.5 L59,78.5 Q59,79 58.5,79 L49.5,79 Q49,79 49,78.5 L49,69.5 Q49,69 49.5,69Z" stroke="#FFFFFF" stroke-opacity="0.102" stroke-width="0.5" fill="none"/>' +
  '<path d="M64,67 L76,67 Q77,67 77,68 L77,80 Q77,81 76,81 L64,81 Q63,81 63,80 L63,68 Q63,67 64,67Z" fill="#E91E63"/>' +
  '<path d="M64,67 L76,67 Q77,67 77,68 L77,72 L63,72 L63,68 Q63,67 64,67Z" fill="#FFFFFF" fill-opacity="0.149"/>' +
  '<path d="M65.5,69 L74.5,69 Q75,69 75,69.5 L75,78.5 Q75,79 74.5,79 L65.5,79 Q65,79 65,78.5 L65,69.5 Q65,69 65.5,69Z" stroke="#FFFFFF" stroke-opacity="0.102" stroke-width="0.5" fill="none"/>' +
  '<line x1="45" y1="40" x2="47" y2="40" stroke="#FFD700" stroke-opacity="0.502" stroke-width="1.5" stroke-linecap="round"/>' +
  '<line x1="61" y1="40" x2="63" y2="40" stroke="#FFD700" stroke-opacity="0.502" stroke-width="1.5" stroke-linecap="round"/>' +
  '<line x1="45" y1="57" x2="47" y2="57" stroke="#FFD700" stroke-opacity="0.702" stroke-width="2" stroke-linecap="round"/>' +
  '<line x1="61" y1="57" x2="63" y2="57" stroke="#FFD700" stroke-opacity="0.702" stroke-width="2" stroke-linecap="round"/>' +
  '<line x1="45" y1="74" x2="47" y2="74" stroke="#FFD700" stroke-opacity="0.502" stroke-width="1.5" stroke-linecap="round"/>' +
  '<line x1="61" y1="74" x2="63" y2="74" stroke="#FFD700" stroke-opacity="0.502" stroke-width="1.5" stroke-linecap="round"/>' +
  '<line x1="38" y1="47" x2="38" y2="50" stroke="#FFD700" stroke-opacity="0.502" stroke-width="1.5" stroke-linecap="round"/>' +
  '<line x1="54" y1="47" x2="54" y2="50" stroke="#FFD700" stroke-opacity="0.702" stroke-width="2" stroke-linecap="round"/>' +
  '<line x1="70" y1="47" x2="70" y2="50" stroke="#FFD700" stroke-opacity="0.502" stroke-width="1.5" stroke-linecap="round"/>' +
  '<line x1="38" y1="64" x2="38" y2="67" stroke="#FFD700" stroke-opacity="0.502" stroke-width="1.5" stroke-linecap="round"/>' +
  '<line x1="54" y1="64" x2="54" y2="67" stroke="#FFD700" stroke-opacity="0.702" stroke-width="2" stroke-linecap="round"/>' +
  '<line x1="70" y1="64" x2="70" y2="67" stroke="#FFD700" stroke-opacity="0.502" stroke-width="1.5" stroke-linecap="round"/>' +
  '<path d="M24,30 L25,28 L26,30 L28,31 L26,32 L25,34 L24,32 L22,31Z" fill="#FFD700"/>' +
  '<path d="M82,28 L83,26 L84,28 L86,29 L84,30 L83,32 L82,30 L80,29Z" fill="#FFD700"/>' +
  '<path d="M23,72 L23.8,70.5 L24.6,72 L26,72.8 L24.6,73.6 L23.8,75 L23,73.6 L21.5,72.8Z" fill="#FFD700" fill-opacity="0.502"/>' +
  '<path d="M84,75 L84.8,73.5 L85.6,75 L87,75.8 L85.6,76.6 L84.8,78 L84,76.6 L82.5,75.8Z" fill="#FFD700" fill-opacity="0.502"/>' +
  '<path d="M54,22 L54.5,21 L55,22 L56,22.5 L55,23 L54.5,24 L54,23 L53,22.5Z" fill="#FFD700" fill-opacity="0.702"/>' +
  '</svg>';

var GAMES = [
    {
        id: 1,
        title: "Blitz Storm Arena",
        category: "action",
        badge: "featured",
        icon: "\u26A1",
        iconType: "emoji",
        gradient: "linear-gradient(135deg, #1a1a4e, #0d47a1)",
        iconBg: "linear-gradient(135deg, #00b0ff, #7b2fff)",
        rating: 4.9,
        shortDesc: "Intense multiplayer battle arena with electrifying combat and power-ups.",
        fullDesc: "Step into the ultimate battle arena where lightning-fast reflexes meet strategic gameplay. Fight through waves of enemies, unlock powerful abilities, and dominate the leaderboard.",
        features: ["Real-time PvP Battles", "20+ Unique Characters", "Ranked Matchmaking", "Daily Challenges", "Epic Power-ups", "Global Leaderboards"],
        playStoreUrl: "#"
    },

    {
        id: 2,
        title: "Block Fusion",
        category: "puzzle",
        badge: "popular",
        icon: BLOCK_FUSION_SVG,
        iconType: "svg",
        gradient: "linear-gradient(135deg, #0D1B2A, #1A1A2E)",
        iconBg: "linear-gradient(135deg, #FFD700, #FF9800)",
        rating: 4.7,
        shortDesc: "Merge, match & fuse blocks in this addictive puzzle game with 5 modes, daily challenges, shop & leaderboards.",
        fullDesc: "Block Fusion is a sleek, addictive puzzle game where you drag, drop & fuse matching blocks to reach higher numbers, clear the board, and chase your ultimate high score.\n\n🎮 CORE GAMEPLAY\nDrag, drop & fuse matching blocks to score big. Merge blocks to reach higher numbers and combos. Strategic placement with satisfying chain reactions. Clean grid-based puzzle mechanics. One-hand portrait mode gameplay.\n\n🕹️ 5 GAME MODES\n▶️ Classic Mode — Progress through increasingly challenging levels\n♾️ Endless Mode — No limits, play until the board fills up\n⏱️ Time Attack — Race against the clock for maximum score\n🧘 Zen Mode — No pressure, no timer, pure relaxation\n📅 Daily Challenge — New puzzle every day with streak rewards\n\n🏆 PROGRESSION & REWARDS\n🪙 Earn Coins through gameplay and challenges\n💎 Collect Gems as premium currency\n🔥 Build Daily Streaks for bonus rewards\n⭐ Unlock hundreds of levels across multiple worlds\n📈 Track personal statistics and high scores\n\n🛍️ SHOP & CUSTOMIZATION\n🎨 Unlock unique themes to personalize your board\n🧰 Purchase power-ups and boosters with earned currency\n💰 All items earnable through gameplay — no paywall\n🛒 In-game shop with coins and gems economy\n\n🏅 COMPETITIVE FEATURES\n🏆 Achievements system — Unlock milestones and badges\n🥇 Global Leaderboards — Compete with players worldwide\n👤 Player Profiles — Track your journey and stats\n📊 Detailed Statistics — Games played, scores, streaks & more\n\n🎨 DESIGN & EXPERIENCE\n🌙 Beautiful dark-themed UI design\n✨ Smooth animations and visual effects\n📳 Haptic feedback for satisfying block fusions\n🎵 Background music with media playback support\n🔊 Customizable sound & vibration settings\n🖥️ Hardware-accelerated graphics rendering",
        features: [
            "5 Game Modes (Classic, Endless, Time Attack, Zen, Daily)",
            "500+ Puzzle Levels",
            "Daily Challenges & Streak Rewards",
            "Coins, Gems & In-Game Shop",
            "8 Unlockable Themes",
            "Power-ups: Bomb, Shuffle, Upgrade, Undo",
            "18 Achievements & Badges",
            "Global Leaderboards",
            "Player Profile & Statistics",
            "Chain Reaction Combos",
            "Haptic Feedback & Sound Effects",
            "Offline Play & Cloud Save"
        ],
        playStoreUrl: "#",
        detailPageUrl: "pages/block-fusion.html"
    }
    ,
    {
        id: 3,
        title: "Crystal Cascade",
        category: "puzzle",
        badge: "new",
        icon: "\ud83d\udc8e",
        iconType: "emoji",
        gradient: "linear-gradient(135deg, #1a0033, #4a148c)",
        iconBg: "linear-gradient(135deg, #e040fb, #7c4dff)",
        rating: 4.8,
        shortDesc: "Match and cascade glowing crystals through enchanted gem-filled worlds.",
        fullDesc: "Embark on a magical journey through crystalline realms. Match glowing gems, trigger spectacular cascades, and unlock mystical powers with stunning visual effects.",
        features: ["300+ Magical Levels", "Stunning VFX", "Boss Crystal Battles", "Collection System", "Weekly Events", "Cloud Save"],
        playStoreUrl: "#"
    },
    {
        id: 4,
        title: "Disc Strike Arena",
        category: "action",
        badge: "popular",
        icon: "\ud83e\udd4f",
        iconType: "emoji",
        gradient: "linear-gradient(135deg, #1b3a1b, #1b5e20)",
        iconBg: "linear-gradient(135deg, #00e676, #00b0ff)",
        rating: 4.6,
        shortDesc: "Fast-paced disc throwing combat in neon-lit futuristic arenas.",
        fullDesc: "Master disc combat in futuristic neon arenas. Curve throws, bounce discs off walls, and outsmart opponents in this physics-based action game.",
        features: ["Physics-based Combat", "Neon Arenas", "Trick Shots System", "1v1 & 2v2 Modes", "Custom Discs", "Replay System"],
        playStoreUrl: "#"
    },
    {
        id: 5,
        title: "LudoQuest",
        category: "board",
        badge: "popular",
        icon: "\ud83c\udfb2",
        iconType: "emoji",
        gradient: "linear-gradient(135deg, #3e1a00, #bf360c)",
        iconBg: "linear-gradient(135deg, #ff9100, #ff3d00)",
        rating: 4.8,
        shortDesc: "The classic board game reimagined with quests, powers, and online play.",
        fullDesc: "LudoQuest supercharges the beloved classic with RPG quests, special dice powers, and seamless online multiplayer. Play with friends or match worldwide.",
        features: ["Online Multiplayer", "Quest Mode", "Special Dice Powers", "Voice Chat", "Tournaments", "Custom Boards"],
        playStoreUrl: "#"
    },
    {
        id: 6,
        title: "Mystic Runner",
        category: "action",
        badge: "featured",
        icon: "\ud83c\udfc3",
        iconType: "emoji",
        gradient: "linear-gradient(135deg, #0d1b2a, #1b3a5c)",
        iconBg: "linear-gradient(135deg, #18ffff, #00e5ff)",
        rating: 4.7,
        shortDesc: "Endless runner through mystical lands with magical abilities and obstacles.",
        fullDesc: "Run through enchanted forests, ancient temples, and mystical realms. Dodge obstacles, collect artifacts, and use supernatural powers to survive.",
        features: ["Infinite Procedural Levels", "6 Mystical Worlds", "Power-up Magic", "Daily Runs", "Pet Companions", "Achievement System"],
        playStoreUrl: "#"
    },
    {
        id: 7,
        title: "Phantom Strike",
        category: "action",
        badge: "new",
        icon: "\ud83d\udc7b",
        iconType: "emoji",
        gradient: "linear-gradient(135deg, #1a1a2e, #16213e)",
        iconBg: "linear-gradient(135deg, #7b2fff, #e040fb)",
        rating: 4.9,
        shortDesc: "Stealth action game where you become the ultimate shadow warrior.",
        fullDesc: "Become the Phantom. Sneak through guarded fortresses, eliminate targets with precision, and vanish without a trace. Pure stealth action perfection.",
        features: ["30 Stealth Missions", "Shadow Abilities", "Stealth Ranking", "Multiple Endings", "Weapon Arsenal", "New Game Plus"],
        playStoreUrl: "#"
    },
    {
        id: 8,
        title: "Precision Shot",
        category: "arcade",
        badge: "popular",
        icon: "\ud83c\udfaf",
        iconType: "emoji",
        gradient: "linear-gradient(135deg, #1a0000, #b71c1c)",
        iconBg: "linear-gradient(135deg, #ff1744, #ff9100)",
        rating: 4.5,
        shortDesc: "Test your aim in this challenging precision shooting arcade game.",
        fullDesc: "How precise is your aim? Challenge yourself with difficult targets, moving obstacles, and trick shots. Compete globally for the highest accuracy.",
        features: ["100+ Target Challenges", "Trick Shot Modes", "Global Accuracy Board", "Slow Motion Replays", "Custom Crosshairs", "Weekly Tournaments"],
        playStoreUrl: "#"
    },
    {
        id: 9,
        title: "Roll Master Quest",
        category: "board",
        badge: "new",
        icon: "\ud83c\udfb0",
        iconType: "emoji",
        gradient: "linear-gradient(135deg, #1a1a00, #827717)",
        iconBg: "linear-gradient(135deg, #ffd600, #ff6d00)",
        rating: 4.6,
        shortDesc: "Roll dice through epic quest boards with RPG-style progression.",
        fullDesc: "Roll Master Quest combines dice rolling with RPG adventure. Travel across quest boards, fight monsters, collect loot, and level up your character.",
        features: ["RPG Progression", "50+ Quest Boards", "Monster Battles", "Loot Collection", "Character Classes", "Co-op Mode"],
        playStoreUrl: "#"
    },
    {
        id: 10,
        title: "Royal Dice Empire",
        category: "board",
        badge: "featured",
        icon: "\ud83d\udc51",
        iconType: "emoji",
        gradient: "linear-gradient(135deg, #1a0a2e, #4a148c)",
        iconBg: "linear-gradient(135deg, #ffd700, #ff6f00)",
        rating: 4.8,
        shortDesc: "Build your empire one dice roll at a time in this strategy board game.",
        fullDesc: "Rule the realm with dice! Build cities, raise armies, forge alliances, and conquer territories where every roll shapes your empire destiny.",
        features: ["Empire Building", "Strategic Dice Combat", "Alliance System", "World Conquest Map", "Royal Court", "Seasonal Events"],
        playStoreUrl: "#"
    },
    {
        id: 11,
        title: "Serpent Surge",
        category: "arcade",
        badge: "new",
        icon: "\ud83d\udc0d",
        iconType: "emoji",
        gradient: "linear-gradient(135deg, #003300, #1b5e20)",
        iconBg: "linear-gradient(135deg, #00e676, #76ff03)",
        rating: 4.4,
        shortDesc: "Modern twist on the classic snake game with surge powers and neon arenas.",
        fullDesc: "The classic snake reborn! Surge through neon grids, activate power-ups, battle other serpents, and grow to dominate the arena.",
        features: ["Neon Grid Arenas", "Surge Power-ups", "Battle Royale Mode", "Skin Customization", "Speed Challenges", "Retro & Modern Modes"],
        playStoreUrl: "#"
    },
    {
        id: 12,
        title: "Turbo Trail Racer",
        category: "racing",
        badge: "featured",
        icon: "\ud83c\udfce\ufe0f",
        iconType: "emoji",
        gradient: "linear-gradient(135deg, #1a0000, #c62828)",
        iconBg: "linear-gradient(135deg, #ff1744, #f50057)",
        rating: 4.7,
        shortDesc: "Blazing fast racing through stunning trails with turbo boost mechanics.",
        fullDesc: "Feel the speed! Race through mountain trails, neon cities, and desert canyons. Master turbo boosts, drift through hairpin turns, and leave rivals in dust.",
        features: ["20+ Racing Tracks", "Turbo Boost System", "Car Customization", "Multiplayer Racing", "Career Mode", "Drift Challenges"],
        playStoreUrl: "#"
    }
];