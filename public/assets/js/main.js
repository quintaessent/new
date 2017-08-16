 
"use strict";
  $(document).ready(function() {
   //--- Preloader
    $('.loader').fadeOut();    
    $('#preloader').delay(200).fadeOut('slow');

  //--- YouTube Video ---
      $("#video").YTPlayer({
        fitToBackground: true,
      });

  // --- MENU ---
var subMenu = $('.sub-menu>a');
var subMenuChild = $('.sub-menu>a>p');
var navMenu = $('.navigation_menu');
var textMenu = $('.text-menu');
var burger = $(".hamburger");
var textClose = $('.text-close');

// Opening of the menu
burger.on('click',function () {
    $(this).toggleClass('opened');
    navMenu.toggleClass('seen');
    textMenu.toggleClass('hide');
    textClose.toggleClass('hide');
    subMenu.toggleClass('animated fadeInDown');
    subMenuChild.toggleClass('animated fadeIn');
});

// Closing the menu when scrolling
$(window).on('scroll',function(){
    navMenu.removeClass('seen');
    burger.removeClass('opened');
    textMenu.removeClass('hide');
    textClose.addClass('hide');
    subMenu.removeClass('animated fadeInDown');
    subMenuChild.removeClass('animated fadeIn');
});

// menu - line hover
  subMenu.hover(
  function() {
    $( this ).addClass('line-menu-seen');
  }, function() {
    $( this ).removeClass('line-menu-seen');
  }
);

// Hide Header on on scroll down
$(".navigation").headroom({
   classes : {
        // when element is initialised
        initial : "headroom",
        // when scrolling up
        pinned : "nav-down",
        // when scrolling down
        unpinned : "nav-up",
    },
 });


   // --- jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
      $('a.page-scroll').on('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
        event.preventDefault();
      });
    });


  // -- owlCarousel --
  //clients Carousel
  $('#clients').owlCarousel({
     autoplay: true,
     margin: 60,
     loop: true,
     dots: false,
     nav: false,
     responsive: {
          0: {
          items: 1
          },
          300: {
          items: 2
          },
          480: {
          items: 3
          },
          648: {
          items: 5
          },
          1024: {
          items: 6
          }
        }
  });

   // testimonials
   $("#tst-carousel").owlCarousel({
    loop:true,
    center:true,
    nav: true,
    navText: ['<i class="fa ion-ios-arrow-thin-left"></i>', '<i class="fa ion-ios-arrow-thin-right"></i>'],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 1,
      }
   }
});

   // album
   $("#album-carousel").owlCarousel({
    margin:30,
    loop:true,
    dots:false,
    nav:true,
    navText: ['<i class="fa ion-ios-arrow-thin-left"></i>', '<i class="fa ion-ios-arrow-thin-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 3,
      }
   }
});

      // blog-carousel-post
   $("#blog-post-carousel").owlCarousel({
    margin:0,
    loop:true,
    items:1,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:500,
    nav:false 
});
  
    // home-header-carousel
 $('.carousel').carousel({
        interval: 5000,//changes the speed
    });

   // --- GALLERY ----
   $('.flex-images').flexImages({
    rowHeight: 300 
  });

   // --- Popup for images
  $('.image-link').magnificPopup({
      type:'inline',
      fixedContentPos: false,
      removalDelay: 100,
      closeBtnInside: true,
      preloader: false,
      mainClass: 'fadeInDown',
      gallery: {
                 enabled: true, // set to true to enable gallery
                 preload: [0,2], // read about this option in next Lazy-loading section
                 navigateByImgClick: true,
                 arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                 tPrev: 'Previous (Left arrow key)', // title for left button
                 tNext: 'Next (Right arrow key)', // title for right button
                 tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
      }
  });

   // --- Popup for video
   $('.video-link').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });

 });//end documentready

















