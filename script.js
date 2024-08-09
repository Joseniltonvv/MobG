document.addEventListener('DOMContentLoaded', function() {
    const shows = [
        { date: '2024-09-15', location: 'São Paulo, SP', venue: 'Estádio XYZ' },
        { date: '2024-10-20', location: 'Rio de Janeiro, RJ', venue: 'Maracanã' },
        { date: '2024-11-10', location: 'Belo Horizonte, MG', venue: 'Mineirão' },
    ];

    const showsList = document.getElementById('shows');
    shows.forEach(show => {
        const li = document.createElement('li');
        li.textContent = `${show.date} - ${show.location} - ${show.venue}`;
        showsList.appendChild(li);
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    });
});
