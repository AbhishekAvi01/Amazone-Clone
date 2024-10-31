const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]
let question= document.querySelector('.quiz-question');
console.log(question);
console.log(question.innerText);

const option_a= document.querySelector(".text-option-a");
const option_b= document.querySelector(".text-option-b");
const option_c= document.querySelector(".text-option-c");
const option_d= document.querySelector(".text-option-d");
const answerElement= document.querySelectorAll(".answer")

console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);

console.log(option_a.innerText);
console.log(option_b.innerText);
console.log(option_c.innerText);
console.log(option_d.innerText);

let submit= document.querySelector("#submit");
let currentQuestion=0;
let score=0;

console.log(quiz[currentQuestion]);
console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion]. ans1text);
console.log(quiz[currentQuestion]. ans2text);
console.log(quiz[currentQuestion]. ans3text); 
console.log(quiz[currentQuestion]. ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;
