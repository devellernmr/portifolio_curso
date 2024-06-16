$(".nav-links a").click(function(event) {
    // Evita o comportamento padrão do link
    event.preventDefault();

    // Obtém o ID do destino a partir do atributo href
    var targetId = $(this).attr("href");

    // Rola suavemente até o destino
    $('html, body').animate({
        scrollTop: $(targetId).offset().top
    }, 1000);
});

// Seleciona todos os inputs com a classe .contact_input
document.querySelectorAll('.contact_input').forEach(input => {
    // Verifica se o input tem algum valor inicialmente
    if (input.value !== '') {
        input.parentElement.classList.add('input-filled');
    }

    // Adiciona ou remove a classe .input-filled quando o input ganha ou perde o foco
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('input-filled');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('input-filled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('toggle');
            navLinks.classList.toggle('active');
        });
    }
});
