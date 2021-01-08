$(document).ready(function() {

$('h2').on('mouseover', function() {
  $(this).animate({
    "letter-spacing": "10px",
    "font-size": "40px"
  }, 1000);
});

$('h2').on('mouseout', function() {
  $(this).animate({
    "letter-spacing": "10px",
    "font-size": "60px"
  }, 1000);
});



$('.change').on('click', function() {
  $.playSound("http://sly.hu/~csuser/sound/misc/nevet3.wav");
  $(this).html('LOOK CLOSER AT THE IMAGE');
});




})