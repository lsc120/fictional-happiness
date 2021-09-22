$(function() {
   //윈도우 크기 확인
   var winSize = $(window).width();
  
   if(winSize >= 1192) {pc()}
   if(winSize < 1192) {mo()}

   $(window).resize(function() {
      var winSize = $(window).width();
     
      if(winSize >= 1192) {pc()}
      if(winSize < 1192) {mo()}
   })

   $('.main_slider').slick({
      dots : true,
      autoplay : true,
      focusOnSelect: true
   });
   $(".mall_slider").slick({
      autoplay : true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive : [{
         breakpoint : 800,
         settings : {
            slidesToShow : 1
         }
      }]
   });
    
   var noti_roll = setInterval(function() {
      $('.notice ul').animate({'margin-top' : -35}, function() {
         $('.notice ul li:first-child').insertAfter($('.notice ul li:last-child'));
         $('.notice ul').css('margin-top', 0)
       })
   },3000)

   var event_roll = setInterval(function() {
      $('.event ul').animate({'margin-top' : -35}, function() {
         $('.event ul li:first-child').insertAfter($('.event ul li:last-child'));
         $('.event ul').css('margin-top', 0)
       })
   },3000)
   /*notice 는 제이쿼리 필기 중 연습파일 참조 - 파일 요청 */

    //모바일용 x 버튼
    $('.mo_close').click(function() {
      $('.mo_gnb_bg').hide();
   })   

   //모바일용 open버튼
   $('.mo_open').click(function() {
      $('.mo_gnb_bg').show();
      $('.mo_gnb_bg nav').css('right', '0');
   })

});
function pc() {

}
function mo() {
   $('#gnb>li>a').click(function() {
      //alert()
      $('#gnb>li>a').not(this).next().slideUp();
      $(this).next().slideToggle();

      $('#gnb>li>a').not(this).removeClass('icon_on')
      $(this).toggleClass('icon_on');
   })
}
