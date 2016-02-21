$(function(){


    var $window = $(window),
        $wrapper = $('#wrapper'),
        $accordion = $('#js-accordion'),
        $menuButton = $(".menu-button"),
        $jsCover = $('#js-cover'),
        $nav = $('.nav-content'),

        navHeight = $nav.height(),

        SPEED = 400,

        bodyHeight = $wrapper.height(),

        HEADER_HEIGHT = 1000;


    $window.on('load orientationchange', function() {
        windowHeight = $window.height();
    });


    function openAction(){
        $accordion.addClass('is-open');

        if(navHeight > windowHeight){
            $wrapper.css({overflow:'hidden'}).height(navHeight + HEADER_HEIGHT);
            $jsCover.height(navHeight + HEADER_HEIGHT).stop().animate({opacity:1},SPEED);
        } else {
            $wrapper.css({overflow:'hidden'}).height(windowHeight);
            $jsCover.height(windowHeight).stop().animate({opacity:1},SPEED);
        }
    }


    function closeAction(){
        $accordion.removeClass('is-open');
        $wrapper.css({overflow:'visible'}).height(bodyHeight);
        $jsCover.stop().animate({opacity:1,height:0},SPEED);
        //$jsCover.removeAttr('style');
    }


    $menuButton.on('click',function(){
        if($accordion.hasClass('is-open')){
            closeAction();
        } else {
            openAction();
        }
    });

    //開いたままスマホを傾けた時
    $window.on('orientationchange', function () {
        if($accordion.hasClass('is-open')){
            if(navHeight > windowHeight) {
                $wrapper.height(navHeight + HEADER_HEIGHT);
                $jsCover.height(navHeight + HEADER_HEIGHT);
            } else {
                $wrapper.height(windowHeight);
                $jsCover.height(windowHeight);
            }
        }
    });

});