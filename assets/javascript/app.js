(function($) {
  $(function() {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#download-button').click(function() {
      $('html, body').animate({
        scrollTop: $(".intro").offset().top
      }, 2000);
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space 
