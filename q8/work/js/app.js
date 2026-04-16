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

$(function () {
  let pageCount = 1;
  let beforeSearchWord = "";

  function displayResult(result) {
    $(".message").remove();

    if (result[0]?.items.length > 0) {
      $.each(result[0].items, function (index, item) {
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
        $(".lists").prepend(html);
      });
    } else {
      $(".lists").before(
        '<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>'
      );
    }
  }

  $(".search-btn").on("click", function () {
    const searchWord = $("#search-input").val();

    if (searchWord !== beforeSearchWord) {
      pageCount = 1;
      $(".lists").empty();
      beforeSearchWord = searchWord;
    } else {
      pageCount++;
    }

    $.ajax({
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      method: "GET"
    })
      .done(function (response) {
        displayResult(response["@graph"]);
      })
      .fail(function (err) {
        $(".lists").empty();
        $(".message").remove();

        if (err.status === 0) {
          $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続を確認してください。</div>');
        } else if (err.status === 400) {
          $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>');
        } else {
          $(".lists").before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>');
        }
      });
  });

  $(".reset-btn").on("click", function () {
    pageCount = 1;
    beforeSearchWord = "";
    $(".lists").empty();
    $(".message").remove();
    $("#search-input").val("");
  });
});