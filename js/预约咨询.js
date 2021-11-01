$(function () {
  var tb1 = document.getElementsByClassName("tb1")[0];
  var tb2 = document.getElementsByClassName("tb2")[0];
  var tb0 = document.getElementsByClassName("tb0")[0];
  var tb00 = document.getElementsByClassName("tb00")[0];
  var dc = document.getElementsByClassName("box1")[0];
  var temp = 0;
  var doc = document.getElementsByTagName("body")[0];
  tb1.onclick = function () {
    if (temp == 0) {
      tb0.style.display = "block";
      tb00.style.display = "none";
      // temp = 1;
    } else {
      tb0.style.display = "none";
      // temp = 0;
    }
  };
  tb2.onclick = function () {
    if (temp == 0) {
      tb00.style.display = "block";
      tb0.style.display = "none";
      // temp = 1;
    } else {
      tb00.style.display = "none";
      // temp = 0;
    }
  };
  dc.onclick = function () {
    tb0.style.display = "none";
    tb00.style.display = "none";
  };
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
      var isChecked = $(".checkbox").prop("checked");
      if (
        i4[0].onblur() &&
        i3[0].onblur() &&
        i2[0].onblur() &&
        i1[0].onblur() &&
        isChecked == true
      ) {
        alert("注册成功!");
        window.location.href = "./车型概览.html";
      } else if (isChecked == false) {
        alert("请仔细阅读《隐私条款》");
      } else {
        alert("请按照要求填写");
      }
    });
  });
});
