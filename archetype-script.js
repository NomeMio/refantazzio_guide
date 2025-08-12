// Archetype Tracker JavaScript
class ArchetypeTracker {
    constructor() {
        this.characters = {
            'protagonist': { name: 'Protagonist', royal: 'prince' },
            'strohl': { name: 'Strohl', royal: 'royal_warrior' },
            'hulkenberg': { name: 'Hulkenberg', royal: 'royal_knight' },
            'heismay': { name: 'Heismay', royal: 'royal_thief' },
            'junah': { name: 'Junah', royal: 'royal_masked_dancer' },
            'eupha': { name: 'Eupha', royal: 'royal_summoner' },
            'basilio': { name: 'Basilio', royal: 'royal_berserker' }
        };
        this.currentCharacter = 'protagonist';
        this.characterProgress = this.loadProgress();
        this.init();
    }

    init() {
        this.loadTheme();
        this.hideLoading();
        this.setupEventListeners();
        this.renderCharacterSelector();
        this.renderArchetypeTree();
        this.updateStats();
    }

    // Theme Management (shared with main tracker)
    loadTheme() {
        const savedTheme = localStorage.getItem('metaphor-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    updateThemeIcon(theme) {
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');
        
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
            themeToggle.title = 'Switch to light theme';
        } else {
            icon.className = 'fas fa-moon';
            themeToggle.title = 'Switch to dark theme';
        }
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        this.updateThemeIcon(newTheme);
        localStorage.setItem('metaphor-theme', newTheme);
    }

    // Progress Management
    loadProgress() {
        try {
            const saved = localStorage.getItem('metaphor-character-archetypes');
            if (saved) {
                return JSON.parse(saved);
            }
            
            // Default progression for each character
            const defaultProgress = {};
            Object.keys(this.characters).forEach(charId => {
                defaultProgress[charId] = ['seeker', 'warrior'];
            });
            
            return defaultProgress;
        } catch (error) {
            console.error('Error loading archetype progress:', error);
            const defaultProgress = {};
            Object.keys(this.characters).forEach(charId => {
                defaultProgress[charId] = ['seeker', 'warrior'];
            });
            return defaultProgress;
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('metaphor-character-archetypes', JSON.stringify(this.characterProgress));
        } catch (error) {
            console.error('Error saving archetype progress:', error);
        }
    }

    // Event Listeners
    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Reset progress
        const resetButton = document.getElementById('resetArchetypes');
        resetButton.addEventListener('click', () => {
            this.resetProgress();
        });

        // Character selector
        const characterSelect = document.getElementById('characterSelect');
        if (characterSelect) {
            characterSelect.addEventListener('change', (e) => {
                this.currentCharacter = e.target.value;
                this.renderArchetypeTree();
                this.updateStats();
            });
        }

        // Modal close
        const closeModal = document.getElementById('closeModal');
        const modal = document.getElementById('archetypeModal');
        
