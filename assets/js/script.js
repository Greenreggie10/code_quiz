
var startBtn = document.querySelector("#start-btn");
var pageContentEl =  document.querySelector("#main-content");
var pageTitleEl = document.querySelector("#title");
var counterEl = document.querySelector("#timer");
var viewScoreEl = document.querySelector("#score-page");
console.dir(startBtn)

  // Test Timer
  var counter = 75;


// End of Quiz Page
var endQuiz = function() {
    pageTitleEl.textContent = "All Done!";
    pageTitleEl.className = "end-title";
    pageContentEl.textContent = ("Your Final Score is ");
    
    //  + finalScore)
};
// timer value when last button is clicked [help]
// var timeRemaining = startTimer.value;
// Test Score
// var finalScore = count;


// Test Timer Countdown
var count = function() {
    if (counter > 0) {
        counter--;
        counterEl.textContent = ("Timer: " + counter);
    }
    else {
        clearInterval(countdownEl);
        counter = 0;
        counterEl.textContent = ("Timer: " + counter);
        endQuiz ();
    }
}
// Counter Countdown Interval
function countdownEl() {
    var countdown = setInterval(count, 1000);
    }




// var startQuiz = start timer & first quiz question
function startQuiz() {
    console.log("start timer");
    // Start timer countdown
    countdownEl();

// display first question
    // Question text
    pageTitleEl.textContent = "Commonly used data types do NOT include: ";
    // Question formatting
    pageTitleEl.className = "questions";

// display first question answer choices
    // empty pageContentEl
    pageContentEl.textContent = "";
    pageContentEl.className = "answers-box"
    // create ordered answer choice list
    var answerChoices = document.createElement("ol");
    pageContentEl.appendChild(answerChoices);
    answerChoices.className = "answers";
        // create list items
        var answer1 = document.createElement("li");
            answer1.className = "quiz-btn";
            answer1.textContent = "1. strings";
            answerChoices.appendChild(answer1);
        var answer2 = document.createElement("li");
            answer2.className = "quiz-btn";
            answer2.textContent = "2. booleans";
            answerChoices.appendChild(answer2);
        var answer3 = document.createElement("li");
            answer3.className = "quiz-btn";
            answer3.textContent = "3. alerts";
            answerChoices.appendChild(answer3);
        var answer4 = document.createElement("li");
            answer4.className = "quiz-btn";
            answer4.textContent = "4. numbers";
            answerChoices.appendChild(answer4);
        
    // remove start button
    startBtn.remove();
}



// connect start button to timer
startBtn.addEventListener("click", startQuiz);