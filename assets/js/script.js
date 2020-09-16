
// var questionsIndex = 0;
// var time = questions.length * 10;
// var timer;


var displayQuestionEl = document.querySelector(".display-questions");
var timerCount = document.querySelector(".timer");
var resultsEl = document.querySelector(".results");
var mainDisplay = document.createElement("h3");
var startBtn = document.createElement("button");



//global variables
var timer = 60;
// variable to store current index
var index = 0;
//****Functions**** */


function openingPage() {
    mainDisplay.textContent = "Press the button to start"
    startBtn.textContent = "Start"
    displayQuestionEl.append(mainDisplay, startBtn)
}

// create a function to start game 
function startQuiz() {
    // show timer function
    showTimer()
    // call next question function
    nextQuestion()
}

// Reduce clock by 1 second off of clock
function showTimer() {
    // diplay timer to screen
    timerCount.textContent = timer;
    // create setInterval and store it to a variable
    var questionTimer = setInterval(function() {
        // countdown by 1 
        timer--;
        //display timer to screen
        timerCount.textContent = timer;
        // if timer goes down to 0, clear interval
        if (timer <= 0) {
            clearInterval(questionTimer);
        }
    }, 1*1000)

}

// function that handles and displays the next question
function nextQuestion() {
    // Show a question from the array
    var currentQuestion = questions[index];
    //console.log current question
    console.log(currentQuestion);
    //Display question after clicking start
    displayQuestionEl.textContent = "";

    mainDisplay.textContent = currentQuestion.title;

    displayQuestionEl.append(mainDisplay);

var choicesContainer = document.createElement("div");
    //Loops through multiple choice questions
    for (let questionIndex = 0; questionIndex < currentQuestion.choices.length; questionIndex++) {
        //Each button has a choice we will be able to track
        var choiceBtn = document.createElement("button");

        choiceBtn.textContent = currentQuestion.choices[questionIndex];
        //Checks answer by making a button 
        choiceBtn.addEventListener("click", checkAnswer);
        // Append to display 
        choicesContainer.append(choiceBtn);

    }
    //Must append to show question choices on main display
    displayQuestionEl.append(choicesContainer);
}

//*****Logic to check for right answer */

function checkAnswer(event) {

    //***Logic to CHECK FOR RIGHT ANSWER */
    var responseText = event.target.textContent;
    console.log(responseText);


    //increase index by 1 
    index++
    if (responseText == questions[index].answer) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }

    nextQuestion();

}

// add event listener to start quiz 
startBtn.addEventListener("click", startQuiz)
// call function to show opening page
openingPage(); 