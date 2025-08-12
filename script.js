// Metaphor: ReFantazio Progress Tracker - Main Script
class ProgressTracker {
    constructor() {
        this.progress = this.loadProgress();
        this.filteredData = null;
        this.init();
    }

    init() {
        this.loadTheme();
        this.hideLoading();
        this.setupEventListeners();
        this.populateFilters();
        this.renderWalkthrough();
        this.updateStats();
    }

    // Local Storage Management
    loadProgress() {
        try {
            const saved = localStorage.getItem('metaphor-progress');
            return saved ? JSON.parse(saved) : {};
        } catch (error) {
            console.error('Error loading progress:', error);
            return {};
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('metaphor-progress', JSON.stringify(this.progress));
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    }

    // Event Listeners
    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Filter dropdowns
        const dateFilter = document.getElementById('dateFilter');
        const activityFilter = document.getElementById('activityFilter');
        
        dateFilter.addEventListener('change', () => this.applyFilters());
        activityFilter.addEventListener('change', () => this.applyFilters());

        // Show completed toggle
        const showCompletedBtn = document.getElementById('showCompleted');
        showCompletedBtn.addEventListener('click', () => {
            showCompletedBtn.classList.toggle('active');
            this.applyFilters();
        });

        // Reset progress
        const resetBtn = document.getElementById('resetProgress');
        resetBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                this.resetProgress();
            }
        });

        // Activity checkbox changes
        document.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox' && e.target.classList.contains('activity-checkbox')) {
                this.toggleActivity(e.target.dataset.activityId, e.target.checked);
            }
        });

        // Day card expansion
        document.addEventListener('click', (e) => {
            if (e.target.closest('.day-header')) {
                const dayCard = e.target.closest('.day-card');
                dayCard.classList.toggle('expanded');
            }
        });
    }

    // Search and Filter Functions
    handleSearch(query) {
        const searchTerm = query.toLowerCase().trim();
        
        if (searchTerm === '') {
            this.filteredData = null;
        } else {
            this.filteredData = {};
            
            Object.keys(walkthroughData).forEach(date => {
                const dayData = walkthroughData[date];
                const matchingActivities = {};
                let hasMatches = false;

                // Check if date matches
                if (date.toLowerCase().includes(searchTerm) || 
                    dayData.title.toLowerCase().includes(searchTerm)) {
                    this.filteredData[date] = dayData;
                    return;
                }

                // Check activities
                Object.keys(dayData.activities).forEach(timeOfDay => {
                    const activities = dayData.activities[timeOfDay];
                    const matchingTimeActivities = activities.filter(activity => 
                        activity.text.toLowerCase().includes(searchTerm) ||
                        activity.tags.some(tag => tag.toLowerCase().includes(searchTerm))
                    );

                    if (matchingTimeActivities.length > 0) {
                        matchingActivities[timeOfDay] = matchingTimeActivities;
                        hasMatches = true;
                    }
                });

                if (hasMatches) {
                    this.filteredData[date] = {
                        ...dayData,
                        activities: matchingActivities
                    };
                }
            });
        }

        this.renderWalkthrough();
    }

    applyFilters() {
        const dateFilter = document.getElementById('dateFilter').value;
        const activityFilter = document.getElementById('activityFilter').value;
        const showCompletedOnly = document.getElementById('showCompleted').classList.contains('active');

        let dataToFilter = this.filteredData || walkthroughData;
        let filteredData = {};

        Object.keys(dataToFilter).forEach(date => {
            // Date filter
            if (dateFilter && date !== dateFilter) {
                return;
            }

            const dayData = dataToFilter[date];
            const filteredActivities = {};
            let hasValidActivities = false;

            Object.keys(dayData.activities).forEach(timeOfDay => {
                const activities = dayData.activities[timeOfDay];
                let filteredTimeActivities = activities;

                // Activity type filter
                if (activityFilter) {
                    filteredTimeActivities = activities.filter(activity => 
                        activity.tags.includes(activityFilter)
                    );
                }

                // Completed filter
                if (showCompletedOnly) {
                    filteredTimeActivities = filteredTimeActivities.filter(activity => 
                        this.progress[activity.id]
                    );
                }

                if (filteredTimeActivities.length > 0) {
                    filteredActivities[timeOfDay] = filteredTimeActivities;
                    hasValidActivities = true;
                }
            });

            if (hasValidActivities) {
                filteredData[date] = {
                    ...dayData,
                    activities: filteredActivities
                };
            }
        });

        this.renderWalkthrough(filteredData);
    }

    populateFilters() {
        const dateFilter = document.getElementById('dateFilter');
        
        Object.keys(walkthroughData).forEach(date => {
            const option = document.createElement('option');
            option.value = date;
            option.textContent = date;
            dateFilter.appendChild(option);
        });
    }

    // Rendering Functions
    renderWalkthrough(data = null) {
        const container = document.getElementById('walkthroughContainer');
        const dataToRender = data || this.filteredData || walkthroughData;

        container.innerHTML = '';

        Object.keys(dataToRender).forEach(date => {
            const dayData = dataToRender[date];
            const dayCard = this.createDayCard(date, dayData);
            container.appendChild(dayCard);
        });
    }

    createDayCard(date, dayData) {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        
        const totalActivities = this.getTotalActivities(dayData);
        const completedActivities = this.getCompletedActivities(dayData);
        const progressPercent = totalActivities > 0 ? Math.round((completedActivities / totalActivities) * 100) : 0;

        dayCard.innerHTML = `
            <div class="day-header">
                <div class="day-title">${dayData.title}</div>
                <div class="day-progress">
                    <span>${completedActivities}/${totalActivities} completed</span>
                    <i class="fas fa-chevron-down expand-icon"></i>
                </div>
            </div>
            <div class="day-content">
                ${this.renderTimeOfDayActivities(dayData.activities)}
            </div>
        `;

        if (progressPercent === 100) {
            dayCard.classList.add('completed');
        }

        return dayCard;
    }

    renderTimeOfDayActivities(activities) {
        const timeLabels = {
            all_day: { label: 'All Day', icon: 'fas fa-clock' },
            afternoon: { label: 'Afternoon', icon: 'fas fa-sun' },
            night: { label: 'Night', icon: 'fas fa-moon' }
        };

        let html = '';

        Object.keys(activities).forEach(timeOfDay => {
            const timeInfo = timeLabels[timeOfDay] || { label: timeOfDay, icon: 'fas fa-clock' };
            const timeActivities = activities[timeOfDay];

            html += `
                <div class="time-section">
                    <div class="time-header">
                        <i class="${timeInfo.icon}"></i>
                        ${timeInfo.label}
                    </div>
                    <div class="activity-list">
                        ${timeActivities.map(activity => this.renderActivity(activity)).join('')}
                    </div>
                </div>
            `;
        });

        return html;
    }

    renderActivity(activity) {
        const isCompleted = this.progress[activity.id] || false;
        const tags = activity.tags.map(tag => {
            const tagIcons = {
                quest: 'fas fa-scroll',
                beetle: 'fas fa-bug',
                trophy: 'fas fa-trophy',
                dungeon: 'fas fa-dungeon',
                debate: 'fas fa-comment',
                follower: 'fas fa-user',
                cooking: 'fas fa-utensils',
                reading: 'fas fa-book',
                story: 'fas fa-book-open',
                shopping: 'fas fa-shopping-bag'
            };

            const icon = tagIcons[tag] || 'fas fa-tag';
            return `<span class="activity-tag ${tag}"><i class="${icon}"></i>${tag}</span>`;
        }).join('');

        return `
            <div class="activity-item ${isCompleted ? 'completed' : ''}">
                <input type="checkbox" 
                       class="activity-checkbox" 
                       data-activity-id="${activity.id}"
                       ${isCompleted ? 'checked' : ''}>
                <div class="activity-content">
                    <div class="activity-text">${activity.text}</div>
                    <div class="activity-meta">${tags}</div>
                </div>
            </div>
        `;
    }

    // Progress Management
    toggleActivity(activityId, completed) {
        if (completed) {
            this.progress[activityId] = true;
        } else {
            delete this.progress[activityId];
        }
        
        this.saveProgress();
        this.updateStats();
        
        // Update the visual state of the parent day card
        const checkbox = document.querySelector(`[data-activity-id="${activityId}"]`);
        if (checkbox) {
            const activityItem = checkbox.closest('.activity-item');
            activityItem.classList.toggle('completed', completed);
            
            // Update day progress
            const dayCard = checkbox.closest('.day-card');
            this.updateDayProgress(dayCard);
        }
    }

    updateDayProgress(dayCard) {
        const checkboxes = dayCard.querySelectorAll('.activity-checkbox');
        const completed = dayCard.querySelectorAll('.activity-checkbox:checked').length;
        const total = checkboxes.length;
        
        const progressElement = dayCard.querySelector('.day-progress span');
        if (progressElement) {
            progressElement.textContent = `${completed}/${total} completed`;
        }

        dayCard.classList.toggle('completed', completed === total && total > 0);
    }

    getTotalActivities(dayData) {
        let total = 0;
        Object.values(dayData.activities).forEach(timeActivities => {
            total += timeActivities.length;
        });
        return total;
    }

    getCompletedActivities(dayData) {
        let completed = 0;
        Object.values(dayData.activities).forEach(timeActivities => {
            timeActivities.forEach(activity => {
                if (this.progress[activity.id]) {
                    completed++;
                }
            });
        });
        return completed;
    }

    updateStats() {
        // Calculate overall statistics
        let totalActivities = 0;
        let completedActivities = 0;
        let totalDays = 0;
        let completedDays = 0;
        let goldBeetles = 0;
        let trophies = 0;
        let quests = 0;

        Object.values(walkthroughData).forEach(dayData => {
            totalDays++;
            let dayCompleted = 0;
            let dayTotal = 0;

            Object.values(dayData.activities).forEach(timeActivities => {
                timeActivities.forEach(activity => {
                    totalActivities++;
                    dayTotal++;

                    if (this.progress[activity.id]) {
                        completedActivities++;
                        dayCompleted++;

                        // Count specific types
                        if (activity.tags.includes('beetle')) goldBeetles++;
                        if (activity.tags.includes('trophy')) trophies++;
                        if (activity.tags.includes('quest')) quests++;
                    }
                });
            });

            if (dayCompleted === dayTotal && dayTotal > 0) {
                completedDays++;
            }
        });

        const overallPercent = totalActivities > 0 ? Math.round((completedActivities / totalActivities) * 100) : 0;

        // Update DOM
        document.getElementById('overallProgress').textContent = `${overallPercent}%`;
        document.getElementById('overallProgressBar').style.width = `${overallPercent}%`;
        document.getElementById('completedDays').textContent = `${completedDays}/${totalDays}`;
        document.getElementById('completedQuests').textContent = quests;
        document.getElementById('goldBeetles').textContent = `${goldBeetles}/50`;
        document.getElementById('trophies').textContent = trophies;
    }

    // Theme Management
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        this.updateThemeIcon(newTheme);
        this.saveTheme(newTheme);
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

    loadTheme() {
        const savedTheme = localStorage.getItem('metaphor-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    saveTheme(theme) {
        localStorage.setItem('metaphor-theme', theme);
    }

    resetProgress() {
        this.progress = {};
        this.saveProgress();
        
        // Uncheck all checkboxes
        document.querySelectorAll('.activity-checkbox').forEach(checkbox => {
            checkbox.checked = false;
            checkbox.closest('.activity-item').classList.remove('completed');
        });

        // Update all day cards
        document.querySelectorAll('.day-card').forEach(dayCard => {
            this.updateDayProgress(dayCard);
        });

        this.updateStats();
    }

    hideLoading() {
        const loading = document.getElementById('loading');
        loading.classList.add('hidden');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProgressTracker();
});
