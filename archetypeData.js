// Metaphor: ReFantazio Archetype Requirements Data
// Based on the official RPGsite archetype guide
// Source: https://www.rpgsite.net/guide/16409-metaphor-refantazio-archetypes-guide-unlock-all-46-archetype-job-classes-skills

const archetypeData = {
    // SEEKER LINEAGE TREE
    "seeker": {
        id: "seeker",
        name: "Seeker",
        type: "base",
        lineage: "Seeker",
        unlock: "Automatically unlocked through main story on 6/5",
        unlocks: ["magic_seeker"],
        requires: [],
        level: 1,
        color: "#8b5cf6"
    },
    "magic_seeker": {
        id: "magic_seeker",
        name: "Magic Seeker", 
        type: "advanced",
        lineage: "Seeker",
        unlock: "Complete Quest - More's Task Chapter One: Ordeal + Seeker Rank 20",
        unlocks: ["soul_hacker"],
        requires: ["seeker"],
        level: 20,
        color: "#8b5cf6"
    },
    "soul_hacker": {
        id: "soul_hacker",
        name: "Soul Hacker",
        type: "elite",
        lineage: "Seeker", 
        unlock: "Complete Quest - More's Task Chapter Five: Resolve + Magic Seeker Rank 20",
        unlocks: [],
        requires: ["magic_seeker"],
        level: 20,
        color: "#8b5cf6"
    },

    // WARRIOR LINEAGE TREE
    "warrior": {
        id: "warrior",
        name: "Warrior",
        type: "base",
        lineage: "Warrior",
        unlock: "Automatically unlocked through main story on 6/6",
        unlocks: ["swordmaster"],
        requires: [],
        level: 1,
        color: "#f59e0b"
    },
    "swordmaster": {
        id: "swordmaster",
        name: "Swordmaster",
        type: "advanced",
        lineage: "Warrior",
        unlock: "Reach Strohl Follower Rank 3 + Warrior Rank 20",
        unlocks: ["samurai"],
        requires: ["warrior"],
        level: 20,
        color: "#f59e0b"
    },
    "samurai": {
        id: "samurai",
        name: "Samurai",
        type: "elite",
        lineage: "Warrior",
        unlock: "Reach Strohl Follower Rank 7 + Swordmaster Rank 20 + General Rank 10",
        unlocks: ["royal_warrior"],
        requires: ["swordmaster", "general"],
        level: 20,
        color: "#f59e0b"
    },

    // MAGE LINEAGE TREE
    "mage": {
        id: "mage",
        name: "Mage",
        type: "base",
        lineage: "Mage",
        unlock: "Automatically unlocked through main story on 6/6",
        unlocks: ["wizard"],
        requires: [],
        level: 1,
        color: "#ef4444"
    },
    "wizard": {
        id: "wizard",
        name: "Wizard",
        type: "advanced",
        lineage: "Mage",
        unlock: "Automatically unlocked through main story",
        unlocks: ["elemental_master", "warlock"],
        requires: ["mage"],
        level: 15,
        color: "#ef4444"
    },
    "elemental_master": {
        id: "elemental_master",
        name: "Elemental Master",
        type: "elite",
        lineage: "Mage",
        unlock: "Automatically unlocked through main story + Wizard Rank 20",
        unlocks: ["royal_knight"],
        requires: ["wizard"],
        level: 20,
        color: "#ef4444"
    },
    "warlock": {
        id: "warlock", 
        name: "Warlock",
        type: "elite",
        lineage: "Mage",
        unlock: "Automatically unlocked through main story + Wizard Rank 20 + Assassin Rank 10",
        unlocks: [],
        requires: ["wizard", "assassin"],
        level: 20,
        color: "#ef4444"
    },

    // HEALER LINEAGE TREE
    "healer": {
        id: "healer",
        name: "Healer",
        type: "base",
        lineage: "Healer",
        unlock: "Automatically unlocked through main story on 6/10",
        unlocks: ["cleric"],
        requires: [],
        level: 1,
        color: "#f97316"
    },
    "cleric": {
        id: "cleric",
        name: "Cleric",
        type: "advanced",
        lineage: "Healer",
        unlock: "Reach Maria Follower Rank 3 + Healer Rank 20",
        unlocks: ["saviour"],
        requires: ["healer"],
        level: 20,
        color: "#f97316"
    },
    "saviour": {
        id: "saviour",
        name: "Saviour",
        type: "elite",
        lineage: "Healer",
        unlock: "Reach Maria Follower Rank 8 + Cleric Rank 20",
        unlocks: [],
        requires: ["cleric"],
        level: 20,
        color: "#f97316"
    },

    // KNIGHT LINEAGE TREE
    "knight": {
        id: "knight",
        name: "Knight",
        type: "base",
        lineage: "Knight",
        unlock: "Automatically unlocked through main story on 6/11",
        unlocks: ["magic_knight"],
        requires: [],
        level: 1,
        color: "#06b6d4"
    },
    "magic_knight": {
        id: "magic_knight",
        name: "Magic Knight",
        type: "advanced",
        lineage: "Knight",
        unlock: "Reach Hulkenberg Follower Rank 3 + Knight Rank 20 + Mage Rank 10",
        unlocks: ["paladin", "dark_knight"],
        requires: ["knight", "mage"],
        level: 20,
        color: "#06b6d4"
    },
    "paladin": {
        id: "paladin",
        name: "Paladin",
        type: "elite",
        lineage: "Knight",
        unlock: "Reach Hulkenberg Follower Rank 7 + Magic Knight Rank 20",
        unlocks: ["royal_knight"],
        requires: ["magic_knight"],
        level: 20,
        color: "#06b6d4"
    },
    "dark_knight": {
        id: "dark_knight",
        name: "Dark Knight",
        type: "elite",
        lineage: "Knight",
        unlock: "Reach Hulkenberg Follower Rank 7 + Magic Knight Rank 20 + Wizard Rank 10",
        unlocks: ["royal_knight"],
        requires: ["magic_knight", "wizard"],
        level: 20,
        color: "#06b6d4"
    },

    // BRAWLER LINEAGE TREE
    "brawler": {
        id: "brawler",
        name: "Brawler",
        type: "base",
        lineage: "Brawler",
        unlock: "Automatically unlocked through main story by completing Quest - A Friend in Need during the Regalith Grand Cathedral Dungeon",
        unlocks: ["pugilist"],
        requires: [],
        level: 1,
        color: "#10b981"
    },
    "pugilist": {
        id: "pugilist",
        name: "Pugilist",
        type: "advanced",
        lineage: "Brawler",
        unlock: "Reach Catherina Follower Rank 3 + Brawler Rank 20",
        unlocks: ["martial_artist"],
        requires: ["brawler"],
        level: 20,
        color: "#10b981"
    },
    "martial_artist": {
        id: "martial_artist",
        name: "Martial Artist",
        type: "elite",
        lineage: "Brawler",
        unlock: "Reach Catherina Follower Rank 8 + Pugilist Rank 20",
        unlocks: ["royal_berserker"],
        requires: ["pugilist"],
        level: 20,
        color: "#10b981"
    },

    // MERCHANT LINEAGE TREE
    "merchant": {
        id: "merchant",
        name: "Merchant",
        type: "base",
        lineage: "Merchant",
        unlock: "Complete Quest - A Bullish Embargo",
        unlocks: ["tycoon"],
        requires: [],
        level: 10,
        color: "#ec4899"
    },
    "tycoon": {
        id: "tycoon",
        name: "Tycoon",
        type: "elite",
        lineage: "Merchant",
        unlock: "Reach Brigitta Follower Rank 8 + Merchant Rank 20 + Commander Rank 10",
        unlocks: ["royal_thief"],
        requires: ["merchant", "commander"],
        level: 20,
        color: "#ec4899"
    },

    // GUNNER LINEAGE TREE
    "gunner": {
        id: "gunner",
        name: "Gunner",
        type: "base",
        lineage: "Gunner",
        unlock: "Complete Quest - Providing a Spark",
        unlocks: ["sniper"],
        requires: [],
        level: 10,
        color: "#6b7280"
    },
    "sniper": {
        id: "sniper",
        name: "Sniper",
        type: "advanced",
        lineage: "Gunner",
        unlock: "Complete Quest - Relic Search: Dregs of Destiny + Gunner Rank 20 + Seeker Rank 10",
        unlocks: ["dragoon", "ninja"],
        requires: ["gunner", "seeker"],
        level: 20,
        color: "#6b7280"
    },
    "dragoon": {
        id: "dragoon",
        name: "Dragoon",
        type: "elite",
        lineage: "Gunner",
        unlock: "Complete Quest - Petty Thief + Sniper Rank 20 + Magic Knight Rank 10",
        unlocks: ["royal_thief"],
        requires: ["sniper", "magic_knight"],
        level: 20,
        color: "#6b7280"
    },

    // THIEF LINEAGE TREE
    "thief": {
        id: "thief",
        name: "Thief",
        type: "base",
        lineage: "Thief",
        unlock: "Automatically unlocked through main story on 7/4",
        unlocks: ["assassin"],
        requires: [],
        level: 1,
        color: "#8b5cf6"
    },
    "assassin": {
        id: "assassin",
        name: "Assassin",
        type: "advanced",
        lineage: "Thief",
        unlock: "Reach Heismay Follower Rank 3 + Thief Rank 20",
        unlocks: ["ninja", "warlock"],
        requires: ["thief"],
        level: 20,
        color: "#8b5cf6"
    },
    "ninja": {
        id: "ninja",
        name: "Ninja",
        type: "elite",
        lineage: "Thief",
        unlock: "Reach Heismay Follower Rank 7 + Assassin Rank 20 + Sniper Rank 10",
        unlocks: ["royal_thief"],
        requires: ["assassin", "sniper"],
        level: 20,
        color: "#8b5cf6"
    },

    // COMMANDER LINEAGE TREE
    "commander": {
        id: "commander",
        name: "Commander",
        type: "base",
        lineage: "Commander",
        unlock: "Talk to Bardon the day after finishing the Kriegante Castle Dungeon and unlock Bardon Follower Rank 1",
        unlocks: ["general"],
        requires: [],
        level: 15,
        color: "#f59e0b"
    },
    "general": {
        id: "general",
        name: "General",
        type: "advanced",
        lineage: "Commander",
        unlock: "Reach Bardon Follower Rank 3 + Commander Rank 20",
        unlocks: ["warlord", "samurai"],
        requires: ["commander"],
        level: 20,
        color: "#f59e0b"
    },
    "warlord": {
        id: "warlord",
        name: "Warlord",
        type: "elite",
        lineage: "Commander",
        unlock: "Reach Bardon Follower Rank 8 + General Rank 20",
        unlocks: ["royal_warrior"],
        requires: ["general"],
        level: 20,
        color: "#f59e0b"
    },

    // FAKER LINEAGE TREE
    "faker": {
        id: "faker",
        name: "Faker",
        type: "base",
        lineage: "Faker",
        unlock: "Complete Quest - A Dagger, a Ring, and a Rake",
        unlocks: ["trickster"],
        requires: [],
        level: 10,
        color: "#6b7280"
    },
    "trickster": {
        id: "trickster",
        name: "Trickster",
        type: "elite",
        lineage: "Faker",
        unlock: "Reach Alonzo Follower Rank 8 + Faker Rank 20",
        unlocks: ["royal_masked_dancer"],
        requires: ["faker"],
        level: 20,
        color: "#6b7280"
    },

    // SUMMONER LINEAGE TREE
    "summoner": {
        id: "summoner",
        name: "Summoner",
        type: "advanced",
        lineage: "Summoner",
        unlock: "Complete Quest - The Trial of Malnova + Seeker Rank 15 + Faker Rank 10",
        unlocks: ["devil_summoner"],
        requires: ["seeker", "faker"],
        level: 20,
        color: "#ec4899"
    },
    "devil_summoner": {
        id: "devil_summoner",
        name: "Devil Summoner",
        type: "elite",
        lineage: "Summoner",
        unlock: "Reach Eupha Follower Rank 6 + Summoner Rank 20 + Magic Seeker Rank 10",
        unlocks: ["royal_summoner"],
        requires: ["summoner", "magic_seeker"],
        level: 20,
        color: "#ec4899"
    },

    // MASKED DANCER LINEAGE TREE
    "masked_dancer": {
        id: "masked_dancer",
        name: "Masked Dancer",
        type: "advanced",
        lineage: "Masked Dancer",
        unlock: "Complete Quest - Save the Mourning Snakes + Mage Rank 15 + Thief Rank 10",
        unlocks: ["persona_master"],
        requires: ["mage", "thief"],
        level: 20,
        color: "#f97316"
    },
    "persona_master": {
        id: "persona_master",
        name: "Persona Master",
        type: "elite",
        lineage: "Masked Dancer",
        unlock: "Reach Junah Follower Rank 6 + Masked Dancer Rank 20 + Faker Rank 10",
        unlocks: ["royal_masked_dancer"],
        requires: ["masked_dancer", "faker"],
        level: 20,
        color: "#f97316"
    },

    // BERSERKER LINEAGE TREE
    "berserker": {
        id: "berserker",
        name: "Berserker",
        type: "advanced",
        lineage: "Berserker",
        unlock: "When Basilio officially joins the party, talk to him at the Engine Room Corridor when traveling to a destination in the Gauntlet Runner and unlock Basilio Follower Rank 1 + Warrior Rank 10 + Brawler Rank 10 + Knight Rank 10",
        unlocks: ["destroyer"],
        requires: ["warrior", "brawler", "knight"],
        level: 20,
        color: "#10b981"
    },
    "destroyer": {
        id: "destroyer",
        name: "Destroyer",
        type: "elite",
        lineage: "Berserker",
        unlock: "Reach Basilio Follower Rank 6 + Berserker Rank 20",
        unlocks: ["royal_berserker"],
        requires: ["berserker"],
        level: 20,
        color: "#10b981"
    },

    // ROYAL ARCHETYPES
    "prince": {
        id: "prince",
        name: "Prince",
        type: "royal",
        lineage: "Royal",
        unlock: "Automatically unlocked through main story after a certain event (Exclusive to Protagonist)",
        unlocks: [],
        requires: [],
        level: 20,
        color: "#fbbf24"
    },
    "royal_warrior": {
        id: "royal_warrior",
        name: "Royal Warrior",
        type: "royal",
        lineage: "Royal",
        unlock: "Reach Strohl Follower Rank 8 + Samurai Rank 20 + Warlord Rank 20 (Exclusive to Strohl)",
        unlocks: [],
        requires: ["samurai", "warlord"],
        level: 20,
        color: "#fbbf24"
    },
    "royal_knight": {
        id: "royal_knight",
        name: "Royal Knight",
        type: "royal",
        lineage: "Royal",
        unlock: "Reach Hulkenberg Follower Rank 8 + Paladin Rank 20 + Dark Knight Rank 15 + Elemental Master Rank 15 (Exclusive to Hulkenberg)",
        unlocks: [],
        requires: ["paladin", "dark_knight", "elemental_master"],
        level: 20,
        color: "#fbbf24"
    },
    "royal_thief": {
        id: "royal_thief",
        name: "Royal Thief",
        type: "royal",
        lineage: "Royal",
        unlock: "Reach Heismay Follower Rank 8 + Ninja Rank 20 + Dragoon Rank 15 + Tycoon Rank 15 (Exclusive to Heismay)",
        unlocks: [],
        requires: ["ninja", "dragoon", "tycoon"],
        level: 20,
        color: "#fbbf24"
    },
    "royal_masked_dancer": {
        id: "royal_masked_dancer",
        name: "Royal Masked Dancer",
        type: "royal",
        lineage: "Royal",
        unlock: "Reach Junah Follower Rank 8 + Persona Master Rank 20 + Trickster Rank 20 (Exclusive to Junah)",
        unlocks: [],
        requires: ["persona_master", "trickster"],
        level: 20,
        color: "#fbbf24"
    },
    "royal_summoner": {
        id: "royal_summoner",
        name: "Royal Summoner",
        type: "royal",
        lineage: "Royal",
        unlock: "Reach Eupha Follower Rank 8 + Devil Summoner Rank 20 + Soul Hacker Rank 20 (Exclusive to Eupha)",
        unlocks: [],
        requires: ["devil_summoner", "soul_hacker"],
        level: 20,
        color: "#fbbf24"
    },
    "royal_berserker": {
        id: "royal_berserker",
        name: "Royal Berserker",
        type: "royal",
        lineage: "Royal",
        unlock: "Reach Basilio Follower Rank 8 + Destroyer Rank 20 + Martial Artist Rank 20 (Exclusive to Basilio)",
        unlocks: [],
        requires: ["destroyer", "martial_artist"],
        level: 20,
        color: "#fbbf24"
    }
};

