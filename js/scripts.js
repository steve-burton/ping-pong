
// var digits = function(number) {
//   var number = number.split("");
// };
// var numberArray = function(arraySize) {
//   var digit = [];
//   digit.push(number.length);
// };
var pingPong = function(userNumber) {
//  var numberString = digit.toString("");
  for(var index = 1; index <= userNumber; index ++) {
    //  var digit = [];
    //  digit.push(number);
     if (userNumber % 15 === 0) {
		   return ("ping-pong");
		 } else if (userNumber % 5 === 0) {
			 return ("pong");
		 } else if (userNumber % 3 === 0) {
       return ("ping");
		 } else {
       return userNumber;
      // numberString = number.toString(" ");
      // digits = numberString.split(",");
		}
  }
};





// User logic:
$(document).ready(function() {
  $("form#inputBox").submit(function(event){
      event.preventDefault();
      var userNumber = parseInt($("input#numberInput").val());
      var result = pingPong(userNumber);
      $("#convertResult").text(result);
    });
  });
