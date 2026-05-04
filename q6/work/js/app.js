$(function () { // 読み込み後に処理を実行

  $(".select-box").on("change", function () { // 値が変わった時
    const selectedValue = $(this).val(); // 値を取得

    if (selectedValue === "all") { // allの場合
      $(".food-list li").show(); // 全部表示
      return; // 処理終了
    }

    $(".food-list li").each(function () { // 各要素を処理
      const category = $(this).data("category-type"); // カテゴリー取得

      if (selectedValue === category) { // 一致したら
        $(this).show(); // 表示
      } else { // 一致しなければ
        $(this).hide(); // 非表示
      }
    });

  });

});