$(document).on('click', '[data-collapse] tr', function() {
  $(this).find('.geo-arrow').toggleClass('geo-arrow--down');
  $(this).next().toggleClass('active');
});
