$(document).ready(function(){
  // $(".wrapper li").eq(0).animate({left:"-100%"},1000);
  // $(".wrapper li").eq(1).animate({left:"0"},1000);
  let current = 0;
  const banner = $(".wrapper li");

  function slider(){
    banner.eq(current).stop().animate({left:"-100%"},1000);
    current++;
    if(current == 5){current=0}
    banner.eq(current).css("left","100%").stop().animate({left:0},1000);

  }

  setInterval(slider, 3000);
});
