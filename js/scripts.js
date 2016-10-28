
var pingPong = function(number) {
var userNumber = number;
  for(var index=1; index<=userNumber; index +=1) {
    var output = "";
    if(number % 15 === 0){
      return("ping-pong");
		} else if(number % 3 === 0){
			return("ping");
		} else if(number % 5 === 0){
			return("pong");
		} else {
			return (number);
		}
  }
};

// function pingPong(userNumber) {
//   var number = userNumber;
// 	for(var number=1; number<=100; number++){
// 			return(number);
// 		}
// 	}



// User logic:
$(document).ready(function() {
  $("form#inputBox").submit(function(event){
      event.preventDefault();
      var userNumber = parseInt($("input#numberInput").val());
      var result = pingPong(userNumber);
      $("#convertResult").text(result);
    });
  });
