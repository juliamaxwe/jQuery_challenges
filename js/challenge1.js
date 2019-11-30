
//Julia Maxwell JQuery hw
// I worked with Mike Payne and Mark Ramirez on this homework. I didn't have time to finish no 5 because of so much other hw :(


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
