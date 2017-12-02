$(document).ready(function() {

  //Fixerar menyn på en specifik punkt (60% av webbläsarens bredd)
  $(window).scroll(function () {

    if ($(window).scrollTop() > ($( window ).width() * 0.6) - 2) {
      //Klasser för att fixera menyn
      $('#main-nav').addClass('nav-fixed');
      $('.wrapper').addClass('margin-fix');
    }

    if ($(window).scrollTop() < $( window ).width() * 0.6) {
      //Klasser för att av-fixera menyn
      $('#main-nav').removeClass('nav-fixed');
      $('.wrapper').removeClass('margin-fix');
    }

  });
  //OnePageNav skriptet
  $('#main-nav').onePageNav({
  	currentClass: 'current',
  	scrollSpeed: 750,
  	scrollThreshold: 0.1,
  });

  //Pilen som tar en ned till section#my-work
  $('#arrow a').click(function() {
    $(window).scrollTo($('#my-work'), 750);
  });

  // Menyn för skärmar mindre än 400px
  // Blev så många add och remove class att jag la dem i en funktion
  function openClose() {

    //Av och...
    if ($("#bars").hasClass("fa-bars")) {
      $('#bars').removeClass('fa-bars');
      $('#bars').addClass('fa-times');

    //...på för menyknappen
    } else {
      $('#bars').removeClass('fa-times');
      $('#bars').addClass('fa-bars');
    }

    $('#main-nav').toggleClass('expand');
    $('#expander').toggleClass('expand');
    $('#main-nav').toggleClass('closed');
  }
  //Här körs funktionen
  $('#bars').click(function() {
    return openClose();
  });
  //Här körs funktionen när man valt något i menyn
  $('nav#main-nav > ul > li > a').click(function() {
    return openClose();
  });

  //Slick sliders intällningar (library)
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    adaptiveHeight: true,
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });

  // Räknar bokstäver i textarea#message (hittat på nätet)
  var text_max = 500;
    $('#textarea_feedback').html(text_max + '/500');

    $('#message').keyup(function() {
      var text_length = $('#message').val().length;
      var text_remaining = text_max - text_length;

      $('#textarea_feedback').html(text_remaining + '/500');
    });

  // textarea#message blir större när man skriver (hittat på nätet)
  $("#message").keyup(function(e) {
      while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
          $(this).height($(this).height()+1);
      };
  });


  //Lägger till klass på .bar när man skrollar förbi #resume
  $(window).scroll(function(){
    if($(this).scrollTop()>= $('#resume').offset().top - 250){
        $('.bar-wrapper .bar').addClass('anim-height');
    } else {
      $('.bar-wrapper .bar').removeClass('anim-height');
    }
  });

});
