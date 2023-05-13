$(function() {
    $('.load-page').click(function(event) {
      event.preventDefault();
      var url = $(this).attr('href');
      $('#main-content').load(url + ' #main-content');
    });
  });
  