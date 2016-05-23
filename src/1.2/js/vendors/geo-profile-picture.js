function readURL(input, picture) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $(picture).attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).on('change', '[data-picture]', function() {
    readURL($(this).find('input').get([0]), $(this).find('img').get([0]));
});