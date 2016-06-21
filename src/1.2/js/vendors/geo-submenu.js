$(document).on('click', '[data-submenu]', function() {
  $('[data-submenu]').children('.geo-arrow').removeClass('geo-arrow--down');
  $('[data-submenu]').children('.geo-submenu').removeClass('active')


  $(this).children('.geo-arrow').toggleClass('geo-arrow--down');
  $(this).children('.geo-submenu').toggleClass('active');

  $('.geo-nav').removeClass('geo-nav--reduced');
  $('.geo-framework__content').removeClass('reduced');
  $('[data-logo="expand"]').show();
  $('[data-logo="reduced"]').hide();
});