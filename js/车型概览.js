$(function () {
  var i1 = document.getElementsByClassName("i1");
  var i2 = document.getElementsByClassName("i2");
  var i3 = document.getElementsByClassName("i3");
  var i4 = document.getElementsByClassName("i4");
  var i6 = document.getElementsByClassName("i6")[0];
  var ip1 = document.getElementsByClassName("ip1")[0];
  var p = document.getElementsByClassName("message");
  i1[0].onfocus = function () {
    p[0].style.display = "inline-block";
    p[0].innerHTML = "2-4个字符";
  };
  i2[0].onfocus = function () {
    p[1].style.display = "inline-block";
    p[1].innerHTML = "2以上个字符";
  };
  i3[0].onfocus = function () {
    p[2].style.display = "inline-block";
    p[2].innerHTML = "2以上个字符";
  };
  i4[0].onfocus = function () {
    p[3].style.display = "inline-block";
    p[3].innerHTML = "11位数字";
  };
  i1[0].onblur = function () {
    var reg = /^[\w\u4e00-\u9fa5]{2,4}$/;
    if (i1[0].value == "") {
      p[0].innerHTML = '<i class="err"></i>不能为空';
      return false;
    } else if (!reg.test(i1[0].value)) {
      p[0].innerHTML = '<i class="err"></i>2-4个字符';
      return false;
    } else {
      p[0].innerHTML = '<i class="ok"></i>正确';
      return true;
    }
  };
  i2[0].onblur = function () {
    var reg = /^[\u4e00-\u9fa5]{2,}$/;
    if (i2[0].value == "") {
      p[1].innerHTML = '<i class="err"></i>不能为空';
      return false;
    } else if (!reg.test(i2[0].value)) {
      p[1].innerHTML = '<i class="err"></i>2以上个字符';
      return false;
    } else {
      p[1].innerHTML = '<i class="ok"></i>正确';
      return true;
    }
  };
  i3[0].onblur = function () {
    var reg = /^[\u4e00-\u9fa5]{2,}$/;
    if (i3[0].value == "") {
      p[2].innerHTML = '<i class="err"></i>不能为空';
      return false;
    } else if (!reg.test(i3[0].value)) {
      p[2].innerHTML = '<i class="err"></i>2以上个字符';
      return false;
    } else {
      p[2].innerHTML = '<i class="ok"></i>正确';
      return true;
    }
  };
  i4[0].onblur = function () {
    var reg =
      /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (i4[0].value == "") {
      p[3].innerHTML = '<i class="err"></i>不能为空';
      return false;
    } else if (!reg.test(i4[0].value)) {
      p[3].innerHTML = '<i class="err"></i>11位号码';
    } else {
      p[3].innerHTML = '<i class="ok"></i>正确';
      return true;
    }
  };
  touch.on($(".i6"), "tap", function () {
    if (i4[0].onblur() && i3[0].onblur() && i2[0].onblur() && i1[0].onblur()) {
      alert("注册成功!");
    } else {
      alert("请按照提示要求填写！！！");
    }
  });
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
    if (isChecked == false) {
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
