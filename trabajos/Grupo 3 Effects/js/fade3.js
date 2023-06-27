$(document).ready(function(){
      $("#fade-to-button").click(function(){
        $("#image1").fadeTo("slow", 0.2);
        $("#image2").fadeTo("slow", 0.5);
        $("#image3").fadeTo("slow", 1);
      });
    });