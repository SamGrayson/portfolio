

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
      // .addIndicators()
      .addTo(controller);

    /////// ABOUT ///////

    var aboutScene = new ScrollMagic.Scene({
        triggerElement: '.hiyaWrap',
        duration: 0,
        offset: 100
      })
      // .addIndicators()
      .addTo(controller);

    var profPicScene = new ScrollMagic.Scene({
        triggerElement: '.hiyaWrap',
        duration: 0,
        offset: 100
      })
      // .addIndicators()
      .addTo(controller);

    var continueScene = new ScrollMagic.Scene({
        triggerElement: '.aboutMeWrap',
        duration: 400,
        offset: 100
      })
      .setClassToggle("#continue", "continueAppear")
      // .addIndicators()
      .addTo(controller);

    var aboutAway = new ScrollMagic.Scene({
        triggerElement: '.workWrap',
        duration: 0,
        offset: -50
    })
      // .addIndicators()
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
        $('.description').css('transform', 'scaleY(1)');
    }

    function descriptionLeave (event) {
      $('.description').css('transform', 'scaleY(0)');
    }

    function picture (event) {
        $('#profpic').css('transform', 'translateX(0)');
    }

    function pictureLeave (event) {
        $('#profpic').css('transform', 'translateX(-4000px)');
    }


    function away (event) {
        // $('.contentWrap').css('transform', 'translateY(400px)');
        // $('.aboutMeWrap').css('transform', 'translateY(400px)');
        // $('.contentWrap').css('opacity', '0');
        // $('.aboutMeWrap').css('opacity', '0');
        $('.theGoods').css('opacity', '1');
    }

    function awayLeave (event) {
        // $('.contentWrap').css('transform', 'translateY(0)');
        // $('.aboutMeWrap').css('transform', 'translateY(0)');
        // $('.aboutMeWrap').css('opacity', '1');
        // $('.contentWrap').css('opacity', '1');
        $('.theGoods').css('opacity', '0');
    }

    containerScene.on("enter", hiya);
    // containerScene.on("leave", hiyaLeave);
    aboutScene.on("enter", description);
    // aboutScene.on("leave", descriptionLeave);
    profPicScene.on("enter", picture);
    // profPicScene.on("leave", pictureLeave);
    aboutAway.on("enter", away);
    // aboutAway.on("leave", awayLeave);

    /////////////////////

    /////// WORK ///////

    var workEnter = new ScrollMagic.Scene({
        triggerElement: '.workWrap',
        duration: 0
      })
      // .addIndicators()
      .addTo(controller);

    function slideUp (event) {
        console.log($('#work1').css('transform'))
        $('.lineWork').css('width', '100%');
        $('#work1').css('transform','translateY(0)');
        setTimeout(function() {$('#work2').css('transform','translateY(0)')},100);
        setTimeout(function() {$('#work3').css('transform','translateY(0)')},200);
        setTimeout(function() {$('#work4').css('transform','translateY(0)')},300);
    }

    function slideUpLeave (event) {
        $('.lineWork').css('width', '0%');
        $('#work1').css('transform','translateY(1000px)');
        setTimeout(function() {$('#work2').css('transform','translateY(1000px)')},100);
        setTimeout(function() {$('#work3').css('transform','translateY(1000px)')},200);
        setTimeout(function() {$('#work4').css('transform','translateY(1000px)')},300);
    }

    workEnter.on("enter", slideUp)
    // workEnter.on("leave", slideUpLeave)

    //////////////////////

    /////// RESUME ///////

    var resumeEnter = new ScrollMagic.Scene({
        triggerElement: '.resumeWrap',
        duration: 0
      })
      // .addIndicators()
      .addTo(controller);

    var skillsIn = new ScrollMagic.Scene({
        triggerElement: '#resumeLines',
        duration: 0
      })
      // .addIndicators()
      .addTo(controller);

    var experienceIn = new ScrollMagic.Scene({
        triggerElement: '.skillsWrap',
        duration: 0,
        offset: 200
      })
      // .addIndicators()
      .addTo(controller);

    var educationIn = new ScrollMagic.Scene({
        triggerElement: '.experienceWrap',
        duration: 0,
        offset: 200
      })
      // .addIndicators()
      .addTo(controller);

    function resumeStart (event) {
        // $('.theGoods').css('opacity', '0');
        // $('.individWorkWrap').css('opacity', '0');
        // $('.lineWork').css('opacity', '0');
        // $('#moreWork').css('opacity', '0');
        $('.resume').css('width', '100%');
        $('.resume').css('opacity', '1');
    }

    function resumeStartLeave (event) {
        $('.theGoods').css('opacity', '1');
        $('.individWorkWrap').css('opacity', '1');
        $('.lineWork').css('opacity', '1');
        $('#moreWork').css('opacity', '1');
        $('.resume').css('width', '0%');
        $('.resume').css('opacity', '0');
    }

    function skills(event) {
        $('.skillsTitle').css('opacity', '1');
        $('.skill1').css('transform', 'translateY(0)');
        setTimeout(function() {$('.skill2').css('transform', 'translateY(0)')},100);
        setTimeout(function() {$('.skill3').css('transform', 'translateY(0)')},200);
        setTimeout(function() {$('.skill4').css('transform', 'translateY(0)')},300);
    }
    function skillsLeave(event) {
        $('.skillsTitle').css('opacity', '0');
        $('.skill1').css('transform', 'translateY(1000px)');
        setTimeout(function() {$('.skill2').css('transform', 'translateY(1000px)')},100);
        setTimeout(function() {$('.skill3').css('transform', 'translateY(1000px)')},200);
        setTimeout(function() {$('.skill4').css('transform', 'translateY(1000px)')},300);
    }

    function experience(event) {
        $('.experienceTitle').css('opacity', '1');
        $('.exp1').css('transform', 'translateY(0)');
        setTimeout(function() {$('.exp2').css('transform', 'translateY(0)')},100);
        setTimeout(function() {$('.exp3').css('transform', 'translateY(0)')},200);
        setTimeout(function() {$('.exp4').css('transform', 'translateY(0)')},300);
    }
    function experienceLeave(event) {
        $('.experienceTitle').css('opacity', '0');
        $('.exp1').css('transform', 'translateY(1000px)');
        setTimeout(function() {$('.exp2').css('transform', 'translateY(1000px)')},100);
        setTimeout(function() {$('.exp3').css('transform', 'translateY(1000px)')},200);
        setTimeout(function() {$('.exp4').css('transform', 'translateY(1000px)')},300);
    }

    function education(event) {
        $('.educationTitle').css('opacity', '1');
        $('.education').css('transform', 'translateY(0)');
    }
    function educationLeave(event) {
        $('.educationTitle').css('opacity', '0');
        $('.education').css('transform', 'translateY(1000px)');
    }



    resumeEnter.on('enter', resumeStart);
    // resumeEnter.on('leave', resumeStartLeave);
    skillsIn.on('enter', skills);
    // skillsIn.on('leave', skillsLeave);
    experienceIn.on('enter', experience);
    // experienceIn.on('leave', experienceLeave);
    educationIn.on('enter', education);
    // educationIn.on('leave', educationLeave);

    //////////////////////

    /////// Contact ///////

    var contactEnter = new ScrollMagic.Scene({
        triggerElement: '.contactWrap',
        duration: '90%'
      })
      // .addIndicators()
      .addTo(controller);

      function header(event) {
        var a =  document.getElementById('portfolioLogo');
        var portfolioLogo = a.contentDocument;
        var lines = portfolioLogo.getElementsByClassName('st0')

        var headerOffset = $('.header').offset();
        var contactOffset = $('.contactWrap').offset();

        if (headerOffset.top >= contactOffset.top) {
          $("#headerToggle").addClass("headerWhite");
          lines[0].setAttribute('stroke', '#673AB7');
          lines[1].setAttribute('stroke', '#673AB7');
        } else {
          $("#headerToggle").removeClass("headerWhite");
          lines[0].setAttribute('stroke', 'white');
          lines[1].setAttribute('stroke', 'white');
        }
      }

      function setAttributes(el, attrs) {
        for(var key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
      }

      function svg(event) {
        // var a = document.getElementById('contactTitle');
        // var contactSvg = a.contentDocument;
        // var lines = contactSvg.getElementsByClassName('st0')
        $('#contactTitle').css('display','inline-block');
        $('.contacts').css('opacity','1');
        $('.linkWrap').css('opacity','1');
      }



      contactEnter.on('enter', svg);
      contactEnter.on('progress', header);

    });

  /**************************
  SMOOVE SCROLL BABY
  **************************/

  $('a[href^="#"]').on('click', function(event){

    var target = this.hash;
    var $target = $(target);

    event.preventDefault();

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 1000, 'swing');
  });

  /**************************
  DROPDOWN
  **************************/

});
