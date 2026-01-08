document.addEventListener('DOMContentLoaded', () => {
    
    // --- SPOTLIGHT EFFECT ---
    const container = document.getElementById('cards-container');
    const cards = document.querySelectorAll('.card');

    if (container) {
        container.onmousemove = (e) => {
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };
    }

    // --- DARK/LIGHT MODE TOGGLE ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check Local Storage for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // Save preference
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
});
