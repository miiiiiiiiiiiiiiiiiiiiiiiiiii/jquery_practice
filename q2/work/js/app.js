$(function () { // 読み込み後に処理を実行

  $(".modal_open_button").on("click", function () { // 開くボタンをクリックした時
    $(".modal_win").fadeIn(); // モーダルを表示
  });

  $(".modal_close_button").on("click", function () { // 閉じるボタンをクリックした時
    $(".modal_win").fadeOut(); // モーダルを非表示
  });

});