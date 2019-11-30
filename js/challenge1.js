
//Julia Maxwell JQuery hw
// I worked with Mike Payne and Mark Ramirez on this homework. Ben Sutton also helped me figure out a GitHub difficulty.


$(document).ready(function() {

	$("#subscribe").change(function(){
	$("#emailField");
	if (this.checked){
		$("#emailField").show();
		console.log("selected")}
  else {
		$("#emailField").hide();
		console.log("hidden")
	}
})
})
