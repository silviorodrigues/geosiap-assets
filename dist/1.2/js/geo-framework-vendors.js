$(document).ready(function(){

    $.datepicker.regional['pt-BR'] = {
        closeText: 'Fechar',
        prevText: '&#x3c;Anterior',
        nextText: 'Pr&oacute;ximo&#x3e;',
        currentText: 'Hoje',
        monthNames: ['Janeiro','Fevereiro','Mar\u00e7o','Abril','Maio','Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun', 'Jul','Ago','Set','Out','Nov','Dez'],
        dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
        dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };

    $.datepicker.setDefaults($.datepicker.regional['pt-BR']);

});
$(document).ready(function(){

    $('[data-menu]').click(function( e ){
        var gm = this.id,
        gmFor = $('[data-geo-for="' + gm + '"]'),
        gmId = $('#' + gm),
        gmTop = gmId.offset().top,
        gmLeft = gmId.offset().left;


        e.stopPropagation();
        if(gmFor.is(':hidden')) {
            $('[data-geo-for]').hide();
            gmFor.show();
        } else {
            $('[data-geo-for]').hide();
            gmFor.hide();
        }

        if(gmFor.hasClass('geo-menu--bottom-right')) {
            gmFor.css({top: gmTop + gmId.height(), left: gmLeft + gmId.width()});
        }else if(gmFor.hasClass('geo-menu--bottom-left')) {
            gmFor.css({top: gmTop + gmId.height() + 15, left: gmLeft - gmFor.width()});
        }else if(gmFor.hasClass('geo-menu--top-right')) {
            gmFor.css({top: gmTop - gmId.height()  - gmFor.height(), left: gmLeft + gmId.width()});
        }else if(gmFor.hasClass('geo-menu--top-left')) {
            gmFor.css({top: gmTop - gmId.height()  - gmFor.height(), left: gmLeft - gmFor.width()});
        }

    });
    $('body').click(function(){
        $('[data-geo-for]').hide();
    });

    window.document.onkeydown = function (e) {
        if (!e) e = event;
        if (e.keyCode == 27) {
            $('[data-geo-for]').hide();
        }
    }

});
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
$(document).on('click', '.geo-input--12c, .geo-input--9c, .geo-input--6c, .geo-input--3c, .geo-input--1c', function() {
  $(this).children('div').children('input').focus();
});
$(document).ready(function(){


    $('.geo-mobile__toggle').click( function(){
        $('.geo-nav__menu').addClass('geo-nav--active');
        $('.geo-nav__overlay').addClass('active');
    });

    $('.geo-nav__overlay').click( function(){
        $('.geo-nav__menu').removeClass('geo-nav--active');
        $('.geo-nav__overlay').removeClass('active');
    });
});
$(document).ready(function(){
    $('[data-logo="reduced"]').hide();
    $('.geo-nav__footer').click( function(){
        if ($('.geo-nav').hasClass('geo-nav--reduced')) {
            $('.geo-nav').removeClass('geo-nav--reduced');
            $('.geo-framework__content').removeClass('reduced');
            $('[data-logo="expand"]').show();
            $('[data-logo="reduced"]').hide();
        } else {
            $('.geo-nav').addClass('geo-nav--reduced');
            $('.geo-framework__content').addClass('reduced');
            $('[data-logo="expand"]').hide();
            $('[data-logo="reduced"]').show();
            $('[data-submenu]').children('.geo-arrow').removeClass('geo-arrow--down');
            $('[data-submenu]').children('.geo-submenu').removeClass('active');
        }
    });

});
$(document).ready(function(){

    $('.geo-chat').on('click', '.geo-message__header', function() {
        $(this).parent('.geo-chat__message').toggleClass('geo-chat__message--reduced');
    });

});
$.fn.select2.defaults.defaults.language.errorLoading = function () {
  return 'Os resultados não puderam ser carregados.';
}

$.fn.select2.defaults.defaults.language.inputTooLong = function (args) {
  var overChars = args.input.length - args.maximum;

  var message = 'Apague ' + overChars + ' caracter';

  if (overChars != 1) {
    message += 'es';
  }

  return message;
}

$.fn.select2.defaults.defaults.language.inputTooShort = function (args) {
  var remainingChars = args.minimum - args.input.length;

  var message = 'Digite ' + remainingChars + ' ou mais caracteres';

  return message;
}

$.fn.select2.defaults.defaults.language.loadingMore = function () {
  return 'Carregando mais resultados…';
}

$.fn.select2.defaults.defaults.language.maximumSelected = function (args) {
  var message = 'Você só pode selecionar ' + args.maximum + ' ite';

  if (args.maximum == 1) {
    message += 'm';
  } else {
    message += 'ns';
  }

  return message;
}

$.fn.select2.defaults.defaults.language.noResults = function () {
  return 'Nenhum resultado encontrado';
}

$.fn.select2.defaults.defaults.language.searching = function () {
  return 'Pesquisando...';
}

$(document).on('click', '[data-collapse] tr', function(event) {
  if (!$(event.target).is($('.geo-table--action svg'))) {
    if (!$(this).hasClass("description")) {
      $(this).toggleClass('geo-arrow--down');
      $(this).nextAll('.description').toggleClass('active');
    };
  }
});