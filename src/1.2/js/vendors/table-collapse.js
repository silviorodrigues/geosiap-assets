$(document).ready(function(){

    $('[data-collapse]').on('click', 'tr', function() {
      $(this).find('.geo-arrow').toggleClass('geo-arrow--down');
      $(this).next().toggleClass('active');
    });

});