var msg = "Hover over an Image Below" //create a message variable that's displayed on the page
$("img").mouseover(function(){ //when a mouse moves over an image html element do the following
	$("#image").css("backgroundImage", "url('"+$(this).attr("src")+"')"); //change whatever the image id is for the moused over image use the background image CSS property, and set the src HTML attribute to be the place that supplies the actual image for the value of the property
	$("#image").html($(this).attr("alt")) //also display the html alt tag on the image
})
$("img").mouseleave(function(){ //when the mouse leaves the image, do the following
	$("#image").css("backgroundImage", ""); //change the background image to be nothing (will display the color set in the css code)
	$("#image").html(msg); //display the message variable set above
})
$("img").focus(function(){ //when the mouse focuses (clicks) on the image element
	$("#image").css("backgroundImage", "url('"+$(this).attr("src")+"')"); //do the same as above with the mouseover
	$("#image").html($(this).attr("alt"))
})
$("img").blur(function(){ //when the mouse leaves the image, do the following
	$("#image").css("backgroundImage", ""); //change the background image to be nothing (will display the color set in the css code)
	$("#image").html(msg); //display the message variable set above
})
