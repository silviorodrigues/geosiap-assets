$(document).on('click', '[data-collapse] tr', function(event) {
  if (!$(event.target).is($('.geo-table--action svg'))) {
    if (!$(this).hasClass("description")) {
      $(this).toggleClass('geo-arrow--down');
      $(this).nextAll('.description').toggleClass('active');
    };
  }
});