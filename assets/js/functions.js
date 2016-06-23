(function ($) {

    $document = $(document);

    var $ads = $('.advertisement-wrapper');
    var adsLen = $ads.length;

    $document.ready(function () {
        switchAd();
    });

    function switchAd() {
        var transitionTime = $('#advertisements-container').attr('data-adTime') * 1000;

        var timer = setInterval(nextAd, transitionTime);

        $document.on('keydown', function (e) {

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
        });
    } 

    function nextAd() {
        var $curAd = $ads.filter('.active');

        $curAd.fadeOut(1000, function () {
            $curAd.removeClass('active');
            if ($ads.index($curAd) < adsLen - 1) {
                $curAd.next().fadeIn(1000).addClass('active');
            } else {
                $ads.first().fadeIn(1000).addClass('active');
            }
        });
    }

    function prevAd() {
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

})(jQuery);