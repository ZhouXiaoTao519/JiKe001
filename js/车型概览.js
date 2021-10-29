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
    var isChecked = $('.checkbox').prop('checked');
    if (isChecked == true) {
      alert('提交成功！')
    } else {
      alert('请仔细阅读《隐私条款》')
    }
  })

});
// $(function () {
//   $('.btn').on('click', function () {
//     window.location.href = "./新闻详情.html";
//   })
// })



function setRem() {
  // 设计稿宽度和设备宽度
  var uiW = 375,
    winW = document.documentElement.clientWidth,
    // 定义比例
    rate = winW / uiW;
  document.documentElement.style.fontSize = rate * 10 + "px";
}
setRem();
