$('.counter').counterUp({
    delay: 10,
    time: 5000
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
