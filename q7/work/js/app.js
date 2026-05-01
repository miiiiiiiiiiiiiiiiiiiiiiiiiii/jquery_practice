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

    console.log("名字");
    console.log(familyName);

    console.log("名前");
    console.log(givenName);

    console.log("生年月日");
    console.log(birthday);

    console.log("性別");
    console.log(gender);

    console.log("職業");
    console.log(occupation);

    console.log("アカウント名");
    console.log(accountName);

    console.log("メールアドレス");
    console.log(email);

    console.log("パスワード");
    console.log(password);

    console.log("確認用パスワード");
    console.log(duplicationPassword);

    console.log("住所");
    console.log(address);

    console.log("電話番号");
    console.log(tel);

    console.log("購読情報");
    $('input[name="subscription"]:checked').each(function () {
      console.log($(this).val());
    });

  });

});