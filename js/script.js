$(document).ready(function(){function a(){$("#bars").hasClass("fa-bars")?($("#bars").removeClass("fa-bars"),$("#bars").addClass("fa-times")):($("#bars").removeClass("fa-times"),$("#bars").addClass("fa-bars")),$("#main-nav").toggleClass("expand"),$("#expander").toggleClass("expand"),$("#main-nav").toggleClass("closed")}$(window).scroll(function(){$(window).scrollTop()>.6*$(window).width()-2&&($("#main-nav").addClass("nav-fixed"),$(".wrapper").addClass("margin-fix")),$(window).scrollTop()<.6*$(window).width()&&($("#main-nav").removeClass("nav-fixed"),$(".wrapper").removeClass("margin-fix"))}),$("#main-nav").onePageNav({currentClass:"current",scrollSpeed:750,scrollThreshold:.1}),$("#arrow a").click(function(){$(window).scrollTo($("#my-work"),750)}),$("#bars").click(function(){return a()}),$("nav#main-nav > ul > li > a").click(function(){return a()}),$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav",adaptiveHeight:!0}),$(".slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider-for",dots:!0,centerMode:!0,focusOnSelect:!0});var s=500;$("#textarea_feedback").html("500/500"),$("#message").keyup(function(){var a=$("#message").val().length,s=500-a;$("#textarea_feedback").html(s+"/500")}),$("#message").keyup(function(a){for(;$(this).outerHeight()<this.scrollHeight+parseFloat($(this).css("borderTopWidth"))+parseFloat($(this).css("borderBottomWidth"));)$(this).height($(this).height()+1)}),$(window).scroll(function(){$(this).scrollTop()>=$("#resume").offset().top-250?$(".bar-wrapper .bar").addClass("anim-height"):$(".bar-wrapper .bar").removeClass("anim-height")})});