$(document).ready(function () {
  $(window).on("load scroll", function () {
    if ($(window).scrollTop() > 10) {
      $("nav").addClass("box-shadow");
    }
    if ($(window).scrollTop() > 600) {
      $("nav").addClass("bg-primary");
    } else {
      $("nav").removeClass("bg-primary");
    }
  });
});
