window.addEventListener('DOMContentLoaded', function () {
    // Inicializar ScrollReveal aquí

    window.sr = ScrollReveal();

    sr.reveal(`.navbar`, {
        duration: 800,
        origin: `bottom`,
        distance: `-100px`
    });


    window.sr = ScrollReveal();

    sr.reveal(`.product-bg`, {
        duration: 1400,
        origin: `top`,
        distance: `-100px`
    });

    window.sr = ScrollReveal();

    sr.reveal(`.floats`, {
        duration: 1000,
        origin: `right`,
        distance: `-100px`
    });


    $(document).ready(function () {
        $('.carrusel').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2500,
            pauseOnHover: false,
            pauseOnFocus: true,
            arrows: false
        });
    });

});


