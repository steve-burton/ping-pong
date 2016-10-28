
function pingPong() {
	for(var number=1; number<=100; number++){
		if(number % 3 === 0 && number % 5 === 0){
			return("ping-pong");
		} else if(number % 3 === 0){
			return("ping");
		} else if(number % 5 === 0){
			return("pong");
		} else {
			return(i);
		}
	}
}


// User logic:
$("#inputBox").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("#numberInput").val());

    var result = inputCheck(userNumber);
    $("#numeralResult").text(result);
  });
});

// This should clear the input form:
if (!countTo || !countBy || countTo <= 0 || countBy === 0 || countTo === NaN || countBy === NaN ) {

      alert("Please enter a valid number");
      $("form").removeClass(form-control);
      $("form").addClass(form-control);
		}
