window.addEventListener('DOMContentLoaded', function () {
    // Inicializar ScrollReveal aquí

    window.sr = ScrollReveal();

    sr.reveal(`.navbar-index`, {
        duration: 800,
        origin: `bottom`,
        distance: `-100px`
    });

    window.sr = ScrollReveal();

    sr.reveal(`.banner`, {
        duration: 800,
        origin: `bottom`,
        distance: `-100px`
    });


});


