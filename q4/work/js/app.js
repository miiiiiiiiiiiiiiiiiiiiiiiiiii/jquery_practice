$(function () {

  $(".nav li").on("click", function () {
    const index = $(this).index();
    $(".description li").addClass("is-hidden");
    $(".description li").eq(index).removeClass("is-hidden");
  });

});