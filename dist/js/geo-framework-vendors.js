$(document).ready(function(){

    //ICON ATOM
    $('[data-svgicon]').shapeSvgConvert( {
        onComplete: function() {
            if ($(document).has($('[data-svgicon]'))) {
                $('[data-svgicon]').shapeSvgConvert();
            }
        }
    });


    // MENU ATOM
    $('.geo-menu__button').click(function( e ){
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
            gmFor.css({top: gmTop + gmId.height(), left: gmLeft - gmFor.width()});
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

    //MENU REDUCE
    $('[data-logo="reduced"]').hide();
    $('.geo-nav__footer').click( function(){
        if ($('.geo-nav').hasClass('geo-nav--reduced')) {
            $('.geo-nav').removeClass('geo-nav--reduced');
            $('.geo-header').removeClass('geo-header--reduced');
            $('.geo-content').removeClass('geo-content--reduced');
            $('[data-logo="expand"]').show();
            $('[data-logo="reduced"]').hide();
        } else {
            $('.geo-nav').addClass('geo-nav--reduced');
            $('.geo-header').addClass('geo-header--reduced');
            $('.geo-content').addClass('geo-content--reduced');
            $('[data-logo="expand"]').hide();
            $('[data-logo="reduced"]').show();
        }
    });

    // NAV MOBILE
    $('.geo-mobile__toggle').click( function(){
        $('.geo-nav').addClass('geo-nav--active');
        $('.geo-nav__overlay').addClass('active');
    });

    $('.geo-nav__overlay').click( function(){
        $('.geo-nav').removeClass('geo-nav--active');
        $('.geo-nav__overlay').removeClass('active');
    });

    //MESSAGES REDUCED
    $('.geo-chat').on('click', '.geo-message__header', function() {
        $(this).parent('.geo-chat__message').toggleClass('geo-chat__message--reduced');  
    });

    //INPUT FOCUS
    $('.geo__input--12c, .geo__input--9c, .geo__input--6c, .geo__input--3c, .geo__input--1c').click(function(){
        $(this).children('div').children('input').focus();
    });

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
