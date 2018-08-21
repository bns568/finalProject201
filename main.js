//=============GLOBAL VARIABLES DECLARATION & ASSIGNMENT============
//creating an array that stores the questions for the topic 'functions'
let quizBank= [];
//counts the number of questions we ask, starting at zero for an array
let counter = 0;
//tracks index of the quizBank array 
let index=0;
// create varibales that stores an array boolean values (true or false) when user clicks on answer choice
let correctAnswerChosen = 0;
let incorrectAnswerChosen = 0;

let testBank = [];

//assigning my HTLML element to a variable that holds the spot for the question
let questionsAppear = document.getElementsByClassName('populateQuestions');

//assigning my HTML elements with attribute class to a variable that will hold the list of answer choice.
let answersAppear = document.getElementsByClassName('answerChoice');

//creating a variable that will hold the HTML element which displays response to user after they click
let responseAppear = document.getElementsByClassName('response');

let quizElement = document.getElementById('quiz');

//necessary in order to make it pretty- hence the dripping sarcasm
let stupidDiv;

let elTopic1 = document.getElementById('functions')
let elTopic2 = document.getElementById('loops')
let elTopic3 = document.getElementById('objects')
let elTopic4 = document.getElementById('DOM')
let elTopic5 = document.getElementById('localStorage')
let elSubmitTopic = document.getElementById('dataSubmit');

//create a next button
let buttonHolder = document.getElementById('buttonHolder');
let questionButton= document.createElement('button');

//===========OBJECT CONSTRUCTOR & INSTANCES============

let Topics = {
    functionsCorrect: 0,
    functionsTotal: 0,
    loopsCorrect: 0,
    loopsTotal: 0, 
    objectsCorrect: 0,
    objectsTotal: 0, 
    DOMCorrect: 0,
    DOMTotal: 0, 
    localStorageCorrect: 0,
    localStorageTotal: 0, 
}

