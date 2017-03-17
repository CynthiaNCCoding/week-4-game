var generatedNumber, redNumber, blueNumber, yellowNumber, greenNumber;
var gameStarted = false;
var countScore;
var wins = 0;
var losses = 0;

function startGame() {
	if (gameStarted) {
		return;
	}

	$("#endGameAlert").html("");

	generatedNumber = 19 + Math.floor(Math.random() * 101);
	$("#random").html(generatedNumber);
	console.log(generatedNumber);

	redNumber= 1 + Math.floor(Math.random() * 12);
	console.log(redNumber);

	blueNumber= 1 + Math.floor(Math.random() * 12);
	console.log(blueNumber);

	yellowNumber= 1 + Math.floor(Math.random() * 12);
	console.log(yellowNumber);

	greenNumber= 1 + Math.floor(Math.random() * 12);
	console.log(greenNumber);

	countScore = 0;
	$("#countScore").html(countScore);
	gameStarted = true;
}

function gemClicked(event) {
	if (gameStarted==false) {
		return;
	}
	if ($(this).attr("id") == "red") {
		countScore = countScore + redNumber;
	} else if ($(this).attr("id") == "blue") {
		countScore = countScore + blueNumber;
	} else if ($(this).attr("id") == "yellow") {
		countScore = countScore + yellowNumber;
	} else if ($(this).attr("id") == "green") {
		countScore = countScore + greenNumber;
	}

	$("#countScore").html(countScore);

	console.log("you clicked: " + $(this).attr("id"));
	winLose();
}

function winLose() {
	if (countScore < generatedNumber) {
		return;
	}
	if (countScore == generatedNumber) {
		$("#endGameAlert").html("You Win!");
		gameStarted = false;
		wins++;
		$("#win").html(wins);
	}
	if (countScore > generatedNumber) {
		$("#endGameAlert").html("You Lose!");
		gameStarted = false;
		losses++;
		$("#lose").html(losses);
	}
}


$(document).ready(function() {
	$("#startBox").on("click", startGame);
	$(".gem").on("click", gemClicked);	
});


//     $("#startBox").click(function(){
//     	$("#countScore").html(0);
// 		$("#random").html(generatedNumber);

// 		if (redNumber = blueNumber) {
// 			redNumber;
// 		}
//     });
