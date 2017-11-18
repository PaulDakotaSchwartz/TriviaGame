
var triviaQuestions = ["What was the first full length CGI movie?", 
						"Which of these is NOT a name of one of the Spice Girls?"];

var triviaAnswers = {
	Answers1:["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"], 
	Answers2:["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
};

 
function runTriviaGame() {
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;

	$("#console").empty();
	// console.log(correct);

	for (var j = 0; j < 2; j++) {
		$("#console").append("<p>"+ triviaQuestions[j] + "</p>");

		if (j==0){
			for (var i=0; i<triviaAnswers.Answers1.length; i++){

			 var a = $("<input type='radio' name='answer1'>" + triviaAnswers.Answers1[i] + "<br>");
        	 a.addClass("answer1");
        	 a.attr("id", i);
        	 a.attr("value",i);
        	 a.attr("data-name", triviaAnswers.Answers1[i]);
        	 a.text(triviaAnswers.Answers1[i]);
        	 $("#console").append(a);

			}
		}
		if (j==1){
			for (var i=0; i<triviaAnswers.Answers2.length; i++){
			
			var a = $("<input type='radio' name='answer2'>" + triviaAnswers.Answers2[i] + "<br>");
        	var b = i + 4;
        	 a.addClass("answer");
        	 a.attr("id", b);
        	 a.attr("value",b);
        	 a.attr("data-name", triviaAnswers.Answers2[i]);
        	 a.text(triviaAnswers.Answers2[i]);
        	 $("#console").append(a);
			}
		}
	}
	$("#console").append("<button id='done'>done</button>");

	document.getElementById("done").onclick = function() {
	scoreGame()
	};
	// If Done is clicked or time out check answers and score

	function scoreGame(){
		// console.log(correct);
		var check1 = document.getElementById("0").checked;
		var check2 = document.getElementById("1").checked;
		var check3 = document.getElementById("2").checked;
		var check4 = document.getElementById("3").checked;
		console.log(check2);
		if (check3==true){
			correct++;
			console.log(correct);
		}
		else if (check1 == false && check2 == false && check3 == false && check4 == false){
			unanswered++;
			console.log(unanswered);
		}
		else {
			incorrect++;
			console.log(incorrect);
		}
		var check5 = document.getElementById("4").checked;
		var check6 = document.getElementById("5").checked;
		var check7 = document.getElementById("6").checked;
		var check8 = document.getElementById("7").checked;
		console.log(check2);
		if (check6==true){
			correct++;
			console.log(correct);
		}
		else if (check5 == false && check6 == false && check7 == false && check8 == false){
			unanswered++;
			console.log(unanswered);
		}
		else {
			incorrect++;
			console.log(incorrect);
		}

	$("#console").empty();
	$("#console").append("<h1>Number Correct:</h1>" + correct);
	$("#console").append("<h1>Number Incorrect:</h1>" + incorrect);
	$("#console").append("<h1>Number Unanswered:</h1>" + unanswered);
	$("#console").append("<button id='reset'>reset</button>");
	document.getElementById("reset").onclick = function() {
	// Start Timer
	runTriviaGame()
	};
	}
}

document.getElementById("start").onclick = function() {
	// Start Timer
	runTriviaGame()
};







