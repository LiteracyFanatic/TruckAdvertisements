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

    setInterval(function () {
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
    }, transitionTime);
}