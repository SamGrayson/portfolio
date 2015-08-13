

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

    /////// ABOUT ///////

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
        duration: 400,
        offset: 100
      })
      .setClassToggle("#continue", "continueAppear")
      .addIndicators()
      .addTo(controller);

    var aboutAway = new ScrollMagic.Scene({
        triggerElement: '.workWrap',
        duration: 0,
        offset: -150
    })
      .addIndicators()
      .addTo(controller);


      function hiya (event) {
        if($('.lines').css('width') === '0px') {
            $('.lines').animate({width: '100%'});
            $('.header').css('display','block');
          }
        else {
            $('.lines').animate({width: '0%'});
            $('.header').css('display','none');
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

    function away (event) {
      if ($('.contentWrap').css('opacity')==='1') {
        // $('.contentWrap').css('transform', 'translateY(400px)');
        // $('.aboutMeWrap').css('transform', 'translateY(400px)');
        $('.contentWrap').css('opacity', '0');
        $('.aboutMeWrap').css('opacity', '0');
      } else {
        // $('.contentWrap').css('transform', 'translateY(0)');
        // $('.aboutMeWrap').css('transform', 'translateY(0)');
        $('.aboutMeWrap').css('opacity', '1');
        $('.contentWrap').css('opacity', '1');
      }
    }

    containerScene.on("enter leave", hiya);
    aboutScene.on("enter leave", description);
    profPicScene.on("enter leave", picture);
    aboutAway.on("enter leave", away);

    /////////////////////

  });

  /**************************
  OTHER SHTUFF
  **************************/

  // $('#profpic').on('mouseenter', function(){
  //     $('#profpic').attr('src', "media/lacrosse.jpg");
  // })
  // $('#profpic').on('mouseleave', function(){
  //     $('#profpic').attr('src', "media/profpic.jpg");
  // })

});
