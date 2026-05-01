$(function () {
  $(".select-box").on("change", function () {
    const selectedValue = $(this).val();

    $(".food-list li").each(function () {
      const category = $(this).data("category-type");
      if (selectedValue === "all" || selectedValue === category) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

  });
});