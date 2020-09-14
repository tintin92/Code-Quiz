// hook elements from the page (ex. var exampleElement = document.querySelector(".elementClass"))
// Hook question container element
var displayQuestionEl = document.querySelector(".display-questions")

// Hook timer element 
var timerCount = document.querySelector(".timer")
var resultsEl = document.querySelector(".results")
//Create dynamic elements (i.e. exampleDynamicE1 = document.createElement("button"))
// - create h3 to Show Instructions Text and Questions
var mainDisplay = document.createElement("h3");
// - create Button to Start Quiz
var startBtn = document.createElement("button");

// Declare global variables
// - variable to store timer number 
var timer = 60;
// - variable to store current index
var index = 0;
//****Functions**** */
function openingPage() {
    //add text to h3 element
    mainDisplay.textContent = "Press the button to start"
    // add text to Button
    startBtn.textContent = "Start"
    // append text and button to question container
    displayQuestionEl.append(mainDisplay, startBtn)
}



// function that loads content when page first loads
function openingPage() {

}
// function that shows the question and starts the timer
function startQuiz() {
    // show timer function
    // call next question function

}

// funtion the handles timer 
function showTimer() {
        // diplay timer to screen
        timerCount.textContent = timer;

        // create setInterval and store it to a variable
        var questionTimer = setInterval(function () {
        // inside set Interval function:
        // decrease timer by 1 
        timer-- 
        //display timer to screen
        timerCount.textContent = timer;
        // if timer goes down to 0, clear interval
            if (timer <= 0) {
                clearInterval(questionTimer);
            }

    }, 1 * 1000)

}
// function that handles and displays the next question
function nextQuestion() {
    // declare a variable to store current question. Assign the current question. 
    var currentQuestion = questions [index];
    //console.log current question
    console.log(currentQuestion);
    //emtpy question container element;
    displayQuestionEl.textContent = ""; 
    // add current question title to the main text display variable
    mainDisplay.textContent = currentQuestion.title;
    // append the main text display variable to the question container element
    displayQuestionEl.append(mainDisplay);
    // create a div element to wrap the "choices"
    var choicesContainer = document.createElement("button");
    // use a loop to: 
    for (let i=0; i < currentQuestion.choices.length; i++) {
        
        //     - create button elements for each choice
        var choiceBtn = document.createElement("button");
        //     - add text to each button from question choices
        choiceBtn.textContent = currentQuestion.choices[i];
        //     - add a click event listener to button to check answers 
        choiceBtn.addEventListener("click" , checkAnswer);
        //     - append buttons to div element created to wrap choices
        choicesContainer.append(choiceBtn);
    }


    // append div element to the question container element 
}



// function to check answer and display to following question
function checkAnswer(event) {

}


// function that shows the question and starts the timer


// add event listener to start quiz 
startBtn.addEventListener("click", startQuiz)
// call function to show opening page 
openingPage(); 