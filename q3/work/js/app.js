$(function () { // 読み込み後に処理を実行

  $(".drawer_button").on("click", function () { // ボタンをクリックした時
    $(this).toggleClass("active"); // ボタンの状態を切り替える
    $("nav").toggleClass("open"); // メニューの表示を切り替える
    $(".drawer_bg").fadeToggle(); // 背景の表示を切り替える
  });

  $(".drawer_bg").on("click", function () { // 背景をクリックした時
    $(this).fadeOut(); // 背景を非表示にする
    $(".drawer_button").removeClass("active"); // ボタンを元に戻す
    $("nav").removeClass("open"); // メニューを閉じる
  });

});