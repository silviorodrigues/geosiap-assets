$(document).ready(function(){


    $('.geo-mobile__toggle').click( function(){
        $('.geo-nav__menu').addClass('geo-nav--active');
        $('.geo-nav__overlay').addClass('active');
    });

    $('.geo-nav__overlay').click( function(){
        $('.geo-nav__menu').removeClass('geo-nav--active');
        $('.geo-nav__overlay').removeClass('active');
    });
});