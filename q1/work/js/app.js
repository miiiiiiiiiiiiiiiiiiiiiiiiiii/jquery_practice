$(function () { // 読み込み後に処理を実行

  // Q1-1 
  $("#q1").css("color", "green"); // q1の文字を緑にする

  // Q1-2 
  $("#q2").on("click", function () { // q2をクリックした時
    $(this).css("background", "pink"); // 背景をピンクにする
  });

  // Q1-3
  $("#q3").on("click", function () { // q3をクリックした時
    $(this).fadeOut(3000); // 3秒で消す
  });

  // Q1-4
  $("#q4").on("click", function () { // q4をクリックした時
    $(this).addClass("large"); // サイズを大きくする
  });

  // Q1-5
  $("#q5").on("click", function () { // q5をクリックした時
    $(this).prepend("DOMの中の前"); // 中の先頭に追加
    $(this).append("DOMの中の後"); // 中の最後に追加
    $(this).before("DOMの前"); // 前に追加
    $(this).after("DOMの後"); // 後に追加
  });

  // Q1-6
  $("#q6").on("click", function () { // q6をクリックした時
    $(this).animate({ // 動かす
      marginTop: "100px", // 下に移動
      marginLeft: "100px" // 右に移動
    }, 2000); // 2秒かける
  });

  // Q1-7
  $("#q7").on("click", function () { // q7をクリックした時
    console.log(this); // 要素を表示
  });

  // Q1-8
  $("#q8").hover(
    function () { // マウスが乗った時
      $(this).addClass("large"); // 大きくする
    },
    function () { // マウスが離れた時
      $(this).removeClass("large"); // 元に戻す
    }
  );

  // Q1-9
  $("#q9 li").on("click", function () { // q9のliをクリックした時
    const index = $("#q9 li").index(this); // 順番を取得
    alert(index); // 表示
  });

  // Q1-10
  $("#q10 li").on("click", function () { // q10のliをクリックした時
    const index = $("#q10 li").index(this); // 順番を取得
    $("#q11 li").eq(index).addClass("large-text"); // 同じ位置を大きくする
  });

});