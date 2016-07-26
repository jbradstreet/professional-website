$(document).ready(function() {
  'use strict';

  $.fn.scrollView = function() {
    return this.each(function() {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });
  };

  $('#cornerButton').click(function() {
    $('.brand-logo').scrollView();
  });

})
