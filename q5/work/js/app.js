$(function () {

  $(".dropdwn > li").hover(
    function () {
      $(this).children(".dropdwn_menu").stop().slideDown();
    },
    function () {
      $(this).children(".dropdwn_menu").stop().slideUp();
    }
  );

});