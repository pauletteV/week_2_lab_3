/********** contact page logic ********************/
var clickMeButton = document.getElementById('funTimes');
var results = document.getElementById('funTimesResult');

clickMeButton.addEventListener('click', changeText); 

function changeText() {
	//use prompt() to get input from user: 
	var userInput = prompt("Please Enter Some Text");

	//check if userInput is null or empty string: 
	if (userInput != null && userInput != "") {

		//place results in div 
		var textUpper = userInput.toUpperCase();
		results.innerHTML = textUpper + "!!!!";
	}

	else {
		console.log(userInput);
		results.innerHTML = "I'm sorry, I didn't understand that."
	}

}