
$(document).ready(function() { //when the document is ready, start the function
	home = $("#home"); //set these variables to the DOM's of the home and billing ID's
	billing = $("#billing");

$("#useBilling").change(function(){ //when the value for the id usebilling is changed, run the following function
	if (this.checked){ //if usebilling is checked, do the following
		$("#home").val($("#billing").val()); //the value of the home address becomes the value of the billing address when it's checked
		$("#home").prop("disabled",true); //the info in the home field is disabled when this is checked
		}
	else{
		$("#home").val(""); //the info in home is the value inputted by the user
		$("#home").prop("disabled",false); //the info in the home field is not disabled like it is when the box is checked
	}
})
});
