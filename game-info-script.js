// Game Information Script
class GameInfoManager {
    constructor() {
        this.currentSection = 'fishing';
        this.init();
    }

    init() {
        this.loadTheme();
        this.setupEventListeners();
        this.populateFishingData();
        this.showSection('fishing');
    }

    // Theme Management
    loadTheme() {
        const savedTheme = localStorage.getItem('metaphor-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('metaphor-theme', newTheme);
        this.updateThemeIcon(newTheme);
    }

    updateThemeIcon(theme) {
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Event Listeners
    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Navigation tabs
        const navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const section = tab.getAttribute('data-section');
                this.showSection(section);
            });
        });
    }

    // Section Management
    showSection(sectionName) {
        // Update nav tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // Update sections
        document.querySelectorAll('.info-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionName).classList.add('active');

        this.currentSection = sectionName;
    }

    // Fishing Data Population
    populateFishingData() {
        this.populateBaitData();
        this.populateDialogueData();
        this.populateIngredientData();
        this.populateTips();
    }

    populateBaitData() {
        const baitList = document.getElementById('baitList');
        baitList.innerHTML = '';

        Object.entries(fishingData.baits).forEach(([key, bait]) => {
            const baitCard = document.createElement('div');
            baitCard.className = 'bait-card';
            
            const catchTags = bait.catches.map(catchItem => 
                `<span class="catch-tag">${catchItem}</span>`
            ).join('');

            baitCard.innerHTML = `
                <div class="bait-header">
                    <div class="bait-icon">${bait.icon}</div>
                    <div class="bait-title">
                        <h4>${bait.name}</h4>
                        <div class="bait-cost">${bait.cost}</div>
                    </div>
                </div>
                <div class="bait-info">
                    <div class="bait-location"><strong>Location:</strong> ${bait.location}</div>
                    <div class="bait-description">${bait.description}</div>
                </div>
                <div class="bait-catches">
                    ${catchTags}
                </div>
            `;

            baitList.appendChild(baitCard);
        });
    }

    populateDialogueData() {
        const dialogueList = document.getElementById('dialogueList');
        dialogueList.innerHTML = '';

        Object.entries(fishingData.dialogues).forEach(([key, dialogue]) => {
            const dialogueCard = document.createElement('div');
            dialogueCard.className = 'dialogue-card';

            const answersHtml = Object.entries(dialogue.answers).map(([answerKey, answer]) => {
                const rewardsHtml = Object.entries(answer.rewards).map(([baitType, rewards]) => {
                    const baitName = fishingData.baits[baitType].name;
                    const rewardText = rewards.join(', ');
                    return `
                        <div class="reward-set">
                            <div class="reward-bait">${baitName}</div>
                            <div class="reward-items">${rewardText}</div>
                        </div>
                    `;
                }).join('');

                return `
                    <div class="answer-option">
                        <div class="answer-text">"${answer.text}"</div>
                        <div class="answer-rewards">
                            ${rewardsHtml}
                        </div>
                    </div>
                `;
            }).join('');

            dialogueCard.innerHTML = `
                <div class="dialogue-question">"${dialogue.question}"</div>
                <div class="dialogue-answers">
                    ${answersHtml}
                </div>
            `;

            dialogueList.appendChild(dialogueCard);
        });
    }

    populateIngredientData() {
        const ingredientList = document.getElementById('ingredientList');
        ingredientList.innerHTML = '';

        Object.entries(fishingData.ingredients).forEach(([name, ingredient]) => {
            const ingredientCard = document.createElement('div');
            ingredientCard.className = 'ingredient-card';

            const rarityClass = ingredient.rarity.toLowerCase().replace(/[^a-z]/g, '');

            ingredientCard.innerHTML = `
                <div class="ingredient-name">${name}</div>
                <div class="ingredient-rarity ${rarityClass}">${ingredient.rarity}</div>
                <div class="ingredient-description">${ingredient.description}</div>
                <div class="ingredient-uses"><strong>Uses:</strong> ${ingredient.uses}</div>
            `;

            ingredientList.appendChild(ingredientCard);
        });
    }

    populateTips() {
        const tipsList = document.getElementById('tipsList');
        tipsList.innerHTML = '';

        fishingData.tips.forEach(tip => {
            const listItem = document.createElement('li');
            listItem.textContent = tip;
            tipsList.appendChild(listItem);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GameInfoManager();
});
