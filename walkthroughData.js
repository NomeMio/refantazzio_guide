// Metaphor: ReFantazio 100% Walkthrough Data
// Data extracted and structured from PowerPyx guide

const walkthroughData = {
    "06/02": {
        title: "06/02 - Starting Interview",
        activities: {
            afternoon: [
                {
                    id: "0602_1",
                    text: "Grand Trad, Recruitment Center – Complete your interview (choose any dialogue for skill points: Strength, Magic, Endurance, Agility, Luck)",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "06/03": {
        title: "06/03-06/04 - Story Progression",
        activities: {
            all_day: [
                {
                    id: "0603_1",
                    text: "Nothing but story progression",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "06/05": {
        title: "06/05 - First Combat & Gold Beetle",
        activities: {
            afternoon: [
                {
                    id: "0605_1",
                    text: "Earn 'Stunning!' trophy on the very first enemy encounter",
                    type: "trophy",
                    tags: ["trophy"]
                },
                {
                    id: "0605_2", 
                    text: "Earn 'Allies United' trophy after defeating the boss",
                    type: "trophy",
                    tags: ["trophy"]
                }
            ],
            night: [
                {
                    id: "0605_3",
                    text: "Pick up Gold Beetle under one of the trees behind where Strohl is (highly missable!) (1/50)",
                    type: "beetle",
                    tags: ["beetle", "missable"],
                    beetleNumber: 1
                },
                {
                    id: "0605_4",
                    text: "Earn 'Shake on It' trophy after unlocking your first Follower",
                    type: "trophy",
                    tags: ["trophy"]
                }
            ]
        }
    },
    "06/06": {
        title: "06/06 - Nord Mines",
        activities: {
            afternoon: [
                {
                    id: "0606_1",
                    text: "Optional: Battle the dragon near the end (weak to ice, rewards Warrior weapon) - Cannot return later!",
                    type: "dungeon",
                    tags: ["dungeon", "optional", "missable"]
                },
                {
                    id: "0606_2",
                    text: "Earn 'Out of the Fire' trophy after completing Nord Mines",
                    type: "trophy",
                    tags: ["trophy"]
                }
            ]
        }
    },
    "06/07": {
        title: "06/07-06/10 - Story",
        activities: {
            all_day: [
                {
                    id: "0607_1",
                    text: "Nothing but story progression",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "06/11": {
        title: "06/11 - Grand Trad Exploration",
        activities: {
            afternoon: [
                {
                    id: "0611_1",
                    text: "Grand Trad, Sunshade Row – Collect Gold Beetle behind stairs to Comfort Concoctions (2/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 2
                },
                {
                    id: "0611_2",
                    text: "Grand Trad, Comfort Concoctions – Collect Gold Beetle by choosing to stick hand in spice sack (3/50)",
                    type: "beetle", 
                    tags: ["beetle"],
                    beetleNumber: 3
                },
                {
                    id: "0611_3",
                    text: "Grand Trad, Sunshade Row – Talk to More to visit Akademia, accept side quest 'More's Task: Foreword and Prologue'",
                    type: "quest",
                    tags: ["quest", "follower"]
                },
                {
                    id: "0611_4",
                    text: "Use Synthesis skill in boss fight to earn 'United Front' trophy",
                    type: "trophy",
                    tags: ["trophy"]
                }
            ]
        }
    },
    "06/12": {
        title: "06/12 - First Quests & Catacombs Prep",
        activities: {
            afternoon: [
                {
                    id: "0612_1",
                    text: "Grand Trad, Sunshade Row – Accept 'Pagan's Dilemma' from Mustari Man, buy Breath of Fresh Air at St. Fermis Church, turn in quest (+4 Tolerance)",
                    type: "quest",
                    tags: ["quest", "tolerance"]
                },
                {
                    id: "0612_2",
                    text: "Grand Trad, Sunshade Row – Give Medical Herb to Man in Pain",
                    type: "misc",
                    tags: ["misc"]
                },
                {
                    id: "0612_3", 
                    text: "Grand Trad, Sunlumeo Street – Accept 'Help the Hushed Honeybee' quest from Young Nidia Man",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0612_4",
                    text: "Grand Trad, Recruitment Center – Collect Gold Beetle in corner of hallway (4/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 4
                },
                {
                    id: "0612_5",
                    text: "Grand Trad, Regalith Grand Cathedral – Buy 3 Fruit Cordial from Water Merchant (very useful for upcoming dungeon)",
                    type: "shopping",
                    tags: ["shopping", "preparation"]
                },
                {
                    id: "0612_6",
                    text: "Grand Trad, Catacombs Entrance – Enter dungeon. Complete in single day using Mage's Magic Recovery passive. Get Healer Archetype to Rank 10.",
                    type: "dungeon",
                    tags: ["dungeon", "archetype"]
                },
                {
                    id: "0612_7",
                    text: "Turn in 'More's Task: Foreword and Prologue', accept 'More's Task Chapter One: Ordeal' (Rank 2) (+4 Imagination)",
                    type: "follower",
                    tags: ["follower", "imagination"]
                },
                {
                    id: "0612_8",
                    text: "Earn 'Calamity Averted' trophy after defeating boss",
                    type: "trophy",
                    tags: ["trophy"]
                }
            ]
        }
    },
    "06/13": {
        title: "06/13 - Follower Events & Cooking",
        activities: {
            afternoon: [
                {
                    id: "0613_1",
                    text: "Grand Trad, Recruitment Center – Accept bounty 'Mans' Not-So Best Friend'",
                    type: "quest",
                    tags: ["quest", "bounty"]
                },
                {
                    id: "0613_2",
                    text: "Spend time with Hulkenberg (Rank 2)",
                    type: "follower",
                    tags: ["follower"]
                },
                {
                    id: "0613_4",
                    text: "Grand Trad, Sunshade Row – Talk to informant so at night it unlocks Secret of the Redgrass Shop",
                    type: "shopping",
                    tags: ["shopping", "information"]
                },
            ],
            night: [
                {
                    id: "0613_5",
                    text: "Grand Trad, Sunshade Row – Buy information from Informant (Secret of the Redgrass Shop)",
                    type: "shopping",
                    tags: ["shopping", "information"]
                },
                {
                    id: "0613_6",
                    text: "Grand Trad, Hushed Honeybee Inn – Cook with Fabienne (save before, random dialogue) (+3 Tolerance)",
                    type: "cooking",
                    tags: ["cooking", "tolerance"]
                }
            ]
        }
    },
    "06/14": {
        title: "06/14 - Quest Turn-ins & Follower Time",
        activities: {
            afternoon: [
                {
                    id: "0614_1",
                    text: "Grand Trad, Sunlumeo Street – Turn in 'Help the Hushed Honeybee' quest (+4 Wisdom)",
                    type: "quest",
                    tags: ["quest", "wisdom"]
                },
                {
                    id: "0614_2",
                    text: "Spend time with Strohl (Rank 2)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0614_3",
                    text: "Grand Trad, Sunlumeo Street – Gaze at view of Royal Capital (+2 Wisdom, Rank 2 Wisdom)",
                    type: "misc",
                    tags: ["wisdom"]
                }
            ]
        }
    },
    "06/15": {
        title: "06/15 - Shopping & Belega Corridor",
        activities: {
            afternoon: [
                {
                    id: "0615_1",
                    text: "Grand Trad, Regalith Grand Cathedral – Buy Pristine Clear Water, Bidou Meat, Redgrass. Earn 'Shrewd Shopper' trophy",
                    type: "shopping",
                    tags: ["shopping", "trophy"]
                },
                {
                    id: "0615_2",
                    text: "Grand Trad, St. Fermis Church – Purify an item with Rank 2 Wisdom to earn 'Blessed Power' trophy",
                    type: "trophy",
                    tags: ["trophy"]
                },
                {
                    id: "0615_3",
                    text: "Grand Trad, Sunlumeo Street – Accept 'A Bullish Embargo' quest from Igniter Merchantess (requires Rank 2 Wisdom)",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0615_4",
                    text: "Belega Corridor – Collect Gold Beetle on floor B3, left tunnel in big open room (5/50)",
                    type: "beetle",
                    tags: ["beetle", "dungeon"],
                    beetleNumber: 5
                },
                {
                    id: "0615_5",
                    text: "Belega Corridor – Complete dungeon, defeat boss",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ]
        }
    },
    "06/16": {
        title: "06/16 - Brigitta & Cooking",
        activities: {
            afternoon: [
                {
                    id: "0616_1",
                    text: "Grand Trad, Sunlumeo Street – Turn in 'A Bullish Embargo' quest (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "courage"]
                },
                {
                    id: "0616_2",
                    text: "Automatically spend time with Brigitta after quest (Rank 1)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0616_3",
                    text: "Grand Trad, Hushed Honeybee Inn – Make Redgrass-Roasted Bidou with Fabienne (choose option 2) (+3 Tolerance)",
                    type: "cooking",
                    tags: ["cooking", "tolerance"]
                }
            ]
        }
    },
    "06/17": {
        title: "06/17 - Strohl Rank Up",
        activities: {
            afternoon: [
                {
                    id: "0617_1",
                    text: "Spend time with Strohl (Rank 3)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0617_2",
                    text: "Grand Trad, Hushed Honeybee Inn – Cook with Fabienne (save before, random dialogue) (+3 Tolerance)",
                    type: "cooking",
                    tags: ["cooking", "tolerance"]
                }
            ]
        }
    },
    "06/18": {
        title: "06/18 - Tradia Desert",
        activities: {
            afternoon: [
                {
                    id: "0618_1",
                    text: "Tradia Desert – Collect Gold Beetle in bush near rock to the left of start (6/50)",
                    type: "beetle",
                    tags: ["beetle", "dungeon"],
                    beetleNumber: 6
                },
                {
                    id: "0618_2",
                    text: "Tradia Desert – Complete dungeon, defeat boss",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ]
        }
    },
    "06/19": {
        title: "06/19 - Bounty & Follower Events",
        activities: {
            afternoon: [
                {
                    id: "0619_1",
                    text: "Grand Trad, Recruitment Center – Turn in 'Man's Not-So Best Friend' bounty, earn 'Monster Hunter' trophy (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "bounty", "trophy", "courage"]
                },
                {
                    id: "0619_2",
                    text: "Grand Trad, Sunlumeo Street – Spend time with Chatty Elder (+2 Imagination)",
                    type: "misc",
                    tags: ["imagination"]
                }
            ],
            night: [
                {
                    id: "0619_3",
                    text: "Spend time with Brigitta (Rank 2)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "06/20": {
        title: "06/20 - Social Activities",
        activities: {
            afternoon: [
                {
                    id: "0620_1",
                    text: "Grand Trad, Sunlumeo Street – Spend time with Chatty Elder (+2 Imagination)",
                    type: "misc",
                    tags: ["imagination"]
                }
            ],
            night: [
                {
                    id: "0620_2",
                    text: "Grand Trad, Hushed Honeybee Inn – Cook with Fabienne (save before, random dialogue) (+3 Tolerance, Rank 2 Tolerance)",
                    type: "cooking",
                    tags: ["cooking", "tolerance"]
                }
            ]
        }
    },
    "06/21": {
        title: "06/21 - Eloquence Building",
        activities: {
            afternoon: [
                {
                    id: "0621_1",
                    text: "Grand Trad, Sunshade Row – Spend time with Activist Woman (+2 Eloquence)",
                    type: "misc",
                    tags: ["eloquence"]
                }
            ],
            night: [
                {
                    id: "0621_2",
                    text: "Spend time with Brigitta (Rank 3)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "06/22": {
        title: "06/22-06/23 - Story",
        activities: {
            all_day: [
                {
                    id: "0622_1",
                    text: "Nothing but story progression",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "06/24": {
        title: "06/24 - Gauntlet Runner Setup",
        activities: {
            afternoon: [
                {
                    id: "0624_1",
                    text: "Gauntlet Runner – Check engine, interact with Cooking Table for new recipes",
                    type: "misc",
                    tags: ["cooking"]
                },
                {
                    id: "0624_2",
                    text: "Gauntlet Runner – Enter pantry for free cooking ingredients (do this daily!)",
                    type: "misc",
                    tags: ["cooking", "daily"]
                },
                {
                    id: "0624_3",
                    text: "Gauntlet Runner – Read New World Travel Diary (choose 1, 3, 1) (+4 Imagination)",
                    type: "reading",
                    tags: ["reading", "imagination"]
                }
            ],
            night: [
                {
                    id: "0624_4",
                    text: "Gauntlet Runner – Interact with campfire for cooking item (do this every night when camped!)",
                    type: "misc",
                    tags: ["cooking", "daily"]
                },
                {
                    id: "0624_5",
                    text: "Gauntlet Runner – Read New World Travel Diary (choose 2) (+4 Imagination)",
                    type: "reading",
                    tags: ["reading", "imagination"]
                }
            ]
        }
    },
    "06/25": {
        title: "06/25 - Idlesday Activities",
        activities: {
            afternoon: [
                {
                    id: "0625_1",
                    text: "Gauntlet Runner – Use Toilet on Idlesday (day ending in 5 or 0) for +1 Luck (do every Idlesday!)",
                    type: "misc",
                    tags: ["daily", "luck"]
                },
                {
                    id: "0625_2",
                    text: "Gauntlet Runner – Finish reading New World Travel Diary (choose 1) (+8 Imagination, Rank 2 Imagination)",
                    type: "reading",
                    tags: ["reading", "imagination"]
                },
                {
                    id: "0625_3",
                    text: "Get Tree of Prophecy Drawing during story event (+4 Wisdom)",
                    type: "drawing",
                    tags: ["drawing", "wisdom"]
                }
            ],
            night: [
                {
                    id: "0625_4",
                    text: "Gauntlet Runner – Spend time with Neuras (choose 3) (+4 Wisdom)",
                    type: "follower",
                    tags: ["follower", "wisdom"]
                }
            ]
        }
    },
    "06/26": {
        title: "06/26-06/28 - Story",
        activities: {
            all_day: [
                {
                    id: "0626_1",
                    text: "Nothing but story progression",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "06/29": {
        title: "06/29 - Martira & Imp's Den",
        activities: {
            afternoon: [
                {
                    id: "0629_1",
                    text: "Martira, Thoroughfare Square – Buy 3 Mellow Milk and 3 Fruit Cordial from Water Trader",
                    type: "shopping",
                    tags: ["shopping"]
                },
                {
                    id: "0629_2",
                    text: "Martira, Stairstone Market – Buy Mora Coney Meat from Hardy Butcher",
                    type: "shopping",
                    tags: ["shopping"]
                },
                {
                    id: "0629_3",
                    text: "Martira, Cattleracket Road – Buy Rockbeans and Fragrant Spice from Greengrocer Girl",
                    type: "shopping",
                    tags: ["shopping"]
                },
                {
                    id: "0629_4",
                    text: "Martira, Thoroughfare Square – Accept 'A Dagger, a Ring, and a Rake' quest from Pompous Man (requires Rank 2 Imagination)",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0629_5",
                    text: "Martira, Thoroughfare Square – Accept 'Hatching a Plan' quest from Gloomy Youth",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0629_6",
                    text: "Martira, Recruitment Center – Accept 'The New King of the Imps' bounty",
                    type: "quest",
                    tags: ["quest", "bounty"]
                },
                {
                    id: "0629_7",
                    text: "Martira, Visca Alba Tavern – Interact with fireplace for Gold Beetle (7/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 7
                },
                {
                    id: "0629_8",
                    text: "Martira, Visca Alba Tavern – Interact with water jug in Inn room for Gold Beetle (random drop, save/reload) (8/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 8
                },
                {
                    id: "0629_9",
                    text: "Gauntlet Runner – Chart course to Imp's Den, spend time with Hulkenberg while traveling (Rank 3)",
                    type: "follower",
                    tags: ["follower"]
                },
                {
                    id: "0629_10",
                    text: "Imp's Den – Collect Gold Beetle in very north area of map (9/50)",
                    type: "beetle",
                    tags: ["beetle", "dungeon"],
                    beetleNumber: 9
                },
                {
                    id: "0629_11",
                    text: "Imp's Den – Complete dungeon, defeat boss",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ]
        }
    },
    "06/30": {
        title: "06/30 - Quest Turn-ins & Maria",
        activities: {
            afternoon: [
                {
                    id: "0630_1",
                    text: "Martira, Recruitment Center – Turn in 'The New King of Imps' bounty (+4 Courage, Rank 2 Courage)",
                    type: "quest",
                    tags: ["quest", "bounty", "courage"]
                },
                {
                    id: "0630_2",
                    text: "Grand Trad, Hushed Honeybee Inn – Turn in 'Promising Returns' quest",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0630_3",
                    text: "Spend time with Maria (requires Rank 2 Tolerance) (Rank 2)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0630_4",
                    text: "Spend time with Brigitta (Rank 4)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "07/01": {
        title: "07/01 - Hulkenberg & Courage Building",
        activities: {
            afternoon: [
                {
                    id: "0701_1",
                    text: "Spend time with Hulkenberg (Rank 4)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0701_2",
                    text: "Martira, Thoroughfare Square – Save and talk to Spirited Youth to take the plunge (reload if you don't get 4 courage) (+4 Courage)",
                    type: "misc",
                    tags: ["courage", "minigame"]
                }
            ]
        }
    },
    "07/02": {
        title: "07/02 - Giant Sandworm Nest",
        activities: {
            afternoon: [
                {
                    id: "0702_1",
                    text: "Gauntlet Runner – Chart course to Giant Sandworm Nest, read Pride and Persuasion while traveling (choose 2) (+4 Eloquence)",
                    type: "reading",
                    tags: ["reading", "eloquence"]
                },
                {
                    id: "0702_2",
                    text: "Get Midnight Sunsands Drawing during story event (+4 Wisdom)",
                    type: "drawing",
                    tags: ["drawing", "wisdom"]
                },
                {
                    id: "0702_3",
                    text: "Battle Catherina during story event (Rank 2)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0702_4",
                    text: "Spend time with Neuras (+4 Wisdom)",
                    type: "follower",
                    tags: ["follower", "wisdom"]
                }
            ]
        }
    },
    "07/03": {
        title: "07/03 - Sandworm Dungeon",
        activities: {
            afternoon: [
                {
                    id: "0703_1",
                    text: "Enter Sandworm dungeon (cannot return, grab everything before exit)",
                    type: "dungeon",
                    tags: ["dungeon", "missable"]
                }
            ]
        }
    },
    "07/04": {
        title: "07/04 - Story",
        activities: {
            all_day: [
                {
                    id: "0704_1",
                    text: "Nothing but story progression",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "07/05": {
        title: "07/05 - Man-Eater's Grotto & Neuras",
        activities: {
            afternoon: [
                {
                    id: "0705_1",
                    text: "Martira, Recruitment Center – Accept 'The Man-Eater in the Mine' bounty",
                    type: "quest",
                    tags: ["quest", "bounty"]
                },
                {
                    id: "0705_2",
                    text: "Gauntlet Runner – Use Washroom for free EXP daily",
                    type: "misc",
                    tags: ["daily", "exp"]
                },
                {
                    id: "0705_3",
                    text: "Gauntlet Runner – Get new recipes from Cooking Table",
                    type: "misc",
                    tags: ["cooking"]
                },
                {
                    id: "0705_4",
                    text: "Gauntlet Runner – Chart course to Man-Eater's Grotto, read Pride and Persuasion while traveling (choose 3) (+4 Eloquence)",
                    type: "reading",
                    tags: ["reading", "eloquence"]
                },
                {
                    id: "0705_5",
                    text: "Komero – Complete 'Providing a Spark' quest automatically, accept 'Relic Search: Inventor's Bequest', unlock Neuras follower (Rank 1)",
                    type: "quest",
                    tags: ["quest", "follower"]
                },
                {
                    id: "0705_6",
                    text: "Komero – Buy Practical Pidgeon Parcel and Orgo Sugar",
                    type: "shopping",
                    tags: ["shopping"]
                },
                {
                    id: "0705_7",
                    text: "Man-Eater's Grotto – Talk to More at Akademia, study Gunner & Merchant Archetypes, turn in 'More's Task Chapter One: Ordeal', accept 'More's Task Chapter Two: Solitude' (Rank 3) (+4 Imagination)",
                    type: "follower",
                    tags: ["follower", "archetype", "imagination"]
                },
                {
                    id: "0705_8",
                    text: "Man-Eater's Grotto – Steal from enemy to unlock 'What's Yours is Mine' trophy",
                    type: "trophy",
                    tags: ["trophy"]
                },
                {
                    id: "0705_9",
                    text: "Man-Eater's Grotto – Follow path near Talkative Tooth for Screwed-Up Material for Neuras",
                    type: "misc",
                    tags: ["crafting"]
                },
                {
                    id: "0705_10",
                    text: "Man-Eater's Grotto – Collect Gold Beetle on bottom floor near 2 staircases to north (10/50)",
                    type: "beetle",
                    tags: ["beetle", "dungeon"],
                    beetleNumber: 10
                },
                {
                    id: "0705_11",
                    text: "Man-Eater's Grotto – Complete dungeon, defeat boss",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ]
        }
    },
    "07/06": {
        title: "07/06 - Quest Turn-ins & Loveless Debate",
        activities: {
            afternoon: [
                {
                    id: "0706_1",
                    text: "Martira, Thoroughfare Square – Turn in 'Hatching a Plan' quest",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0706_2",
                    text: "Martira, Recruitment Center – Turn in 'The Man-Eater in the Mine' bounty (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "bounty", "courage"]
                },
                {
                    id: "0706_3",
                    text: "Spend time with Maria (Rank 3)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0706_4",
                    text: "Martira, Stairstone Market – Debate Loveless at podium (choose option 2 to win) (+4 Eloquence, +1 Imagination)",
                    type: "debate",
                    tags: ["debate", "eloquence", "imagination"]
                }
            ]
        }
    },
    "07/07": {
        title: "07/07 - Lina Debate & Neuras",
        activities: {
            afternoon: [
                {
                    id: "0707_1",
                    text: "Martira, Stairstone Market – Debate Lina at podium (choose option 1 to win) (+4 Eloquence, +1 Imagination, Rank 2 Eloquence)",
                    type: "debate",
                    tags: ["debate", "eloquence", "imagination"]
                }
            ],
            night: [
                {
                    id: "0707_2",
                    text: "Spend time with Neuras. Complete 'Relic Search: Inventor's Bequest', start 'Relic Search: Dregs of Destiny' (Rank 2)",
                    type: "follower",
                    tags: ["follower", "quest"]
                }
            ]
        }
    },
    "07/08": {
        title: "07/08 - Kriegante Castle",
        activities: {
            afternoon: [
                {
                    id: "0708_1",
                    text: "Martira, Blind Well Alley – Enter Kriegante Castle dungeon. Get Merchant Archetype to rank 15 during dungeon.",
                    type: "dungeon",
                    tags: ["dungeon", "archetype"]
                },
                {
                    id: "0708_2",
                    text: "Turn in 'More's Task Chapter Two: Solitude', accept 'More's Task Chapter Three: Drifting' (Rank 4) (+4 Imagination)",
                    type: "follower",
                    tags: ["follower", "imagination"]
                },
                {
                    id: "0708_3",
                    text: "Earn 'Dark Truths' trophy after defeating boss",
                    type: "trophy",
                    tags: ["trophy"]
                },
                {
                    id: "0708_4",
                    text: "Automatically turn in 'The Old Castle Town Kidnapper' bounty (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "bounty", "courage"]
                }
            ]
        }
    },
    "07/09": {
        title: "07/09 - Queen of Cuisine & Roger Debate",
        activities: {
            afternoon: [
                {
                    id: "0709_1",
                    text: "Martira, Visca Alba Tavern – Accept 'The Queen of Cuisine: Heart' quest",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0709_2",
                    text: "Spend time with Maria (Rank 4)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0709_3",
                    text: "Martira, Stairstone Market – Debate Roger at podium (choose option 3 to win) (+4 Eloquence, +1 Imagination)",
                    type: "debate",
                    tags: ["debate", "eloquence", "imagination"]
                }
            ]
        }
    },
    "07/10": {
        title: "07/10 - Abandoned Tomb & Maria Cooking",
        activities: {
            afternoon: [
                {
                    id: "0710_1",
                    text: "Gauntlet Runner – Chart course to Abandoned Tomb",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0710_2",
                    text: "Gauntlet Runner – With Maria at Rank 4, cook Benevolent Bread (no time cost)",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0710_3",
                    text: "Spend time with Strohl (Rank 4)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0710_4",
                    text: "Spend time with Hulkenberg (Rank 5)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "07/11": {
        title: "07/11 - Abandoned Tomb Completion",
        activities: {
            afternoon: [
                {
                    id: "0711_1",
                    text: "Gauntlet Runner – Cook Redgrass-Roasted Bidou",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0711_2",
                    text: "Gauntlet Runner – Finish reading Pride and Persuasion (choose 1) (+8 Eloquence)",
                    type: "reading",
                    tags: ["reading", "eloquence"]
                },
                {
                    id: "0711_3",
                    text: "Abandoned Tomb – Collect Gold Beetle on floor B2 by following ladders (11/50)",
                    type: "beetle",
                    tags: ["beetle", "dungeon"],
                    beetleNumber: 11
                },
                {
                    id: "0711_4",
                    text: "Abandoned Tomb – Complete dungeon",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ]
        }
    },
    "07/12": {
        title: "07/12 - Queen of Cuisine & Heismay",
        activities: {
            afternoon: [
                {
                    id: "0712_1",
                    text: "Martira, Visca Alba Tavern – Turn in 'The Queen of Cuisine: Heart' by giving Benevolent Bread",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0712_2",
                    text: "Spend time with Maria (Rank 5)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0712_3",
                    text: "Spend time with Heismay (requires Rank 2 Eloquence) (Rank 2)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "07/13": {
        title: "07/13 - Strohl's Noble Quest",
        activities: {
            afternoon: [
                {
                    id: "0713_1",
                    text: "Spend time with Strohl. Accept 'A Noble's Legacy' quest (Rank 5)",
                    type: "follower",
                    tags: ["follower", "quest"]
                }
            ],
            night: [
                {
                    id: "0713_2",
                    text: "Martira, Thoroughfare Square – Turn in 'A Dagger, a Ring, and a Rake' quest (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "courage"]
                },
                {
                    id: "0713_3",
                    text: "Automatically spend time with Cuculus after quest (Rank 1)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "07/14": {
        title: "07/14 - Heismay & Courage Building",
        activities: {
            afternoon: [
                {
                    id: "0714_1",
                    text: "Spend time with Heismay (Rank 3)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0714_2",
                    text: "Martira, Thoroughfare Square – Save and take the plunge with Spirited Youth (reload if you don't get 4 courage) (+4 Courage)",
                    type: "misc",
                    tags: ["courage", "minigame"]
                }
            ]
        }
    },
    "07/15": {
        title: "07/15 - Catacombs Return",
        activities: {
            afternoon: [
                {
                    id: "0715_1",
                    text: "Grand Trad, Sunlumeo Street – Accept 'A Haunted Heirloom' quest from Resentful Noble",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0715_2",
                    text: "Grand Trad, Catacombs Entrance – Accept 'Skullduggery' quest from Nervous Soldier",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0715_3",
                    text: "Grand Trad, Catacombs Entrance – Enter dungeon, go through newly opened Mausoleum doors. Get Black Jewel Necklace and 8 Mortaskulls",
                    type: "dungeon",
                    tags: ["dungeon"]
                },
                {
                    id: "0715_4",
                    text: "Turn in 'Skullduggery' quest immediately upon exiting",
                    type: "quest",
                    tags: ["quest"]
                }
            ]
        }
    },
    "07/16": {
        title: "07/16 - Trophy & Maria",
        activities: {
            afternoon: [
                {
                    id: "0716_1",
                    text: "Grand Trad, Sunlumeo Street – Turn in 'Haunted Heirloom' quest (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "courage"]
                },
                {
                    id: "0716_2",
                    text: "Martira, Thoroughfare Square – Save and take the plunge for 'At Your Own Risk' trophy, then reload save",
                    type: "trophy",
                    tags: ["trophy", "minigame"]
                },
                {
                    id: "0716_3",
                    text: "Spend time with Maria (Rank 6)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0716_4",
                    text: "Spend time with Heismay (Rank 4)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "07/17": {
        title: "07/17 - Cooking & Reading",
        activities: {
            afternoon: [
                {
                    id: "0717_1",
                    text: "Gauntlet Runner – Cook Curative Coney Roast",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0717_2",
                    text: "Spend time with Strohl (+4 Courage, Rank 3 Courage)",
                    type: "follower",
                    tags: ["follower", "courage"]
                }
            ],
            night: [
                {
                    id: "0717_3",
                    text: "Gauntlet Runner – Cook Critical Meatballs",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0717_4",
                    text: "Gauntlet Runner – Read Bygone Days (+4 Tolerance)",
                    type: "reading",
                    tags: ["reading", "tolerance"]
                }
            ]
        }
    },
    "07/18": {
        title: "07/18 - Cooking & City Ruins Drawing",
        activities: {
            afternoon: [
                {
                    id: "0718_1",
                    text: "Gauntlet Runner – Cook Invincible Noodles",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0718_2",
                    text: "Gauntlet Runner – Read Bygone Days (+4 Tolerance)",
                    type: "reading",
                    tags: ["reading", "tolerance"]
                },
                {
                    id: "0718_3",
                    text: "Get City Ruins Drawing during story event (+4 Wisdom)",
                    type: "drawing",
                    tags: ["drawing", "wisdom"]
                }
            ],
            night: [
                {
                    id: "0718_4",
                    text: "Gauntlet Runner – Cook Magical Bread",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0718_5",
                    text: "Gauntlet Runner – Finish reading Bygone Days (+8 Tolerance)",
                    type: "reading",
                    tags: ["reading", "tolerance"]
                }
            ]
        }
    },
    "07/19": {
        title: "07/19 - Catherina Battle",
        activities: {
            afternoon: [
                {
                    id: "0719_1",
                    text: "Gauntlet Runner – Cook Coney Stew (if you have Briny Salt from Pantry)",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0719_2",
                    text: "Gauntlet Runner – Read New World Travel Diary (+4 Imagination)",
                    type: "reading",
                    tags: ["reading", "imagination"]
                },
                {
                    id: "0719_3",
                    text: "Forced battle with Catherina (Rank 3)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0719_4",
                    text: "Gauntlet Runner – Read New World Travel Diary (+4 Imagination)",
                    type: "reading",
                    tags: ["reading", "imagination"]
                }
            ]
        }
    },
    "07/20": {
        title: "07/20 - Brilehaven Gold Beetles",
        activities: {
            afternoon: [
                {
                    id: "0720_1",
                    text: "Brilehaven, Seabreeze Street – Collect Gold Beetle near the dock (12/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 12
                },
                {
                    id: "0720_2",
                    text: "Brilehaven, Seabreeze Street – Collect Gold Beetle at dead end in alleyway (13/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 13
                },
                {
                    id: "0720_3",
                    text: "Brilehaven, Merchants' Bazaar – Collect Gold Beetle in small alley near Black Cat's Crow (14/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 14
                },
                {
                    id: "0720_4",
                    text: "Brilehaven, Merchants' Bazaar – Collect Gold Beetle in corner by Recruitment Center (15/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 15
                },
                {
                    id: "0720_5",
                    text: "Brilehaven, Arenafront Wharf – Collect Gold Beetle in top right corner by boxes (16/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 16
                },
                {
                    id: "0720_6",
                    text: "Brilehaven, Arenafront Wharf – Talk to Elderly Entomophile (Gold Beetle merchant)",
                    type: "misc",
                    tags: ["misc"]
                },
                {
                    id: "0720_7",
                    text: "Brilehaven, Merchants' Bazaar – Buy Briny Salt from Water Merchant and Marbled Bluefin Tuna from The Ruffian's Reel",
                    type: "shopping",
                    tags: ["shopping"]
                },
                {
                    id: "0720_8",
                    text: "Progress the story",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "07/21": {
        title: "07/21-07/22 - Story",
        activities: {
            all_day: [
                {
                    id: "0721_1",
                    text: "Nothing but story progression",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "07/23": {
        title: "07/23 - Brilehaven Quests & Jin Debate",
        activities: {
            afternoon: [
                {
                    id: "0723_1",
                    text: "Brilehaven, Seabreeze Street – Accept 'Efflorescent Youth' quest, go to St. Fermis Church for Rainbow Flower, turn in quest (+4 Tolerance)",
                    type: "quest",
                    tags: ["quest", "tolerance"]
                },
                {
                    id: "0723_2",
                    text: "Brilehaven, Seabreeze Street – Accept 'Dental Distress' quest from Sullen Man",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0723_3",
                    text: "Brilehaven, Merchants' Bazaar – Accept 'Superior Scrimshaw' quest from Craftsman. Visit informant to buy Fiend of the Forsaken Tower info",
                    type: "quest",
                    tags: ["quest", "information"]
                },
                {
                    id: "0723_4",
                    text: "Brilehaven, Recruitment Center – Accept 'Grieving Ghost of the Goblet' bounty",
                    type: "quest",
                    tags: ["quest", "bounty"]
                },
                {
                    id: "0723_5",
                    text: "Brilehaven, Arenafront Wharf – Give Medical Herb to Man in Pain (get Tail Bait)",
                    type: "misc",
                    tags: ["misc"]
                },
                {
                    id: "0723_6",
                    text: "Brilehaven, Arenafront Wharf – Accept 'The Chalice vs. The Brew' quest from Brewer",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0723_7",
                    text: "Brilehaven, Nightprowler – Accept 'Deeds and Diversions' quest from Overfamiliar Man",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0723_8",
                    text: "Brilehaven, Angler's Inn Square – Talk to Julian to get The Future of Magic book (highly missable!)",
                    type: "misc",
                    tags: ["missable", "reading"]
                },
                {
                    id: "0723_9",
                    text: "Brilehaven, Angler's Inn Square – Accept 'Soldier's Solace' quest from Exhausted Woman",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0723_10",
                    text: "Martira, Thoroughfare Square – Talk to Bardon and spend time with him (Rank 1)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0723_11",
                    text: "Brilehaven, Merchants' Bazaar – Debate Jin at podium (choose option 2) (+5 Eloquence, +1 Imagination, Rank 3 Eloquence, Rank 3 Imagination)",
                    type: "debate",
                    tags: ["debate", "eloquence", "imagination"]
                }
            ]
        }
    },
    "07/24": {
        title: "07/24 - Noble's Legacy & Glodell Debate",
        activities: {
            afternoon: [
                {
                    id: "0724_1",
                    text: "Grand Trad, Regalith Grand Cathedral – Complete 'A Noble's Legacy' quest (requires Rank 3 Imagination)",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0724_2",
                    text: "Spend time with Strohl to turn in quest (Rank 6) (+4 Tolerance, Rank 3 Tolerance)",
                    type: "follower",
                    tags: ["follower", "tolerance"]
                }
            ],
            night: [
                {
                    id: "0724_3",
                    text: "Brilehaven, Merchants' Bazaar – Debate Glodell at podium (choose option 3) (+5 Eloquence, +1 Imagination)",
                    type: "debate",
                    tags: ["debate", "eloquence", "imagination"]
                }
            ]
        }
    },
    "07/25": {
        title: "07/25 - Bardon & Brigitta",
        activities: {
            afternoon: [
                {
                    id: "0725_1",
                    text: "Spend time with Bardon (Rank 2)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0725_2",
                    text: "Spend time with Brigitta (requires Rank 3 Courage) (Rank 5)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "07/26": {
        title: "07/26 - Strohl & Rudolf Debate",
        activities: {
            afternoon: [
                {
                    id: "0726_1",
                    text: "Spend time with Strohl (Rank 7)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0726_2",
                    text: "Brilehaven, Merchants' Bazaar – Debate Rudolf at podium (choose option 3) (+5 Eloquence, +1 Imagination)",
                    type: "debate",
                    tags: ["debate", "eloquence", "imagination"]
                }
            ]
        }
    },
    "07/27": {
        title: "07/27 - Big Sale & Milo Debate",
        activities: {
            afternoon: [
                {
                    id: "0727_1",
                    text: "Big sale today - buy weapons, armor, or other items if desired",
                    type: "shopping",
                    tags: ["shopping", "sale"]
                },
                {
                    id: "0727_2",
                    text: "Spend time with Bardon (Rank 3)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0727_3",
                    text: "Brilehaven, Merchants' Bazaar – Debate Milo at podium (choose option 1) (+5 Eloquence, +1 Imagination)",
                    type: "debate",
                    tags: ["debate", "eloquence", "imagination"]
                }
            ]
        }
    },
    "07/28": {
        title: "07/28 - Tomb of Lament Journey",
        activities: {
            afternoon: [
                {
                    id: "0728_1",
                    text: "Gauntlet Runner – Chart course to Tomb of Lament via left path through Inundo",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0728_2",
                    text: "Gauntlet Runner – Cook Coney Stew if you couldn't before",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0728_3",
                    text: "Spend time with Hulkenberg (Rank 6)",
                    type: "follower",
                    tags: ["follower"]
                },
                {
                    id: "0728_4",
                    text: "Inundo – Buy Toothbrush of Hygienia and more Mellow Milk",
                    type: "shopping",
                    tags: ["shopping"]
                }
            ],
            night: [
                {
                    id: "0728_5",
                    text: "Spend time with Heismay (Rank 5)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "07/29": {
        title: "07/29 - Tomb of Lament",
        activities: {
            afternoon: [
                {
                    id: "0729_1",
                    text: "Gauntlet Runner – Read The Future of Magic (choose 2) (+4 Wisdom)",
                    type: "reading",
                    tags: ["reading", "wisdom"]
                },
                {
                    id: "0729_2",
                    text: "Get Peregrine Falls Drawing during event (+4 Wisdom, Rank 3 Wisdom)",
                    type: "drawing",
                    tags: ["drawing", "wisdom"]
                },
                {
                    id: "0729_3",
                    text: "Tomb of Lament – Bottom floor, crawl through hole for Gypsum Crystal for Neuras",
                    type: "misc",
                    tags: ["crafting", "dungeon"]
                },
                {
                    id: "0729_4",
                    text: "Tomb of Lament – Second half of bottom floor, crawl through hole for Gold Beetle (17/50)",
                    type: "beetle",
                    tags: ["beetle", "dungeon"],
                    beetleNumber: 17
                },
                {
                    id: "0729_5",
                    text: "Tomb of Lament – End of dungeon, hole in wall for Gold Beetle (18/50)",
                    type: "beetle",
                    tags: ["beetle", "dungeon"],
                    beetleNumber: 18
                },
                {
                    id: "0729_6",
                    text: "Tomb of Lament – Complete dungeon, defeat boss, set up camp instead of returning",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ],
            night: [
                {
                    id: "0729_7",
                    text: "Spend time with Neuras. Turn in 'Relic Search: Dregs of Destiny', accept 'Relic Search: Youth's Folly' (Rank 3)",
                    type: "follower",
                    tags: ["follower", "quest"]
                }
            ]
        }
    },
    "07/30": {
        title: "07/30 - Gracia Forest",
        activities: {
            afternoon: [
                {
                    id: "0730_1",
                    text: "Gauntlet Runner – Chart course to Gracia Forest",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0730_2",
                    text: "Gauntlet Runner – Cook Steadfast Stew",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0730_3",
                    text: "Gauntlet Runner – Read The Future of Magic (choose 2) (+4 Wisdom)",
                    type: "reading",
                    tags: ["reading", "wisdom"]
                },
                {
                    id: "0730_4",
                    text: "Gracia Forest – Gold Beetle in North-East corner of map (19/50)",
                    type: "beetle",
                    tags: ["beetle", "dungeon"],
                    beetleNumber: 19
                },
                {
                    id: "0730_5",
                    text: "Gracia Forest – Complete dungeon, defeat boss, set up camp instead of returning",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ],
            night: [
                {
                    id: "0730_6",
                    text: "Gauntlet Runner – Finish reading The Future of Magic (choose 3) (+8 Wisdom)",
                    type: "reading",
                    tags: ["reading", "wisdom"]
                }
            ]
        }
    },
    "08/01": {
        title: "08/01 - Forsaken Tower Journey",
        activities: {
            afternoon: [
                {
                    id: "0801_1",
                    text: "Gauntlet Runner – Chart course to Forsaken Tower (either path, don't stop at Tomb of Lament if using left)",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0801_2",
                    text: "Gauntlet Runner – Read Bygone Days (+4 Tolerance)",
                    type: "reading",
                    tags: ["reading", "tolerance"]
                }
            ],
            night: [
                {
                    id: "0801_3",
                    text: "Gauntlet Runner – Read Bygone Days (+4 Tolerance)",
                    type: "reading",
                    tags: ["reading", "tolerance"]
                }
            ]
        }
    },
    "08/02": {
        title: "08/02 - Forsaken Tower",
        activities: {
            afternoon: [
                {
                    id: "0802_1",
                    text: "Gauntlet Runner – Read Bygone Days (+4 Tolerance)",
                    type: "reading",
                    tags: ["reading", "tolerance"]
                },
                {
                    id: "0802_2",
                    text: "Battle with Catherina (Rank 4)",
                    type: "follower",
                    tags: ["follower"]
                },
                {
                    id: "0802_3",
                    text: "Forsaken Tower – Gold Beetle on 5th Floor (20/50)",
                    type: "beetle",
                    tags: ["beetle", "dungeon"],
                    beetleNumber: 20
                },
                {
                    id: "0802_4",
                    text: "Forsaken Tower – Complete dungeon, defeat boss, return to town",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ]
        }
    },
    "08/03": {
        title: "08/03 - Quest Turn-ins & Charadrius",
        activities: {
            afternoon: [
                {
                    id: "0803_1",
                    text: "Brilehaven, Angler's Inn Square – Turn in 'Soldier's Solace' quest",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0803_2",
                    text: "Brilehaven, Merchants' Bazaar – Turn in 'Superior Scrimshaw' quest (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "courage"]
                },
                {
                    id: "0803_3",
                    text: "Brilehaven, Seabreeze Street – Turn in 'Dental Distress' quest (get Gold Beetle reward) (21/50)",
                    type: "quest",
                    tags: ["quest", "beetle"],
                    beetleNumber: 21
                },
                {
                    id: "0803_4",
                    text: "Brilehaven, Seabreeze Street – Talk to Troubled Old Man and answer his questions",
                    type: "misc",
                    tags: ["misc"]
                },
                {
                    id: "0803_5",
                    text: "Brilehaven, Recruitment Center – Turn in 'Grieving Ghost of the Goblet' bounty (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "bounty", "courage"]
                },
                {
                    id: "0803_6",
                    text: "Brilehaven, Arenafront Wharf – Turn in 'Chalice Vs. The Brew' quest",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0803_7",
                    text: "Brilehaven, Coliseum – Tell Pompous Noble about Forsaken Tower, turn in 'Deeds and Diversions' quest",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0803_8",
                    text: "Brilehaven, Warship Harbor, Charadrius – Enter dungeon. Defeat bosses in 3 turns or less. Choose Port or Starboard Corridor (doesn't matter for 100%)",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ]
        }
    },
    "08/04": {
        title: "08/04 - More's Task & Heismay",
        activities: {
            afternoon: [
                {
                    id: "0804_1",
                    text: "Brilehaven, Angler's Inn Square – Talk to More at Akademia. Should have studied 15 Archetypes by now. Turn in 'More's Task Chapter Three: Drifting', accept 'More's Task Chapter Four: Turmoil' (Rank 5) (+4 Imagination)",
                    type: "follower",
                    tags: ["follower", "archetype", "imagination"]
                },
                {
                    id: "0804_2",
                    text: "Spend time with Bardon (Rank 4)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0804_3",
                    text: "Spend time with Heismay (Rank 6)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "08/05": {
        title: "08/05 - Strohl & Alonzo",
        activities: {
            afternoon: [
                {
                    id: "0805_1",
                    text: "Spend time with Strohl (Rank 8)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0805_2",
                    text: "Spend time with Alonzo (requires Rank 3 Wisdom) (Rank 2)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "08/06": {
        title: "08/06 - Bardon & Brigitta",
        activities: {
            afternoon: [
                {
                    id: "0806_1",
                    text: "Spend time with Bardon (requires Rank 3 Eloquence) (Rank 5)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0806_2",
                    text: "Spend time with Brigitta (Rank 6)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "08/07": {
        title: "08/07 - Social Activities",
        activities: {
            afternoon: [
                {
                    id: "0807_1",
                    text: "Brilehaven, Angler's Inn Square – Spend time with Earnest Youth (+4 Tolerance)",
                    type: "misc",
                    tags: ["tolerance"]
                }
            ],
            night: [
                {
                    id: "0807_2",
                    text: "Spend time with Alonzo (Rank 3)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "08/08": {
        title: "08/08 - Bardon's Rule Quest",
        activities: {
            afternoon: [
                {
                    id: "0808_1",
                    text: "Spend time with Bardon. Accept 'The Right to Rule' quest (Rank 6)",
                    type: "follower",
                    tags: ["follower", "quest"]
                }
            ],
            night: [
                {
                    id: "0808_2",
                    text: "Brilehaven, Angler's Inn Square – Spend time at Watchtower (+4 Wisdom)",
                    type: "misc",
                    tags: ["wisdom"]
                }
            ]
        }
    },
    "08/09": {
        title: "08/09 - Tolerance & Alonzo",
        activities: {
            afternoon: [
                {
                    id: "0809_1",
                    text: "Brilehaven, Angler's Inn Square – Spend time with Earnest Youth (+4 Tolerance)",
                    type: "misc",
                    tags: ["tolerance"]
                }
            ],
            night: [
                {
                    id: "0809_2",
                    text: "Spend time with Alonzo (requires Rank 3 Tolerance) (Rank 4)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "08/10": {
        title: "08/10 - Coliseum Begins",
        activities: {
            afternoon: [
                {
                    id: "0810_1",
                    text: "Brilehaven, Coliseum – Accept 'Defeat the Coliseum Monster' quest, complete it immediately",
                    type: "quest",
                    tags: ["quest", "coliseum"]
                }
            ],
            night: [
                {
                    id: "0810_2",
                    text: "Brilehaven, Coliseum – Ranked Battle (Bronze 2) (+4 Courage)",
                    type: "misc",
                    tags: ["coliseum", "courage"]
                }
            ]
        }
    },
    "08/11": {
        title: "08/11 - Bronze 1 & Alonzo",
        activities: {
            afternoon: [
                {
                    id: "0811_1",
                    text: "Brilehaven, Coliseum – Ranked Battle (Bronze 1) (+4 Courage)",
                    type: "misc",
                    tags: ["coliseum", "courage"]
                }
            ],
            night: [
                {
                    id: "0811_2",
                    text: "Spend time with Alonzo (Rank 5)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "08/12": {
        title: "08/12 - Tolerance & Wisdom",
        activities: {
            afternoon: [
                {
                    id: "0812_1",
                    text: "Brilehaven, Angler's Inn Square – Spend time with Earnest Youth (+4 Tolerance, Rank 4 Tolerance)",
                    type: "misc",
                    tags: ["tolerance"]
                }
            ],
            night: [
                {
                    id: "0812_2",
                    text: "Brilehaven, Angler's Inn Square – Spend time at Watchtower (+4 Wisdom)",
                    type: "misc",
                    tags: ["wisdom"]
                }
            ]
        }
    },
    "08/13": {
        title: "08/13 - Boss Battle",
        activities: {
            afternoon: [
                {
                    id: "0813_1",
                    text: "Story boss battle. Earn 'On Knife's Edge' trophy after defeating boss",
                    type: "trophy",
                    tags: ["trophy", "story"]
                }
            ]
        }
    },
    "08/14": {
        title: "08/14 - Secret Poetry",
        activities: {
            afternoon: [
                {
                    id: "0814_1",
                    text: "Gauntlet Runner – Get new recipes from Cooking Table, cook Cursed Love Ballad",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0814_2",
                    text: "Gauntlet Runner – Read Top Secret Poetry! Do Not Read! (+5 Courage)",
                    type: "reading",
                    tags: ["reading", "courage"]
                }
            ],
            night: [
                {
                    id: "0814_3",
                    text: "Gauntlet Runner – Read Top Secret Poetry! Do Not Read! (+5 Courage)",
                    type: "reading",
                    tags: ["reading", "courage"]
                }
            ]
        }
    },
    "08/15": {
        title: "08/15 - Towering Seawall Drawing",
        activities: {
            afternoon: [
                {
                    id: "0815_1",
                    text: "Gauntlet Runner – Finish reading Top Secret Poetry! Do Not Read! (+10 Courage, Rank 4 Courage)",
                    type: "reading",
                    tags: ["reading", "courage"]
                },
                {
                    id: "0815_2",
                    text: "Get Towering Seawall Drawing during story event (+4 Wisdom)",
                    type: "drawing",
                    tags: ["drawing", "wisdom"]
                }
            ]
        }
    },
    "08/16": {
        title: "08/16 - Free Choice Day",
        activities: {
            afternoon: [
                {
                    id: "0816_1",
                    text: "Gauntlet Runner – Spend day with whoever you want (get +5 all stats accessory regardless of choice)",
                    type: "misc",
                    tags: ["free_choice"]
                }
            ],
            night: [
                {
                    id: "0816_2",
                    text: "Gauntlet Runner – Read The Future of Magic (+4 Wisdom)",
                    type: "reading",
                    tags: ["reading", "wisdom"]
                }
            ]
        }
    },
    "08/17": {
        title: "08/17 - Story",
        activities: {
            all_day: [
                {
                    id: "0817_1",
                    text: "Nothing but story progression",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "08/18": {
        title: "08/18 - Virga Island Gold Beetles",
        activities: {
            afternoon: [
                {
                    id: "0818_1",
                    text: "Virga Island – Buy ingredients from Boastful Shopkeeper",
                    type: "shopping",
                    tags: ["shopping"]
                },
                {
                    id: "0818_2",
                    text: "Virga Island – Buy ingredients from Water Seller",
                    type: "shopping",
                    tags: ["shopping"]
                },
                {
                    id: "0818_3",
                    text: "Virga Island – Collect Gold Beetle by Rooster Inn (22/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 22
                },
                {
                    id: "0818_4",
                    text: "Virga Island – Collect Gold Beetle behind Golden Deer Hearth (23/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 23
                },
                {
                    id: "0818_5",
                    text: "Virga Island – Collect Gold Beetle on walkway by Chief's House (24/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 24
                },
                {
                    id: "0818_6",
                    text: "Virga Island – Collect Gold Beetle on platform behind Dragon Statue (25/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 25
                },
                {
                    id: "0818_7",
                    text: "Virga Island – Collect Gold Beetle behind boxes near Gauntlet Runner (26/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 26
                },
                {
                    id: "0818_8",
                    text: "Gauntlet Runner – Chart course to Dragon Temple",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0818_9",
                    text: "Gauntlet Runner – Cook Stale Black Bread",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0818_10",
                    text: "Gauntlet Runner – Read Secret Poetry! Do Not Read! (+5 Courage)",
                    type: "reading",
                    tags: ["reading", "courage"]
                },
                {
                    id: "0818_11",
                    text: "Dragon Temple – Story events, automatically leave",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "08/19": {
        title: "08/19 - Virga Island Quests & Dragon Temple",
        activities: {
            afternoon: [
                {
                    id: "0819_1",
                    text: "Virga Island – Accept 'Peak Curiosity' quest from Dejected Man",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0819_2",
                    text: "Virga Island – Accept 'The Price of Hope' quest from Enthusiastic Woman",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0819_3",
                    text: "Virga Island, Golden Deer Hearth – Buy Secret of the Eugief's Stall from informant",
                    type: "shopping",
                    tags: ["shopping"]
                },
                {
                    id: "0819_4",
                    text: "Grand Trad, Recruitment Center – Accept 'The Greater One-Eyed Scoundrel' bounty",
                    type: "quest",
                    tags: ["quest", "bounty"]
                },
                {
                    id: "0819_5",
                    text: "Grand Trad, Comfort Concoctions – Collect Gold Beetle behind where pots used to be (27/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 27
                },
                {
                    id: "0819_6",
                    text: "Grand Trad, Comfort Concoctions – Buy Parchwater from shop",
                    type: "shopping",
                    tags: ["shopping"]
                },
                {
                    id: "0819_7",
                    text: "Virga Island – Turn in 'Ancestral Solution' main quest",
                    type: "quest",
                    tags: ["quest", "main"]
                },
                {
                    id: "0819_8",
                    text: "Virga Island – Accept 'A Guiding Gift' quest from Hoarse Fisher-Crone",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0819_9",
                    text: "Virga Island – Accept 'Save the Mourning Snakes' quest from Junah",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0819_10",
                    text: "Gauntlet Runner – Chart course for Dragon Temple",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0819_11",
                    text: "Gauntlet Runner – Read Bygone Days (+4 Tolerance)",
                    type: "reading",
                    tags: ["reading", "tolerance"]
                },
                {
                    id: "0819_12",
                    text: "Dragon Temple – Collect 3 Polar Stones, grind Magla Pills from Papyrga enemies",
                    type: "dungeon",
                    tags: ["dungeon", "grinding"]
                },
                {
                    id: "0819_13",
                    text: "Dragon Temple – Complete dungeon, defeat boss, unlock History Untold trophy",
                    type: "dungeon",
                    tags: ["dungeon", "trophy"]
                }
            ],
            night: [
                {
                    id: "0819_14",
                    text: "Story related battle only",
                    type: "story",
                    tags: ["story", "battle"]
                }
            ]
        }
    },
    "08/20": {
        title: "08/20 - Virga Island & Land of Ceremony",
        activities: {
            afternoon: [
                {
                    id: "0820_1",
                    text: "Virga Island – Turn in 'A Guiding Gift' quest",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0820_2",
                    text: "Virga Island – Accept 'The Trial of Malnova' quest from Eupha",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0820_3",
                    text: "Virga Island – Talk to Clumsy Boy beside well to get Gold Beetle (28/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 28
                },
                {
                    id: "0820_4",
                    text: "Virga Island – Use Edeni's weather clearing ability at Land of Ceremony (optional)",
                    type: "misc",
                    tags: ["misc"]
                },
                {
                    id: "0820_5",
                    text: "Virga Island – Buy ingredients from Village Butcher",
                    type: "shopping",
                    tags: ["shopping"]
                },
                {
                    id: "0820_6",
                    text: "Gauntlet Runner – Chart course to Land of Ceremony",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0820_7",
                    text: "Gauntlet Runner – Cook Almighty Golden Stew",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0820_8",
                    text: "Gauntlet Runner – Spend time with Eupha (+6 Imagination)",
                    type: "follower",
                    tags: ["follower", "imagination"]
                },
                {
                    id: "0820_9",
                    text: "Event – Get Prismatic Sea Drawing (+4 Wisdom)",
                    type: "misc",
                    tags: ["wisdom"]
                }
            ],
            night: [
                {
                    id: "0820_10",
                    text: "Gauntlet Runner – Cook Sweeter than Poison…",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0820_11",
                    text: "Gauntlet Runner – Read New World Travel Diary (+4 Imagination)",
                    type: "reading",
                    tags: ["reading", "imagination"]
                }
            ]
        }
    },
    "08/21": {
        title: "08/21 - Land of Ceremony Dungeon",
        activities: {
            afternoon: [
                {
                    id: "0821_1",
                    text: "Gauntlet Runner – Cook Sweeter than Poison…",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0821_2",
                    text: "Gauntlet Runner – Spend time with Eupha, choose option 3 (+6 Imagination)",
                    type: "follower",
                    tags: ["follower", "imagination"]
                },
                {
                    id: "0821_3",
                    text: "Land of Ceremony – Follow diagonal path on west side of Floor B2 to find Mossy Pillar for Neuras",
                    type: "misc",
                    tags: ["relic"]
                },
                {
                    id: "0821_4",
                    text: "Land of Ceremony – Collect Gold Beetle in corner near end of dungeon on first floor (29/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 29
                },
                {
                    id: "0821_5",
                    text: "Land of Ceremony – Complete dungeon, defeat boss, complete 'Trial of Malnova' quest, unlock Eupha (+4 Wisdom) (Rank 1)",
                    type: "dungeon",
                    tags: ["dungeon", "follower"]
                }
            ],
            night: [
                {
                    id: "0821_6",
                    text: "Skipped due to entering dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "08/22": {
        title: "08/22 - Orbwise Path Journey",
        activities: {
            afternoon: [
                {
                    id: "0822_1",
                    text: "Gauntlet Runner – Chart course for Orbwise Path",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0822_2",
                    text: "Gauntlet Runner – Cook Holistic Whitefish Platter",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0822_3",
                    text: "Gauntlet Runner – Read New World Travel Diary (+4 Imagination, Rank 4 Imagination)",
                    type: "reading",
                    tags: ["reading", "imagination"]
                },
                {
                    id: "0822_4",
                    text: "Orbwise Path – Collect Gold Beetle on right side of first floor (30/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 30
                },
                {
                    id: "0822_5",
                    text: "Orbwise Path – Go upstairs northwest, collect Gold Beetle in corner (31/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 31
                },
                {
                    id: "0822_6",
                    text: "Orbwise Path – Complete dungeon, defeat boss, complete 'Save the Mourning Snakes', unlock Junah (+4 Imagination) (Rank 1)",
                    type: "dungeon",
                    tags: ["dungeon", "follower"]
                },
                {
                    id: "0822_8",
                    text: "Afterwards set up camp instead and choose to go somewhere else.",
                    type: "travel",
                    tags: ["travel"]
                }
            ],
            night: [
                {
                    id: "0822_7",
                    text: "Gauntlet Runner – Read Pride and Persuasion (+4 Eloquence, Rank 4 Eloquence)",
                    type: "reading",
                    tags: ["reading", "eloquence"]
                }
            ]
        }
    },
    "08/23": {
        title: "08/23 - Spire of Blind Faith Journey",
        activities: {
            afternoon: [
                {
                    id: "0823_1",
                    text: "Gauntlet Runner – Chart course for Spire of Blind Faith, stop at Silento",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0823_2",
                    text: "Gauntlet Runner – go fishing with Tail Bait. Dialogue options: 'Nothing biting. Perhaps if the bait were moving…?' → Choose 'Thrash and Splash' for 1 Lord of the Lake + 2 Queen's Honey Jars. 'Yaaawn… Ah, I'm more tired than I realised. Hmm… How do I shake this?' → Choose 'Give into naptime' for 1 Lord of the Lake + 2 Queen's Honey Jars. 'Maybe it's all this staring at the water's surface, but… I'm starting to feel a bit queasy.' → Choose 'Think like a fish' for 1 Lord of the Lake + 2 Queen's Honey Jars",
                    type: "misc",
                    tags: ["fishing"]
                },
                {
                    id: "0823_3",
                    text: "Silento – Buy Archetype EXP items, then continue journey",
                    type: "shopping",
                    tags: ["shopping"]
                }
            ],
            night: [
                {
                    id: "0823_4",
                    text: "Gauntlet Runner – Cook Secretest of Secrets",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0823_5",
                    text: "Spend time with Neuras, complete 'Relic Search: Youth's Folly', start 'Relic Search: Engineer's Destiny' (Rank 4)",
                    type: "follower",
                    tags: ["follower", "quest"]
                }
            ]
        }
    },
    "08/24": {
        title: "08/24 - Reading & Events",
        activities: {
            afternoon: [
                {
                    id: "0824_1",
                    text: "Gauntlet Runner – Read The Future of Magic (+4 Wisdom)",
                    type: "reading",
                    tags: ["reading", "wisdom"]
                },
                {
                    id: "0824_2",
                    text: "Event – Get Sporico Cave Drawing (+4 Wisdom)",
                    type: "misc",
                    tags: ["wisdom"]
                }
            ],
            night: [
                {
                    id: "0824_3",
                    text: "Gauntlet Runner – Read The Future of Magic (+4 Wisdom)",
                    type: "reading",
                    tags: ["reading", "wisdom"]
                }
            ]
        }
    },
    "08/25": {
        title: "08/25 - Spire of Blind Faith",
        activities: {
            afternoon: [
                {
                    id: "0825_1",
                    text: "Gauntlet Runner – Spend time with Eupha, choose option 2 (+6 Imagination)",
                    type: "follower",
                    tags: ["follower", "imagination"]
                },
                {
                    id: "0825_2",
                    text: "Spire of Blind Faith – Fight through with Heat weather effect",
                    type: "dungeon",
                    tags: ["dungeon"]
                },
                {
                    id: "0825_3",
                    text: "Spire of Blind Faith – Collect Gold Beetle on 6th floor (32/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 32
                },
                {
                    id: "0825_4",
                    text: "Spire of Blind Faith – Complete dungeon, defeat boss",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ],
            night: [
                {
                    id: "0825_5",
                    text: "Skipped due to entering dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "08/26": {
        title: "08/26 - Virga Island Quests & More",
        activities: {
            afternoon: [
                {
                    id: "0826_1",
                    text: "Virga Island – Turn in 'Peak Curiosity' quest (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "courage"]
                },
                {
                    id: "0826_2",
                    text: "Virga Island – Talk to More to visit Akademia, turn in 'More's Task Chapter Four: Turmoil', accept 'More's Task Chapter Five: Resolve' (+4 Imagination) (Rank 6)",
                    type: "quest",
                    tags: ["quest", "imagination"]
                },
                {
                    id: "0826_3",
                    text: "Akademia – Craft masks and vessels, unlock For Science! trophy",
                    type: "misc",
                    tags: ["crafting", "trophy"]
                },
                {
                    id: "0826_4",
                    text: "Spend time with Eupha (Rank 2)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0826_5",
                    text: "Spend time with Junah (Rank 2)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "08/27": {
        title: "08/27 - Follower Ranks",
        activities: {
            afternoon: [
                {
                    id: "0827_1",
                    text: "Spend time with Hulkenberg (requires Rank 4 Wisdom) (Rank 7)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0827_2",
                    text: "Spend time with Heismay (requires Rank 4 Imagination) (Rank 7)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "08/28": {
        title: "08/28 - Follower Ranks",
        activities: {
            afternoon: [
                {
                    id: "0828_1",
                    text: "Spend time with Eupha (Rank 3)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0828_2",
                    text: "Spend time with Junah (Rank 3)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "08/29": {
        title: "08/29 - Scoundrel's Hold Journey",
        activities: {
            afternoon: [
                {
                    id: "0829_1",
                    text: "Gauntlet Runner – Chart course to Scoundrel's Hold, stop at Ligno",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0829_2",
                    text: "Spend time with Hulkenberg (Rank 8)",
                    type: "follower",
                    tags: ["follower"]
                },
                {
                    id: "0829_3",
                    text: "Ligno – Buy useful weapons, especially for Masked Dancer",
                    type: "shopping",
                    tags: ["shopping"]
                }
            ],
            night: [
                {
                    id: "0829_4",
                    text: "Spend time with Heismay (Rank 8)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "08/30": {
        title: "08/30 - Scoundrel's Hold Dungeon",
        activities: {
            afternoon: [
                {
                    id: "0830_1",
                    text: "Gauntlet Runner – Read Pride and Persuasion (+4 Eloquence)",
                    type: "reading",
                    tags: ["reading", "eloquence"]
                },
                {
                    id: "0830_2",
                    text: "Scoundrel's Hold – Go left at start, through hole in wall to get Parquet Chest for Neuras",
                    type: "misc",
                    tags: ["relic"]
                },
                {
                    id: "0830_3",
                    text: "Scoundrel's Hold – On last floor, climb ladder south, follow path to Gold Beetle (33/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 33
                },
                {
                    id: "0830_4",
                    text: "Scoundrel's Hold – Complete dungeon, defeat boss",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ],
            night: [
                {
                    id: "0830_5",
                    text: "Skipped due to entering dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "09/01": {
        title: "09/01 - Quest Turn-ins & More",
        activities: {
            afternoon: [
                {
                    id: "0901_1",
                    text: "Grand Trad, Recruitment Center – Turn in 'The Greater One-Eyed Scoundrel' bounty (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "courage"]
                },
                {
                    id: "0901_2",
                    text: "Grand Trad, Sunshade Row – Talk to More, go to Akademia, turn in 'More's Task Chapter Five: Resolve', accept 'More's Task Chapter Six: The End' (+4 Imagination) (Rank 7)",
                    type: "quest",
                    tags: ["quest", "imagination"]
                },
                {
                    id: "0901_3",
                    text: "Spend time with Alonzo (Rank 6)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0901_4",
                    text: "Grand Trad, Hushed Honeybee Inn – Make save, help Fabienne cook, unlock Chef in Training trophy, reload save",
                    type: "misc",
                    tags: ["trophy"]
                },
                {
                    id: "0901_5",
                    text: "Spend time with Junah (Rank 4)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "09/02": {
        title: "09/02 - Follower Ranks",
        activities: {
            afternoon: [
                {
                    id: "0902_1",
                    text: "Spend time with Eupha (Rank 4)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0902_2",
                    text: "Spend time with Brigitta (requires Rank 4 Courage) (Rank 7)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "09/03": {
        title: "09/03 - Follower Ranks",
        activities: {
            afternoon: [
                {
                    id: "0903_1",
                    text: "Spend time with Maria (requires Rank 4 Tolerance) (Rank 7)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0903_2",
                    text: "Spend time with Junah (requires Rank 4 Imagination) (Rank 5)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "09/04": {
        title: "09/04 - Follower Ranks",
        activities: {
            afternoon: [
                {
                    id: "0904_1",
                    text: "Spend time with Eupha (Rank 5)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0904_2",
                    text: "Spend time with Neuras, complete 'Relic Search: Engineer's Destiny', start 'Relic Search: Bitter Memories' (Rank 5)",
                    type: "follower",
                    tags: ["follower", "quest"]
                }
            ]
        }
    },
    "09/05": {
        title: "09/05 - Maria Max Rank",
        activities: {
            afternoon: [
                {
                    id: "0905_1",
                    text: "Spend time with Maria (Rank 8)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0905_2",
                    text: "Skipped due to story events",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "09/06": {
        title: "09/06 - Unique Weapon Choice",
        activities: {
            afternoon: [
                {
                    id: "0906_1",
                    text: "Spend time with party member of choice, get unique weapon for their main class",
                    type: "follower",
                    tags: ["follower", "weapon"]
                }
            ]
        }
    },
    "09/07": {
        title: "09/07 - Reading",
        activities: {
            afternoon: [
                {
                    id: "0907_1",
                    text: "Gauntlet Runner – Read How to Walk Outside the Island (+6 Tolerance)",
                    type: "reading",
                    tags: ["reading", "tolerance"]
                }
            ],
            night: [
                {
                    id: "0907_2",
                    text: "Gauntlet Runner – Read How to Walk Outside the Island (+6 Tolerance)",
                    type: "reading",
                    tags: ["reading", "tolerance"]
                }
            ]
        }
    },
    "09/08": {
        title: "09/08 - Reading & Events",
        activities: {
            afternoon: [
                {
                    id: "0908_1",
                    text: "Gauntlet Runner – Finish reading How to Walk Outside the Island (+12 Tolerance, Rank 5 Tolerance)",
                    type: "reading",
                    tags: ["reading", "tolerance"]
                },
                {
                    id: "0908_2",
                    text: "Event – Get Colerodio Cliff Drawing (+4 Wisdom)",
                    type: "misc",
                    tags: ["wisdom"]
                }
            ],
            night: [
                {
                    id: "0908_3",
                    text: "Gauntlet Runner – Read Pride and Persuasion (+4 Eloquence)",
                    type: "reading",
                    tags: ["reading", "eloquence"]
                }
            ]
        }
    },
    "09/09": {
        title: "09/09 - Altabury Heights Gold Beetles",
        activities: {
            afternoon: [
                {
                    id: "0909_1",
                    text: "Gauntlet Runner – Read The Future of Magic (+4 Wisdom)",
                    type: "reading",
                    tags: ["reading", "wisdom"]
                },
                {
                    id: "0909_2",
                    text: "Event – Get Murky Graveyard Drawing (+4 Wisdom)",
                    type: "misc",
                    tags: ["wisdom"]
                }
            ],
            night: [
                {
                    id: "0909_3",
                    text: "Altabury Heights, Lunlumo Approach – Collect Gold Beetle on right sidewalk (34/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 34
                },
                {
                    id: "0909_4",
                    text: "Altabury Heights, Lunlumo Approach – Collect Gold Beetle at bottom of stairs near bridge (35/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 35
                },
                {
                    id: "0909_5",
                    text: "Altabury Heights, Whitepeaks Magic Shop – Interact with pot to get Gold Beetle (36/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 36
                },
                {
                    id: "0909_6",
                    text: "Altabury Heights, Blue Sky Bridge – Collect Gold Beetle by pillars (37/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 37
                },
                {
                    id: "0909_7",
                    text: "Altabury Heights, Opera House Square – Collect Gold Beetle at end of giant bridge (38/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 38
                }
            ]
        }
    },
    "09/10": {
        title: "09/10 - Story",
        activities: {
            afternoon: [
                {
                    id: "0910_1",
                    text: "Story progression, unlock Mission Accomplished trophy",
                    type: "story",
                    tags: ["story", "trophy"]
                }
            ]
        }
    },
    "09/11": {
        title: "09/11-09/12 - Story",
        activities: {
            all_day: [
                {
                    id: "0911_1",
                    text: "Story progression only",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "09/13": {
        title: "09/13 - Altabury Heights Setup",
        activities: {
            afternoon: [
                {
                    id: "0913_1",
                    text: "Altabury Heights, Dia Franco Street – Talk to Loveless to mark his Gauntlet Runner",
                    type: "misc",
                    tags: ["misc"]
                },
                {
                    id: "0913_2",
                    text: "Altabury Heights, Dia Franco Street – Talk to Rudolf to mark his Gauntlet Runner",
                    type: "misc",
                    tags: ["misc"]
                },
                {
                    id: "0913_3",
                    text: "Altabury Heights, Dia Franco Street – Buy ingredients from Dedicated Butcher",
                    type: "shopping",
                    tags: ["shopping"]
                },
                {
                    id: "0913_4",
                    text: "Altabury Heights, Dia Franco Street – Accept 'Warmth in Winter' quest from Portly Man",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0913_5",
                    text: "Altabury Heights, Opera House Square – Accept 'Proof of Power' quest from Obsessive Soldier",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0913_6",
                    text: "Altabury Heights, Recruitment Center – Accept 'The Fiend in the Frozen Forest' bounty",
                    type: "quest",
                    tags: ["quest", "bounty"]
                },
                {
                    id: "0913_7",
                    text: "Altabury Heights, Skyward Tavern – Collect Gold Beetle by barrels in corner (39/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 39
                },
                {
                    id: "0913_8",
                    text: "Spend time with Eupha, accept 'Wayward Shepherd' quest (requires Rank 4 Eloquence) (Rank 6)",
                    type: "follower",
                    tags: ["follower", "quest"]
                }
            ],
            night: [
                {
                    id: "0913_9",
                    text: "Altabury Heights, Blue Sky Bridge – Debate Julian at podium, choose option 3, unlock Debate Me trophy (+7 Eloquence, +2 Imagination)",
                    type: "misc",
                    tags: ["trophy", "eloquence", "imagination"]
                }
            ]
        }
    },
    "09/14": {
        title: "09/14 - Fishing & More",
        activities: {
            afternoon: [
                {
                    id: "0914_1",
                    text: "Blue Sky Bridge – Help Man in Pain to get another Tail Bait",
                    type: "misc",
                    tags: ["misc"]
                },
                {
                    id: "0914_2",
                    text: "Gauntlet Runner – Chart course to Orbwise Path for fishing",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0914_3",
                    text: "Gauntlet Runner – Cook Finisher Noodles",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0914_4",
                    text: "Gauntlet Runner – Make backup save, go fishing with Tail Bait for 1 Lord of the Lake and 2 Queen's Honey Jars",
                    type: "misc",
                    tags: ["fishing"]
                },
                {
                    id: "0914_5",
                    text: "Orbwise Path – Arrive and instantly leave",
                    type: "misc",
                    tags: ["travel"]
                }
            ],
            night: [
                {
                    id: "0914_6",
                    text: "Spend time with Catherina (Rank 5)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "09/15": {
        title: "09/15 - Everfrost Forest",
        activities: {
            afternoon: [
                {
                    id: "0915_1",
                    text: "Gauntlet Runner – Chart course for Everfrost Forest",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0915_2",
                    text: "Gauntlet Runner – Cook Amber Stew",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0915_3",
                    text: "Spend time with Basilio (Rank 1)",
                    type: "follower",
                    tags: ["follower"]
                },
                {
                    id: "0915_4",
                    text: "Event – Get Solstice Crossing Drawing (+4 Wisdom)",
                    type: "misc",
                    tags: ["wisdom"]
                },
                {
                    id: "0915_5",
                    text: "Everfrost Forest – Collect Gold Beetle at bottom left of map (40/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 40
                },
                {
                    id: "0915_6",
                    text: "Everfrost Forest – Collect Panhandled Ore on right side for Neuras",
                    type: "misc",
                    tags: ["relic"]
                },
                {
                    id: "0915_7",
                    text: "Everfrost Forest – Complete dungeon, defeat boss",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ],
            night: [
                {
                    id: "0915_8",
                    text: "Skipped due to entering dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "09/16": {
        title: "09/16 - Tower of Insolence",
        activities: {
            afternoon: [
                {
                    id: "0916_1",
                    text: "Altabury Heights, Recruitment Center – Turn in 'The Fiend in the Frozen Forest' bounty (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "courage"]
                },
                {
                    id: "0916_2",
                    text: "Virga Island – Use Edeni's ability to clear weather on Tower of Insolence",
                    type: "misc",
                    tags: ["misc"]
                },
                {
                    id: "0916_3",
                    text: "Gauntlet Runner – Chart course to Tower of Insolence",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0916_4",
                    text: "Spend time with Junah (Rank 6)",
                    type: "follower",
                    tags: ["follower"]
                },
                {
                    id: "0916_5",
                    text: "Event – Get Decaying Estate Drawing (+4 Wisdom)",
                    type: "misc",
                    tags: ["wisdom"]
                },
                {
                    id: "0916_6",
                    text: "Tower of Insolence – Collect Gold Beetle on second floor (41/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 41
                },
                {
                    id: "0916_7",
                    text: "Tower of Insolence – Complete dungeon, defeat boss",
                    type: "dungeon",
                    tags: ["dungeon"]
                }
            ],
            night: [
                {
                    id: "0916_8",
                    text: "Skipped due to entering dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "09/17": {
        title: "09/17 - Quest Turn-ins",
        activities: {
            afternoon: [
                {
                    id: "0917_1",
                    text: "Altabury Heights, Opera House Square – Turn in 'Proof of Power' quest (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "courage"]
                },
                {
                    id: "0917_2",
                    text: "Spend time with Basilio (Rank 2)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0917_3",
                    text: "Spend time with Catherina (requires Rank 5 Tolerance) (Rank 6)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "09/18": {
        title: "09/18 - Bardon Boss Fight",
        activities: {
            afternoon: [
                {
                    id: "0918_1",
                    text: "Spend time with Bardon, fight boss, complete 'The Right to Rule' quest (boss weak to Ice) (+4 Courage) (Rank 7)",
                    type: "follower",
                    tags: ["follower", "quest", "courage"]
                }
            ],
            night: [
                {
                    id: "0918_2",
                    text: "Spend time with Junah (Rank 7)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "09/19": {
        title: "09/19 - Mt. Vulkano",
        activities: {
            afternoon: [
                {
                    id: "0919_1",
                    text: "Gauntlet Runner – Chart course for Mt. Vulkano",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0919_2",
                    text: "Spend time with Basilio (Rank 3)",
                    type: "follower",
                    tags: ["follower"]
                },
                {
                    id: "0919_3",
                    text: "Mt. Vulkano – Follow left ladder path to Gold Beetle, continue to find Stitched Sphere for Neuras (42/50)",
                    type: "beetle",
                    tags: ["beetle", "relic"],
                    beetleNumber: 42
                },
                {
                    id: "0919_4",
                    text: "Mt. Vulkano – Floor B4, go up center ladder through hole for Rusty Greatsword",
                    type: "misc",
                    tags: ["misc"]
                },
                {
                    id: "0919_5",
                    text: "Mt. Vulkano – Complete dungeon, defeat boss, complete 'Wayward Shepherd' quest (+4 Eloquence, Rank 5 Eloquence)",
                    type: "dungeon",
                    tags: ["dungeon", "quest", "eloquence"]
                }
            ],
            night: [
                {
                    id: "0919_6",
                    text: "Skipped due to entering dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "09/20": {
        title: "09/20 - Coliseum Battles",
        activities: {
            afternoon: [
                {
                    id: "0920_1",
                    text: "Brilehaven, Coliseum – Ranked Battle (Silver 3) (+4 Courage, Rank 5 Courage)",
                    type: "misc",
                    tags: ["coliseum", "courage"]
                }
            ],
            night: [
                {
                    id: "0920_2",
                    text: "Spend time with Catherina (Rank 7)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "09/21": {
        title: "09/21 - Follower Ranks",
        activities: {
            afternoon: [
                {
                    id: "0921_1",
                    text: "Spend time with Basilio (Rank 4)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0921_2",
                    text: "Spend time with Alonzo (requires Rank 5 Courage) (Rank 7)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "09/22": {
        title: "09/22 - Coliseum & Follower",
        activities: {
            afternoon: [
                {
                    id: "0922_1",
                    text: "Brilehaven, Coliseum – Ranked Battle (Silver 2) (+4 Courage)",
                    type: "misc",
                    tags: ["coliseum", "courage"]
                }
            ],
            night: [
                {
                    id: "0922_2",
                    text: "Spend time with Catherina (Rank 8)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "09/23": {
        title: "09/23 - Story",
        activities: {
            all_day: [
                {
                    id: "0923_1",
                    text: "Story progression only",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "09/24": {
        title: "09/24 - Plaza of Light (Missable!)",
        activities: {
            afternoon: [
                {
                    id: "0924_1",
                    text: "Plaza of Light – After cutscene at fountain, collect Gold Beetle by burned houses (HIGHLY MISSABLE!) (43/50)",
                    type: "beetle",
                    tags: ["beetle", "missable"],
                    beetleNumber: 43
                },
                {
                    id: "0924_2",
                    text: "Continue story progression, unlock His Majesty trophy",
                    type: "story",
                    tags: ["story", "trophy"]
                }
            ]
        }
    },
    "09/25": {
        title: "09/25 - Story",
        activities: {
            all_day: [
                {
                    id: "0925_1",
                    text: "Story progression only",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "09/26": {
        title: "09/26 - Many Quests & Gold Beetles",
        activities: {
            afternoon: [
                {
                    id: "0926_1",
                    text: "Grand Trad, Sunshade Row – Turn in 'More's Task Chapter Six: The End' (+4 Imagination) (Rank 8)",
                    type: "quest",
                    tags: ["quest", "imagination"]
                },
                {
                    id: "0926_2",
                    text: "Grand Trad, Sunshade Row – Accept 'The Edge of Glory' from Ornamented Man, instantly turn in with Rusted Greatsword (+4 Wisdom, Rank 5 Wisdom)",
                    type: "quest",
                    tags: ["quest", "wisdom"]
                },
                {
                    id: "0926_3",
                    text: "Grand Trad, Sunlumeo Street – Accept 'The Queen of Cuisine: Soul' from Classy Woman",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0926_4",
                    text: "Grand Trad, Recruitment Center – Accept bounties: 'The Cockatrice in the Clouds', 'The Apostles of the Apocalypse', 'The Incarnate in the Woods'",
                    type: "quest",
                    tags: ["quest", "bounty"]
                },
                {
                    id: "0926_5",
                    text: "Brilehaven, Angler's Inn Square – Accept 'Trial of the Dragon: Mad Mischief' from Gabby Mustari",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0926_6",
                    text: "Virga Island – Accept 'Trial of the Dragon: Heroes' Rest' from Edeni",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0926_7",
                    text: "Altabury Heights, Blue Sky Bridge – Accept 'Trial of the Dragon: Bygone Legacy' from Enraged Mustari",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0926_8",
                    text: "Altabury Heights, Blue Sky Bridge – Accept 'Deliver Hot Spring Water' from Gentle Merchant",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0926_9",
                    text: "Martira, Cattleracket Road – Collect Gold Beetle by cow at bottom of stairs (44/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 44
                },
                {
                    id: "0926_10",
                    text: "Martira, MesmerEyes Apothecary – Collect Gold Beetle by sack of grain (45/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 45
                },
                {
                    id: "0926_11",
                    text: "Grand Trad, Regalith Grand Cathedral – Collect Gold Beetle in merchant stalls (46/50)",
                    type: "beetle",
                    tags: ["beetle"],
                    beetleNumber: 46
                },
                {
                    id: "0926_12",
                    text: "Brilehaven, Arenafront Wharf – Optional: Turn in Gold Beetles to unlock All that Glitters trophy",
                    type: "misc",
                    tags: ["trophy"]
                },
                {
                    id: "0926_13",
                    text: "Gauntlet Runner – Chart course to Abandoned Path, stop at Malva",
                    type: "misc",
                    tags: ["travel"]
                },
                {
                    id: "0926_14",
                    text: "Gauntlet Runner – Read Literacy Workbook (+6 Imagination)",
                    type: "reading",
                    tags: ["reading", "imagination"]
                },
                {
                    id: "0926_15",
                    text: "Encounter and fight Loveless's Gauntlet Runner",
                    type: "misc",
                    tags: ["battle"]
                },
                {
                    id: "0926_16",
                    text: "Malva – Arrive, unlock Globetrotter trophy, buy Altabury Wheat Flour and Durable Spider Silk",
                    type: "shopping",
                    tags: ["shopping", "trophy"]
                }
            ],
            night: [
                {
                    id: "0926_17",
                    text: "Gauntlet Runner – Cook Indestructible Honey Cake",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0926_18",
                    text: "Gauntlet Runner – Read Literacy Workbook (+6 Imagination, Rank 5 Imagination)",
                    type: "reading",
                    tags: ["reading", "imagination"]
                }
            ]
        }
    },
    "09/27": {
        title: "09/27 - Abandoned Path",
        activities: {
            afternoon: [
                {
                    id: "0927_1",
                    text: "Gauntlet Runner – Cook Enchanted Pottage",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "0927_2",
                    text: "Gauntlet Runner – Read Literacy Workbook (finish) (+12 Imagination, unlock 'Bookworm' trophy)",
                    type: "reading",
                    tags: ["reading", "imagination", "trophy"]
                },
                {
                    id: "0927_3",
                    text: "Abandoned Path – Collect Gold Beetle at northmost point (47/50)",
                    type: "collection",
                    tags: ["collection", "gold_beetle"]
                },
                {
                    id: "0927_4",
                    text: "Abandoned Path – Clear dungeon and defeat boss",
                    type: "dungeon",
                    tags: ["dungeon", "boss"]
                }
            ],
            night: [
                {
                    id: "0927_5",
                    text: "Skipped due to entering a dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "09/28": {
        title: "09/28 - Quest Turn-ins & Basilio",
        activities: {
            afternoon: [
                {
                    id: "0928_1",
                    text: "Grand Trad, Recruitment Center – Turn in 'The Incarnate of the Woods' bounty (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "bounty", "courage"]
                },
                {
                    id: "0928_2",
                    text: "Grand Trad, Sunlumeo Street – Turn in 'The Queen of Cuisine: Soul' quest (+4 Eloquence)",
                    type: "quest",
                    tags: ["quest", "eloquence"]
                },
                {
                    id: "0928_3",
                    text: "Altabury Heights, Dia Franco Street – Accept 'Defeat Milo' quest from Loveless",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "0928_4",
                    text: "Altabury Heights, Dia Franco Street – Turn in 'Warmth in Winter' quest (+4 Tolerance)",
                    type: "quest",
                    tags: ["quest", "tolerance"]
                },
                {
                    id: "0928_5",
                    text: "Altabury Heights, Lunlumo Approach – Talk to Milo to mark his Gauntlet Runner",
                    type: "map",
                    tags: ["map"]
                },
                {
                    id: "0928_6",
                    text: "Spend time with Basilio (Rank 5)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "0928_7",
                    text: "Spend time with Neuras. Complete 'Relic Search: Bitter Memories', start 'Relic Search: A Dream's Origin' (Rank 6)",
                    type: "follower",
                    tags: ["follower", "quest"]
                }
            ]
        }
    },
    "09/29": {
        title: "09/29 - Eupha & Neuras Progress",
        activities: {
            afternoon: [
                {
                    id: "0929_1",
                    text: "Spend time with Eupha. Requires Rank 5 Wisdom (Rank 7)",
                    type: "follower",
                    tags: ["follower", "wisdom"]
                }
            ],
            night: [
                {
                    id: "0929_2",
                    text: "Spend time with Neuras. Complete 'Relic Search: A Dream's Origin', start 'Petty Thief' (Rank 7)",
                    type: "follower",
                    tags: ["follower", "quest"]
                }
            ]
        }
    },
    "09/30": {
        title: "09/30 - Jin & Alonzo",
        activities: {
            afternoon: [
                {
                    id: "0930_1",
                    text: "Grand Trad, Regalith Grand Cathedral – Talk to Grand Cathedral Guard to mark Jin's Gauntlet Runner",
                    type: "map",
                    tags: ["map"]
                },
                {
                    id: "0930_2",
                    text: "Spend time with Basilio. Requires Rank 5 Imagination (Rank 6)",
                    type: "follower",
                    tags: ["follower", "imagination"]
                }
            ],
            night: [
                {
                    id: "0930_3",
                    text: "Spend time with Alonzo. Accept 'A Rake's Last Wish' quest (Rank 8)",
                    type: "follower",
                    tags: ["follower", "quest"]
                }
            ]
        }
    },
    "10/01": {
        title: "10/01 - Bardon & Dataram",
        activities: {
            afternoon: [
                {
                    id: "1001_1",
                    text: "Spend time with Bardon (Rank 8)",
                    type: "follower",
                    tags: ["follower"]
                }
            ],
            night: [
                {
                    id: "1001_2",
                    text: "Brilehaven, Angler's Inn Square – Talk to Dataram to complete 'A Rake's Last Wish'",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "1001_3",
                    text: "Spend time with Junah (Rank 8)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "10/02": {
        title: "10/02 - Brother's Mercy & Brigitta",
        activities: {
            afternoon: [
                {
                    id: "1002_1",
                    text: "Spend time with Basilio. Accept 'A Brother's Mercy' quest (Rank 7)",
                    type: "follower",
                    tags: ["follower", "quest"]
                }
            ],
            night: [
                {
                    id: "1002_2",
                    text: "Spend time with Brigitta (Rank 8)",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "10/03": {
        title: "10/03 - Manor of the Ascendant",
        activities: {
            afternoon: [
                {
                    id: "1003_1",
                    text: "Gauntlet Runner – Chart course to Manor of the Ascendant",
                    type: "travel",
                    tags: ["travel"]
                },
                {
                    id: "1003_2",
                    text: "Gauntlet Runner – Cook Adamantine Honey Cake",
                    type: "cooking",
                    tags: ["cooking"]
                },
                {
                    id: "1003_3",
                    text: "Spend time with Eupha (Rank 8)",
                    type: "follower",
                    tags: ["follower"]
                },
                {
                    id: "1003_4",
                    text: "Manor of the Ascendant – Collect Gold Beetle after crossing beams on 2nd floor (48/50)",
                    type: "collection",
                    tags: ["collection", "gold_beetle"]
                },
                {
                    id: "1003_5",
                    text: "Manor of the Ascendant – Clear dungeon and defeat boss",
                    type: "dungeon",
                    tags: ["dungeon", "boss"]
                }
            ],
            night: [
                {
                    id: "1003_6",
                    text: "Skipped due to entering a dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "10/04": {
        title: "10/04 - Disgraced Ruins & Cuisine King",
        activities: {
            afternoon: [
                {
                    id: "1004_1",
                    text: "Grand Trad, Recruitment Center – Turn in 'The Cockatrice in the Clouds' bounty (+4 Courage)",
                    type: "quest",
                    tags: ["quest", "bounty", "courage"]
                },
                {
                    id: "1004_2",
                    text: "Gauntlet Runner – Chart course to Disgraced Ruins",
                    type: "travel",
                    tags: ["travel"]
                },
                {
                    id: "1004_3",
                    text: "Gauntlet Runner – Cook Precision Fermented Ribs Sublime Spoonful (unlock 'Cuisine King' trophy)",
                    type: "cooking",
                    tags: ["cooking", "trophy"]
                },
                {
                    id: "1004_4",
                    text: "During event: Get Malibelo Stope Drawing (unlock 'Vista Viewer' trophy) (+4 Wisdom)",
                    type: "story",
                    tags: ["story", "wisdom", "trophy"]
                },
                {
                    id: "1004_5",
                    text: "Disgraced Ruins – Collect Gold Beetle at start, follow left path (49/50)",
                    type: "collection",
                    tags: ["collection", "gold_beetle"]
                },
                {
                    id: "1004_6",
                    text: "Disgraced Ruins – Clear dungeon and defeat boss",
                    type: "dungeon",
                    tags: ["dungeon", "boss"]
                }
            ],
            night: [
                {
                    id: "1004_7",
                    text: "Skipped due to entering a dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "10/05": {
        title: "10/05 - Final Bounty & Hot Spring",
        activities: {
            afternoon: [
                {
                    id: "1005_1",
                    text: "Grand Trad, Recruitment Center – Turn in 'The Apostles of Apocalypse' bounty",
                    type: "quest",
                    tags: ["quest", "bounty"]
                },
                {
                    id: "1005_2",
                    text: "Spend time with Basilio. Requires Rank 5 Eloquence. Complete 'A Brother's Mercy' (+4 Tolerance) (Rank 8)",
                    type: "follower",
                    tags: ["follower", "quest", "tolerance", "eloquence"]
                }
            ],
            night: [
                {
                    id: "1005_3",
                    text: "Altabury Heights, Blue Sky Bridge – Visit Hot Spring to get Hot Spring Water",
                    type: "collection",
                    tags: ["collection"]
                }
            ]
        }
    },
    "10/06": {
        title: "10/06 - Final Gold Beetle & Jin Battle",
        activities: {
            afternoon: [
                {
                    id: "1006_1",
                    text: "Altabury Heights, Blue Sky Bridge – Turn in 'Deliver Hot Spring Water' quest (get Gold Beetle 50/50)",
                    type: "quest",
                    tags: ["quest", "gold_beetle", "collection"]
                },
                {
                    id: "1006_2",
                    text: "Brilehaven, Arenafront Wharf – Turn in all Gold Beetles to Elderly Entomophile (unlock 'All that Glitters' trophy)",
                    type: "quest",
                    tags: ["quest", "collection", "trophy"]
                },
                {
                    id: "1006_3",
                    text: "Gauntlet Runner – Chart course to Jin's Gauntlet Runner",
                    type: "travel",
                    tags: ["travel"]
                },
                {
                    id: "1006_4",
                    text: "Gauntlet Runner – Cook Sublime Spoonful (unlock 'Cuisine King' trophy)",
                    type: "cooking",
                    tags: ["cooking", "trophy"]
                },
                {
                    id: "1006_5",
                    text: "Defeat Jin, complete 'Petty Thief' for Neuras (unlock 'Hearts as One' trophy) (Rank 8)",
                    type: "battle",
                    tags: ["battle", "quest", "follower", "trophy"]
                }
            ],
            night: [
                {
                    id: "1006_6",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ]
        }
    },
    "10/07": {
        title: "10/07 - Milo Battle & Coliseum",
        activities: {
            afternoon: [
                {
                    id: "1007_1",
                    text: "Gauntlet Runner – Chart course to Milo's Gauntlet Runner",
                    type: "travel",
                    tags: ["travel"]
                },
                {
                    id: "1007_2",
                    text: "Gauntlet Runner – Free time",
                    type: "free",
                    tags: ["free"]
                }
            ],
            night: [
                {
                    id: "1007_3",
                    text: "Altabury Heights, Dia Franco Street – Turn in 'Defeat Milo' quest",
                    type: "quest",
                    tags: ["quest"]
                },
                {
                    id: "1007_4",
                    text: "Brilehaven, Coliseum – Ranked Battle (Silver 1) (+4 Courage)",
                    type: "coliseum",
                    tags: ["coliseum", "courage"]
                }
            ]
        }
    },
    "10/08": {
        title: "10/08 - Skybound Avatar",
        activities: {
            afternoon: [
                {
                    id: "1008_1",
                    text: "Gauntlet Runner – Chart course to Skybound Avatar",
                    type: "travel",
                    tags: ["travel"]
                },
                {
                    id: "1008_2",
                    text: "Skybound Avatar – Defeat boss (unlock 'Skybound Hope' and 'Worldly Wisdom' trophies)",
                    type: "dungeon",
                    tags: ["dungeon", "boss", "trophy"]
                }
            ],
            night: [
                {
                    id: "1008_3",
                    text: "Skipped due to entering a dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "10/09": {
        title: "10/09 - Trial of the Dragon: Mad Mischief",
        activities: {
            afternoon: [
                {
                    id: "1009_1",
                    text: "Gauntlet Runner – Chart course to Forsaken Tower",
                    type: "travel",
                    tags: ["travel"]
                },
                {
                    id: "1009_2",
                    text: "Gauntlet Runner – Free time",
                    type: "free",
                    tags: ["free"]
                },
                {
                    id: "1009_3",
                    text: "Forsaken Tower – Defeat dragon boss to complete 'Trial of the Dragon: Mad Mischief'",
                    type: "dungeon",
                    tags: ["dungeon", "boss", "quest"]
                }
            ],
            night: [
                {
                    id: "1009_4",
                    text: "Skipped due to entering a dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "10/10": {
        title: "10/10 - Trial of the Dragon: Heroes' Rest",
        activities: {
            afternoon: [
                {
                    id: "1010_1",
                    text: "Virga Island – Use Edeni's power to clear weather on Spire of Blind Faith",
                    type: "utility",
                    tags: ["utility", "weather"]
                },
                {
                    id: "1010_2",
                    text: "Gauntlet Runner – Chart course to Spire of Blind Faith",
                    type: "travel",
                    tags: ["travel"]
                },
                {
                    id: "1010_3",
                    text: "Gauntlet Runner – Free time",
                    type: "free",
                    tags: ["free"]
                },
                {
                    id: "1010_4",
                    text: "Spire of Blind Faith – Defeat dragon boss to complete 'Trial of the Dragon: Heroes' Rest'",
                    type: "dungeon",
                    tags: ["dungeon", "boss", "quest"]
                }
            ],
            night: [
                {
                    id: "1010_5",
                    text: "Skipped due to entering a dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "10/11": {
        title: "10/11 - Trial of the Dragon: Bygone Legacy",
        activities: {
            afternoon: [
                {
                    id: "1011_1",
                    text: "Gauntlet Runner – Chart course to Tower of Insolence",
                    type: "travel",
                    tags: ["travel"]
                },
                {
                    id: "1011_2",
                    text: "Gauntlet Runner – Free time",
                    type: "free",
                    tags: ["free"]
                },
                {
                    id: "1011_3",
                    text: "Tower of Insolence – Defeat dragon boss to complete 'Trial of the Dragon: Bygone Legacy' and accept 'Trial of the Dragon: Essence of Power'",
                    type: "dungeon",
                    tags: ["dungeon", "boss", "quest"]
                }
            ],
            night: [
                {
                    id: "1011_4",
                    text: "Skipped due to entering a dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "10/12": {
        title: "10/12 - Trial of the Dragon: Essence of Power",
        activities: {
            afternoon: [
                {
                    id: "1012_1",
                    text: "Gauntlet Runner – Chart course to Dragon Temple",
                    type: "travel",
                    tags: ["travel"]
                },
                {
                    id: "1012_2",
                    text: "Gauntlet Runner – Free time",
                    type: "free",
                    tags: ["free"]
                },
                {
                    id: "1012_3",
                    text: "Dragon Temple – Defeat dragon boss to complete 'Trial of the Dragon: Essence of Power' (unlock 'Entrusted' trophy). WARNING: Don't bring equipment that repels attacks!",
                    type: "dungeon",
                    tags: ["dungeon", "boss", "quest", "trophy"]
                }
            ],
            night: [
                {
                    id: "1012_4",
                    text: "Skipped due to entering a dungeon",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "10/13": {
        title: "10/13 - Coliseum Gold Rank",
        activities: {
            afternoon: [
                {
                    id: "1013_1",
                    text: "Brilehaven, Coliseum – Ranked Battle (Gold 3) (+4 Courage)",
                    type: "coliseum",
                    tags: ["coliseum", "courage"]
                }
            ],
            night: [
                {
                    id: "1013_2",
                    text: "Brilehaven, Coliseum – Ranked Battle (Gold 2) (+4 Courage)",
                    type: "coliseum",
                    tags: ["coliseum", "courage"]
                }
            ]
        }
    },
    "10/14": {
        title: "10/14 - Gold 1 Rank",
        activities: {
            afternoon: [
                {
                    id: "1014_1",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ],
            night: [
                {
                    id: "1014_2",
                    text: "Brilehaven, Coliseum – Ranked Battle (Gold 1) (+4 Courage)",
                    type: "coliseum",
                    tags: ["coliseum", "courage"]
                }
            ]
        }
    },
    "10/15": {
        title: "10/15 - Champion Battles",
        activities: {
            afternoon: [
                {
                    id: "1015_1",
                    text: "Brilehaven, Coliseum – Ranked Battle and accept 'Become Champion of the Coliseum' quest (+4 Courage)",
                    type: "coliseum",
                    tags: ["coliseum", "courage", "quest"]
                }
            ],
            night: [
                {
                    id: "1015_2",
                    text: "Brilehaven, Coliseum – Champion Battle to complete 'Become Champion of the Coliseum' (+4 Courage)",
                    type: "coliseum",
                    tags: ["coliseum", "courage", "quest"]
                }
            ]
        }
    },
    "10/16": {
        title: "10/16 - Coliseum Champion Trophy",
        activities: {
            afternoon: [
                {
                    id: "1016_1",
                    text: "Brilehaven, Coliseum – Create backup save, then do Gold Gauntlet Challenge (win 30 battles for 'Coliseum Champion' trophy), reload save after",
                    type: "coliseum",
                    tags: ["coliseum", "trophy"]
                }
            ],
            night: [
                {
                    id: "1016_2",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ]
        }
    },
    "10/17": {
        title: "10/17 - Free Day",
        activities: {
            afternoon: [
                {
                    id: "1017_1",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ],
            night: [
                {
                    id: "1017_2",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ]
        }
    },
    "10/18": {
        title: "10/18 - Free Day",
        activities: {
            afternoon: [
                {
                    id: "1018_1",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ],
            night: [
                {
                    id: "1018_2",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ]
        }
    },
    "10/19": {
        title: "10/19 - Free Day",
        activities: {
            afternoon: [
                {
                    id: "1019_1",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ],
            night: [
                {
                    id: "1019_2",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ]
        }
    },
    "10/20": {
        title: "10/20 - Free Day",
        activities: {
            afternoon: [
                {
                    id: "1020_1",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ],
            night: [
                {
                    id: "1020_2",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ]
        }
    },
    "10/21": {
        title: "10/21 - Free Day",
        activities: {
            afternoon: [
                {
                    id: "1021_1",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ],
            night: [
                {
                    id: "1021_2",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ]
        }
    },
    "10/22": {
        title: "10/22 - Free Day",
        activities: {
            afternoon: [
                {
                    id: "1022_1",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ],
            night: [
                {
                    id: "1022_2",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ]
        }
    },
    "10/23": {
        title: "10/23 - Free Day",
        activities: {
            afternoon: [
                {
                    id: "1023_1",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ],
            night: [
                {
                    id: "1023_2",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ]
        }
    },
    "10/24": {
        title: "10/24 - Free Day",
        activities: {
            afternoon: [
                {
                    id: "1024_1",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ],
            night: [
                {
                    id: "1024_2",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ]
        }
    },
    "10/25": {
        title: "10/25 - Final Follower Time",
        activities: {
            afternoon: [
                {
                    id: "1025_1",
                    text: "Free time or catch up on missed content",
                    type: "free",
                    tags: ["free"]
                }
            ],
            night: [
                {
                    id: "1025_2",
                    text: "Spend time with all your followers",
                    type: "follower",
                    tags: ["follower"]
                }
            ]
        }
    },
    "10/26": {
        title: "10/26 - Final Boss & Star Shatterer",
        activities: {
            afternoon: [
                {
                    id: "1026_1",
                    text: "Gauntlet Runner – Chart course to Tyrant's Star",
                    type: "travel",
                    tags: ["travel"]
                },
                {
                    id: "1026_2",
                    text: "Tyrant's Star – Don't destroy any Melancholia Crystals! Defeat final boss at full strength for 'Star Shatterer' trophy. Can lower difficulty to Storyteller if needed.",
                    type: "dungeon",
                    tags: ["dungeon", "boss", "trophy"]
                },
                {
                    id: "1026_3",
                    text: "Tyrant's Star – Near end: Use 3 Trance Crystal cluster spawning Human enemy for EXP/A-EXP ('Archetype Hero' trophy if needed)",
                    type: "grinding",
                    tags: ["grinding", "trophy"]
                },
                {
                    id: "1026_4",
                    text: "After final boss: Unlock 'Star Shatterer' and 'Help Anyone in Need' trophies",
                    type: "story",
                    tags: ["story", "trophy"]
                }
            ],
            night: [
                {
                    id: "1026_5",
                    text: "Final boss battle completion",
                    type: "story",
                    tags: ["story"]
                }
            ]
        }
    },
    "12/35": {
        title: "12/35 - Game Completion",
        activities: {
            afternoon: [
                {
                    id: "1235_1",
                    text: "Spend time with all followers and watch final scenes. After credits: Unlock 'Coronation of the King' trophy. SAVE YOUR CLEAR DATA!",
                    type: "story",
                    tags: ["story", "follower", "trophy"]
                }
            ],
            night: []
        }
    }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = walkthroughData;
}
