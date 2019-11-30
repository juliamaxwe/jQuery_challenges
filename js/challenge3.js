$(document).ready(function() {
  $("#ch3form").submit( function(){
    if ($('input[name="fruit"]:checked').length == 0){
    event.preventDefault();
    alert("You have to pick a fruit to proceed!");
}
    if ($('input[name="standing"]:checked').length == 0){
    event.preventDefault();
    alert("You have to pick a class standing!");
  }
})
})
