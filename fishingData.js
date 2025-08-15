// Metaphor: ReFantazio Fishing Guide Data
// Data extracted from IGN Guide

const fishingData = {
    baits: {
        "worm": {
            name: "Worm Bait",
            cost: "100 Reeve",
            location: "Bug-Selling Boy on Cattleracket Road in Martira",
            description: "Allows you to catch Limp Goldfish and Queen's Honey Jar ingredients.",
            catches: ["Limp Goldfish", "Queen's Honey Jar", "Lone Boot"],
            icon: "🪱"
        },
        "grasshopper": {
            name: "Grasshopper Bait",
            cost: "250 Reeve", 
            location: "Bug-Selling Boy on Cattleracket Road in Martira",
            description: "Allows you to catch Brocaded Koi and Queen's Honey Jar ingredients.",
            catches: ["Brocaded Koi", "Queen's Honey Jar", "Lone Boot"],
            icon: "🦗"
        },
        "tail": {
            name: "Tail Bait",
            cost: "Special acquisition",
            location: "Found randomly when cleaning Gauntlet Runner Storage Room with Upright Cleaning Tool OR given by man in Arenafront Wharf, Port Brilehaven in exchange for 1x Medicinal Herb",
            description: "Allows you to catch Lord of the Lake and Queen's Honey Jar ingredients.",
            catches: ["Lord of the Lake", "Queen's Honey Jar", "Lone Boot"],
            icon: "🎣"
        }
    },
    
    dialogues: {
        "seasickness": {
            question: "Maybe it's all this staring at the water's surface, but... I'm starting to feel a bit queasy.",
            answers: {
                "take_break": {
                    text: "Take a break.",
                    rewards: {
                        "worm": ["2x Limp Goldfish"],
                        "grasshopper": ["2x Brocaded Koi"],
                        "tail": ["2x Lord of the Lake"]
                    }
                },
                "sway_waves": {
                    text: "Sway with the waves.",
                    rewards: {
                        "worm": ["1x Limp Goldfish", "1x Lone Boot"],
                        "grasshopper": ["1x Brocaded Koi", "1x Lone Boot"],
                        "tail": ["1x Lord of the Lake", "1x Lone Boot"]
                    }
                },
                "think_fish": {
                    text: "Think like a fish.",
                    rewards: {
                        "worm": ["1x Limp Goldfish", "2x Queen's Honey Jar"],
                        "grasshopper": ["1x Brocaded Koi", "2x Queen's Honey Jar"],
                        "tail": ["1x Lord of the Lake", "2x Queen's Honey Jar"]
                    }
                }
            }
        },
        "tiredness": {
            question: "Yaaawn... Ah, I'm more tired than I realised. Hmm... How do I shake this?",
            answers: {
                "power_through": {
                    text: "Just power through it.",
                    rewards: {
                        "worm": ["1x Limp Goldfish", "1x Lone Boot"],
                        "grasshopper": ["1x Brocaded Koi", "1x Lone Boot"],
                        "tail": ["1x Lord of the Lake", "1x Lone Boot"]
                    }
                },
                "pinch_cheeks": {
                    text: "Pinch your cheeks.",
                    rewards: {
                        "worm": ["2x Limp Goldfish"],
                        "grasshopper": ["2x Brocaded Koi"],
                        "tail": ["2x Lord of the Lake"]
                    }
                },
                "naptime": {
                    text: "Give in to naptime.",
                    rewards: {
                        "worm": ["1x Limp Goldfish", "2x Queen's Honey Jar"],
                        "grasshopper": ["1x Brocaded Koi", "2x Queen's Honey Jar"],
                        "tail": ["1x Lord of the Lake", "2x Queen's Honey Jar"]
                    }
                }
            }
        },
        "bait_movement": {
            question: "Hmm. Nothing biting. Perhaps if the bait were moving...?",
            answers: {
                "waggle": {
                    text: "Give it a waggle.",
                    rewards: {
                        "worm": ["2x Limp Goldfish"],
                        "grasshopper": ["2x Brocaded Koi"],
                        "tail": ["2x Lord of the Lake"]
                    }
                },
                "thrash_splash": {
                    text: "Thrash and splash.",
                    rewards: {
                        "worm": ["1x Limp Goldfish", "2x Queen's Honey Jar"],
                        "grasshopper": ["1x Brocaded Koi", "2x Queen's Honey Jar"],
                        "tail": ["1x Lord of the Lake", "2x Queen's Honey Jar"]
                    }
                },
                "keep_still": {
                    text: "Keep it still.",
                    rewards: {
                        "worm": ["1x Limp Goldfish", "1x Lone Boot"],
                        "grasshopper": ["1x Brocaded Koi", "1x Lone Boot"],
                        "tail": ["1x Lord of the Lake", "1x Lone Boot"]
                    }
                }
            }
        }
    },

    ingredients: {
        "Limp Goldfish": {
            description: "A common fish ingredient caught with Worm Bait",
            rarity: "Common",
            uses: "Cooking ingredient for various recipes"
        },
        "Brocaded Koi": {
            description: "A quality fish ingredient caught with Grasshopper Bait",
            rarity: "Uncommon", 
            uses: "Cooking ingredient for higher-tier recipes"
        },
        "Lord of the Lake": {
            description: "A rare fish ingredient caught with Tail Bait",
            rarity: "Rare",
            uses: "Cooking ingredient for premium recipes"
        },
        "Queen's Honey Jar": {
            description: "A versatile ingredient that can be caught with any bait",
            rarity: "Common-Uncommon",
            uses: "Cooking ingredient used in many recipes"
        },
        "Lone Boot": {
            description: "A junk item occasionally caught while fishing",
            rarity: "Junk",
            uses: "Can be sold for a small amount of money"
        }
    },

    mechanics: {
        unlock: "Fishing unlocks on 8/14 during the main story while traveling through the Malnova Archipelago",
        location: "Use the Fishing Rod on the Deck of your ship (indicated by a fishing rod icon)",
        timing: "Fishing takes time - it will be nighttime when you finish",
        requirements: "You need bait in your inventory to fish",
        process: "Select bait type, then choose dialogue options that determine what you catch"
    },

    tips: [
        "Choose 'Take a break', 'Pinch your cheeks', or 'Give it a waggle' for the best fish yields (2x main ingredient)",
        "Choose 'Think like a fish', 'Give in to naptime', or 'Thrash and splash' for Queen's Honey Jar (versatile ingredient)",
        "Tail Bait is the rarest and hardest to obtain - use it wisely for Lord of the Lake",
        "Queen's Honey Jar can be obtained with any bait type, making it easier to farm",
        "Fishing is essential for the 'King of Cuisine' trophy/achievement"
    ]
};
