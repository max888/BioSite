$(document).ready(function() {

  $('#about_link').on('click', function(e) {
    e.preventDefault();
    console.log("about working");
    $.smoothScroll({
      scrollElement: $('body'),
      scrollTarget: '#about',
      speed: 900,
    });
    return false;
  });

  $('#home_link').on('click', function(e) {
    e.preventDefault();
    console.log("home working");
    $.smoothScroll({
      scrollElement: $('body'),
      scrollTarget: '#home',
      speed: 900,

    });
    return false;
  });

  $('#portfolio_link').on('click', function(e) {
    e.preventDefault();
    console.log("portfolio working");
    $.smoothScroll({
      scrollElement: $('body'),
      scrollTarget: '#portfolio',
      speed: 900,
    });
    return false;
  });

  $('#contact_link').on('click', function(e) {
    e.preventDefault();
    console.log("contact working");
    $.smoothScroll({
      scrollElement: $('body'),
      scrollTarget: '#contact',
      speed: 900,
    });
    return false;
  });

  // An alternative way to scroll to the links smoothly
  
  // $('a[href^="#"]').on('click',function (e) {
  //     e.preventDefault();

  //     var target = this.hash,
  //     $target = $(target);

  //     $('html, body').stop().animate({
  //         'scrollTop': $target.offset().top
  //     }, 900, 'swing', function () {
  //         window.location.hash = target;
  //     });
  // });

});