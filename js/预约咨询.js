var tb1 = document.getElementsByClassName("tb1")[0];
var tb2 = document.getElementsByClassName("tb2")[0];
var tb0 = document.getElementsByClassName("tb0")[0];
var tb00 = document.getElementsByClassName("tb00")[0];
var temp = 0;
tb1.onclick = function () {
  if (temp == 0) {
    tb0.style.display = "block";
    tb00.style.display = "none";
    temp = 1;
  } else {
    tb0.style.display = "none";
    temp = 0;
  }
};
tb2.onclick = function () {
  if (temp == 0) {
    tb00.style.display = "block";
    tb0.style.display = "none";
    temp = 1;
  } else {
    tb00.style.display = "none";
    temp = 0;
  }
};
