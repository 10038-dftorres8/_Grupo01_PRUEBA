$(document).ready(function(){
      $("#btnfadeToggle").click(function(){
        $("#div1").fadeToggle("slow", function(){
          $("#div2").fadeToggle("slow", function(){
            $("#div3").fadeToggle("slow", function(){
              alert("fadeToggle finalizado con exito");
            });
          });
        });
      });
    });