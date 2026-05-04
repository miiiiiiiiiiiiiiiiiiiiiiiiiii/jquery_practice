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
        // 表示するHTMLを作成
        const html = `
          <li class="lists-item">
            <div class="list-inner">
              <p>タイトル：${item.title ? item.title : "タイトル不明"}</p>
              <p>作者：${item["dc:creator"] ? item["dc:creator"] : "作者不明"}</p>
              <p>出版社：${item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明"}</p>
              <a href="${item.link["@id"]}" target="_blank">書籍情報</a>
            </div>
          </li>
        `;
        $(".lists").prepend(html); // リストに追加
      });
    } else { // 結果がない場合
      $(".lists").before(
        '<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>' // メッセージを表示
      );
    }
  }

  function displayError(err) { // エラーを表示
    $(".lists").empty(); // リストを空にする
    $(".message").remove(); // メッセージを削除

    if (err.status === 0) { // 通信できない場合
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続を確認してください。</div>');
    } else { // その他のエラー
      $(".lists").before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>');
    }
  }

  $(".search-btn").on("click", function () { // 検索ボタンをクリックした時
    const searchWord = $("#search-input").val(); // 入力値を取得

    if (searchWord !== beforeSearchWord) { // 前回と違う検索ワードの場合
      pageCount = 1; // 1ページ目に戻す
      $(".lists").empty(); // リストを空にする
      beforeSearchWord = searchWord; // 検索ワードを保存
    } else { // 前回と同じ検索ワードの場合
      pageCount++; // 次のページにする
    }

    const settings = { // Ajaxの設定
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`, // APIのURL
      method: "GET" // GETで取得
    };

    $.ajax(settings) // Ajaxを実行
      .done(function (response) { // 成功した時
        const result = response["@graph"]; // 結果を取得
        displayResult(result); // 検索結果を表示
      })
      .fail(function (err) { // 失敗した時
        displayError(err); // エラーを表示
      });
  });

  $(".reset-btn").on("click", function () { // リセットボタンをクリックした時
    pageCount = 1; // ページ番号を戻す
    beforeSearchWord = ""; // 検索ワードをリセット
    $(".lists").empty(); // リストを空にする
    $(".message").remove(); // メッセージを削除
    $("#search-input").val(""); // 入力欄を空にする
  });

});