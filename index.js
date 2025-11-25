document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('themeToggle');
    const themeIcon = toggleBtn.querySelector('.theme-icon');
    const themeText = toggleBtn.querySelector('.theme-text');
    

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        
        /*смена темы, кнопки, текста*/ 
        const isDark = theme === 'dark';
        themeIcon.textContent = isDark ? '☀️' : '🌙';
        themeText.textContent = isDark ? 'Светлая тема' : 'Темная тема';
    }
    
    // Обработчик клика по кнопке
    toggleBtn.addEventListener('click', function() {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });
     
    // Инициализация темы при загрузке
    const saved = localStorage.getItem('theme');
    /*встроеное хранилище браузера для сохранения темы после след посещения*/
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (systemDark ? 'dark' : 'light'));
});
