var id = '';
var allQuestions = [];
var startOptions = $('#game>#center');
var totalScore = 0;
var incorrectAns = 0;
var questionNumber = 0;
var gameQuiz = $('#fullQuiz');
gameQuiz.hide();
var chart = document.createElement('div');
chart.setAttribute('id', 'chart');

$("button").click(function() {
	id = $(this).attr('id');
	startOptions.hide();
	gameQuiz.show();

	switch (id) {

		case 'physics':
			allQuestions = physicsQuestions;
			break;

		case 'maths':
			allQuestions = mathsQuestions;
			break;
		case 'general':
			allQuestions = generalQuestions;
			break;
	}
});

/* The bellow codes copied from https://codepen.io/kwikimart/pen/VjQQNK and slightly changed to get the game logic work */
var correct = function() {
	totalScore += 1;
	questionNumber += 1;
	$("#questionDiv").remove();
	$("#quizDiv").append("<h3 id='correct'>That's Correct!</h3>");
	$("#correct").append("<p>Your score is " + totalScore)
	$("#correct").append("<button id='nextButton'>Next Question</button>");
	$("#nextButton").click(function() {
		$("#correct").remove();
		if (questionNumber === 10) {
			final();
		}
		else {
			question(questionNumber);
		}
	});
};

var incorrect = function() {
	questionNumber += 1;
	$("#questionDiv").remove();
	$("#quizDiv").append("<h3 id='incorrect'>Sorry, that's incorrect!</h3>");
	$("#incorrect").append("<p>Your score is " + totalScore)
	$("#incorrect").append("<button id='nextButton'>Next Question</button>");
	$("#nextButton").click(function() {
		$("#incorrect").remove();
		if (questionNumber === 10) {
			final();
		}
		else {
			question(questionNumber);
		}
	});
};

var back = function() {
	if (questionNumber > 0) {
		questionNumber -= 1;
		$("#questionDiv").remove();
		question(questionNumber);
	}
	else {
		alert("This is the first question!");
	}
};

var final = function() {
	if (totalScore >= 10) {

		incorrectAns = 10 - totalScore;
		makeChart();
		$("#quizDiv").append("<h3>Congratulations! Your final score was " + totalScore + "</h3>");

		/* -- The start button at the end of the quiz game to reload the game -- */
		reloadButton = document.createElement('button');
		reloadButton.setAttribute('class', 'btn-lg');
		reloadButton.setAttribute('onClick', 'reload();');
		reloadButton.innerHTML = 'Start Again';
		$("#quizDiv").append(reloadButton);
		$("#quizDiv").append(chart);
		$("#quizDiv").addClass('notransition');
		
	}
	else {
		incorrectAns = 10 - totalScore;
		makeChart();
		$("#quizDiv").append("<h3>Sorry! Your final score was only " + totalScore + "</h3>");

		reloadButton = document.createElement('button');
		reloadButton.setAttribute('class', 'btn-lg');
		reloadButton.setAttribute('onClick', 'reload();');
		reloadButton.innerHTML = 'Start Again';
		$("#quizDiv").append(reloadButton);
		$("#quizDiv").append(chart);
		$("#quizDiv").addClass('notransition');
	}
};

/* The bellow codes copied from https://codepen.io/kwikimart/pen/VjQQNK and slightly changed to get the game logic work */
var question = function(i) {
	$("#quizDiv").append("<div id='questionDiv'></div>");
	$("#questionDiv").append("<h2>Question " + (i + 1) + "</h1>");
	$("#questionDiv").append("<h3>" + allQuestions[i].question + "</h3>");
	$("#questionDiv").append("<input type = 'radio' name='questionChoices' value ='" + allQuestions[i].choices[0] + "'>" + "</input>");
	$("#questionDiv").append("<label for = " + allQuestions[i].choices[0] + ">" + allQuestions[i].choices[0] + "&nbsp;" + "</label>")
	$("#questionDiv").append("<input type = 'radio' name='questionChoices' value = '" + allQuestions[i].choices[1] + "'>" + "</input>");
	$("#questionDiv").append("<label for = " + allQuestions[i].choices[1] + ">" + allQuestions[i].choices[1] + "&nbsp;" + "</label>")
	$("#questionDiv").append("<input type = 'radio' name='questionChoices' value = '" + allQuestions[i].choices[2] + "'>" + "</input>");
	$("#questionDiv").append("<label for = " + allQuestions[i].choices[2] + ">" + allQuestions[i].choices[2] + "&nbsp;" + "</label>")
	$("#questionDiv").append("<input type = 'radio' name='questionChoices' value = '" + allQuestions[i].choices[3] + "'>" + "</input>");
	$("#questionDiv").append("<label for = " + allQuestions[i].choices[3] + ">" + allQuestions[i].choices[3] + "&nbsp;" + "</label>" + "</br>")
	$("#questionDiv").append("<button id='backButton'>Back</button>" + "<button id='submitButton'>Submit</button>");
	$("#backButton").click(function() {
		back();
	});
	$("#submitButton").click(function() {
		if ($('input:radio[name=questionChoices]:checked').val() === allQuestions[i].answer) {
			correct();
		}
		else if (!$('input:radio[name=questionChoices]').is(':checked')) {
			alert("Please insert a value!");
		}
		else {
			incorrect();
		}
	});
};

$(document).ready(function() {
	$(".startButton").click(function() {
		$(this).hide();
		question(questionNumber);
	});
});

function reload() {
	location.reload();
}
