$heaerHeight = $('.l-header').height();

function moveTarget(eventtag, target){
  $(eventtag).on('click',function(){
    $("html,body").animate({scrollTop:$(target).offset().top - $heaerHeight});
  });
}
