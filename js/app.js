$(function() {
  $('nav a').each(function(i, a) {
    if (window.location.href == a.href) {
      $(a).addClass('active');
    }
  });
});