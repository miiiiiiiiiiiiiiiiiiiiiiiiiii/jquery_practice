$(function () { // 読み込み後に処理を実行

  $(".nav li").on("click", function () { // ナビをクリックした時
    const index = $(this).index(); // 順番を取得
    $(".description li").addClass("is-hidden"); // 全部非表示にする
    $(".description li").eq(index).removeClass("is-hidden"); // 同じ位置だけ表示する
  });

});