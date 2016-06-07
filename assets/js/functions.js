$(document).ready(function () {
    attachResizeVideo();
    switchAd();
});

function attachResizeVideo() {

    $(window).resize(function () {
        resizeVideo();
    });

    resizeVideo();
}

function resizeVideo() {

    console.log("fired");

    var $ytplayer = $('#ytplayer');

    var $parent = $ytplayer.parent();



    var newHeight = $parent.height();

    var aspectRatio = $ytplayer.get(0).height / $ytplayer.get(0).width;

    console.log(aspectRatio);

    $ytplayer
       .height(newHeight)
       .width(newHeight / aspectRatio);

    if ($ytplayer.width() > $parent.width()) {
        console.log('correction');

        var widthPadding = $ytplayer.outerWidth() - $ytplayer.width();

        console.log(widthPadding);

        var newWidth = $parent.width() - widthPadding;

        $ytplayer
       .height(newWidth * aspectRatio)
       .width(newWidth);
    }
}

function switchAd() {

    $('.advertisement-wrapper').not(':first').hide();

    setInterval(function () {

        console.log('update');
        var $ads = $('.advertisement-wrapper');
        var len = $ads.length;

        var $curAd = $ads.filter('.active');

        $curAd.fadeOut(1000, function () {
            $curAd.removeClass('active');
            if ($ads.index($curAd) < len - 1) {
                console.log('true');
                $curAd.next().fadeIn(1000).addClass('active');
            } else {
                $ads.first().fadeIn(1000).addClass('active');
            }
        });

}, 10000);
}