var questions = [
    {
        question: "What does CSS stand for?",
        options: ["Computing Style Sheet", "Creative Style Sheet", "Cascading Style Sheet", "Creative Styling Sheet"],
        answer: "Cascading Style Sheet"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "How to print a page using JavaScript?",
        options: ["window.print()", "browser.print()", "navigator.print()", "document.print()"],
        answer: "window.print()"
    },
    {
        question: "Which language runs on a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "How do you declare a JavaScript variable?",
        options: ["variable carName;", "var carName;", "v carName;", "none of these"],
        answer: "var carName;"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        options: ["call myFunction()", "myFunction()", "call function myFunction()"],
        answer: "myFunction()"
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        options: ['alert("Hello World")', 'alertBox("helloWorld")', 'msg("Hello World")', 'msgBox("Hello World")'],
        answer: 'alert("Hello World")'
    },
    {
        question: "What is the most used programming language in 2021?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "When was JavaScript developed?",
        options: ["1990", "1995", "1999", "1892"],
        answer: "1995"
    },
    {
        question: "Which of the following is not a CSS Box model property?",
        options: ["margin", "padding", "border-radius", "border-collapse"],
        answer: "border-collapse"
    }
];

var currentQuestionIndex = 0;
var score = 0;
var timer;
var count = 60;
var c1 = 0;
var w1 = 0;

function startTimer() {
    timer = setInterval(() => {
        count--;
        document.getElementById('timer').innerText = `Time Left: ${count}`;
        if (count <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    count = 60;
    document.getElementById('timer').innerText = `Time Left: ${count}`;
    startTimer();
}

function showQuestion() {
    var question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    var optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear previous options

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    resetTimer();
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        c1++;
        document.getElementById('correct').innerText = `Correct: ${c1}`;
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
    } else {
        w1++;
        document.getElementById('wrong').innerText = `Wrong: ${w1}`;
    }
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById('total').innerText = `Total Questions: ${currentQuestionIndex}`;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('next-btn').disabled = true;
        if (currentQuestionIndex >= questions.length) {
            document.getElementById('next-btn').innerText = "Finish";
        }
    } else {
        document.getElementById('question').innerText = 'Quiz completed!';
        document.getElementById('options-container').innerHTML = '';
        document.getElementById('timer').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
        var totalScore = c1 - w1 * 0.5;
        document.getElementById('tscore').innerText = `Total Score: ${totalScore}`;
    }
}

// Initialize the quiz
document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
    startTimer();
});
