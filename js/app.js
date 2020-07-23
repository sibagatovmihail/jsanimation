$('.spoiler').hide();
$('.spoiler2').hide();

$('.spoilerButton').on('click', function () {
  $('.spoilerButton').hide();
  $('.spoiler').slideDown(2000);
});

$('.spoilerButton2').on('click', function () {
  $('.spoilerButton2').hide();
  $('.spoiler2').slideDown(1700);
})

$('.spoiler').on('click', function () {
  $('.spoiler').hide();
  $('.spoilerButton').fadeIn(500);
})

$('.spoiler2').on('click', function () {
  $('.spoiler2').hide();
  $('.spoilerButton2').fadeIn(500);
})

