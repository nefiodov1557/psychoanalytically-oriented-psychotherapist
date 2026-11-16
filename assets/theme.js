(() => {
    const options = [...document.querySelectorAll('[data-theme-option]')];
    function sync() {
        options.forEach(option => option.setAttribute('aria-pressed', String(option.dataset.themeOption === window.siteTheme.preference)));
    }
    options.forEach(option => option.addEventListener('click', () => {
        window.siteTheme.setPreference(option.dataset.themeOption);
    }));
    window.addEventListener('themechange', sync);
    sync();
    // Включаем переходы после первой отрисовки.
    requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.add('theme-ready')));
})();
