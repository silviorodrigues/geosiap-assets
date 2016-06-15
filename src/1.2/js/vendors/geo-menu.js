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

});