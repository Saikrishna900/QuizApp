const quizData = [
    {
        question:'HTML stands for __________',
        a: 'HyperText Markup Language',
        b: 'HyperText Machine Language',
        c: 'HyperText Marking Language',
        d: 'HighText Marking Language',
        correct:'a'
    },{
        question:'Which of the following tag is used for inserting the largest heading in HTML?',
        a: 'head',
        b: '<h1>',
        c: '<h6>',
        d: 'heading',
        correct:'b'

    },{
        question: 'In which part of the HTML metadata is contained?',
        a:'head tag',
        b:'title tag',
        c:'html tag',
        d:'body tag',
        correct:'a'

    },{
        question:'What is HTML?',
        a:'HTML describes the structure of a webpage',
        b:'HTML is the standard markup language mainly used to create web pages',
        c:'HTML consists of a set of elements that helps the browser how to view the content',
        d:'All of the mentioned',
        correct:'d'
    },{
        
        question:'Who is the father of HTML?',
        a:'Rasmus Lerdorf',
        b:'Tim Berners-Lee',
        c:'Brendan Eich',
        d:'Sergey Brin',
        correct:'b'

    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});