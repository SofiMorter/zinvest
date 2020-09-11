$(document).ready(function(){
	// begin burger menu
  // $('.mob-start').on('click', function () {
  //       if($('.mob-start').hasClass('mob-start--active')){
  //           $('.mob-start').removeClass('mob-start--active');
  //           $('.menu').removeClass('menu--active');
  //       }else{
  //           $('.mob-start').addClass('mob-start--active');
  //           $('.menu').addClass('menu--active');
  //       }                           
  // });
  // end burger menu

  // begin закрытия окна уведомления
  // $(document).click(function(event) { 
  //     if(!$(event.target).closest('.message').length) { 
  //       if($('.alert').hasClass('alert--active')){
  //           $('.alert').removeClass('alert--active');
  //       }
  //     }  
  // });
  // $('.my-alert__close').click(function(event) {
  //     $('.alert').removeClass('alert--active');
  // });   
  // end закрытия окна уведомления

  $('.header_slider').slick({
    autoplay: true,
    arrows: true,
    dots: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.header_bottom_slider',
    prevArrow: '<button type="button" class="slick_prev slick_arrow"></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"></button>'
  });

  $('.header_bottom_slider').slick({
    arrows: false,
    dots: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.header_slider',
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1030,
      settings:{
        slidesToShow: 3
      }
    },
    {
      breakpoint: 741,
      settings:{
        slidesToShow: 2
      }
    }]
  });

  $('.offer_slider').slick({
    autoplay: true,
    arrows: true,
    dots: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick_prev slick_arrow"></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"></button>',
    responsive: [{
      breakpoint: 740,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('.news_slider').slick({
    autoplay: true,
    arrows: true,
    dots: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="slick_prev slick_arrow"></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"></button>',
    responsive: [{
      breakpoint: 1171,
      settings:{
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 840,
      settings:{
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 540,
      settings:{
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      }
    }]
  });

  $('.zhk_slider').slick({
    autoplay: true,
    arrows: true,
    dots: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick_prev slick_arrow"></button>',
    nextArrow: '<button type="button" class="slick_next slick_arrow"></button>'
  });

  if($('.header_top .container .mob_menu').css("display") == 'block'){
    $('.menu').appendTo('.under_nav');
    $('.sub_menu').slideUp();
  } else{
    $('.under_nav .menu, .head_contact, .mob_menu').appendTo('.header_top .container');
    $('.under_nav').removeClass('active');
    $('.sub_menu').slideDown();
  }

  //   // Banner show/hide
  // if( $('.banner').attr("class") != undefined ){
  //   setTimeout(banner, 10000);
  // }

  // $('.banner').on("click", function(event){
  //   var target = event.target;
  //   if( $(target).attr('class') == 'banner' || $(target).attr('class') == 'banner_btn' || $(target).attr('class') == 'close_banner'){
  //     closeBanner();
  //   }
  // })

  // function banner(){
  //   $('body').addClass('banner_show');
  //   $('.banner').fadeIn(800);
  // }

  // function closeBanner(){
  //   $('body').removeClass('banner_show');
  //   $('.banner').fadeOut(800);
  // }

  // $('.banner_btn[href*="#"]').on('click.smoothscroll', function( e ){
  //   var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  //   if (top <= 0){
  //     top = 180;
  //   } else{
  //     top = 120;
  //   }
  //   var hash    = this.hash,
  //     _hash   = hash.replace(/#/,''),
  //     theHref = $(this).attr('href').replace(/#.*/, '');

  //   if( theHref && location.href.replace(/#.*/,'') != theHref ) return; // Р Р…Р Вµ РЎвЂљР ВµР С”РЎС“РЎвЂ°Р В°РЎРЏ РЎРѓРЎвЂљРЎР‚Р В°Р Р…Р С‘РЎвЂ Р В°

  //   var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();

  //   if( ! $target.length ) return;

  //   e.preventDefault();

  //   $('html, body').stop().animate({ scrollTop: $target.offset().top - 100 }, 1000, 'swing', function(){
    
  //   });
  // });



  $('.way').waypoint({
      handler: function() {
      $(this.element).addClass("way--active")
      },
      offset: '90%'
   });

  $('input[type="tel"]').mask('+7 (999) 999 99 99');
 
}); 

$(window).resize(function(){
  if($('.header_top .container .mob_menu').css("display") == 'block'){
    $('.menu').appendTo('.under_nav');
    $('.sub_menu').slideUp();
  } else{
    $('.under_nav .menu, .head_contact, .mob_menu').appendTo('.header_top .container');
    $('.under_nav').removeClass('active');
    $('.sub_menu').slideDown();
  }
});

    // скролл страницы и шапки
window.onscroll = function(){
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  var header = $('.header_top');

  if(top > 50){
    $(header).addClass('scroll');
  } else {
    $(header).removeClass('scroll');
  }
}

$('.under_nav').on("click", function(event){
  var target = event.target;
  if($(target).hasClass('menu_link')){
    $(target).siblings('.sub_menu').slideToggle(800);
  }
});

$('.burger_btn').on("click", function(){
  $('.under_nav').slideToggle();
});

$('.play_btn').on("click", function(){
  $(this).parent().fadeOut(800);
  var src = $(this).parent().siblings('iframe').attr('src');
  $(this).parent().siblings('iframe').attr('src', src + '?autoplay=1');
});



    // Табы ЖК внутренняя страница

var tab = $('.type_item');
var tab_content = $('.flat_photo');

$('.flat_types').on("click", function(event){

  var target = event.target;
  if (target.className === 'type_item'){
    for(var i=0; i<tab.length; i++){
      if (target == tab[i]){
        tab[i].classList.add('active');
        showContent(i);
      } else{tab[i].classList.remove('active'); hideContent(i);}
    }
  }
});

function showContent(i){
  $(tab_content[i]).addClass('active');
}

function hideContent(i){
  $(tab_content[i]).removeClass('active');
}