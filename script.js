document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('page-body');
    const introCard = document.getElementById('intro-card');
    const proposalCard = document.getElementById('proposal-card');
    const thanksCard = document.getElementById('thanks-card');

    const startBtn = document.getElementById('start-btn');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    // 1-bosqichdan 2-bosqichga o'tish
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            introCard.classList.add('hidden');
            proposalCard.classList.remove('hidden');
            body.className = 'bg-state-2';
        });
    }

    // "Yo'q" tugmasining qochishi
    function dodgeNoButton() {
        const maxOffset = 70; 
        const randomX = (Math.random() - 0.5) * maxOffset * 2;
        const randomY = (Math.random() - 0.5) * maxOffset * 2;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    if (noBtn) {
        noBtn.addEventListener('mouseenter', dodgeNoButton);
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            dodgeNoButton();
        });
    }

    // "Albatta boraman!" bosilganda
    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            proposalCard.classList.add('hidden');
            thanksCard.classList.remove('hidden');
            body.className = 'bg-state-3';

            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#d39e8c', '#e8ded6', '#c49a88', '#ffd700', '#ffffff']
            });
        });
    }
});
