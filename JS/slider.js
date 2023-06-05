new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    
    grabCursor: true,

    effect: 'fade',

    fadeEffect: {
        crossFade: true
    },

    speed: 1000,

    loop: true,
});