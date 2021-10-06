$(function () {
  var num = 0; // ボタンを押した時の入力値
  var total = 0; // 続けて押した時の値
  var Val = 0; // 記号が押された時までの入力した値
  var kigou = ""; // 演算子
  var answer = ""; // 計算結果
  $("input").val(num); // 初期値0を表示

  // button押したら、
  $("button").on("click", function btn() {
    // 数字かの判定
    var num = $(this).val();
    // 数字の時
    if (!isNaN(num)) {
      // 演算子が空の時
      if (kigou === "") {
        // 計算結果を空にする
        answer = "";
      }

      console.log(num);
      // 数字なら、totalに結合
      total = total + num;
      total = parseFloat(total);
      $("input").val(total);
      console.log("total" + total);
      // return total;

      // 小数点の時
    } else if (num == ".") {
      console.log("dot");
      total = total + ".";
      $("input").val(total);
      // return total;

      // 演算子の時
    } else {
      // 実数に変換
      total = parseFloat(total);
      console.log("Val" + Val);
      // total = 0; // 値を戻す

      switch (num) {
        case "plus":
          console.log(num);
          // 記号付与
          kigou = "+";
          keisan(answer);
          break;

        case "minus":
          console.log(num);
          kigou = "-";
          keisan(answer);
          break;

        case "times":
          console.log(num);
          kigou = "*";
          keisan(answer);
          break;

        case "divide":
          console.log(num);
          kigou = "/";
          keisan(answer);
          break;

        case "calc":
          // 結果は,入力保持された値 記号 入力中の値
          console.log("a" + answer + "v" + Val + "t" + total);
          Val = parseFloat(Val);
          total = parseFloat(total);

          // 答えが空の時
          if (answer === "") {
            answer = Val + kigou + total;

            // 答えが空でないとき
          } else {
            answer = answer + kigou + total;
          }

          // 数値変換
          answer = eval(answer);
          answer = parseFloat(answer);
          $("input").val(answer);
          total = 0;
          kigou = "";
          break;

        case "clear":
          total = 0;
          Val = 0;
          answer = 0;
          num = 0;
          kigou = "";
          $("input").val(num); // 初期値0を表示
          break;
      }
    }
  });

  function keisan() {
    // もし、answerが0でなければ、（すでに1度記号が押されている場合）計算する
    if (answer !== "") {
      // 値を代入
      Val = total;
      answer = answer + kigou + Val;
      answer = eval(answer);
      console.log("answer" + answer);
      $("input").val(answer);
      // 入力値をリセット
      num = 0;
      total = 0;
    } else {
      // 値を代入
      Val = total;
      // answerが0の場合
      console.log("answer:" + answer);
      num = 0;
      total = 0;
      $("input").val(num);
    }
  }
});
