document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const mainContainer = document.querySelector('.grid-container');

    // Prevent error if container is missing
    if (!mainContainer) return;

    // Mouse Movement for Spotlight Effect
    mainContainer.addEventListener('mousemove', (e) => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
 