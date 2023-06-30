// burger menu
$(function() {
    $(".burger").click(function() {
      $(".menu").toggleClass('menu-active');
      $(".burger").toggleClass('burger-active');
    });
  });