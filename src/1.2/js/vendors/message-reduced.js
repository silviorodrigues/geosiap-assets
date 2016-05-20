$(document).ready(function(){

    $('.geo-chat').on('click', '.geo-message__header', function() {
        $(this).parent('.geo-chat__message').toggleClass('geo-chat__message--reduced');
    });

});