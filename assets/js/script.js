var questionIndex = 0; 
var clockShot = questions.length * 10


var displayQuestionEl = document.querySelector(".display-questions");
var timerCount = document.querySelector(".timer");
var resultsEl = document.querySelector(".results");
var mainDisplay = document.createElement("h3");
var startBtn = document.createElement("button");


var timer = 5;


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

// funtion the handles timer 
function showTimer() {
    // diplay timer to screen
    timerCount.textContent = timer; 
    // create setInterval and store it to a variable
    var questionTimer = setInterval(function () {
        // decrease timer by 1
        timer--
        //display timer to screen
        timerCount.textContent = timer; 
        // if timer goes down to 0, clear interval
        if ( timer <= 0) {
            clearInterval(questionTimer);
        }
    }, 1000)

}
   
// // function that handles and displays the next question
function nextQuestion() {
// declare a variable to store current question. Assign the current question.
    // Locates current question object from array 
    var currentQuestion = questions[questionIndex];
//console.log current question
    console.log(currentQuestion);

    displayQuestionEl.textContent = "";

    mainDisplay.textContent = currentQuestion.title;

    displayQuestionEl.append(mainDisplay);
    
    var choicesContainer = document.createElement("div");

    for (let questionIndex = 0; questionIndex < currentQuestion.choices.length; questionIndex++) {
        var choiceBtn = document.createElement("button");

        choiceBtn.textContent = currentQuestion.choices[questionIndex];

        choiceBtn.addEventListener("click", checkAnswer);

        choicesContainer.append(choiceBtn); 
        
    }
    displayQuestionEl.append(choicesContainer);

   

}

//*****Logic to check for right answer */

function checkAnswer(event) {

    //***Logic to CHECK FOR RIGHT ANSWER */
    var responseText = event.target.textContent;
    console.log(responseText); 


    //increase index by 1 
    index ++
    if (responseText === questions[index].answer){
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }

    nextQuestion();

}

// // // add event listener to start quiz 
startBtn.addEventListener("click", startQuiz)
// call function to show opening page
openingPage(); 