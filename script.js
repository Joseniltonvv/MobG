document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pedido de show enviado com sucesso! Entraremos em contato em breve.');
    this.reset();
});

// Controle de música
const backgroundMusic = document.getElementById('backgroundMusic');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseBtn.textContent = 'Pausar Música';
    } else {
        backgroundMusic.pause();
        playPauseBtn.textContent = 'Reproduzir Música';
    }
});