// Helper functions
const archetypeHelpers = {
    getAllArchetypes() {
        return archetypeData;
    },

    getArchetypesByType(type) {
        const result = {};
        Object.entries(archetypeData).forEach(([id, archetype]) => {
            if (archetype.type === type) {
                result[id] = archetype;
            }
        });
        return result;
    },

    getArchetypesByLineage(lineage) {
        const result = {};
        Object.entries(archetypeData).forEach(([id, archetype]) => {
            if (archetype.lineage === lineage) {
                result[id] = archetype;
            }
        });
        return result;
    },

    getLineages() {
        const lineages = new Set();
        Object.values(archetypeData).forEach(archetype => {
            lineages.add(archetype.lineage);
        });
        return Array.from(lineages).sort();
    },

    canUnlock(archetypeId, unlockedArchetypes) {
        const archetype = archetypeData[archetypeId];
        
        if (!archetype) return false;
        if (!archetype.requires || archetype.requires.length === 0) return true; // Base archetypes
        
        return archetype.requires.every(reqId => unlockedArchetypes.includes(reqId));
    },

    getUnlockableArchetypes(unlockedArchetypes) {
        return Object.keys(archetypeData).filter(id => 
            !unlockedArchetypes.includes(id) && 
            this.canUnlock(id, unlockedArchetypes)
        );
    }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { archetypeData, archetypeHelpers };
}
