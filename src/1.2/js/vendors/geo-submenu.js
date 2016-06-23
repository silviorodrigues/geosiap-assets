$(document).on('click', '[data-submenu]', function(e) {
  if (e.target !== this) {
    return;
  } else {
    $('[data-submenu]').not(this).children('.geo-arrow').removeClass('geo-arrow--down');
    $('[data-submenu]').not(this).children('.geo-submenu').removeClass('active')

    $(this).children('.geo-arrow').toggleClass('geo-arrow--down');
    $(this).children('.geo-submenu').toggleClass('active');

    $('.geo-nav').removeClass('geo-nav--reduced');
    $('.geo-framework__content').removeClass('reduced');
    $('[data-logo="expand"]').show();
    $('[data-logo="reduced"]').hide();
  }
});