        closeModal.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.classList.remove('show');
            }
        });
    }

    renderCharacterSelector() {
        const container = document.getElementById('characterSelector');
        if (!container) return;

        const currentChar = this.characters[this.currentCharacter];
        
        // Character image mapping
        const characterImages = {
            'protagonist': 'images/protagonist.avif',
            'strohl': 'images/strohl-in-metaphor-refantazio.avif',
            'hulkenberg': 'images/hulkenberg-in-metaphor-refantazio.avif',
            'heismay': 'images/heismay-in-metaphor-refantazio.avif',
            'junah': 'images/junah-in-metaphor-refantazio-2.avif',
            'eupha': 'images/eupha-in-metaphor-refantazio.avif',
            'basilio': 'images/basilio-in-metaphor-refantazio.avif'
        };

        container.innerHTML = `
            <div class="character-selector">
                <div class="character-dropdown-container">
                    <label for="characterSelect">Select Character:</label>
                    <div class="custom-select">
                        <div class="selected-character" id="selectedCharacter">
                            <img src="${characterImages[this.currentCharacter]}" alt="${currentChar.name}" class="character-avatar">
                            <span class="character-name">${currentChar.name} ${currentChar.royal ? '👑' : ''}</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="character-options" id="characterOptions">
                            ${Object.entries(this.characters).map(([id, char]) => `
                                <div class="character-option ${id === this.currentCharacter ? 'selected' : ''}" data-character="${id}">
                                    <img src="${characterImages[id]}" alt="${char.name}" class="character-avatar">
                                    <span class="character-name">${char.name} ${char.royal ? '👑' : ''}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="character-info">
                    <img src="${characterImages[this.currentCharacter]}" alt="${currentChar.name}" class="character-portrait">
                    <div class="character-details">
                        <div class="character-name-display">
                            Playing as: <strong>${currentChar.name}</strong>
                        </div>
                        ${currentChar.royal ? `<div class="royal-indicator">👑 Royal: ${currentChar.royal.replace('royal_', '').replace('_', ' ').toUpperCase()}</div>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        // Setup custom dropdown functionality
        this.setupCharacterDropdown();
    }

    setupCharacterDropdown() {
        const selectedCharacter = document.getElementById('selectedCharacter');
        const characterOptions = document.getElementById('characterOptions');

        if (selectedCharacter && characterOptions) {
            selectedCharacter.addEventListener('click', () => {
                characterOptions.classList.toggle('show');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!selectedCharacter.contains(e.target)) {
                    characterOptions.classList.remove('show');
                }
            });

            // Handle character selection
            characterOptions.querySelectorAll('.character-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    const characterId = e.currentTarget.getAttribute('data-character');
                    if (characterId && characterId !== this.currentCharacter) {
                        this.currentCharacter = characterId;
                        this.renderCharacterSelector();
                        this.renderArchetypeTree();
                        this.updateStats();
                    }
                    characterOptions.classList.remove('show');
                });
            });
        }
    }

    // Archetype Tree Rendering
    renderArchetypeTree() {
        const container = document.getElementById('archetypeTree');
        const allArchetypes = archetypeHelpers.getAllArchetypes();
        const currentCharacterProgress = this.characterProgress[this.currentCharacter] || ['seeker', 'warrior'];
        const availableArchetypes = archetypeHelpers.getUnlockableArchetypes(currentCharacterProgress);
        const lineages = archetypeHelpers.getLineages();

        let html = '<div class="lineage-container">';

        lineages.forEach(lineage => {
            const lineageArchetypes = archetypeHelpers.getArchetypesByLineage(lineage);
            const archetypeIds = Object.keys(lineageArchetypes);
            
            if (archetypeIds.length === 0) return;

            html += `
                <div class="lineage-group">
                    <h3 class="lineage-title">${lineage} Lineage</h3>
                    <div class="archetype-lineage-grid">
            `;

            // Sort archetypes by type: base -> advanced -> elite -> royal
            const typeOrder = { 'base': 1, 'advanced': 2, 'elite': 3, 'royal': 4 };
            const sortedIds = archetypeIds.sort((a, b) => {
                const aType = lineageArchetypes[a].type;
                const bType = lineageArchetypes[b].type;
                return typeOrder[aType] - typeOrder[bType];
            });

            sortedIds.forEach(id => {
                const archetype = lineageArchetypes[id];
                const isUnlocked = currentCharacterProgress.includes(id);
                const isAvailable = availableArchetypes.includes(id);
                
                // Check if this is a character-specific royal archetype
                const characterRoyalArchetype = this.characters[this.currentCharacter]?.royal;
                const isCharacterRoyal = archetype.type === 'royal' && id === characterRoyalArchetype;
                const isOtherCharacterRoyal = archetype.type === 'royal' && id !== characterRoyalArchetype && id !== 'prince';
                
                let statusClass = '';
                if (isUnlocked) {
                    statusClass = 'unlocked';
                } else if (isOtherCharacterRoyal) {
                    statusClass = 'character-locked'; // Different from regular locked
                } else if (isAvailable) {
                    statusClass = 'available';
                } else {
                    statusClass = 'locked';
                }

                html += `
                    <div class="archetype-node ${statusClass} ${archetype.type}" 
                         style="border-color: ${archetype.color}"
                         data-archetype-id="${id}">
                        <div class="archetype-icon">
                            <i class="fas fa-${this.getArchetypeIcon(archetype.type)}"></i>
                        </div>
                        <div class="archetype-name">${archetype.name}</div>
                        <div class="archetype-type">${archetype.type.charAt(0).toUpperCase() + archetype.type.slice(1)}</div>
                        <div class="archetype-level">Lv. ${archetype.level}</div>
                        ${isUnlocked ? '<div class="unlock-indicator"><i class="fas fa-check"></i></div>' : ''}
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += '</div>';
        container.innerHTML = html;
        
        // Add click event listeners
        container.querySelectorAll('.archetype-node').forEach(node => {
            const archetypeId = node.getAttribute('data-archetype-id');
            node.addEventListener('click', () => {
                const archetype = allArchetypes[archetypeId];
                if (archetype) {
                    this.showArchetypeDetails(archetype, availableArchetypes);
                }
            });
        });
    }

    getArchetypeIcon(type) {
        const icons = {
            'base': 'circle',
            'advanced': 'star',
            'elite': 'crown',
            'royal': 'gem'
        };
        return icons[type] || 'circle';
    }

    showArchetypeDetails(archetype, availableArchetypes) {
        const modal = document.getElementById('archetypeModal');
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('modalContent');

        title.textContent = archetype.name;

        const currentCharacterProgress = this.characterProgress[this.currentCharacter] || ['seeker', 'warrior'];
        const isUnlocked = currentCharacterProgress.includes(archetype.id);
        const isAvailable = availableArchetypes.includes(archetype.id);
        
        // Check character-specific restrictions
        const characterRoyalArchetype = this.characters[this.currentCharacter]?.royal;
        const isCharacterRoyal = archetype.type === 'royal' && archetype.id === characterRoyalArchetype;
        const isOtherCharacterRoyal = archetype.type === 'royal' && archetype.id !== characterRoyalArchetype && archetype.id !== 'prince';
        
        const canUnlock = isAvailable && !isUnlocked && !isOtherCharacterRoyal;

        let requirementsHtml = '';
        if (archetype.requires && archetype.requires.length > 0) {
            const allArchetypes = archetypeHelpers.getAllArchetypes();
            const requirements = archetype.requires.map(reqId => {
                const reqArchetype = allArchetypes[reqId];
                const isMet = reqArchetype && this.unlockedArchetypes.includes(reqId);
                return `<span class="requirement-tag ${isMet ? 'met' : ''}">${reqArchetype ? reqArchetype.name : reqId}</span>`;
            }).join('');
            requirementsHtml = `
                <div class="detail-group">
                    <div class="detail-label">Requirements</div>
                    <div class="requirement-list">${requirements}</div>
                </div>
            `;
        }

        let unlocksHtml = '';
        if (archetype.unlocks && archetype.unlocks.length > 0) {
            const allArchetypes = archetypeHelpers.getAllArchetypes();
            const unlocks = archetype.unlocks.map(unlockId => {
                const unlockArchetype = allArchetypes[unlockId];
                return `<span class="requirement-tag">${unlockArchetype ? unlockArchetype.name : unlockId}</span>`;
            }).join('');
            unlocksHtml = `
                <div class="detail-group">
                    <div class="detail-label">Unlocks</div>
                    <div class="requirement-list">${unlocks}</div>
                </div>
            `;
        }

        const statusText = isUnlocked ? 'Unlocked' : 
                          isOtherCharacterRoyal ? 'Character Exclusive' :
                          isAvailable ? 'Available' : 'Locked';
        const statusClass = isUnlocked ? 'unlocked' : 
                           isOtherCharacterRoyal ? 'character-locked' :
                           isAvailable ? 'available' : 'locked';

        // Character restriction info
        let characterInfo = '';
        if (archetype.type === 'royal') {
            if (isCharacterRoyal) {
                characterInfo = `
                    <div class="detail-group">
                        <div class="detail-label">Character Exclusive</div>
                        <div class="detail-value royal-exclusive">
                            👑 ${this.characters[this.currentCharacter].name} Only
                        </div>
                    </div>
                `;
            } else if (isOtherCharacterRoyal) {
                const exclusiveCharacter = Object.entries(this.characters).find(([id, char]) => char.royal === archetype.id);
                characterInfo = `
                    <div class="detail-group">
                        <div class="detail-label">Character Exclusive</div>
                        <div class="detail-value character-locked">
                            👑 ${exclusiveCharacter ? exclusiveCharacter[1].name : 'Other Character'} Only
                        </div>
                    </div>
                `;
            } else if (archetype.id === 'prince') {
                characterInfo = `
                    <div class="detail-group">
                        <div class="detail-label">Character Exclusive</div>
                        <div class="detail-value royal-exclusive">
                            👑 Protagonist Only
                        </div>
                    </div>
                `;
            }
        }

        content.innerHTML = `
            <div class="archetype-details">
                <div class="detail-group">
                    <div class="detail-label">Lineage</div>
                    <div class="detail-value">${archetype.lineage}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Type</div>
                    <div class="detail-value">${archetype.type.charAt(0).toUpperCase() + archetype.type.slice(1)}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Level Requirement</div>
                    <div class="detail-value">${archetype.level}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Status</div>
                    <div class="detail-value ${statusClass}">${statusText}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">How to Unlock</div>
                    <div class="detail-value unlock-info">${archetype.unlock}</div>
                </div>
                ${characterInfo}
                ${requirementsHtml}
                ${unlocksHtml}
                ${canUnlock ? `
                    <button class="btn btn-secondary unlock-button" onclick="archetypeTracker.unlockArchetype('${archetype.id}')">
                        <i class="fas fa-unlock"></i>
                        Unlock Archetype
                    </button>
                ` : ''}
            </div>
        `;

        modal.classList.add('show');
    }

    unlockArchetype(archetypeId) {
        const currentCharacterProgress = this.characterProgress[this.currentCharacter] || ['seeker', 'warrior'];
        if (!currentCharacterProgress.includes(archetypeId)) {
            currentCharacterProgress.push(archetypeId);
            this.characterProgress[this.currentCharacter] = currentCharacterProgress;
            this.saveProgress();
            this.renderArchetypeTree();
            this.updateStats();
            
            // Close modal
            document.getElementById('archetypeModal').classList.remove('show');
        }
    }

    updateStats() {
        const allArchetypes = archetypeHelpers.getAllArchetypes();
        const total = Object.keys(allArchetypes).length;
        const currentCharacterProgress = this.characterProgress[this.currentCharacter] || ['seeker', 'warrior'];
        const unlocked = currentCharacterProgress.length;
        const availableArchetypes = archetypeHelpers.getUnlockableArchetypes(currentCharacterProgress);
        
        // Count by type for current character
        const baseUnlocked = currentCharacterProgress.filter(id => {
            const archetype = allArchetypes[id];
            return archetype && archetype.type === 'base';
        }).length;
        
        const royalUnlocked = currentCharacterProgress.filter(id => {
            const archetype = allArchetypes[id];
            return archetype && archetype.type === 'royal';
        }).length;

        const percentage = Math.round((unlocked / total) * 100);

        document.getElementById('unlockedCount').textContent = `${unlocked}/${total}`;
        document.getElementById('archetypeProgressBar').style.width = `${percentage}%`;
        document.getElementById('availableCount').textContent = availableArchetypes.length;
        document.getElementById('baseUnlocked').textContent = `${baseUnlocked}/7`;
        document.getElementById('royalUnlocked').textContent = `${royalUnlocked}/6`;
    }

    resetProgress() {
        const confirmation = confirm('Are you sure you want to reset all archetype progress for all characters? This action cannot be undone.');
        if (confirmation) {
            Object.keys(this.characters).forEach(charId => {
                this.characterProgress[charId] = ['seeker', 'warrior'];
            });
            this.saveProgress();
            this.renderArchetypeTree();
            this.updateStats();
        }
    }

    hideLoading() {
        const loading = document.getElementById('loading');
        loading.classList.add('hidden');
    }
}

// Initialize the tracker when the page loads
let archetypeTracker;
document.addEventListener('DOMContentLoaded', () => {
    archetypeTracker = new ArchetypeTracker();
});
