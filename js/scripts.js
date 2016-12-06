var player;

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'E8gmARGvPlI',
        events: {
            'onReady': onPlayerReady
        }
    });
}

var startTimer = function (duration) {
    var timer = duration;

    var interval = setInterval(function () {
        var display = document.querySelector('#timer');
        display.textContent = timer;
        if (--timer < 0) {
            clearInterval(interval);
            $(".media-image").fadeIn();
            player.playVideo();
            player.unMute();
            var slider = $('.lyrics');
            slider.addClass("animate");
            slider.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                function (e) {
                    slider.removeClass('animate');
                    slider.addClass("finished");
                });

        }

    }, 1000);
};
var onPlayerReady = function () {
    player.mute()
    player.stopVideo();
    startTimer(10);
};

(function ($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 0
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function (event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

})(jQuery);

