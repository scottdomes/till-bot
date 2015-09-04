var total = 0;
var cost = 0;
var order = [];

//When an item is clicked, assign its value attribute to cost (after converting it to a floating number), then add it to total
$(".item").click(function() {

	// Button press animation - changes to a darker shade briefly when clicked
	$(this).mousedown(function () {
		$(this).css("background-color", "#3C377D");
	});
	$(this).mouseup(function () {
		$(this).css("background-color", "#6C689F")
	});



	// Parse total back to a number
	total = parseFloat(total);
	cost = parseFloat($(this).attr("value"));
	total += cost;

	//Add the cost to an array, to keep track of order
	order[order.length] = cost;


	//Round to 2 decimal places (returns a string)
	total = total.toFixed(2);

	//Then show that value on the header
	document.getElementById("total").innerHTML = total;

	//Speech bubble animations
	// Return to basic if it's set to oops
	var currentContent = $("#bubbleContent").text();
	if (currentContent !== "Welcome to Till-bot") {
		$("#bubbleContent").fadeOut(200, function() {
			$(this).html("Welcome to <br>Till-bot").fadeIn(200);
		})
	}

	if( $(this).text() === "Hardcore/Staff Smoothie (Reg)") {
		$("#bubbleContent").fadeOut(200, function() {
			$(this).text("So hardcore!").fadeIn(200);
		})
	}
	if( $(this).text() === "Double Wheatgrass") {
		$("#bubbleContent").fadeOut(200, function() {
			$(this).text("Chaser please.").fadeIn(200);
		})
	}
	if( $(this).text() === "Extra Booster") {
		$("#bubbleContent").fadeOut(200, function() {
			$(this).text("Boost 'em up!").fadeIn(200);
		})
	}
	if( $(this).text() === "Regular Egg Scrambler Combo") {
		$("#bubbleContent").fadeOut(200, function() {
			$(this).text("Good morning!").fadeIn(200);
		})
	}
	if( $(this).text() === "Single Wheatgrass") {
		$("#bubbleContent").fadeOut(200, function() {
			$(this).text("Hitting the grass!").fadeIn(200);
		})
	}



});


//Stand-in enter function, works the same as clear
$( "#enter" ).click( function() {
	total = 0;
	document.getElementById("total").innerHTML = "0.00";
	order = [];
});

$( "#clear" ).click( function() {
	total = 0;
	document.getElementById("total").innerHTML = "0.00";
	order = [];

	$("#bubbleContent").fadeOut(200, function() {
		$(this).text("We all make mistakes.").fadeIn(200);
	})
});

$( "#deletePrev" ).click ( function() {

	//Only do this if there has been an order, to avoid an error
	if (order.length > 0){
		// Parse total back to a number, then minus the last item in order array
		total = parseFloat(total);
		total = total - order[order.length - 1];

		//Remove that item from the array
		order.pop();

		//Round to 2 decimal places (returns a string)
		total = total.toFixed(2);

		//Then show that value on the header
		document.getElementById("total").innerHTML = total;
	}

	// Say oops! in speech bubble
	$("#bubbleContent").fadeOut(200, function() {
		$(this).text("Oops!").fadeIn(200);
	})
});

$( "#sidebar a").click ( function() {

	// Button press animation - changes to a darker shade briefly when clicked
	$(this).mousedown(function () {
		$(this).css("background-color", "#3C377D");
	});
	$(this).mouseup(function () {
		$(this).css("background-color", "#A09DC2")
	});
});