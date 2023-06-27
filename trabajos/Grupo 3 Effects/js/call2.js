$(document).ready(function() {
      $("#callBtn2").click(function() {
        $("#miElemento").fadeOut("slow", function() {
          alert("La animación ha terminado y el elemento se ha desvanecido");
        });
      });
    });