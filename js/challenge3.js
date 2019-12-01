$(document).ready(function() { //when the document is ready, start the function
  $("#ch3form").submit( function(){ //on the clicked submit button of the channel 2, start the following
    if ($('input[name="fruit"]:checked').length == 0){ //if the input for any of the radio buttons with the name "fruit" is equal to zero (aka none are checked because they are all valued at greater than 0)
    event.preventDefault(); //don't allow the submit function to occur
    alert("You have to pick a fruit to proceed!"); //alert the user that they have to pick a fruit for the submit to work
}
    if ($('input[name="standing"]:checked').length == 0){ //same with above. if the standing equals zero
    event.preventDefault(); //" "
    alert("You have to pick a class standing!"); //""
  }
})
})
