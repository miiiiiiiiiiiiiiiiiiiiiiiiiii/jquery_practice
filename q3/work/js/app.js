$(function () {

  $(".drawer_button").on("click", function () {
    $(this).toggleClass("active");
    $("nav").toggleClass("open");
    $(".drawer_bg").fadeToggle();
  });

  $(".drawer_bg").on("click", function () {
    $(this).fadeOut();
    $(".drawer_button").removeClass("active");
    $("nav").removeClass("open");
  });

});