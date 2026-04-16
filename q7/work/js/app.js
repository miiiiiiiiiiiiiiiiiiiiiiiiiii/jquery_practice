$(function () {

  $(".btn__submit").on("click", function () {

    const familyName = $("#family__name").val();
    const givenName = $("#given__name").val();
    const year = $(".year").val();
    const month = $(".month").val();
    const day = $(".day").val();
    const birthday = year + "年" + month + "月" + day + "日";
    const gender = $('input[name="gender"]:checked').val();
    const occupation = $(".occupation").val();
    const accountName = $("#account__name").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const duplicationPassword = $("#duplication__password").val();
    const address = $("#address").val();
    const tel = $("#tel").val();

    const subscriptionList = [];
    $('input[name="subscription"]:checked').each(function () {
      subscriptionList.push($(this).val());
    });

    console.log("名字：" + familyName);
    console.log("名前：" + givenName);
    console.log("生年月日：" + birthday);
    console.log("性別：" + gender);
    console.log("職業：" + occupation);
    console.log("アカウント名：" + accountName);
    console.log("メールアドレス：" + email);
    console.log("パスワード：" + password);
    console.log("確認用パスワード：" + duplicationPassword);
    console.log("住所：" + address);
    console.log("電話番号：" + tel);
    console.log("購読情報：" + subscriptionList.join(", "));

  });

});