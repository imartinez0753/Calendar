// If you can see 'Hello, World!' in the console, then you can remove this and replace it your code

// YOUR JS CODE GOES HERE

//I need to have an up to date by the minute time that i can use to determine time. will have to get that from API
//compare listed time against current time to determine color of textarea.
var currentTime = moment().get("hour");
console.log(currentTime);
console.log("__________________________________");
console.log(moment().format("h"));

$("#currentDay").html(moment().format("llll"));
// var now = moment();
console.log(moment().format("LLLL"));
// console.log("#nine".val());

// console.log($(this).val);
var timeEl = document.getElementById("nine");
var nine = $("#nine").val();
console.log(nine);
// console.log(document.getElementById("nine").value);
console.log;
// console.log(timeEl.innerText);

console.log($("#nine").val());
console.log($("#nine").attr("data-value"));
console.log($("data-value"));

var times = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (var i = 0; i < times.length; i++) {
	// var newRow = $("<div>");
	// newRow.addClass("time-block col-sm-2 text-center pt-2");
	// newRow.attr("data-value", times[i]);
	// newRow.text("this is the time " + times[i]);
	// $("#newDiv").append(newRow);
	var timeEl = $("<div>");
	timeEl.text(times[i]);
	timeEl.attr("data-value", times[i]);
	timeEl.addClass("time-block hour col-sm-2 text-center pt-2 row");
	var textInput = $("<textarea>");
	textInput.addClass("h-50 form-control col-sm-8 row");
	textInput.attr("id", "exampleFormControlTextarea1");
	textInput.attr("rows", "1");
	var saveBtn = $("<button>");
	saveBtn.text("save");
	saveBtn.attr("button");
	saveBtn.addClass("h-50 btn btn-primary col-sm-2 saveBtn text-wrap row");

	if (times[i] == moment().format("h")) {
		textInput.addClass("present");
	} else if (times[i] < moment().format("h")) {
		textInput.addClass("past");
	} else {
		textInput.addClass("future");
	}
	$("#newDiv").append(timeEl, textInput, saveBtn);
	console.log("data-value");
}

//need to make a div class=container and div=row
//I need to make a div for time, textarea, and savebtn
//time dive needs class col-sm-2, text center, pt-2 time-block
//time needs inner html equal to i with additional math to work in timeMath
//textarea needs to default, and save to local storage
//textarea need class h-50, form control, and col-sm-8
// save button needs a .on("hover")attr and functionality
//button needs type=button class=h-50, btn, btn-primary, col-sm-2 saveBtn, and text-wrap
// this loop needs to create 8 rows
