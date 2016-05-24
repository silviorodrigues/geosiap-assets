$(document).on('click', '[data-collapse] tr', function() {
  $(this).toggleClass('geo-arrow--down');
  $(this).next().toggleClass('active');
});
