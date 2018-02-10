$('.ui.accordion')
  .accordion()
;

$(document).ready(function(){
    $('.ui .item').on('click', function() {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });
});

$('.slider').glide({
  autoplay: false,
  arrowsWrapperClass: 'slider-arrows',
  arrowRightText: '',
  arrowLeftText: ''
});

// <img width="1920" height="1080" src="https://www.thecoromandel.com/assets/Tourism-Operators/images/Hot-Water-Beach.jpg">
