var startBtn = document.querySelector("#start-btn");
var pageContentEl =  document.querySelector("#main-content");
var pageTitleEl = document.querySelector("#title");
var counterEl = document.querySelector("#timer");
var viewScoreEl = document.querySelector("#score-page");
var mainEl = document.querySelector("#main");

var currentQuestionIndex = 0;

var questionArr = [
    {
    question: "How do you reverse a string",
    answers: ["1. slicing", "2. use join", "3. loop", "4. all the above"],
    correctAnswer: "4. all the above" // i = 3
    },
    {
    question: "What tag is required in all HTML documents, and is used to define the title?",
    answers: ["1.<br></br> ", "2. curly brackets", "3. <title></title>", "4. square brackets"],
    correctAnswer: "3. <title></title>" // i = 2
    },
    {
    question: "Arrays in JavaScript can be used to store ______________.",
    answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: "4. all of the above" // i = 3
    },
    {
    question: "What are the CSS properties that are used to add space around sections of content?.",
    answers: ["1. Break", "2. curly brackets", "3. spacing", "4.cleaner "],
    correctAnswer: "3. spacing" // i = 2
    },
    {
    question:  "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
    correctAnswer: "4. console log" // i = 3
    }
]

  // Test Timer
var counter = 33;
var countdownInterval;

// start quiz = start timer & question loop
function count() {
    if (counter > 0) {
        counter--;
        counterEl.textContent = ("Timer: " + counter);
    }else{
        clearInterval (countdownInterval);
        counter = 0;
        counterEl.textContent = ("Timer: " + counter);
        endQuiz();
        return;
    }
};


// display & loop through questions on click
function generateQuestion() { 
// generate questions
    var currentQuestion = questionArr[currentQuestionIndex];
    if (currentQuestionIndex < questionArr.length) {
        // Question text
        pageTitleEl.textContent = currentQuestion.question;
        pageTitleEl.className = "questions";
    // generate answer choices
        //  empty pageContentEl
        pageContentEl.textContent = "";
        pageContentEl.className = "answers-box"

        // create ordered answer choice list
        var answerChoices = document.createElement("ol");
        pageContentEl.appendChild(answerChoices);
        answerChoices.className = "answers";

            // create list items
        var answerChoice1 = document.createElement("li");
            answerChoice1.textContent = currentQuestion.answers[0];
            answerChoice1.className = "quiz-btn";
            answerChoices.appendChild(answerChoice1);
        var answerChoice2 = document.createElement("li");
            answerChoice2.textContent = currentQuestion.answers[1];
            answerChoice2.className = "quiz-btn";
            answerChoices.appendChild(answerChoice2);
        var answerChoice3 = document.createElement("li");
            answerChoice3.textContent = currentQuestion.answers[2];
            answerChoice3.className = "quiz-btn";
            answerChoices.appendChild(answerChoice3);
        var answerChoice4 = document.createElement("li");
            answerChoice4.textContent = currentQuestion.answers[3];
            answerChoice4.className = "quiz-btn";
            answerChoices.appendChild(answerChoice4);
        
        currentQuestionIndex++;
        

        // connect question change to answer click
        answerChoices.addEventListener("click", generateQuestion);
        
        var previousQuestionIndex = currentQuestionIndex-2;
        var previousQuestion = questionArr[previousQuestionIndex];
        var questionAnswer = previousQuestion.correctAnswer;

    //  match answer choice to correct answer
        if (event.target.textContent == questionAnswer) {
            console.log("correct");
            var result = document.createElement("p");
                result.textContent = "Correct!";
                result.className =  "results";
                pageContentEl.appendChild(result);
        } else { 
            counter = counter - 10;

            var result = document.createElement("p");
                result.textContent = "Wrong!";
                result.className =  "results";
                pageContentEl.appendChild(result);
        }
                  
    } else {
        clearInterval(countdownInterval);
        endQuiz();
    }    
}   

function startQuiz() {
     // remove start button
    startBtn.remove();
    // start timer
    console.log("start timer");
    // Counter Countdown Interval
    countdownInterval = setInterval(count, 1000);
        // Test Timer Countdown
     // display first question 
   generateQuestion();

    
};
           
// End of Quiz Page
function endQuiz() {
    // page title
    pageTitleEl.textContent = "All Done!";
    pageTitleEl.className = "end-title";
    // Test score
    var finalScore = counter;
        console.log("final score: " + finalScore);
        pageContentEl.textContent = ("Your Final Score is " + finalScore);
        pageContentEl.className = "end-text";
    // high score form
    var highScoreForm = document.createElement("form");
        highScoreForm.className = "score-form";
        pageContentEl.appendChild(highScoreForm);
    var formText = document.createElement("div");
        formText.innerHTML = "Enter initials: ";
        highScoreForm.appendChild(formText);
    var formInput = document.createElement("input");
        formInput.className = "input-box"
        highScoreForm.appendChild(formInput);
    var formBtn = document.createElement("button");
        formBtn.type = "Submit";
        formBtn.innerHTML = "Submit";
        formBtn.className = "quiz-btn";
        highScoreForm.appendChild(formBtn);
    // main tag formatting
        mainEl.className = "end-page"
};


    
// connect start button to timer
startBtn.addEventListener("click", startQuiz);