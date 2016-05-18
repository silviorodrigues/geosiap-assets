$(document).ready(function(){

    $('[data-logo="reduced"]').hide();
    $('.geo-nav__footer').click( function(){
        if ($('.geo-nav').hasClass('geo-nav--reduced')) {
            $('.geo-nav').removeClass('geo-nav--reduced');
            $('[data-logo="expand"]').show();
            $('[data-logo="reduced"]').hide();
        } else {
            $('.geo-nav').addClass('geo-nav--reduced');
            $('[data-logo="expand"]').hide();
            $('[data-logo="reduced"]').show();
        }
    });

});