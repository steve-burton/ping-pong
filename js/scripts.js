
var pingPong = function(number) {
  var number = userNumber;
  for(var index=1; index<=100; index +=1) {
    return (number);
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
