//DOM elements
var bodyEl = document.querySelector("body")
const questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
];
var questionContainerEl = document.getElementById("question-container")
var questionTitleEl = document.getElementById("question-title")
var choicesContainerEl = document.getElementById("choices-container")
var feedbackEl = document.getElementById("feedback")
var questionIndex = 0;
var time = 0;
var timeEl = document.getElementById("time-text");
time = questions.length*15
score = 0
gameOver = false;

//function timer
var timer = function() {
    var timer = setInterval(function(){
        timeEl.textContent = time;
        time--
        if (time === 0) {
            console.log("game over")
            gameOver = true;
            localStorage.setItem("score",score)
        }
    },1000)
    
}

//start quiz function
var startQuiz = function() {
    timer()
    if(questionIndex === 0) {
        renderQuestion(questions[questionIndex])
    }
    return
}

//create a function to render the question
var renderQuestion = function(obj) {
    questionTitleEl.innerHTML = obj.title;
    for (i = 0; i < obj.choices.length;i++) {
        var choiceLiEL = document.querySelector("li")
        choiceLiEL.textContent = obj.choices[i]
        choicesContainerEl.appendChild(choiceLiEL)
    }
    return
}

//check if answer is correct
var answerChecker = function(e) {
    element = e.target;
    if (element.textContent === questions[questionIndex].answer) {
        console.log("correct")
        feedbackEl.textContent = "Correct"
    } else if (element.textContent != questions[questionIndex].answer) {
        time -= 10;
        feedbackEl.textContent = "Incorrect"
    }
    questionIndex++
    if(questionIndex < questions.length) {
        renderQuestion(questions[questionIndex])
    } else {
        score = time;
        gameOver = true
        localStorage.setItem("score",score)
        window.location.href = "highscores.html"
    }
    return
}


startQuiz()
choicesContainerEl.addEventListener("click", answerChecker)

