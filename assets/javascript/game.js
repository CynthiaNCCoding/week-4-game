 // Assigning Random #'s to gems and start # 

var generatedNumber = 19 + Math.floor(Math.random() * 101);
console.log(generatedNumber);

var redNumber= 1 + Math.floor(Math.random() * 12);
redNumber!= blueNumber | yellowNumber | greenNumber;
console.log(redNumber);

var blueNumber= 1 + Math.floor(Math.random() * 12);
blueNumber!= redNumber | yellowNumber | greenNumber;
console.log(blueNumber);

var yellowNumber= 1 + Math.floor(Math.random() * 12);
yellowNumber!= redNumber | blueNumber | greenNumber;
console.log(yellowNumber);

var greenNumber= 1 + Math.floor(Math.random() * 12);
	greenNumber!= redNumber | blueNumber | yellowNumber;
console.log(greenNumber);

var anyGems = ["redNumber", "blueNumber", "yellowNumber", "greenNumber"];

var x 

var countScoreDiv = $('#countScore');
var countScoreWrite = countScoreDiv.text();
var countScoreParse = parseInt(countScoreWrite);



// When START is clicked

$(document).ready(function(){


    $("#startBox").click(function(){
    	$("#countScore").html(0);
		$("#random").html(generatedNumber);

		if (redNumber = blueNumber) {
			redNumber;
		}
    });

    // ADD THE GEMS TO COUNTSCORE******

	// $("#red").on("click", function() {
	// 	redNumber + redNumber = var XX;
	// 	$("#countScore").html(XX);

	// }



    // BAD CODE
	// $("#red").on("click", function() {
	// 	var updatedScore = countScoreParse + redNumber;
	// 	// updatedScore = countScoreParse;
	// 	// countScoreParse = "#countScore";
	// 	// $("#countScore").html(countScoreParse);
	// 		$("#countScore").html(updatedScore);

	// 	console.log(countScoreParse);
	// });

// BAD CODE
// // When red gem is clicked
// 	$("#red").on("click", function() {
// 		getElementById("#countScore").innerHTML(redNumber;=);
// }
// });


// OLD
	// $("#red").on("click", function() {
 //    	"#countScore" + redNumber = updatedScore;
 //    	updatedScore = "#countScore";
	// });

// }); <!--this was the closing bracket for doc.ready-->

// INTERNET******
// $("#red").click(function() {
// $("#countScore")++;
// });


// // When blue gem is clicked

	$("#blue").on("click", function() {
    	$("#countScore").html(blueNumber);
	});

// // When yellow gem is clicked

	$("#yellow").on("click", function() {
    	$("#countScore").html(yellowNumber);
	});

// // When green gem is clicked

	$("#green").on("click", function() {
    	$("#countScore").html(greenNumber);
	});

});

// ---------------
// var jLikes = $('div.likes');
// var sLikes = jLikes.text();
// var nLikes = parseInt(sLikes);
// if(isNaN(nLikes)) {
//    return;
// }
// jLikes.text(nLikes+1);
