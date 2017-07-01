
var number=30;
var correctQues=0;
var incorrectQues=0;
var questionCounter=0;
var unanswered=0;
var questionArray=["1.What supernatural movie comedy features the line 'He slimed me?","2.Who directed the movie Charlie and the Chocolate Factory 2005?","3.Roy Rogers: what was the name of his dog?","4.In which sport would you find a ripcord involved?","5.Which professional golfer won the United States Amateur Championship in 1954?","6.What is the nickname of the crowds that followed golfing great Arnold Palmer at golf tournaments?","7.Which NHL franchise was founded in 1993 by the Disney Company?","8.In what sport would you use an épée?","9. In which golf tournament is a green jacket awarded to the winner?","10.In which sport was Nolan Ryan famous?"];
var answerArray=[["A.GhostBusters","B.The frighteners","C.High spirits","D.Gremlins 2"],["A.Gene wilder","B.Tim Burton","C.Steven spielberg","D.Martin scorsese"],["A.Bullet","B.Trigger","C.Bullseye","D.Amigo"],["A.Volleyball","B.NetBall","C.Skydiving","D.Cricket"],["A.Tiger Woods","B.Greg Norman","C.Arnold Palmer","D.Micheal Chang"],["A.Palmer's Pals","B.Palmer's Posse","C.Arnie's Animals","D.Arnie's Army"],["A.Anaheim Ducks","B.Boston Baloos","C.Minnesota Mickeys","D.Orlando Genies"],["A.Curling","B.Polo","C.Fencing","D.Swimming"],["A.The Masters","B.US Open","C.Us PGA","D.Bristish Open"]];
var correctAnswer=["A.GhostBusters","B.Tim Burton","A.Bullet","C.Skydiving","C.Arnold Palmer","D.Arnie's Army","A.Anaheim Ducks","C.Fencing","A.The Masters"];
var clock;

$(document).ready(function() {

initialScreen();

$("#test").on("click",function(){
	event.preventDefault();	
	 questionPage();
     clock = setInterval(times, 1000);
	function times() {
		if (number === 0) {
			clearInterval(clock);
			updateTimeOut();			
		}
		if (number > 0) {
			number--;
		}
		$("#timer").html(number);
	}

    
});

$("body").on("click", ".answer",function(){
 var selectAnswer=$(this).text();
 console.log(selectAnswer);
 console.log(correctAnswer[questionCounter]);
 if(selectAnswer === correctAnswer[questionCounter]) {
		clearInterval(clock);
		updateWin();		
	}
	else {	
		clearInterval(clock);
		updateLoss();	
	}


});
$("body").on("click", ".reset-button", function(event){
	
	startOver();
});

function questionPage() {
	var gamePage = "<p class='text-center timer-p'>Time Remaining:<span id='timer'>30</span></p><p class='text-center question'>" + questionArray[questionCounter] +"</p><p class='answer'>"+ 
	     answerArray[questionCounter][0] + "</p><p class='answer'>"+answerArray[questionCounter][1]+"</p><p class='answer'>"+answerArray[questionCounter][2]+"</p><p class='answer'>"+answerArray[questionCounter][3]+"</p>";
	$(".sub-section").html(gamePage);
}

function initialScreen() {	
	var start=$("<button>");
	$(start).attr("id","test");
	$(start).html("Start Quiz");      
	$(".sub-section").append(start);
}

function updateTimeOut() {
	unanswered++;
	var gamePage = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + number + "</span></p>" + "<p class='text-center'>Time out!  The correct answer was: " + correctAnswer[questionCounter] + "</p>"+"<img class='center-block imageTmeout ' src='assets/images/imag5.gif'>";
	$(".sub-section").html(gamePage);
	setTimeout(timeOut, 3000); 
}
function updateWin(){
   correctQues++;
	
	var gamePage= "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + number + "</span></p>" + "<p class='text-center'>Correct! The correct answer is: "+ correctAnswer[questionCounter] + "</p>"+"<img class='center-block imagecorrect ' src='assets/images/imag4.gif'>";
	$(".sub-section").html(gamePage);
	 setTimeout(timeOut,3000);	

}
function updateLoss(){
incorrectQues++;
var gamePage = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + number + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswer[questionCounter] + "</p>"+"<img class='center-block imageloss' src='assets/images/imag3.gif'>";	
	$(".sub-section").html(gamePage);
	 setTimeout(timeOut,3000);
}
function timeOut() {
	if (questionCounter<8) {
	questionCounter++;
	questionPage();
	number = 30;
	 clock = setInterval(times, 1000);
	function times() {
		if (number === 0) {
			clearInterval(clock);
		updateTimeOut();		
		}
		if (number > 0) {
			number--;
		}
		$("#timer").html(number);
	}
	}
	else {
		summary();
	}
}


function summary(){
var gamePage = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + number + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctQues + "</p>" + "<p>Wrong Answers: " + incorrectQues+ "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>StartOver The Quiz!</a></p>";
	$(".sub-section").html(gamePage);
}
function startOver(){
	questionCounter = 0;
	correctQues = 0;
	incorrectQues = 0;
	unanswered = 0;
	number = 30;
	questionPage();
	//number = 30;
	 clock = setInterval(times, 1000);
	function times() {
		if (number === 0) {
			clearInterval(clock);
		updateTimeOut();		
		}
		if (number > 0) {
			number--;
		}
		$("#timer").html(number);
	
	}
}


});