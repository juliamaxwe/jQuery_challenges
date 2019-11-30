
$(document).ready(function() {
	home = $("#home");
	billing = $("#billing");

$("#useBilling").change(function(){
	if (this.checked){
		$("#home").val($("#billing").val());
		$("#home").prop("disabled",true);
		}
	else{
		$("#home").val("");
		$("#home").prop("disabled",false);
	}
})
});
