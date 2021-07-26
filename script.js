const quizQsn=[
    {
        question: "Q1: Which type of JavaScript language is ___",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "ansb"
    },
    {
        question: "Q2: Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans: "ansd"
    },
    {
        question: "Q3: In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ansb"
    },
    {
        question: "Q4:  When interpreter encounters an empty statements, what it will do:",
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Throws an error",
        d: "Ignores the statements",
        ans: "ansd"
    },
    {
        question: "Q5:  The 'function' and 'var' are known as:",
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
        ans: "ansc"
    },
    {
        question: "Q6:Which one of the following is the correct way for calling the JavaScript code?",
        a: "Preprocessor",
        b: "Triggering Event",
        c: "RMI",
        d: "Function/Method",
        ans: "ansd"
    },
    {
        question: "Q7:Which of the following type of a variable is volatile?",
        a: "Mutable variable",
        b: "Dynamic variable",
        c: "Volatile variable",
        d: "Immutable variable",
        ans: "ansa"
    },
    {
        question: "Q8: Which of the following option is used as hexadecimal literal beginning?",
        a: "00",
        b: "0x",
        c: "0X",
        d: "Both 0x and 0X",
        ans: "ansd"
    },
    {
        question: "Q9:  In the JavaScript, which one of the following is not considered as an error:",
        a: "Syntax error",
        b: "Missing of semicolons",
        c: "Division by zero",
        d: "Missing of Bracket",
        ans: "ansc"
    },
    {
        question: "Q10: Which of the following number object function returns the value of the number?",
        a: "toString()",
        b: "valueOf()",
        c: "toLocaleString()",
        d: "toPrecision()",
        ans: "ansb"
    }
];


const question= document.querySelector('.question');
const optiona= document.querySelector('#optiona');
const optionb= document.querySelector('#optionb');
const optionc= document.querySelector('#optionc');
const optiond= document.querySelector('#optiond');
const submit= document.querySelector('#submit');
const answers= document.querySelectorAll('.answer');
const resultArea= document.querySelector('#result-area');

let  qCount=0;
let score=0;

const loadQuestion = ()=> {
    const qsnlist= quizQsn[qCount];
    question.innerText= qsnlist.question;
    optiona.innerText= qsnlist.a;
    optionb.innerText= qsnlist.b;
    optionc.innerText= qsnlist.c;
    optiond.innerText= qsnlist.d;

}
loadQuestion();

const checkAns= ()=>{
    let answer;
    answers.forEach((currentAns)=>{
        if(currentAns.checked){
            answer= currentAns.id;
        }
    });
    return answer;
}

submit.addEventListener('click',()=>{
    const showAns= checkAns();
    console.log(showAns);

    if(showAns===quizQsn[qCount].ans){
        score++;
    };
    qCount++;
    deselectAll();

    if(qCount<quizQsn.length){
        loadQuestion();
    }
    else{
        resultArea.innerHTML=`<h3>Your Score: ${score}/${quizQsn.length}</h3>
        <button class="showBtn" onclick="location.reload()">Play Again</button>`;
        resultArea.classList.remove('result-area');
    }
});

const deselectAll=()=>{
    answers.forEach((currentAns)=>{
        currentAns.checked=false;
    })
}