//### Business logic ###//

// Check for valid input and ouput message for invalid, else run converterLoop.
var inputCheck = function(input) {
  var output = "";
  if (!parseInt(input) || input.length > 100) {
    output = "Please enter a valid number!";
  } else if (input <= 0 || input > 100) {
    output = "Please enter a number between 1 and 100!";
  } else {
    output = pingPong(input);
  }
  return output;
};

var digits = [];
var pingPong = function(number) {
  for(var index = 1; index <= number; index +=1) {
     if (index % 15 === 0) {
		   digits.push(" ping-pong");
		 } else if (index % 5 === 0) {
			 digits.push(" pong");
		 } else if (index % 3 === 0) {
       digits.push(" ping");
		 } else {
       digits.push(" " + index);
		}
  } return digits;
};


//### User logic ###//
$(document).ready(function() {
  $("form#inputBox").submit(function(event){
      event.preventDefault();
      var userNumber = parseInt($("input#numberInput").val());
      var result = inputCheck(userNumber);
      $("#convertResult").text(result);
      document.getElementById("inputBox").reset();
      document.getElementById("convertResult").reset();
      $("div").removeClass(result);
      $("div").addClass(result);
    });
  });
