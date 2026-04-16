$(function () {

  $(".drawer_button").on("click", function () {

    $(this).toggleClass("active");

    $(".drawer_nav_wrapper").toggleClass("open");

    $(".drawer_bg").fadeToggle();

  });

});