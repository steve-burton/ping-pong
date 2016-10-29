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

var digit = [];
var pingPong = function(number) {
  for(var index = 1; index <= number; index +=1) {
     if (index % 15 === 0) {
		   digit.push(" ping-pong");
		 } else if (index % 5 === 0) {
			 digit.push(" pong");
		 } else if (index % 3 === 0) {
       digit.push(" ping");
		 } else {
       digit.push(" " + index);
		}
  } return digit;
};


//### User logic ###//
$(document).ready(function() {
  $("form#inputBox").submit(function(event){
      event.preventDefault();

      var userNumber = parseInt($("input#numberInput").val());
      var result = inputCheck(userNumber);
      $("#convertResult").text(result);
      document.getElementById("inputBox").reset();
      document.getElementsByClassName("result p").reset();
      // $("div.result").removeClass(convertResult p);
      // $("div.result").addClass(convertResult p);
    });
  });
