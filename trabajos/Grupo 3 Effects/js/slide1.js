$(document).ready(function(){
      $(".panel-heading").click(function(){
        var panelContent = $(this).next(".panel-content");
        panelContent.slideToggle("slow");
      });
    });