class ThemeSwitcher {
    constructor(options = {}) {
        this.options = {
            storageKey: 'theme',
            darkTheme: 'dark',
            lightTheme: 'light',
            ...options
        };

        this.init();
    }

    init() {
        // DOM-Elemente
        this.toggle = document.getElementById('theme-toggle');
        if (!this.toggle) {
            console.error('Theme toggle element not found!');
            return;
        }

        // System-Präferenz erkennen
        this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Gespeichertes Theme laden oder System-Einstellung nutzen
        this.currentTheme = localStorage.getItem(this.options.storageKey) || 
            (this.prefersDark.matches ? this.options.darkTheme : this.options.lightTheme);

        // Event Listener
        this.setupEventListeners();
        
        // Initiales Theme setzen
        this.applyTheme(this.currentTheme);
    }

    setupEventListeners() {
        // Theme Toggle
        this.toggle.addEventListener('change', (e) => {
            const theme = e.target.checked ? this.options.lightTheme : this.options.darkTheme;
            this.applyTheme(theme);
        });

        // System Theme Change
        this.prefersDark.addEventListener('change', (e) => {
            if (!localStorage.getItem(this.options.storageKey)) {
                const theme = e.matches ? this.options.darkTheme : this.options.lightTheme;
                this.applyTheme(theme);
            }
        });
    }

    applyTheme(theme) {
        // Theme setzen
        document.documentElement.setAttribute('data-theme', theme);
        this.toggle.checked = theme === this.options.lightTheme;
        
        // Theme speichern
        localStorage.setItem(this.options.storageKey, theme);
        
        // Event auslösen
        this.dispatchThemeEvent(theme);
    }

    dispatchThemeEvent(theme) {
        const event = new CustomEvent('themeChange', {
            detail: { theme, timestamp: new Date().getTime() }
        });
        document.dispatchEvent(event);
    }

    // Public Methoden
    toggleTheme() {
        const newTheme = this.currentTheme === this.options.darkTheme 
            ? this.options.lightTheme 
            : this.options.darkTheme;
        this.applyTheme(newTheme);
    }

    getCurrentTheme() {
        return this.currentTheme;
    }
}

// Theme Switcher initialisieren
const themeSwitcher = new ThemeSwitcher({
    // Optionale Konfiguration hier
});

// Globale Funktion für den Demo-Button
function toggleTheme() {
    themeSwitcher.toggleTheme();
} 