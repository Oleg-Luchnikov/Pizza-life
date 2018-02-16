
$(".item-has-child").click(function() {
	$('.item-has-child').toggleClass('opened');
	$(this).children(".dropdown-menu").toggleClass('open');
});

// show hint
$(".cart-block").on({
    mouseenter: function () {
        $(".cart-block").addClass('active');
    },
    mouseleave: function () {
        $(".cart-block").removeClass('active');
    }
});

var mySwiper = new Swiper ('.main-slider', {
    // Optional parameters
    direction: 'horizontal',
    paginationClickable: true,
  	autoHeight: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})



var mySwiper = new Swiper ('.hits-slider', {
    // Optional parameters
    direction: 'horizontal',
    paginationClickable: true,
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 65,
    // Responsive breakpoints
    breakpoints: {
      680: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      980: {
        slidesPerView: 2,
        spaceBetween: 30,
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})
// Quantity for input type number
 jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fas fa-chevron-circle-up"></i></div><div class="quantity-button quantity-down"><i class="fas fa-chevron-circle-down"></i></div></div>').insertAfter('.item-quantity');
  jQuery('.item-quantity-wrapper').each(function() {
    var spinner = jQuery(this),
      input = spinner.find('.item-quantity'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max'),
      step = input.attr('step');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = +oldValue + +step;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = +oldValue - +step;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
  });
});