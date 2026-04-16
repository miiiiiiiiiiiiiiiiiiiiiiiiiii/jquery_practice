$(function () {

  // Q1-1 
  $("#q1").css("color", "green");

  // Q1-2 
  $("#q2").on("click", function () {
    $(this).css("background", "#e7b0bc");
  });

  // Q1-3
  $("#q3").on("click", function () {
  $(this).fadeOut(3000);
});
  
  // Q1-4
  $("#q4").on("click", function () {
  $(this).addClass("large");
});

  // Q1-5
$("#q5").on("click", function () {
  $(this).before("<span>DOMの前</span>");
  $(this).prepend("DOMの中の前");
  $(this).append("DOMの中の後");
  $(this).after("<span>DOMの後</span>");
});

  // Q1-6
$("#q6").on("click", function () {
  $(this).animate({
    marginTop: "100px",
    marginLeft: "100px"
  }, 2000);
});

  // Q1-7
$("#q7").on("click", function () {
  console.log(this);
});

  // Q1-8
$("#q8").hover(
  function () {
    $(this).addClass("large");
  },
  function () {
    $(this).removeClass("large");
  }
);

  // Q1-9
$("#q9 li").on("click", function () {
  const fruits = ["0", "1", "2", "3"];
  const index = $("#q9 li").index(this);
  alert(fruits[index]);
});

  // Q1-10
$("#q10 li").on("click", function () {
  const index = $("#q10 li").index(this);
  $("#q11 li").removeClass("large-text");
  $("#q11 li").eq(index).addClass("large-text");
});


});