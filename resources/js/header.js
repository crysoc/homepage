$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    
    if (scroll >= 70) {
        $('.js-navigation-wrapper').addClass('navigation-wrapper--active');
    } else {
        $('.js-navigation-wrapper').removeClass('navigation-wrapper--active');
    }
});