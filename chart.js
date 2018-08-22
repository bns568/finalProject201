// create a chart within the canvas element
Topics = JSON.parse(localStorage.getItem("Topics"))
console.log(Topics)

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Functions", "Loops", "Objects", "The DOM", "Local Storage"],
        datasets: [{
            label: "Answers Correct", 
            backgroundColor: 'red',
            borderColor: 'red',
            data: [Topics.functionsCorrect, Topics.loopsCorrect, Topics.objectsCorrect, Topics.DOMCorrect, Topics.localStorageCorrect],
        } ,
            {
            label: "Questions Asked",
            backgroundColor: 'blue',
            borderColor: 'blue',
            data: [Topics.functionsTotal, Topics.loopsTotal, Topics.objectsTotal, Topics.DOMTotal, Topics.localStorageTotal],
        }]
    },
// wanted to add in options so a title would be displayed
    options: {
        display: true, 
        fontSize: 18,
        text: "Quiz Results: Answers Correct + Questions Asked",
        fontStyle: 'bold',
        fontFamily: "'monospace'",
        fontColor: 'rgb(4, 8, 245)',
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
})

//create event handler for clear all data button (clears local storage)
let clearAllHandler = function(e) {
    localStorage.clear();
    location.reload();
}

let elClearAll = document.getElementById('clearAll');
elClearAll.addEventListener('click', clearAllHandler); 