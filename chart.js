// create a chart within the canvas element
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Functions", "Loops", "Objects", "The DOM", "Local Storage"],
        datasets: [{
            label: "Answers Correct", 
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [Topics.functionsCorrect, Topics.loopsCorrect, Topics.objectsCorrect, Topics.DOMCorrect, Topics.localStorageCorrect],
        } ,
            {
            label: "Questions Asked",
            backgroundColor: 'purple',
            borderColor: 'purple',
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
    }
})