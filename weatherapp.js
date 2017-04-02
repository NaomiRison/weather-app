//  api key:  390618ed07a170ee
// https://www.wunderground.com/weather/api/d/docs?MR=1

$("#weather-btn").on("click",function(){

	 var getzip=$("#zipcode").val();
	 getWeather(getzip);
});

function getWeather(zipcode){

	jQuery(document).ready(function($) {
  	$.ajax({
  	// "https://api.wunderground.com/api/390618ed07a170ee/geolookup/conditions/q/IA/Cedar_Rapids.json"
  	url : "https://api.wunderground.com/api/390618ed07a170ee/geolookup/conditions/q/"+zipcode+".json",
  	dataType : "jsonp",
   
   // have user type in state and city 
   // or better yet zipcode!


  	success : function(parsed_json) {
      //parsed_json turns strings to  javascript object
      // more info here:  https://www.w3schools.com/js/js_json_parse.asp

  	var location = parsed_json['location']['city'];
  	var temp_f = parsed_json['current_observation']['temp_f'];
    var temp_c = parsed_json['current_observation']['temp_c'];
    var humid=parsed_json['current_observation']['relative_humidity'] ;
    var icon=parsed_json['current_observation']['icon'];
   // icons set from https://www.wunderground.com/weather/api/d/docs?d=resources/icon-sets
  	alert("Current temperature in " + location+ " is: " + temp_f);
  

  // getcity and other stuff was with zipocode

  	$("#temp").html(temp_f);
    $("#temp2").html(temp_c);
     $("#city").html(location);
     $("#humidity").html(humid);
     $("#description").html(icon);
     $("#weather-icons").attr("src","https://icons.wxug.com/i/c/k/"+icon+".gif");

  			
       $("#weather").show();
         }
  		});
	});

}
