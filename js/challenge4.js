$("form").submit(function(){ //upon submitting the challenge 3 form (clicking the submit button) start the function
  let validInput = true; //create the variable validinput withn the scope of this function block
  if ($("#fullname").val().length == 0){ //if the full name input length is zero, alert the user with the name error message
      $("#nameerrormsg").css("display", "block"); //alert the user with the name error message, use block display format
      validInput = false; //change the validinput to false
  }
  else { //else the validinput stays true and no message is displayed
      $("#nameerrormsg").css("display", "none");
  }

  if ($("#streetaddr").val().length == 0){ //same with the above bit with the street address
      $("#addrerrormsg").css("display", "block");
      validInput = false;
  }
  else {
      $("#addrerrormsg").css("display", "none") //" "
  }

  return validInput; //return that this is a valid input now and move on to the next screen

})
