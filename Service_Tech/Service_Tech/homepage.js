$(function() {
  var $root = $('html, body');

  $('.navbar div > a').click(function() {
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 139
    }, 900);

    return false;
  });


}); //End of JS
