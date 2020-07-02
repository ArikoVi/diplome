$(document).ready(function($){$('input[type="tel"]').inputmask({"mask":"+7(999) 999-9999"});$('.fancy-link, .fancybox').fancybox({autoFocus: false});


if($(window).width() < 768) {
 $('.video-fancylink').each(function(){
     var href = $(this).attr('href');
	 var iframe = '<iframe  src="' + href + '" frameborder="0" allowfullscreen></iframe>';
	 $(this).after(iframe);
	$(this).remove();
 });
}

    $('.video-fancylink').fancybox({
        fitToView: true
    })
	

	
var el = $('.sidebar-blog .item-wrap');
$('.sidebar-blog').parent().css('position','relative');
  
    if($(window).width() > 1200) {


$(function(){
 var topPos = el.offset().top;
  $(window).scroll(function() { 
  var top = $(document).scrollTop(),
      pip = $('footer').offset().top,
      height = el.outerHeight();
  if (top > topPos && top < pip - height) {el.addClass('fixed').removeAttr("style");} 
  else if (top > pip - height) {el.removeClass('fixed').css({'position':'absolute','bottom':'0','top':'auto','height':'auto'}); $('.sidebar-blog').addClass('position')}
  else {el.removeClass('fixed');}
  });
});}


	
	var action = 'click';
var speed = "500";
    $('li.q').on(action, function() {
        $(this).next().slideToggle(speed).siblings('li.a').slideUp();
        var img = $(this).children('img');
        $('img').not(img).removeClass('rotate');
        img.toggleClass('rotate');
    });

setTimeout(function(){
	$('.slider-home .thum').css('display', 'block');
}, 3000)		
	
if($(window).width() > 768) {

		var time = 5;
	var $slick,
		isPause,
		tick;
	var  $bar = $('.slider-progress .progress');

	$slick = $('.slider-home');
	$slick.slick({
		dots:true,
		arrows: true,
		infinite:true, 
		speed: 600, 
		slidesToShow:1,
		slidesToScroll:1, 
		mobileFirst: true,
		pauseOnDotsHover: true
		
		});
	  function startProgressbar() {
		resetProgressbar();
		percentTime = 0;
		isPause = false;
		tick = setInterval(interval, 10);
	  }
	  
	  function interval() {
		if(isPause === false) {
		  percentTime += 1 / (time+0.1);
		  $bar.css({
			width: percentTime+"%"
		  });
		  if(percentTime >= 100)
			{
			  $slick.slick('slickNext');
			  startProgressbar();
			}
		}
	  }
	  
	  
	  function resetProgressbar() {
		$bar.css({
		 width: 0+'%' 
		});
		clearTimeout(tick);
	  }
	  
	  startProgressbar();

} else {
	$('.slider-home').slick({
		dots:true,
		arrows: false,
		infinite:true, 
		speed: 600, 
		slidesToShow:1,
		slidesToScroll:1, 
		autoplay: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		autoplaySpeed: 3000,
		
		});
}
var nav = $('.scroll-wrap');
$(nav).on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 800);
});

   $(window).scroll(function() {
        if($(this).scrollTop() >= 2) {
            $('.top-header').addClass('stickytop');
            $('.top-menu').addClass('fade-menu');
            $('.hamburger-big').css('display','block');
            $('.hamburger-big').removeClass('is-active-hamburger');
            $('.wrap-nav').addClass('block-nav');
 $('.top-menu').removeClass('show-menu');
        }
        else{
            $('.top-header').removeClass('stickytop');
             $('.top-menu').removeClass('fade-menu');
             $('.hamburger-big').css('display','none');
$('.wrap-nav').removeClass('block-nav');
              // $('.top-menu').addClass('show-menu');
        }
    });





  $('.hamburger-big').on('click', function(){
 
   if ($('.top-menu').hasClass('fade-menu')) {
  $('.top-menu').addClass('show-menu');

		$('.top-menu').removeClass('fade-menu');
}
    else {
		$('.top-menu').removeClass('show-menu');
		$('.top-menu').addClass('fade-menu');
   		}
	
});


