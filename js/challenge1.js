
//Julia Maxwell JQuery hw
// I worked with Mike Payne and Mark Ramirez on this homework. Ben Sutton also helped me figure out a GitHub difficulty.


$(document).ready(function() { //when the document is ready, start the function

	$("#subscribe").change(function(){ //when the subscribe id input changes (eg when it's checked), start the following function
	$("#emailField"); //if subscribe (this) is checked, show the email emailField
	if (this.checked){
		$("#emailField").show();
		console.log("selected")}
  else { //otherwise hide it 
		$("#emailField").hide();
		console.log("hidden")
	}
})
})
