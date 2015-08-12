

$(document).ready(function() {
  /**************************
  SCROLL MAGIC
  **************************/

  $(function() {
    var controller = new ScrollMagic.Controller();

    var containerScene = new ScrollMagic.Scene({
        triggerElement: '.contentWrap',
        duration: 0
      })
      .setClassToggle("#hiya", "hiyaAppear")
      .setPin('')
      .addIndicators()
      .addTo(controller);

    var aboutScene = new ScrollMagic.Scene({
        triggerElement: '.hiyaWrap',
        duration: 0,
        offset: 100
      })
      .addIndicators()
      .addTo(controller);

    var profPicScene = new ScrollMagic.Scene({
        triggerElement: '.hiyaWrap',
        duration: 0,
        offset: 100
      })
      .addIndicators()
      .addTo(controller);

    var continueScene = new ScrollMagic.Scene({
        triggerElement: '.aboutMeWrap',
        duration: 0,
        offset: 100
      })
      .setClassToggle("#continue", "continueAppear")
      .addIndicators()
      .addTo(controller);

    function hiya (event) {
      if($('.lines').css('width') === '0px') {
          $('.lines').animate({width: '100%'});
        }
      else {
          $('.lines').animate({width: '0%'});
        }
    }

    function description (event) {
      if ($('.description').css('transform') === "matrix(1, 0, 0, 0, 0, 0)") {
        $('.description').css('transform', 'scaleY(1)');
      } else {
        $('.description').css('transform', 'scaleY(0)');
      }
    }

    function picture (event) {
      if ($('#profpic').css('transform') === 'matrix(1, 0, 0, 1, -4000, 0)') {
        $('#profpic').css('transform', 'translateX(0)');
      } else {
        $('#profpic').css('transform', 'translateX(-4000px)');
      }
    }

    containerScene.on("enter leave", hiya);
    aboutScene.on("enter leave", description);
    profPicScene.on("enter leave", picture);

  });


});
