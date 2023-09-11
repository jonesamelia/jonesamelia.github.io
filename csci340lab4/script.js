$(document).ready(function(){
    $('#clicker').click(function(){
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

    
});