$(document).ready(function() {
  var box = $('#box');

  $('#startButton').click(function() {
    box.animate({
      opacity: 0.25,
      width: '100px',
      height: '100px',
      marginLeft: '200px',
      marginTop: '1px',
      borderRadius: '50%',
      borderWidth: '10px'
    }, {
      duration: 2000,
      complete: function() {
        box.css('background-color', '#465BDDFF');
        box.animate({
          opacity: 1,
          width: '50px',
          height: '50px',
          marginLeft: '0',
          marginTop: '0',
          borderRadius: '0',
          borderWidth: '1px'
        }, {
          duration: 2000,
          complete: function() {
            box.css('background-color', '#FF917CFF');
            $('#startButton').click();
          }
        });
      }
    });
  });
});
