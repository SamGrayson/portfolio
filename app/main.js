

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
        offset: -50
    })
      .addIndicators()
      .addTo(controller);


    function hiya (event) {
          $('.lines').animate({width: '100%'});
          $('.header').css('display','block');
    }

    function hiyaLeave (event) {
          $('.lines').animate({width: '0%'});
          $('.header').css('display','none');
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
        $('.theGoods').css('opacity', '1');
      } else {
        // $('.contentWrap').css('transform', 'translateY(0)');
        // $('.aboutMeWrap').css('transform', 'translateY(0)');
        $('.aboutMeWrap').css('opacity', '1');
        $('.contentWrap').css('opacity', '1');
        $('.theGoods').css('opacity', '0');
      }
    }

    containerScene.on("enter", hiya);
    containerScene.on("leave", hiyaLeave);
    aboutScene.on("enter leave", description);
    profPicScene.on("enter leave", picture);
    aboutAway.on("enter leave", away);

    /////////////////////

    /////// WORK ///////

    var workEnter = new ScrollMagic.Scene({
        triggerElement: '.workWrap',
        duration: 0
      })
      .addIndicators()
      .addTo(controller);

    function slideUp (event) {
      if($('#work1').css('transform') === 'matrix(1, 0, 0, 1, 0, 1000)') {
        console.log($('#work1').css('transform'))
        $('.lineWork').css('width', '100%');
        $('#work1').css('transform','translateY(0)');
        setTimeout(function() {$('#work2').css('transform','translateY(0)')},100);
        setTimeout(function() {$('#work3').css('transform','translateY(0)')},200);
        setTimeout(function() {$('#work4').css('transform','translateY(0)')},300);
      } else {
        $('.lineWork').css('width', '0%');
        $('#work1').css('transform','translateY(1000px)');
        setTimeout(function() {$('#work2').css('transform','translateY(1000px)')},100);
        setTimeout(function() {$('#work3').css('transform','translateY(1000px)')},200);
        setTimeout(function() {$('#work4').css('transform','translateY(1000px)')},300);
      }
    }

    workEnter.on("enter leave", slideUp)

    //////////////////////

    /////// RESUME ///////

    var resumeEnter = new ScrollMagic.Scene({
        triggerElement: '.resumeWrap',
        duration: 0
      })
      .addIndicators()
      .addTo(controller);

      var skillsIn = new ScrollMagic.Scene({
          triggerElement: '.skillsTitle',
          duration: 0,
          offset: 50
        })
        .addIndicators()
        .addTo(controller);

    function resumeStart (event) {
      if($('.individWorkWrap').css('opacity') === '1') {
        $('.theGoods').css('opacity', '0');
        $('.individWorkWrap').css('opacity', '0');
        $('.lineWork').css('opacity', '0');
        $('#moreWork').css('opacity', '0');
        $('.resume').css('width', '100%');
        $('.resume').css('opacity', '1');
      } else {
        $('.theGoods').css('opacity', '1');
        $('.individWorkWrap').css('opacity', '1');
        $('.lineWork').css('opacity', '1');
        $('#moreWork').css('opacity', '1');
        $('.resume').css('width', '0%');
        $('.resume').css('opacity', '0');
      }
    }

    resumeEnter.on('enter leave', resumeStart);

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
