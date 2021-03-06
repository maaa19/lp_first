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
  var f = !0;
  $(window).scroll(function(){
    var currentPos = $(this).scrollTop();
    if (currentPos > startPos) {
      f && (f = !1,
        target.slideDown(300,function(){
          f = !0
        })
      );
    } else {
      f && (f = !1,
        target.slideUp(300, function(){
        f = !0;
        })
      );
    }
    startPos = currentPos;

  });
}

function scrollMobileFooterMenu(target){
  var startPos = 0;
  var f = !0;
  $(window).scroll(function(){
    var currentPos = $(this).scrollTop();
    if (currentPos > startPos) {
      f && (f = !1,
        target.slideDown('fast',function(){
          f = !0;
        })
      );
    } else {
      f && (f = !1,
      target.slideUp('fast',function(){
        f = !0;
      })
    );
    }
    startPos = currentPos;
  });
}



function chengeCalursel(){
  var $selectImage = $('.s-spotMobile__usageUserImg');
  var selectedImageActiveFirst = 'p-spotMobile__usageUserImgActiveFirst';
  var selectedImageActiveSecond = 'p-spotMobile__usageUserImgActiveSecond';
  var selectedImageActiveThird = 'p-spotMobile__usageUserImgActiveThird';
  var selectedImageActiveFourth = 'p-spotMobile__usageUserImgActiveFourth';
  $selectImage.on('click',function(e){
    $selectImage.removeClass(selectedImageActiveFirst);
    $selectImage.removeClass(selectedImageActiveSecond);
    $selectImage.removeClass(selectedImageActiveThird);
    $selectImage.removeClass(selectedImageActiveFourth);
    slideIndex = this.id;
    slicks.slick('slickGoTo', parseInt(slideIndex) - 1 );
    switch (this.id){
      case '1':
        $(this).addClass(selectedImageActiveFirst);
        break;
      case '2':
        $(this).addClass(selectedImageActiveSecond);
        break;
      case '3':
        $(this).addClass(selectedImageActiveThird);
        break;
      case '4':
        $(this).addClass(selectedImageActiveFourth);
        break;
      default:
        $(this).addClass(selectedImageActiveFirst);
    }
    $(this).addClass('p-spotMobile__usageUserImgActive');
  });
}

$(function(){
  var $selectImage = $('.s-spotMobile__usageUserImg');
  var selectedImageActiveFirst = 'p-spotMobile__usageUserImgActiveFirst';
  var selectedImageActiveSecond = 'p-spotMobile__usageUserImgActiveSecond';
  var selectedImageActiveThird = 'p-spotMobile__usageUserImgActiveThird';
  var selectedImageActiveFourth = 'p-spotMobile__usageUserImgActiveFourth';
  $('.s-spotMobile__list').on('swipe',function(e, slick, direction){
    var currentSlide = slick.currentSlide;
    $selectImage.removeClass(selectedImageActiveFirst);
    $selectImage.removeClass(selectedImageActiveSecond);
    $selectImage.removeClass(selectedImageActiveThird);
    $selectImage.removeClass(selectedImageActiveFourth);
    switch (currentSlide) {
      case 0:
        $('#1').addClass(selectedImageActiveFirst);
        break;
      case 1:
        $('#2').addClass(selectedImageActiveSecond);
        break;
      case 2:
        $('#3').addClass(selectedImageActiveThird);
        break;
      case 3:
        $('#4').addClass(selectedImageActiveFourth);
        break;
      default:
        $('#1').addClass(selectedImageActiveFirst);
    }
    $selectImage.addClass('p-spotMobile__usageUserImgActive');
  });
})

var slicks = $('.s-spotMobile__list').slick({
  arrows: false,
  mobileFirst: true,
  responsive: [
    {
      breakpoint:1024,
      settings: "unslick"
    },{
    breakpoint:768,
    settings: "unslick"
  }
  ]
});
$(function(){
  $('.s-userGroup__list').slick({
    mobileFirst: true,
    responsive: [
      {
        breakpoint:1024,
        settings: "unslick"
      },{
      breakpoint:768,
      settings: "unslick"
    }
    ]
  });
});
