var $heaerHeight = $('.l-header').height();
var $menuImg = $('.l-headerMobile__menuBtnImg');

function moveTarget(eventtag, target){
  $(eventtag).on('click',function(){
    $("html,body").animate({
      scrollTop:$(target).offset().top - $heaerHeight
    });
  });
}

function hideMobileMenu(target){
  var $menu = $('.l-header__menu');
  $(target).on('click', function(){
    if ($(window).width() < 1024) {
      $menu.slideUp(400);
      $menuImg.attr('src', 'images/header_menuBtn.png');
    }
  });
}

function replaceMenuBtn(){
  $('.l-header__menu').slideToggle(function(){
    if($(this).is(':visible')){
      $menuImg.attr('src', 'images/header_menuCloseBtn.png');
    }else{
      $menuImg.attr('src', 'images/header_menuBtn.png');
    }
  });
}

function scrollMobileTopMenu(target){
  var startPos = 0;
  $(window).scroll(function(){
    var currentPos = $(this).scrollTop();
    if (currentPos > startPos) {
      target.slideDown('fast');
    } else {
      target.slideUp('fast');
    }
    startPos = currentPos;
  });
}

function scrollMobileFooterMenu(target){
  var startPos = 0;
  $(window).scroll(function(){
    var currentPos = $(this).scrollTop();
    if (currentPos > startPos) {
      target.slideUp('fast');
    } else {
      target.slideDown('fast');
    }
    startPos = currentPos;
  });
}


$(function () {
  var $footerDownload = $(".l-footer__download");
  var $headerMenu = $(".l-header");
  scrollMobileTopMenu($footerDownload);
  scrollMobileFooterMenu($headerMenu);

});


$(function() {
      $('.p-userGroup__list').slick({
        // accessibility: true,
        // autoplay: false,
        // infinite: true,
        // dots:true,
        // slidesToShow: 3,
        // slidesToScroll: 1,

        responsive: [{
          breakpoint: 600,
          settings: {
            accessibility: true,
            autoplay: false,
            slidesToShow: 1,
            // centerMode: true,
            // centerPadding: '5%',
            arrows: true,
          }
        },

        // {
        //   breakpoint: 640,
        //   settings: {
        //     accessibility: true,
        //     autoplay: false,
        //     slidesToShow: 1,
        //     centerMode: true,
        //     centerPadding: '5%',
        //     arrows: false,
        //   }
        //   }
        ]
      });
    });
