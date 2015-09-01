var total = 0;
var cost = 0;
var order = [];

//When an item is clicked, assign its value attribute to cost (after converting it to a floating number), then add it to total
$(".item").click(function() {

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

});