$(document).ready(function() {
  'use strict';

  $.fn.scrollView = function() {
    return this.each(function() {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });
  };

  function anchorScroll(aid) {
    var aTag = $("a[name='" + aid +"']");
    $('html, body').animate({
      scrollTop: aTag.offset().top - 100
    }, 1000);
  }

  $('li > a').click(function(e) {
    e.preventDefault();
    var href = $(this).attr('href').replace('#', '')
    anchorScroll(href);
  })

  $('#cornerButton').click(function() {
    $('.brand-logo').scrollView();
  });

})