if($(window).width() > 1200) {
$('.tilt').tilt({
	maxTilt:        40,
perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
scale:          1.2,      // 2 = 200%, 1.5 = 150%, etc..
glare:          true,  // Enables glare effect
maxGlare:       .3       // From 0 - 1.
})
}


$('.slider-portfolio').slick({
  infinite: true,
  mobileFirst: true,
  slidesToShow: 1,
  rows:1,
  slidesPerRow:2,
  nextArrow: ' <img class="right" src="https://татучел.рф/wp-content/themes/tatoo1/static/images/general/right.png">',
  prevArrow: '<img class="left" src="https://татучел.рф/wp-content/themes/tatoo1/static/images/general/left.png">',
  arrows:true,
  dots:true,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 991,
      settings: {

        slidesToShow: 1,
        rows:2,
           slidesPerRow:4,
        dots:false,
        slidesToScroll: 1,
       
         

      }
    }

  ]
});


$('.slick-wrapper').slick({ 
	infinite: false, 
	mobileFirst: true, 
	slidesToShow: 1, 
	slidesToScroll: 1, 
	arrows: true, 
	rows: 2, 
	slidesPerRow: 2, 
	responsive: [{ 
		breakpoint: '1024', 
		settings: { 
			slidesToShow: 4, 
			rows: 1, 
			slidesPerRow: 1 } 
		}] 
	});




      
$('.portfolio-wrap').slick({
  infinite: true,
  slidesToShow: 5,
  arrows:false,
  dots:false,
   asNavFor: '.portfolio-wrap-bottom',
  draggable:false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        dots:true,
        slidesToScroll: 1,

      }
    }

  ]
});

$(' .portfolio-wrap-bottom').slick({
  infinite: true,
  slidesToShow: 5,
  arrows:false,
  dots:false,
 asNavFor: '.portfolio-wrap',
  draggable:false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        

      }
    }

  ]
});

 
  
$('.video-wrapper').slick({
  infinite: false,
  slidesToShow: 3,
  arrows:false,
  dots:true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        

      }
    }

  ]
});
 




 $('.portfolio-wrap .slick-slide.slick-current.slick-active').nextAll().eq(3).addClass('shadow-active');
 $('.portfolio-wrap-bottom .slick-slide.slick-current.slick-active').nextAll().eq(3).addClass('shadow-active');



$('.left').on('click', function() {
      $('.portfolio-wrap, .portfolio-wrap-bottom').slick('slickPrev');
      $('.portfolio-wrap .slick-slide.slick-active').removeClass('shadow-active');
      $('.portfolio-wrap-bottom .slick-slide.slick-active').removeClass('shadow-active');
       $('.portfolio-wrap .slick-slide.slick-current.slick-active').nextAll().eq(3).addClass('shadow-active');
          $('.portfolio-wrap-bottom .slick-slide.slick-current.slick-active').nextAll().eq(3).addClass('shadow-active');
    });



$('.right').on('click', function() {
      $('.portfolio-wrap, .portfolio-wrap-bottom').slick('slickNext');

      $('.portfolio-wrap .slick-slide.slick-active').removeClass('shadow-active');
      $('.portfolio-wrap-bottom .slick-slide.slick-active').removeClass('shadow-active');

       $('.portfolio-wrap .slick-slide.slick-current.slick-active').nextAll().eq(3).addClass('shadow-active');
        $('.portfolio-wrap-bottom .slick-slide.slick-current.slick-active').nextAll().eq(3).addClass('shadow-active');
    });

$('.leftblue').on('click', function() {
      $('.video-wrapper').slick('slickPrev');
      
    });
$('.rightblue').on('click', function() {
      $('.video-wrapper').slick('slickNext');
      
    });



if (screen.width > 1200) {

 $('.hamburger-big .hamburger-box').click(function(){
$('.hamburger-big.hamburger').toggleClass('is-active-hamburger');
$('body').toggleClass('body-is-acitve');
});

 $('.hamburger-big.hamburger.is-active-hamburger, #mm-1, .mm-page__blocker.mm-slideout').click(function(){
  $('.hamburger-big.hamburger').removeClass('is-active-hamburger');
  $('body').removeClass('body-is-acitve');
 })

}


