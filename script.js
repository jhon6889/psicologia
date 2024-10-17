document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;
        const icon = button.querySelector('.icon');

        // Alternar la visibilidad de la respuesta
        faqAnswer.style.display = faqAnswer.style.display === 'block' ? 'none' : 'block';

        // Cambiar el icono a flecha hacia arriba o hacia abajo
        icon.textContent = faqAnswer.style.display === 'block' ? '▲' : '▼';
    });
});
