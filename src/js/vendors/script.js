$(document).ready(function(){

    //ICON ATOM
    $(function(){
        jQuery('[data-svgicon]').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
        
            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');
        
                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }
        
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                
                // Check if the viewport is set, else we gonna set it if we can.
                if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }
        
                // Replace image with new SVG
                $img.replaceWith($svg);
        
            }, 'xml');
        
        });
    });
    // $('[data-svgicon]').shapeSvgConvert();


    // MENU ATOM
    $('.geo-menu__button').click(function( e ){
        var gm = this.id,
        gmFor = $('[data-geo-for="' + gm + '"]'),
        gmId = $('#' + gm),
        gmTop = gmId.offset().top,
        gmLeft = gmId.offset().left;


        e.stopPropagation();
        $('[data-geo-for]').hide();
        gmFor.show();

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