if (screen.width < 992) {
   $('.slider-advantages').slick({
  infinite: false,
  slidesToShow: 1,
  rows:2,
  slidesPerRow:1,
  arrows:true,
  dots:true,
  slidesToScroll: 1,
  appendArrows: $('#advantages .arrows'),
  prevArrow: '<img class="leftblue" src="http://xn--80akszbg2a.xn--p1ai/wp-content/themes/tatoo1/static/images/general/leftblue.png">',
  nextArrow: '<img class="leftblue" src="http://xn--80akszbg2a.xn--p1ai/wp-content/themes/tatoo1/static/images/general/rightblue.png">'
});
 $('.slick-active').css('display','block').next().css('display','block').next().css('display','block');

}


           
        
var wow = new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       false, 
    live:         true, 
    callback:     function(box) {
    },
    scrollContainer: null
  });
  wow.init(); 
if (screen.width < 768) {
   $('.slider-place').slick({
  infinite: false,
  slidesToShow: 1,
  rows:1,
  slidesPerRow:1,
  arrows:true,
  dots:true,
  slidesToScroll: 1,
  appendArrows: $('.place .arrows'),
  prevArrow: '<img class="leftblue" src="http://xn--80akszbg2a.xn--p1ai/wp-content/themes/tatoo1/static/images/general/leftblue.png">',
  nextArrow: '<img class="leftblue" src="http://xn--80akszbg2a.xn--p1ai/wp-content/themes/tatoo1/static/images/general/rightblue.png">'
});
 $('.slick-active').css('display','block').next().css('display','block').next().css('display','block');

}

$('.dropdown-link').click(function(){$(this).next('.dropdown-block').slideToggle();})
$('#menu-menu-top > li').eq(3).find('.sub-menu').find('a').each(function(){console.log($(this))
var href=$(this).attr('href');var text=$(this).text();$(this).parent().append('<span onclick="GoTo(\''+href+'\')">'+text+'</span>');$(this).remove();})
$('.q1').click(function(){$('.q1').addClass('active');$('.q2').removeClass('active');$('.q3').removeClass('active');$('.q4').removeClass('active');$('.tab1').addClass('active');$('.tab2').removeClass('active');$('.tab3').removeClass('active');$('.tab4').removeClass('active');});$('.q2').click(function(){$('.q1').removeClass('active');$('.q2').addClass('active');$('.q3').removeClass('active');$('.q4').removeClass('active');$('.tab1').removeClass('active');$('.tab2').addClass('active');$('.tab3').removeClass('active');$('.tab4').removeClass('active');});$('.q3').click(function(){$('.q1').removeClass('active');$('.q2').removeClass('active');$('.q3').addClass('active');$('.q4').removeClass('active');$('.tab1').removeClass('active');$('.tab2').removeClass('active');$('.tab3').addClass('active');$('.tab4').removeClass('active');});$('.q4').click(function(){$('.q1').removeClass('active');$('.q2').removeClass('active');$('.q3').removeClass('active');$('.q4').addClass('active');$('.tab1').removeClass('active');$('.tab2').removeClass('active');$('.tab3').removeClass('active');$('.tab4').addClass('active');});$('.slider-work').slick({infinite:true,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.otzivy').slick({infinite:true,slidesToShow:4,slidesToScroll:1});});jQuery(document).ready(function($){$('.slider-comment').slick({dots:false,infinite:true,speed:300,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1, dots: true, arrows: false}}]});});document.addEventListener('wpcf7submit',function(event){return false;console.log(event.target.querySelector('input[type="tel"]'));},false);



// jQuery(document).ready(function($) {
// $(window).scroll(function() {
//     if ( $(window).scrollTop() >= $('.float-point').offset().top ) {
//       $('.floating-button').addClass('stickybutton');
//     } else {
//        $('.floating-button').removeClass('stickybutton');
//     }
// });
// });



