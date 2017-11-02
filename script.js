$(document).ready(function() {

  $(window).scroll(function () {

    //console.log($(window).scrollTop());

    if ($(window).scrollTop() > ($( window ).width() * 0.6) - 1) {
      $('#main-nav').addClass('nav-fixed');
      $('.wrapper').addClass('margin-fix');
    }

    if ($(window).scrollTop() < $( window ).width() * 0.6) {
      $('#main-nav').removeClass('nav-fixed');
      $('.wrapper').removeClass('margin-fix');
    }

  });

  $('#main-nav').onePageNav({
  	currentClass: 'current',
  	scrollSpeed: 750,
  	scrollThreshold: 0.5,
  });

  $('#arrow a').click(function() {
    $(window).scrollTo($('#my-work'), 750);
  });

  function openClose() {

    if ($("#bars").hasClass("fa-bars")) {
      $('#bars').removeClass('fa-bars')
      $('#bars').addClass('fa-times')

    } else {
      $('#bars').removeClass('fa-times')
      $('#bars').addClass('fa-bars')
    }

    $('#main-nav').toggleClass('expand')
    $('#expander').toggleClass('expand')
    $('#main-nav').toggleClass('closed')
  }

     $('#bars').click(function() {
      return openClose();
    });

    $('nav#main-nav > ul > li > a').click(function() {
      return openClose();
    });

});
