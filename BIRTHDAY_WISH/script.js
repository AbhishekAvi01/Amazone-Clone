function playAnimation() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = Math.random() * 2 + 3 + 's';
        confettiContainer.appendChild(confettiPiece);

        confettiPiece.addEventListener('animationend', () => {
            confettiPiece.remove();
        });
    }
}
