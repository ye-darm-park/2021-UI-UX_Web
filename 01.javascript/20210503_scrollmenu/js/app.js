$(document).ready(function(){
  // // 1st. menu
  // const oneTop = $("#v01s").offset().top;
  // const oneTwo = $("#v02s").offset().top;
  // const oneThree = $("#v03s").offset().top;
  //
  // $(".menu>a").eq(0).on("click",function(){});
  // $(".menu>a").eq(0).click(function(){
  //   $("html,body").animate({scrollTop:oneTop})
  // });
  // $(".menu>a").eq(1).click(function(){
  //   $("html,body").animate({scrollTop:oneTwo})
  // });
  // $(".menu>a").eq(2).click(function(){
  //   $("html,body").animate({scrollTop:oneThree})
  // });
  //
  // // 2st. for문
  // for(let i=0; i<(".menu>a").lengh; i++){
  //   $(".menu>a")eq(i).click(function(){
  //     $("html,body").animate({scrollTop:$(".scene").eq(i).offset().top})
  //   });
  // }
  //
  // // 3st. $(this).index()
  // $(".menu>a").click(function(){
  //   let i= $(this).index();
  //   const st = $(".scene").eq(i).offset().top;
  //   $("html,body").animate({scrollTop:st});
  // });
  //
  // // 4st. hashtag
  // $(".menu>a").click(function(){
  //   let target = $(this.hash);
  //   console.log(target);
  //   const st = target.offset().top;
  //   $("html,body").animate({scrollTop:st})
  // });

$(window).scroll(function(){
  let scrollY = $(window).scrollTop();

  if(scrollY >= $(".scene").eq(0).offset().top){
    $(".menu>a").removeClass("active").eq(0).addClass("active");
  }
  if(scrollY >= $(".scene").eq(1).offset().top){
    $(".menu>a").removeClass("active").eq(1).addClass("active");
  }
  if(scrollY >= $(".scene").eq(2).offset().top){
    $(".menu>a").removeClass("active").eq(2).addClass("active");
  }
});



});
