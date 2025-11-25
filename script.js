document.addEventListener('DOMContentLoaded', () => {
    // 1. Logica del Toggle Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Chiude il menu quando si clicca su un link (utile su mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }


    // 2. Logica Base per il Form Contatti (solo frontend)
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Sostituisci questo con la tua logica di invio (es. Fetch API verso un backend)
            // Per ora, simula un invio riuscito
            formMessage.textContent = 'Messaggio inviato con successo! Ti risponderò presto.';
            formMessage.style.color = '#388E3C'; // Colore Verde
            contactForm.reset();
            
            // Nasconde il messaggio dopo 5 secondi
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }

});
