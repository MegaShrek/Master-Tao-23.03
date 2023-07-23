$(document).ready(function(){

    $('.first-screen-slider').slick({
        dots: true,
        infinite: true,
        appendArrows: '.first-screen-slider__arrows',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
              }
            },
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]        
  });
  mobileOnlySlider("#advantages-slider", true, false, 991);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: $dots,
    arrows: $arrows,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
} // Mobile Only Slider

$('.slider-template').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
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
        slidesToShow: 2,
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
});

const checkbox = document.querySelectorAll('[type="checkbox"]')

checkbox.forEach(item => {
  item.closest('.input-box').classList.add('has-checkbox')
  item.closest('.input-column').classList.add('padding')
})

document.getElementById('photo').onchange = function () {
  //short name
  //document.getElementById('file-name').innerHTML = this.files[0].name;

  //long name
  document.getElementById('file-name').innerHTML = this.value;
}

