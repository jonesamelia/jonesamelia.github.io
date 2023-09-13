$(document).ready(function(){
    $('#catclicker').click(function(){
      $.ajax({
        dataType: "json",
        url:"https://cataas.com/cat?json=true",
        success: function(results){
            console.log("https://cataas.com" + results["url"]);
            $('#cat').attr("src","https://cataas.com" + results["url"]);


        },
        error: function(xhr, status, error){
            console.log(error);
        }
        })
      
    })

    $('#coffeeclicker').click(function(){
        $.ajax({
          dataType: "json",
          url:"https://meowfacts.herokuapp.com/",
          success: function(results){
              console.log(results["data"]);
              $('#texts').text(results["data"]);
  
  
          },
          error: function(xhr, status, error){
              console.log(error);
          }
          })
        
      })

    
});