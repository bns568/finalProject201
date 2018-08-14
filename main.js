//=============GLOBAL VARIABLES DECLARATION & ASSIGNMENT============
//creating an array that stores the questions for the topic 'functions'
let quizBank= [];
//console.log(quizBank);

//assigning my HTLML element to a variable that holds the spot for the question
let questionsAppear = document.getElementById('populateQuestions')

//assigning my HTML elements with attribute class to a variable that will hold the list of answer choice.
let answersAppear = document.getElementsByClassName('answerChoice')
console.log(answersAppear)

//creating a variable that will hold the HTML element which displays response to user after they click
let responseAppear = document.getElementById('response')

//creating a variable that will hold the index that will track which questions we ar on
let index=0;

// creating a varibale that stores an array boolean values (true) when user clicks on correct choice
let correctAnswerChosen = [];
console.log(correctAnswerChosen);

// creating a varibale that stores an array boolean values (false) when user clicks on incorrect choice
let incorrectAnswerChosen = [];
console.log(incorrectAnswerChosen);

//===========OBJECT CONSTRUCTOR & INSTANCES============

//creating an object constructor with properties and method for the questions
let Question = function(topic, question, answerOptions, userResponse, questionResult)
{
    this.topic = topic,
    this.question = question,
    // this.userAnswers = userAnswers --
    //answerOptions will be an array
    this.answerOptions = answerOptions,
    this.correctAnswer = this.answerOptions[0],
    this.displayed = false; 
    this.userResponse = userResponse,
    //result will be a boolean
    this.questionResult = questionResult;
}

q01= new Question('Functions', 'JS does not execute a code block in a function unless the function is________?', ['invoke','define','construct','declare'], null, null);

q02= new Question('Functions', ' An invoked function is the________ thing the JS interpreter executes when a page loads.', [' first','final','second','third'], null, null);

//pushing the questions of the function questions objects into an array that holds all the questions for the function topic
quizBank.push(q01,q02);
console.log(quizBank);

//=========Index for tracking what questions we are on===============

//The "index" variable, declared above, will keep track of what question we are on, and we will pass this variable whereever we need to pass an index to the questions array

function indexFunc() {
    for(let i=0; i < quizBank.length; i++){
        index = Math.floor(Math.random() * quizBank.length);
    }
    return index;
} 

//=====POPULATING DOM DYNAMICALLY=====

//creating a function that populates question on the html page
let questionPopulate= function(){
    // Zach mentioned it is better not to run a for loop here. Only run a for loop if we wanted all the questions to populate at once on the page. Since we want the user to answer one question at at time before the next one shows then it is better to access the "questions" propoerty of the questions object  using the index of that object in the array. 
        index = indexFunc(); 
        questionsAppear.innerText = quizBank[index].question;
}

questionPopulate();

//Placeholder for creating a function to randomize the answer options each time they appear (not part of the MVP)

//creating a function that will populate the "answer options" property
let answerChoices = function(){
    //since "answerAppear" was assigned a class name, then we can use it as an array. class attribute acts an array.
    for (let i=0; i < answersAppear.length; i++){
    answersAppear[i].innerText= quizBank[index].answerOptions[i];
    }
}
answerChoices();

//==========FUNCTIONS FOR EVENT HANDLERS ================

//Function that will give the  response "correct" when the correct choice is clicked + score property (boolean)
let responseCheck = function(){
    console.log("user response = " + quizBank[index].userResponse); 
    console.log("correct answer = " + quizBank[index].correctAnswer);
    
    if (quizBank[index].userResponse === quizBank[index].correctAnswer){
        responseAppear.innerText = "Correct";
        quizBank[index].result = true;
    }
    else {
        responseAppear.innerText = "Incorrect";
        quizBank[index].result = false;
    }

    //if there are no more questions to be asked, do not display the "next" button
    if (counter < quizBank.length){
        let buttonHolder = document.getElementById('buttonHolder');
        let questionButton= document.createElement('button');
        buttonHolder.appendChild(questionButton);
        questionButton.innerText = 'Next Question';  
    } 
}

//function for not allowing the user to choose an answer more than once. The placement of this may be off, just because at this point of reading the script, you have not gotten to the event yet. 
let oneChoice =function(){
    answersAppear[0].removeEventListener('click',clicked)
    answersAppear[1].removeEventListener('click',clicked)
    answersAppear[2].removeEventListener('click',clicked)
    answersAppear[3].removeEventListener('click',clicked)
}

//========EVENT HANDLERS=======

//Event handler for correct response

let clicked = function(e) {
    quizBank[index].userResponse = e.target.innerHTML; 
    responseCheck();
    oneChoice();
}

//==============FIRING EVENTS + EXECUTION===============
// creating an code to run when the event click is fired in my HTML
answersAppear[0].addEventListener('click',clicked);
answersAppear[1].addEventListener('click',clicked);
answersAppear[2].addEventListener('click',clicked);
answersAppear[3].addEventListener('click',clicked);

// //creating a code to run the next question in the array when the click "Next question" button is clicked

