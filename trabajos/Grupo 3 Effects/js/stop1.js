$(document).ready(function() {
      var shape = $('#shape');
      var animationInterval;

      function startAnimation() {
        shape.animate({ left: '+=200px' }, 2000, 'linear');
      }

      function stopAnimation() {
        shape.stop();
      }

      function resetAnimation() {
        shape.stop().css('left', '0');
      }

      $('#startBtn').click(function() {
        startAnimation();
      });

      $('#stopBtn').click(function() {
        stopAnimation();
      });

      $('#resetBtn').click(function() {
        resetAnimation();
      });
    });