$(function () {

    $(".bars").on("click", function() {
        $(".bars").toggleClass('bars-open');
        $(".nav-menu").toggleClass('nav-opened');
    });

});