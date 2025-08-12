# Metaphor: ReFantazio Progress Tracker

A web application for tracking your progress through the **Metaphor: ReFantazio 100% walkthrough guide** from PowerPyx. This interactive tool helps you keep track of completed activities, quests, collectibles, and more as you work toward 100% completion.

## ✨ Features

### 📊 Progress Tracking
- **Visual Progress Indicators** - See your overall completion percentage and progress bars
- **Day-by-Day Breakdown** - Track progress for each individual day
- **Activity Categories** - Monitor specific types of activities (quests, gold beetles, trophies, etc.)
- **Statistics Dashboard** - View completed days, quests, gold beetles, and trophies at a glance

### 🔍 Search & Filter
- **Smart Search** - Find specific activities, dates, or quest names instantly
- **Date Filtering** - Jump to specific days in the walkthrough
- **Activity Type Filters** - Filter by quests, gold beetles, trophies, dungeons, debates, etc.
- **Completion Filter** - Show only completed or remaining activities

### 💾 Data Persistence
- **Auto-Save** - Your progress is automatically saved to browser local storage
- **Persistent Data** - Resume tracking exactly where you left off
- **Reset Option** - Clear all progress to start fresh if needed

### 📱 Modern Interface
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Clean UI** - Intuitive interface focused on usability
- **Interactive Elements** - Expandable day cards, checkboxes, and visual feedback
- **Dark/Light Friendly** - Easy on the eyes with modern color scheme

## 🚀 Getting Started

### Option 1: Direct File Opening
1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. Start tracking your progress!

### Option 2: Local Server (Recommended)
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

## 📖 How to Use

### Basic Usage
1. **Browse Days** - Click on any day card to expand and see all activities
2. **Check Off Activities** - Click checkboxes as you complete activities
3. **Monitor Progress** - Watch your statistics update in real-time
4. **Search & Filter** - Use the search bar and filters to find specific content

### Progress Categories
- **🏆 Trophies** - Achievement unlocks
- **🪲 Gold Beetles** - Collectible locations (tracked as X/50)
- **📜 Quests** - Side quests and main story objectives  
- **🏰 Dungeons** - Dungeon completions
- **💬 Debates** - Debate victories with NPCs
- **👥 Followers** - Follower rank-up events
- **🍳 Cooking** - Recipe preparations
- **📚 Reading** - Book completions

### Tips
- **Expand All** - Click day headers to expand/collapse activity lists
- **Use Search** - Quickly find specific quests like "Gold Beetle" or "Hulkenberg"
- **Filter Views** - Use filters to focus on specific activity types
- **Track Completion** - The progress bar shows your overall completion percentage

## 🗂️ Data Structure

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

## 🛠️ Technical Details

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
├── index.html              # Main HTML file
├── styles.css              # Complete CSS styling
├── script.js               # Main application logic
├── walkthroughData.js      # Walkthrough data structure
└── README.md               # This documentation
```

## 🎮 About Metaphor: ReFantazio

This tracker is designed specifically for the 100% completion walkthrough of **Metaphor: ReFantazio**, covering:

- **All Trophies & Achievements** - Complete trophy list for 100% completion
- **50 Gold Beetles** - Every collectible location with day-by-day tracking
- **All Side Quests** - Every optional quest in optimal order
- **Follower Ranks** - All follower relationships to maximum rank
- **All Archetypes** - Complete archetype progression
- **All Recipes** - Every cooking recipe collection
- **All Drawings** - Vista/drawing collection completion
- **All Debates** - Every debate candidate encounter

## 📄 Data Source

This tracker uses data extracted and structured from the excellent [Metaphor: ReFantazio 100% Walkthrough](https://www.powerpyx.com/metaphor-refantazio-100-walkthrough/) by **PowerPyx** (ObsiEez, Monomaru, LuckySlime).

**Note**: This is an unofficial fan-made tool. All game content and guide information belongs to their respective owners.

## 🤝 Contributing

Feel free to contribute improvements:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

### Potential Improvements
- Add export/import functionality for progress data
- Include trophy/achievement icons
- Add completion time estimates
- Implement progress sharing features
- Add mobile app version

## 📞 Support

If you encounter any issues or have suggestions:
- Check that JavaScript is enabled in your browser
- Try refreshing the page if progress doesn't save
- Clear browser cache if you experience loading issues
- Ensure you're using a modern browser

## 📜 License

This project is released under the MIT License. See LICENSE file for details.

---

**Happy gaming and good luck achieving 100% completion! 👑**
