$(function () {

  $(".nav-item").on("click", function () {

    const index = $(".nav-item").index(this);

    $(".description li").addClass("is-hidden");

    $(".description li").eq(index).removeClass("is-hidden");

  });

});