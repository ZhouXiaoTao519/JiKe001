$(function () {
  touch.on($(".player"), "tap", function (ev) {
    if ($(".player").is(".player-start")) {
      $(".player").addClass("player-stop").removeClass("player-start");
    } else if ($(".player").is(".player-stop")) {
      $(".player").addClass("player-start").removeClass("player-stop");
    } else {
      $(".player").addClass("player-start");
    }
  });
  touch.on($(".cd"), "tap", function (ev) {
    $("nav").show();
  });
  touch.on($(".gb"), "tap", function (ev) {
    $("nav").hide();
  });
});
