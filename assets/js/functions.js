$(document).ready(function () {
    smoothScroll(300);
    resizeVideo();
});


// smoothScroll function is applied from the document ready function
function smoothScroll(duration) {
    $('a[href^="#"]').on('click', function (event) {

       var target = $($(this).attr('href'));

       if (target.length) {
          event.preventDefault();
          $('html, body').animate({
             scrollTop: target.offset().top
          }, duration);
       }
    });
}

function resizeVideo() {

    var $ytplayer = $('#ytplayer');

    var $parent = $ytplayer.parent();

    var newHeight = $parent.height();

    $ytplayer.data('aspectRatio', $ytplayer.get(0).height / $ytplayer.get(0).width)
       .removeAttr('height')
       .removeAttr('width');

    console.log($ytplayer.data('aspectRatio'));

    $ytplayer
       .height(newHeight)
       .width(newHeight / $ytplayer.data('aspectRatio'))
       .attr('margin-left', '100px')
       .attr('margin-right', 'auto');
}