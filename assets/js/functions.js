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

        var newWidth = $parent.width();

        $ytplayer
       .height(newWidth * aspectRatio)
       .width(newWidth);
    }
}

function switchAd() {
    setInterval(function () {

        console.log('update');
        var $ads = $('.advertisement-wrapper');
        var len = $ads.length;
        
        var $curAd = $ads.filter('.active');
        $curAd.removeClass('active');

        console.log($ads.index($curAd));

        if ($ads.index($curAd) < len - 1) {
            $curAd.next().addClass('active');
        } else {
            $ads.first().addClass('active');
        }

    }, 10000);
}