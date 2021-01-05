owl = $('.solutions-slider').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    items: 1,
    dots: true,
    dotsData: true,
    //dotsContainer: '.pagination',
    autoHeight: false,
    autoplay: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    mouseDrag: false,
    onInitialized: function() {
        $('.owl-dot').addClass('page-next');
    }
});

owl.on('changed.owl.carousel', function(e) {
    $(".owl-dot.active").removeClass("page-next page-prev").nextAll().addClass("page-next").removeClass("page-prev")
    $(".owl-dot.active").removeClass("page-next page-prev").prevAll().addClass("page-prev").removeClass("page-next")
});


/* Lotos Lottie */
let lotos = document.getElementById("lotos-anim");
let lotosAnim = bodymovin.loadAnimation({
    container: lotos,
    path: "https://assets5.lottiefiles.com/packages/lf20_qJ0tL7.json",
    autoplay: false,
    renderer: "svg",
    loop: false
});

$(".owl-dot").on("click", function(event) {
    if ($(this).hasClass("page-next")) {
        lotosAnim.setDirection(1);
        lotosAnim.goToAndStop(0, true);
        lotosAnim.play();
    } else if ($(this).hasClass("page-prev")) {
        lotosAnim.setDirection(-1);
        lotosAnim.goToAndStop(lotosAnim.totalFrames, true);
        lotosAnim.play();
    }
});
