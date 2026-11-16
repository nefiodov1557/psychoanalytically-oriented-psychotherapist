(() => {
    const dialog = document.getElementById('diploma-viewer');
    const image = dialog.querySelector('img');
    const closeButton = dialog.querySelector('button');
    let opener;
    let previousOverflow;
    document.querySelectorAll('[data-diploma-viewer]').forEach(link => {
        link.addEventListener('click', event => {
            // Обычная ссылка остаётся запасным вариантом без поддержки dialog.
            if (typeof dialog.showModal !== 'function') return;
            event.preventDefault();
            opener = link;
            image.src = link.href;
            image.alt = link.querySelector('img').alt;
            previousOverflow = document.documentElement.style.overflow;
            dialog.showModal();
            document.documentElement.style.overflow = 'hidden';
        });
    });
    closeButton.addEventListener('click', () => dialog.close());
    let pointerStartedOutside = false;
    const outside = event => {
        const rect = dialog.getBoundingClientRect();
        return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    };
    dialog.addEventListener('pointerdown', event => { pointerStartedOutside = event.target === dialog && outside(event); });
    dialog.addEventListener('click', event => {
        if (pointerStartedOutside && event.target === dialog && outside(event)) dialog.close();
        pointerStartedOutside = false;
    });
    // Escape и удержание фокуса обеспечивает нативный модальный dialog.
    dialog.addEventListener('close', () => {
        document.documentElement.style.overflow = previousOverflow;
        image.removeAttribute('src');
        if (opener) opener.focus({ preventScroll: true });
    });
})();
