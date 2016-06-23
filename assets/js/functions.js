$(document).ready(function () {
    //createVideo();
    //attachSkipVideo();
    //attachResizeVideo();
    switchAd();
});


function attachResizeVideo() {
    $(window).resize(function () {
        resizeVideo();
    });
    resizeVideo();
}

function resizeVideo() {
    var $player = $('#player');

    var $parent = $player.parent();

    var newHeight = $parent.height();

    var aspectRatio = $player.get(0).height / $player.get(0).width;

    $player
       .height(newHeight)
       .width(newHeight / aspectRatio);

    if ($player.width() > $parent.width()) {

        var widthPadding = $player.outerWidth() - $player.width();

        var newWidth = $parent.width() - widthPadding;

        $player
       .height(newWidth * aspectRatio)
       .width(newWidth);
    }
}

function switchAd() {
    $('.advertisement-wrapper').not(':first').hide();

    var transitionTime = $('#advertisements-container').attr('data-adTime') * 1000;

    var timer = setInterval(nextAd, transitionTime);

    $(document).on('keydown', function (e) {

        switch (e.which) {
            case 37: // left
                clearInterval(timer);
                timer = 0;
                prevAd();
                break;

            case 39: // right
                clearInterval(timer);
                timer = 0;
                nextAd();
                break;

            case 80: // p
                if (!timer) {
                    nextAd();
                    timer = setInterval(nextAd, transitionTime);
                } else {
                    clearInterval(timer);
                    timer = 0;
                }
                break;

            default: return;
        }
        e.preventDefault();
    })
}

function nextAd() {
    var $ads = $('.advertisement-wrapper');
    var len = $ads.length;

    var $curAd = $ads.filter('.active');

    $curAd.fadeOut(1000, function () {
        $curAd.removeClass('active');
        if ($ads.index($curAd) < len - 1) {
            $curAd.next().fadeIn(1000).addClass('active');
        } else {
            $ads.first().fadeIn(1000).addClass('active');
        }
    });
}

function prevAd() {
    var $ads = $('.advertisement-wrapper');
    var len = $ads.length;

    var $curAd = $ads.filter('.active');

    $curAd.fadeOut(1000, function () {
        $curAd.removeClass('active');
        if ($ads.index($curAd) > 0) {
            $curAd.prev().fadeIn(1000).addClass('active');
        } else {
            $ads.last().fadeIn(1000).addClass('active');
        }
    });
}