//creating an object constructor with properties and method for the questions
let Question = function(topic, question, answerOptions, userResponse, questionResult)
{
    this.topic = topic,
    this.question = question,
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

q13 = new Question('loops', 'If "5" === 5, it returns a ____ value?', ['false', 'true', 'null', 'NaN'], null, null) ;

q14 = new Question('loops', 'If the length of an array is 6, which of the following' + '<b><i>for loop</b></i>' + 'is correct?', ['for (let i=0; i<6; i++)', 'for(let i=1; i>6; i++)', 'for(let i=0; i>5); i++', 'for(let i=1; i>6; i+-)'], null, null) ;

q15 = new Question('loops', 'What is the differenct between a ' + '<b><i>for loop</b></i>' + ' and a ' + '<b><i>while loop</b></i>' + '?', ['a ' + 'for loop' + ' runs a code a specific number of times and a ' + 'while loop' + ' is used when you do not know the code should run' , 'no difference', 'while loop' + ' is less common', 'for loop' + ' is widely used'], null, null) ;

q21 = new Question('objects', 'In an object, variables become known as _______?', ['properties', 'scripts', 'keys', 'values'], null, null) ;

q22 = new Question('objects', 'In an object, functions become known as _______?', ['methods', 'scripts', 'keys', 'values'], null, null) ;

q23 = new Question('objects', 'An object constructor provides what main advantage?', ['Multiple instantiations', 'A single instantiation', 'Defined keys', 'Defined values'], null, null) ;

q24 = new Question('objects', 'What will ' + '<strong>math.round()</strong>' + ' change 4.39 to?', ['4', '4.5', '5', '4.8'], null, null) ;

q25 = new Question('objects', 'How do you delete the property ' + '<em>pool</em>' + ' from this object: let house = {windows:12, rooms:2, pool:1};', ['delete house.pool', 'delete pool.1', 'delete pool', 'delete pool.house'], null, null) ;

q31 = new Question('DOM', 'The DOM specifies the way in which a page is modeled using a _______?', ['DOM tree', 'DOM chart', 'DOM score', 'DOM loop'], null, null) ;

q32 = new Question('DOM', 'The DOM is ________?', ['neither part of HTML, nor part of JavaScript', 'part of HTML, and part of JavaScript', 'part of HTML, but not part of JavaScript', 'not part of HTML, but part of JavaScript'], null, null) ;

q33 = new Question('DOM', 'To access the DOM, you start by looking for ______?', ['elements', 'documents', 'attributes', 'text'], null, null) ;

q34 = new Question('DOM', 'Methods that find elements in the DOM are called what?', ['DOM queries', 'Node queries', 'Element queries', 'Attribute queries'], null, null) ;

q35 = new Question('DOM', 'A collection of nodes is known as a _______?', ['nodeList', 'nodeArray', 'nodeQuery', 'nodeScript'], null, null) ;

q41 = new Question('localStorage', 'The value in a storage object is always a _______.', ['string','boolean', 'number', 'variable'], null, null) ;

q42 = new Question('localStorage', 'When saving an item into local storage, what comes after' + ' <strong>localStorage.setItem</strong>' +'?', ["('weight', '15')","'weight', '15'", "('weight', 15)", "(weight, '15')"], null, null) ;

q43 = new Question('localStorage', 'If ' + '<em>age</em>' + ' is a key, how can we retrieve its value on console?', ['getItem(age)','getItem.age', 'getItem[age]', 'itemGet()'], null, null) ;

q44 = new Question('localStorage', 'How do you remove stored items from your browser?', ['localStorage.clear()','clear.localStorage', 'clear()', 'local.storage.clear()'], null, null) ;

q45 = new Question('localStorage', "How  do you remove this key/value pair: 'color','blue'?", ["removeItem('color')",'remove.color', "removeItem('color',12)", 'removeItem.color.blue'], null, null) ;


//=========Index for tracking what questions we are on===============

//The "index" variable, declared above, will keep track of what question we are on, and we will pass this variable whereever we need to pass an index to the questions array

function indexFunc() {
    index = Math.floor(Math.random() * quizBank.length);
    return index;
} 

function randomAnswer() {
    aIndex = Math.floor(Math.random() * quizBank[index].answerOptions.length);
    return aIndex;
}

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

//=====POPULATING DOM DYNAMICALLY=====

//creating a function that populates question on the html page
let questionPopulate= function(){
        index = indexFunc();

        //necessary in order to make it pretty- hence the dripping sarcasm
        stupidDiv = document.createElement('div');
        quizElement.appendChild(stupidDiv);
        stupidDiv.setAttribute('class', 'questionCard');

        let newQuestion = document.createElement('p');
        stupidDiv.appendChild(newQuestion);
        newQuestion.setAttribute('class', 'populateQuestions');

        //prevents repeated questions
        while (quizBank[index].displayed) {
            index = indexFunc();
        }
        questionsAppear[counter].innerHTML = (counter + 1) + ". " + quizBank[index].question;
        quizBank[index].displayed = true;
        //questionsAppear = document.getElementsByClassName('populateQuestions');
}

//Placeholder for creating a function to randomize the answer options each time they appear (not part of the MVP)

//creating a function that will populate the "answer options" property
let answerChoices = function(){
    //create an ordered list
    let newAnswerChoices = document.createElement('ol');
    stupidDiv.appendChild(newAnswerChoices);
    newAnswerChoices.setAttribute('class', 'answerChoiceOL');
    newAnswerChoices.setAttribute('type', 'a');

    let answerArray = [];

    //append list items
    for (let i=0; i < quizBank[index].answerOptions.length; i++){
        let newAnswer = document.createElement('li');
        newAnswerChoices.appendChild(newAnswer);
        newAnswer.setAttribute('class', 'answerChoice');

        let j = randomAnswer(); //0-3
            
        for (let k = 0; k < answerArray.length; ) {
                if (j === answerArray[k]) {
                    j = randomAnswer();
                    k = 0;
                }
                else {
                    k++;
                }
        }
        answerArray.push(j);
        console.log ("answer array = " + answerArray);
        newAnswer.innerText = quizBank[index].answerOptions[j];
    }
}

//pushing the questions of the function questions objects into an array that holds all the questions for the function topic
testBank.push(q01, q02, q03, q04, q05, q11, q12, q13, q14, q15, q21, q22, q23, q24, q25, q31, q32, q33, q34, q35, q41, q42, q43, q44, q45);

// then attach an event handler

let topicChoice1 = function(e) {
   for (z = 0; z < testBank.length; z++) {
       if (document.getElementById('functions').id === testBank[z].topic) {
           quizBank.push(testBank[z])
           Topics.functionsTotal++;
       }  
   }
}

let topicChoice2 = function(e) {
   for (z = 0; z < testBank.length; z++) {
       if (document.getElementById('loops').id === testBank[z].topic) {
           quizBank.push(testBank[z])
           Topics.loopsTotal++;
       }
   }
}

let topicChoice3 = function(e) {
   for (z = 0; z < testBank.length; z++) {
       if (document.getElementById('objects').id === testBank[z].topic) {
           quizBank.push(testBank[z])
           Topics.objectsTotal++;
       }
   }
}

let topicChoice4 = function(e) {
   for (z = 0; z < testBank.length; z++) {
       if (document.getElementById('DOM').id === testBank[z].topic) {
           quizBank.push(testBank[z])
           Topics.DOMTotal++;
       }
   }
}

let topicChoice5 = function(e) {
   for (z = 0; z < testBank.length; z++) {
       if (document.getElementById('localStorage').id === testBank[z].topic) {
           quizBank.push(testBank[z])
           Topics.localStorageTotal++;
       }
   }
}

let topicSubmit = function(e) {
    questionPopulate();
    answerChoices();
    answerEventFunc();
    scrollToBottom();
    elSubmitTopic.removeEventListener('click', topicSubmit);
    elTopic1.removeEventListener('click', topicChoice1);
    elTopic2.removeEventListener('click', topicChoice1);
    elTopic3.removeEventListener('click', topicChoice1);
    elTopic4.removeEventListener('click', topicChoice1);
    elTopic5.removeEventListener('click', topicChoice1);

    //let element = document.getElementById("element-id");
    //element.parentNode.removeChild(element);
    //let elQuizSelect = document.getElementsByClassName('quizSelect');
    //elQuizSelect.removeChild(elSubmitTopic);
}

//==========FUNCTIONS FOR EVENT HANDLERS ================

//Function that will give the  response "correct" when the correct choice is clicked + score property (boolean)
let responseCheck = function(){
    let response = document.createElement('p');
    response.setAttribute('class', 'response');
    stupidDiv.appendChild(response);
    responseAppear = document.getElementsByClassName('response');

    if (quizBank[index].userResponse === quizBank[index].correctAnswer){
        response.setAttribute('style', 'background: #00cc66');
        responseAppear[counter].innerText = "Correct";
        quizBank[index].questionResult = true;
        correctAnswerChosen++;

        if (quizBank[index].topic === "functions") {
            Topics.functionsCorrect++;
            console.log("Topics.functionsCorrect " + Topics.functionsCorrect + " Topics.functionsTotal " + Topics.functionsTotal)
        }

        if (quizBank[index].topic === "loops") {
            Topics.loopsCorrect++;
            console.log("Topics.loopsCorrect " + Topics.loopsCorrect + " Topics.loopsTotal " + Topics.loopsTotal)
        }

        if (quizBank[index].topic === "objects") {
            Topics.objectsCorrect++;
            console.log("Topics.objectsCorrect " + Topics.objectsCorrect + " Topics.objectsTotal " + Topics.objectsTotal)
        }

        if (quizBank[index].topic === "DOM") {
            Topics.DOMCorrect++;
            console.log("Topics.DOMCorrect " + Topics.DOMCorrect + " Topics.DOMTotal " + Topics.DOMTotal)
        }

        if (quizBank[index].topic === "localStorage") {
            Topics.localStorageCorrect++;
            console.log("Topics.localStorageCorrect " + Topics.localStorageCorrect + " Topics.localStorageTotal " + Topics.localStorageTotal)
        }
    }
    
    else {
        response.setAttribute('style', 'background: #ff4d4d');
        responseAppear[counter].innerText = "Incorrect";
        quizBank[index].questionResult = false;
        incorrectAnswerChosen++;
    }

    //if there are no more questions to be asked, do not display the "next" button
    if (counter < (quizBank.length - 1)) {
        buttonHolder.appendChild(questionButton);
        questionButton.innerText = 'Next'; 
    } 
    //else remove the next button
    else {
        buttonHolder.removeChild(questionButton);
        let elScore = document.getElementById('score');
        elScore.innerHTML = "Score: " + correctAnswerChosen + " / " + (correctAnswerChosen + incorrectAnswerChosen);
    }

    scrollToBottom();
}

let clicked = function(e) {
    quizBank[index].userResponse = e.target.innerHTML; 
    responseCheck();
    removeEventFunc();
}

let nextClicked = function (e) {
    if (quizBank[index].userResponse){
        counter++;

        questionPopulate();
        answerChoices();
        answerEventFunc();
        scrollToBottom();
    }
}

//==============FIRING EVENTS + EXECUTION===============
// creating an code to run when the event click is fired in my HTML
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

// attach event listeners to topics
elTopic1.addEventListener('click', topicChoice1);
elTopic2.addEventListener('click', topicChoice2);
elTopic3.addEventListener('click', topicChoice3);
elTopic4.addEventListener('click', topicChoice4);
elTopic5.addEventListener('click', topicChoice5);
elSubmitTopic.addEventListener('click', topicSubmit);

if (quizBank.length != 0){
    questionPopulate();
    answerChoices();
    answerEventFunc();
}