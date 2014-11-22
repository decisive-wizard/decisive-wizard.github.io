$(document).ready(function(){

  var $bannerSection = $('.banner-section');

  $(window).bind('scroll',function(e){
      parallaxScroll($bannerSection, 0.25);
      fadeScroll($bannerSection, 0, 250);
      inceptionAtBottom();
    });
 
    function parallaxScroll($element, dragCoefficient){
      var scrolledY = $(window).scrollTop();
      $element.css('top','-'+((scrolledY*dragCoefficient))+'px');
    }

    function fadeScroll($element, fadeStart, fadeUntil) {
      var offset = $(document).scrollTop();
      var opacity = 0;

      if( offset <= fadeStart ) {
          opacity=1;
      } else if( offset<=fadeUntil ) {
          opacity = 1 - (offset/fadeUntil);
      }
      $element.css('opacity', opacity);
    }

    function inceptionAtBottom() {
      if (document.documentElement.clientHeight + $(document).scrollTop() >= document.body.offsetHeight){ 
        document.getElementsByTagName('audio')[0].play();
      }
    }
 
});