# Metaphor: ReFantazio Progress Tracker

**Live Site**: [https://nomemio.github.io/refantazzio_guide/](https://nomemio.github.io/refantazzio_guide/)

A comprehensive web application for tracking your progress through **Metaphor: ReFantazio**. Features both a complete 100% walkthrough tracker and an interactive archetype progression system with character-specific tracking.

> **Quick Start**: Visit the live site at [nomemio.github.io/refantazzio_guide](https://nomemio.github.io/refantazzio_guide/) - no installation required!

## Main Features

### **Walkthrough Progress Tracker** 
Track your completion of the PowerPyx 100% walkthrough with visual progress indicators, day-by-day breakdown, and smart search functionality.

### **Interactive Archetype Tracker** 
Complete archetype progression system with character portraits, unlock requirements, and visual tree display.
**[Access Archetype Tracker](archetypes.html)**

## Features

### **Walkthrough Progress Tracking**
- **Visual Progress Indicators** - See your overall completion percentage and progress bars
- **Day-by-Day Breakdown** - Track progress for each individual day
- **Activity Categories** - Monitor specific types of activities (quests, gold beetles, trophies, etc.)
- **Statistics Dashboard** - View completed days, quests, gold beetles, and trophies at a glance

### **Archetype Progression System**
- **Character-Specific Tracking** - Individual archetype progress for all 7 party members
- **Interactive Archetype Tree** - Visual progression with 46 archetypes across 14 lineages
- **Character Portraits** - Beautiful character images for each party member
- **Royal Archetype System** - Character-exclusive royal archetypes with restrictions
- **Smart Unlock Logic** - Shows available, locked, and character-restricted archetypes
- **Progress Statistics** - Track base, advanced, elite, and royal archetype unlocks

### **Character System**
- **Full Party Support**: Protagonist 👑, Strohl 👑, Hulkenberg 👑, Heismay 👑, Junah 👑, Eupha 👑, Basilio 👑
- **Royal Exclusivity**: Each character has access to their unique royal archetype
- **Visual Character Selection**: Custom dropdown with character portraits
- **Individual Progression**: Separate unlock progress maintained for each character

### **Search & Filter**
- **Smart Search** - Find specific activities, dates, or quest names instantly
- **Date Filtering** - Jump to specific days in the walkthrough
- **Activity Type Filters** - Filter by quests, gold beetles, trophies, dungeons, debates, etc.
- **Completion Filter** - Show only completed or remaining activities

### **Data Persistence**
- **Auto-Save** - Your progress is automatically saved to browser local storage
- **Character-Specific Storage** - Individual archetype progress per character
- **Persistent Data** - Resume tracking exactly where you left off
- **Reset Options** - Clear walkthrough or archetype progress independently

### **Modern Interface**
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Clean UI** - Intuitive interface focused on usability
- **Interactive Elements** - Expandable day cards, checkboxes, and visual feedback
- **Dark/Light Theme** - Toggle between dark and light modes with smooth transitions
- **Professional Styling** - Modern design with smooth animations and hover effects

## Getting Started

### Option 1: Use the Live Site (Recommended)
**No installation needed!** Simply visit:
**[https://nomemio.github.io/refantazzio_guide/](https://nomemio.github.io/refantazzio_guide/)**

The site works instantly in any modern browser and automatically saves your progress.

### Option 2: Direct File Opening
1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. Start tracking your progress!

### Option 3: Local Server
1. Navigate to the project directory
2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000` in your browser

## How to Use

### **Walkthrough Tracker**
1. **Browse Days** - Click on any day card to expand and see all activities
2. **Check Off Activities** - Click checkboxes as you complete activities
3. **Monitor Progress** - Watch your statistics update in real-time
4. **Search & Filter** - Use the search bar and filters to find specific content

### **Archetype Tracker** ([Access Here](archetypes.html))
1. **Select Character** - Use the character dropdown to switch between party members
2. **View Progression Tree** - See all 46 archetypes organized by lineage
3. **Unlock Archetypes** - Click available archetypes to unlock them
4. **Track Royal Progress** - Monitor character-exclusive royal archetypes
5. **Check Requirements** - View unlock requirements and prerequisites

### Character-Specific Features
- **Individual Progress**: Each character maintains separate archetype unlocks
- **Royal Restrictions**: Royal archetypes are exclusive to specific characters
- **Visual Indicators**: Character portraits and crown icons for royal archetypes
- **Smart Unlocking**: Only shows archetypes available to the current character

### Progress Categories
- **Trophies** - Achievement unlocks
- **Gold Beetles** - Collectible locations (tracked as X/50)
- **Quests** - Side quests and main story objectives  
- **Dungeons** - Dungeon completions
- **Debates** - Debate victories with NPCs
- **Followers** - Follower rank-up events
- **Cooking** - Recipe preparations
- **Reading** - Book completions
- **Archetypes** - Interactive progression tree for all character classes

### Tips
- **Character Selection** - Switch between characters to track individual archetype progress
- **Royal Archetypes** - Note that royal archetypes are character-exclusive
- **Expand All** - Click day headers to expand/collapse activity lists
- **Use Search** - Quickly find specific quests like "Gold Beetle" or "Hulkenberg"
- **Filter Views** - Use filters to focus on specific activity types
- **Track Completion** - Progress bars show your overall completion percentage
- **Archetype Requirements** - Click on locked archetypes to see unlock requirements

## Data Structure

The walkthrough data is organized by date (MM/DD format) with activities categorized by time of day:

```javascript
"06/05": {
    title: "06/05 - First Combat & Gold Beetle",
    activities: {
        afternoon: [
            {
                id: "0605_1",
                text: "Earn 'Stunning!' trophy on the very first enemy encounter",
                type: "trophy",
                tags: ["trophy"]
            }
        ],
        night: [
            {
                id: "0605_3", 
                text: "Pick up Gold Beetle under trees behind Strohl (1/50)",
                type: "beetle",
                tags: ["beetle", "missable"],
                beetleNumber: 1
            }
        ]
    }
}
```

## Technical Details

### Technologies Used
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Grid and Flexbox
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Local Storage API** - Progress persistence

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### File Structure
```
├── index.html              # Main walkthrough tracker
├── archetypes.html         # Interactive archetype progression tracker
├── styles.css              # Main CSS styling
├── archetype-styles.css    # Archetype tree specific styles
├── script.js               # Main application logic
├── archetype-script.js     # Archetype tracker logic
├── walkthroughData.js      # Complete walkthrough data
├── archetypeData.js        # 46 archetypes with unlock requirements
├── images/                 # Character portrait images
│   ├── protagonist.avif
│   ├── strohl-in-metaphor-refantazio.avif
│   ├── hulkenberg-in-metaphor-refantazio.avif
│   ├── heismay-in-metaphor-refantazio.avif
│   ├── junah-in-metaphor-refantazio-2.avif
│   ├── eupha-in-metaphor-refantazio.avif
│   └── basilio-in-metaphor-refantazio.avif
└── README.md               # This documentation
```

## About Metaphor: ReFantazio

This comprehensive tracker is designed for **Metaphor: ReFantazio**, covering:

### **Walkthrough Coverage**
- **All Trophies & Achievements** - Complete trophy list for 100% completion
- **50 Gold Beetles** - Every collectible location with day-by-day tracking
- **All Side Quests** - Every optional quest in optimal order
- **Follower Ranks** - All follower relationships to maximum rank
- **All Recipes** - Every cooking recipe collection
- **All Drawings** - Vista/drawing collection completion
- **All Debates** - Every debate candidate encounter

### **Archetype System Coverage**
- **46 Total Archetypes** - Complete archetype database
- **14 Lineage Trees** - Organized progression paths
- **7 Character-Specific Royal Archetypes** - Exclusive end-game classes
- **Accurate Unlock Requirements** - Based on RPGsite guide data
- **Base → Advanced → Elite → Royal** progression structure

## Data Sources

### Walkthrough Data
Based on the excellent [Metaphor: ReFantazio 100% Walkthrough](https://www.powerpyx.com/metaphor-refantazio-100-walkthrough/) by **PowerPyx** (ObsiEez, Monomaru, LuckySlime).

### Archetype Data  
Archetype information extracted from [RPGsite's Complete Archetype Guide](https://www.rpgsite.net/) with accurate unlock requirements and lineage structures.

**Note**: This is an unofficial fan-made tool. All game content and guide information belongs to their respective owners.

## Contributing

Feel free to contribute improvements:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

### Potential Improvements
- Add archetype skill trees and abilities
- Include character stat recommendations
- Add export/import functionality for progress data
- Include trophy/achievement icons
- Add completion time estimates
- Implement progress sharing features
- Add mobile app version
- Character build recommendations

## Support

If you encounter any issues or have suggestions:
- Check that JavaScript is enabled in your browser
- Try refreshing the page if progress doesn't save
- Clear browser cache if you experience loading issues
- Ensure you're using a modern browser

---

**Happy gaming and good luck achieving 100% completion! 👑**
