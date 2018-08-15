//=============GLOBAL VARIABLES DECLARATION & ASSIGNMENT============
//creating an array that stores the questions for the topic 'functions'
let quizBank= [];
//counts the number of questions we ask, starting at zero for an array
let counter = 0;
//tracks index of the quizBank array 
let index=0;

//assigning my HTLML element to a variable that holds the spot for the question
let questionsAppear = document.getElementsByClassName('populateQuestions');

//assigning my HTML elements with attribute class to a variable that will hold the list of answer choice.
let answersAppear = document.getElementsByClassName('answerChoice');

//creating a variable that will hold the HTML element which displays response to user after they click
let responseAppear = document.getElementsByClassName('response');


// creating a varibale that stores an array boolean values (true) when user clicks on correct choice
let correctAnswerChosen = 0;
console.log(correctAnswerChosen);

// creating a varibale that stores an array boolean values (false) when user clicks on incorrect choice
let incorrectAnswerChosen = 0;
console.log(incorrectAnswerChosen);

let quizElement = document.getElementById('quiz');

//create a next button
let buttonHolder = document.getElementById('buttonHolder');
let questionButton= document.createElement('button');

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

q01 = new Question('functions', 'To execute the code block in a function, we do what?', ['Invoke the function','Define the function','Construct the function','Declare the function'], null, null) ;

q02 = new Question('functions', 'An invoked function is the ________ thing the JavaScript interpreter executes when a page loads.', [' first','final','second','third'], null, null) ;

q03 = new Question('functions', 'Functions take _______ to return a value?', ['parameters', 'objects', 'objectives', 'variables'], null, null) ;

q04 = new Question('functions', 'Functions are known as _______ of the object?', ['methods', 'parameters', 'values', 'variables'], null, null) ;

q05 = new Question('functions', 'In a function expression, what is omitted?', ['The name', 'The interpreter', 'The value', 'The method'], null, null) ;

q11 = new Question('loops', 'Which of the following is not a loop type?', ['do for', 'do while', 'for', 'while'], null, null) ;

q12 = new Question('loops', 'Loops check a ______?', ['condition', 'variable', 'function', 'method'], null, null) ;

q21 = new Question('objects', 'In an object, variables become known as _______?', ['properties', 'scripts', 'keys', 'values'], null, null) ;

q22 = new Question('objects', 'In an object, functions become known as _______?', ['methods', 'scripts', 'keys', 'values'], null, null) ;

q23 = new Question('objects', 'An object constructor provides what main advantage?', ['Multiple instantiations', 'A single instantiation', 'Defined keys', 'Defined values'], null, null) ;

q31 = new Question('DOM', 'The DOM specifies the way in which a page is modeled using a _______?', ['DOM tree', 'DOM chart', 'DOM score', 'DOM loop'], null, null) ;

q32 = new Question('DOM', 'The DOM is ________?', ['neither part of HTML, nor part of JavaScript', 'part of HTML, and part of JavaScript', 'part of HTML, but not part of JavaScript', 'not part of HTML, but part of JavaScript'], null, null) ;

q33 = new Question('DOM', 'To access the DOM, you start by looking for ______?', ['elements', 'documents', 'attributes', 'text'], null, null) ;

q34 = new Question('DOM', 'Methods that find elements in the DOM are called what?', ['DOM queries', 'Node queries', 'Element queries', 'Attribute queries'], null, null) ;

q35 = new Question('DOM', 'A collection of nodes is known as a _______?', ['nodeList', 'nodeArray', 'nodeQuery', 'nodeScript'], null, null) ;

//pushing the questions of the function questions objects into an array that holds all the questions for the function topic
quizBank.push(q01, q02, q03, q04, q05, q11, q12, q21, q22, q23, q31, q32, q33, q34, q35);

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
        index = indexFunc(); 
        //prevents repeated questions
        while (quizBank[index].displayed) {
            index = indexFunc();
        }
        questionsAppear[counter].innerHTML = quizBank[index].question;
        quizBank[index].displayed = true;
        questionsAppear = document.getElementsByClassName('populateQuestions');
}

//Placeholder for creating a function to randomize the answer options each time they appear (not part of the MVP)

