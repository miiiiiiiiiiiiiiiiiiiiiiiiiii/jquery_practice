// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });

$(function () { // 読み込み後に処理を実行
  let pageCount = 1; // ページ番号を管理
  let beforeSearchWord = ""; // 前回の検索ワードを保存

  function displayResult(result) { // 検索結果を表示
    $(".message").remove(); // メッセージを削除

    if (result[0]?.items?.length > 0) { // 結果がある場合
      $.each(result[0].items, function (index, item) { // 結果を1件ずつ処理
        const html = ` // 表示用HTMLを作成
          <li class="lists-item">
            <div class="list-inner">
              <p>タイトル：${item.title ? item.title : "タイトル不明"}</p> // タイトルを表示
              <p>作者：${item["dc:creator"] ? item["dc:creator"] : "作者不明"}</p> // 作者を表示
              <p>出版社：${item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明"}</p> // 出版社を表示
              <a href="${item.link["@id"]}" target="_blank">書籍情報</a> // 詳細リンク
            </div>
          </li>
        `;
        $(".lists").prepend(html); // リストに追加
      });
    } else { // 結果がない場合
      $(".lists").before(
        '<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>' // メッセージ表示
      );
    }
  }

  function displayError(err) { // エラーを表示
    $(".lists").empty(); // リストを空にする
    $(".message").remove(); // メッセージを削除

    if (err.status === 0) { // 通信できない場合
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続を確認してください。</div>');
    } else if (err.status === 400) { // 400エラーの場合
      $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>');
    } else { // その他のエラー
      $(".lists").before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>');
    }
  }

  $(".search-btn").on("click", function () { // 検索ボタンをクリックした時
    const searchWord = $("#search-input").val(); // 入力値を取得

    if (searchWord !== beforeSearchWord) { // 前回と違う場合
      pageCount = 1; // ページをリセット
      $(".lists").empty(); // リストを空にする
      beforeSearchWord = searchWord; // 検索ワードを保存
    } else { // 同じ場合
      pageCount++; // 次ページへ
    }

    const settings = { // Ajax設定
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`, // API URL
      method: "GET" // GET通信
    };

    $.ajax(settings) // Ajax実行
      .done(function (response) { // 成功時
        const result = response["@graph"]; // データ取得
        displayResult(result); // 表示
      })
      .fail(function (err) { // 失敗時
        displayError(err); // エラー表示
      });
  });

  $(".reset-btn").on("click", function () { // リセットボタンをクリックした時
    pageCount = 1; // ページリセット
    beforeSearchWord = ""; // 検索ワードリセット
    $(".lists").empty(); // リストを空にする
    $(".message").remove(); // メッセージ削除
    $("#search-input").val(""); // 入力欄を空にする
  });

});