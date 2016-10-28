
// var digits = function(number) {
//   var number = number.split("");
// };
var pingPong = function(number) {
  //var number = parseInt(splitNumber)
  for(var index=1; index<=number.length; index +=1) {
    if(number % 15 === 0){
      return ("ping-pong");
		} else if(number % 3 === 0){
			return("ping");
		} else if(number % 5 === 0){
			return("pong");
		} else {
      numberString = number.toString(" ");
      digits = numberString.split(",");
      return digits;
		}
  }
};




// User logic:
$(document).ready(function() {
  $("form#inputBox").submit(function(event){
      event.preventDefault();
      var userNumber = $("input#numberInput").val();
      var result = pingPong(userNumber);
      $("#convertResult").text(result);
    });
  });
