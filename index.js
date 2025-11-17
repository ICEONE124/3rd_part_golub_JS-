
class ThemeSwitcher {
    constructor() {
        this.toggleButton = document.getElementById('themeToggle');
        this.themeIcon = this.toggleButton.querySelector('.theme-icon');
        this.themeText = this.toggleButton.querySelector('.theme-text');
        
        this.init();
    }
    
    init() {
        this.setInitialTheme();
        
        this.toggleButton.addEventListener('click', () => this.toggleTheme());
        

        this.watchSystemPreference();
    }
    
    setInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else if (systemPrefersDark) {
            this.setTheme('dark');
        } else {
            this.setTheme('light');
        }
    }
    

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        localStorage.setItem('theme', theme);
        
        this.updateButton(theme);
    }
    
 
    updateButton(theme) {
        if (theme === 'dark') {
            this.themeIcon.textContent = '☀️';
            this.themeText.textContent = 'Светлая тема';
        } else {
            this.themeIcon.textContent = '🌙';
            this.themeText.textContent = 'Темная тема';
        }
    }
    
    watchSystemPreference() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
});