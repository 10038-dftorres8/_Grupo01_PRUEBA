$(document).ready(function() {
      $('#btnMostrarC').click(function() {
        $('.caja')
          .slideDown('slow')
          .delay(500)
          .fadeOut('fast')
          .fadeIn('slow')
          .css('background-color', '#8D00FFFF')
          .slideUp('fast')
          .fadeIn('slow');
      });
    });