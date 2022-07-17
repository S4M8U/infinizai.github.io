$(document).ready(function(){
    $('.customize__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        speed: 600,
        infinite: true,
        swipe: true,
        touchMove: true,
        autoplay: true,
        
    });
});

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);
    e.preventDefault();
  });