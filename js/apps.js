$(function(){
  
    AOS.init();
    $('#baner').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        centerMode: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

       });
$('#gallery').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
$('#plan').slick({
  slidesToShow: 3,
  prevArrow:"#plans .arrows  span.laftarrows",
  nextArrow:"#plans .arrows  span.rightarrows",
 
  slidesToscroll:1,

  autoplay: true,
  autoplaySpeed: 700,
  arrows: true,
  dots: false,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
$('#event').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    centerMode: false,
    slidesToscroll:1,
    prevArrow:"#event .arrows  span.laftarrows",
    nextArrow:"#event .arrows  span.rightarrows",
});

$('#djs').slick({
    slidesToShow: 5,
   
    slidesToscroll:1,

    autoplay: true,
    autoplaySpeed: 700,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
$('#blog').slick({
  slidesToShow: 3,
  prevArrow:"#blogs .arrows  span.laftarrows",
  nextArrow:"#blogs .arrows  span.rightarrows",
 
  slidesToscroll:1,

  autoplay: true,
  autoplaySpeed: 700,
  arrows: true,
  dots: false,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
$('#test').slick({
  slidesToShow: 2,
  prevArrow:"#tests .arrows  span.laftarrows",
  nextArrow:"#tests .arrows  span.rightarrows",
  slidesToscroll:1,

  autoplay: true,
  autoplaySpeed: 700,
  arrows: true,
  dots: false,

  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
let navbar = $(".navbar");
  let backToTopBtn = $(".backToTopBtn");
  let number = 10;



  $(window).scroll(function () {
    let scrTop = $(window).scrollTop();
    console.log(scrTop);
    if (scrTop > 400) {
      navbar.addClass("menuFixed");
    } else {
      navbar.removeClass("menuFixed");
    }

    //*Back to top button view
    if (scrTop > 700) {
      backToTopBtn.fadeIn();
    } else {
      backToTopBtn.fadeOut();
    }
  });
    

});

new VenoBox({
    selector: '.boss',
    share:true,
    spinner:'flow' ,

   
 });
 