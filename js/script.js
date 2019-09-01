$(document).ready(function () {
  $("#stream1_btn").on("click", function () {
    $(".stream1").removeClass("highlight_stream");
    $(".stream2").removeClass("highlight_stream");
    $(".stream3").removeClass("highlight_stream");
    $(".stream1").addClass("highlight_stream");
  });
  $("#stream2_btn").on("click", function () {
    $(".stream1").removeClass("highlight_stream");
    $(".stream2").removeClass("highlight_stream");
    $(".stream3").removeClass("highlight_stream");
    $(".stream2").addClass("highlight_stream");
  });
  $("#stream3_btn").on("click", function () {
    $(".stream1").removeClass("highlight_stream");
    $(".stream2").removeClass("highlight_stream");
    $(".stream3").removeClass("highlight_stream");
    $(".stream3").addClass("highlight_stream");
  });
  $("p").click(function () {
    $("p").addClass("redfont");
  });
  $("h2").hover(function () {
    $('h2').toggleClass("h2hover")
      .next()
      .stop(true, true)
    $(this).toggleClass("h2fontadjust")
      .next()
      .stop(true, true)
  });
  $('.bottom_button').mouseenter(function () {
    $('body').addClass('buttonhover')
  });
  $('.bottom_button').mouseleave(function () {
    $('body').removeClass('buttonhover')
  });
});