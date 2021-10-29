$(function () {
  touch.on($(".player"), "tap", function (ev) {
    var music = document.getElementById("music");
    if ($(".player").is(".player-start")) {
      $(".player").addClass("player-stop").removeClass("player-start");
      music.pause();
    } else if ($(".player").is(".player-stop")) {
      $(".player").addClass("player-start").removeClass("player-stop");
      music.play();
    } else {
      $(".player").addClass("player-start");
      music.play();
    }
  });
  touch.on($(".cd"), "tap", function (ev) {
    $("nav").show();
  });
  touch.on($(".gb"), "tap", function (ev) {
    $("nav").hide();
  });
  touch.on($(".ip6"), "tap", function (ev) {
    var isChecked = $(".checkbox").prop("checked");
    if (isChecked == true) {
      alert("提交成功！");
    } else {
      alert("请仔细阅读《隐私条款》");
    }
  });
  // $()
  $("body").bind("touchmove", function (e) {
    console.log("距离顶部" + $(".car").offset().top);
    console.log("高度" + $(document).scrollTop()); // 计算你的屏幕高度
    if ($(document).scrollTop() > 400) {
      $("#left").addClass("left-play");
      $("#right").addClass("right-play");
    }
  });
  $("body").bind("touchmove", function (e) {
    if ($(document).scrollTop() > 900 || $(document).scrollTop() < 100) {
      $("#left").removeClass("left-play");
      $("#right").removeClass("right-play");
    }
  });
  $(".tab2").hide();
  touch.on($(".mc"), "tap", function (ev) {
    $(".tab1").show();
    $(".tab2").hide();
  });
  touch.on($(".cz"), "tap", function (ev) {
    $(".tab2").show();
    $(".tab1").hide();
  });
});

function setRem() {
  // 设计稿宽度和设备宽度
  var uiW = 375,
    winW = document.documentElement.clientWidth,
    // 定义比例
    rate = winW / uiW;
  document.documentElement.style.fontSize = rate * 10 + "px";
}
setRem();
