$(document).ready( function() {

// MENU

  $('.page-nav__toggle').on('click', function() {
    $('.page-nav__link').removeClass('page-nav__link--active')
    $('.page-nav').toggleClass('page-nav--active');
    });

  $('.page-nav__link').on('click', function() {
    $('.page-nav__link').removeClass('page-nav__link--active');
    $(this).toggleClass('page-nav__link--active');
  });

  $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html').animate({ scrollTop: destination }, 1100);
    });

  $("#slider").slick({
    arrows: false
  });

  $('.toggle--left').on('click', function() {
    $('#slider').slick('slickPrev');
  });
  $('.toggle--right').on('click', function() {
    $('#slider').slick('slickNext');
  });
  
});


var slideout = new Slideout({
  'panel': document.getElementById('content'),
  'menu': document.getElementById('page-nav'),
  'padding': 256,
  'tolerance': 70
});

// Toggle button
document.querySelector('.page-nav__toggle').addEventListener('click', function() {
  slideout.toggle();
});




