$(function() {
    $(".debugMode-btn").click(function() {
      $("*").toggleClass("debugMode");
      // toggle text
      $(this).text($(this).text() == 'Debug ON' ? 'Debug OFF' : 'Debug ON');
      $(this).toggleClass('on');
    });
  });