$(document).ready(function(){
    
  

$("#button").click(function(){
      var password = $("#words").val();
    if(password === "hsfirox"){
        $("#word").append("You know the password!");
    } else {
            $("#word").append ("Try again!");
    
    }
    
});
});