//creating a function that will populate the "answer options" property
let answerChoices = function(){
    //since "answerAppear" was assigned a class name, then we can use it as an array. class attribute acts an array.
    for (let i=0; i < answersAppear.length; i++){

    answersAppear[i].innerText= quizBank[index].answerOptions[i];

    }
}

answerChoices();

        answersAppear[i].innerText= quizBank[index].answerOptions[i];
    }
}

//==========FUNCTIONS FOR EVENT HANDLERS ================

//Function that will give the  response "correct" when the correct choice is clicked + score property (boolean)
let responseCheck = function(){
    
    console.log("user response = " + quizBank[index].userResponse); 
    console.log("correct answer = " + quizBank[index].correctAnswer);
    
    let response = document.createElement('p');
    response.setAttribute('class', 'response');
    quizElement.appendChild(response);
    responseAppear = document.getElementsByClassName('response');

    if (quizBank[index].userResponse === quizBank[index].correctAnswer){
        responseAppear[counter].innerText = "Correct";
        quizBank[index].result = true;

        answersAppear[0].removeEventListener('click',clicked);
        answersAppear[1].removeEventListener('click',clicked);
        answersAppear[2].removeEventListener('click',clicked);
        answersAppear[3].removeEventListener('click',clicked);

        if (responseAppear.innerText = "Correct"){
            correctAnswerChosen++
            let score1 = document.getElementById('correct-answers')
            score1.innerText = correctAnswerChosen++
            
        
        }
    }
    else {
        responseAppear[counter].innerText = "Incorrect";
        quizBank[index].result = false;

        answersAppear[0].removeEventListener('click',clicked);
        answersAppear[1].removeEventListener('click',clicked);
        answersAppear[2].removeEventListener('click',clicked);
        answersAppear[3].removeEventListener('click',clicked);

        if (responseAppear.innerText = "Incorrect"){
            incorrectAnswerChosen++
            let score2 = document.getElementById('incorrect-answers')
            score2.innerText = incorrectAnswerChosen++        
    
        }
    }

    counter = 0
    //if there are no more questions to be asked, do not display the "next" button
    if (counter < (quizBank.length - 1)) {
        buttonHolder.appendChild(questionButton);
        questionButton.innerText = 'Next Question';  
    } 
    else {
        buttonHolder.removeChild(questionButton);
    }
}

let clicked = function(e) {
    quizBank[index].userResponse = e.target.innerHTML; 
    responseCheck();
    removeEventFunc();
}

let nextClicked = function (e) {
    counter++;

    let newQuestion = document.createElement('p');
    quizElement.appendChild(newQuestion);
    newQuestion.setAttribute('class', 'populateQuestions');
    questionPopulate();

let clicked = function(e) {
    quizBank[index].userResponse = e.target.innerHTML; 
    responseCheck();

    //let answersElement = document.getElementById('answers');
    let newAnswerChoices = document.createElement('ol');
    questionsAppear[counter].appendChild(newAnswerChoices);
    newAnswerChoices.setAttribute('class', 'answerChoice');
    newAnswerChoices.setAttribute('type', 'a');
    
    for (let i=0; i < quizBank[index].answerOptions.length; i++){
        let newAnswer = document.createElement('li');
        newAnswerChoices.appendChild(newAnswer);
        newAnswer.setAttribute('class', 'answerChoice');
        newAnswer.innerText = quizBank[index].answerOptions[i];
    }
    answerEventFunc();
}


//==============FIRING EVENTS + EXECUTION===============
// creating an code to run when the event click is fired in my HTML


answersAppear[0].addEventListener('click',clicked);
answersAppear[1].addEventListener('click',clicked);
answersAppear[2].addEventListener('click',clicked);
answersAppear[3].addEventListener('click',clicked);
=======
let answerEventFunc = function() {
    for(let i= (counter * 4); i < answersAppear.length; i++){
        answersAppear[i].addEventListener('click', clicked);
    }
}

let removeEventFunc = function() {
    for(let i= (counter * 4); i < answersAppear.length; i++){
        answersAppear[i].removeEventListener('click', clicked);
    }
}

questionButton.addEventListener('click', nextClicked)

questionPopulate();
answerChoices();
answerEventFunc();