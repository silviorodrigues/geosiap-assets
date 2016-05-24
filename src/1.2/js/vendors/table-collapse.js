$(document).on('click', '[data-collapse] tr', function() {
  if (!$(this).hasClass("description")) {
    $(this).toggleClass('geo-arrow--down');
    $(this).nextAll('.description').toggleClass('active');
  };
});
