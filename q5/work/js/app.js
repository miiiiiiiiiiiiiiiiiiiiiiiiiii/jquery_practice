$(function () { // 読み込み後に処理を実行

  $(".dropdwn li").hover(
    function () { // マウスが乗った時
      $(this).children("ul").stop().slideDown(); // メニューを表示
    },
    function () { // マウスが離れた時
      $(this).children("ul").stop().slideUp(); // メニューを非表示
    }
  );

});