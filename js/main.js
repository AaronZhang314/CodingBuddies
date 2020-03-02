window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

jQuery(document).ready(function( $ ) {
  // Initiate the wowjs animation library
  new WOW().init();

});
