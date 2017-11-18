
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
        	 a.addClass("answer");
        	 a.attr("id", triviaAnswers.Answers2[i]);
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
		var check1 = $(".answer1").val();
		console.log(check1);
		if (check1==2){
			correct++;
			console.log(correct);
		}
		else {
			incorrect++;
			console.log(incorrect);
		}
	}
}



document.getElementById("start").onclick = function() {
	// Start Timer
	runTriviaGame()
};







