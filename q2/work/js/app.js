$(function () {

  $(".modal_open_button").on("click", function () {
    $(".modal_win").fadeIn();
  });

  $(".modal_close_button").on("click", function () {
    $(".modal_win").fadeOut();
  });

});