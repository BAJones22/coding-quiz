//start section
let start = document.querySelector("#start");

//quiz rules section
let rules = document.querySelector("#rules");
let continueBtn = document.querySelector("#continue");

//quiz section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//question section
let questionNo = document.querySelector("#questionNo");

//question answers section
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct and next button
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

//result section
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let initials = document.querySelector("#initials");

//get all 'H4' from quiz section
let choice_que = document.querySelectorAll(".choice_que");


let index = 0;
let timer = 0;
let interval = 0;

//total points

let correct = 0;

//store Answer Value
let UserAns = undefined;

//click start button function
start.addEventListener("click" , ()=>{
    start.style.display = "none";
    rules.style.display = "block";
});

//quiz timer
let countDown = ()=>{
    if(timer === 60)
    {
        clearInterval(interval);
        next_question.click();
    }
    else
        {
        timer++;
        time.innerText = timer;
        }
}

//setInterval(countDown, 1000);

let MCQS = [{
    question: "Commonly used data types do NOT include:",
choice1: "<strings>",
choice2: "<booleans>",
choice3: "<alerts>",
choice4: "<numbers>",
answer: 2
},


{
    question: "The condition in an if/else statement is enclosed with:",
choice1: "<quotes>",
choice2: "<curly brackets>",
choice3: "<parenthesis>",
choice4: "<square brackets>",
answer: 2
},

{
    question: "Arrays in JavaScript can be used to store:",
choice1: "<numbers and strings>",
choice2: "<other arrays>",
choice3: "<booleans>",
choice4: "<all of the above>",
answer: 3
},

{
    question: "When being assigned to variables, string values must be enclosed within:",
choice1: "<commas>",
choice2: "<curly brackets>",
choice3: "<quotes>",
choice4: "<parenthesis>",
answer: 2
},

{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
choice1: "<JavaScript>",
choice2: "<terminal/bash>",
choice3: "<for loops>",
choice4: "<console.log>",
answer: 2
}]




let loadData = ()=>{
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;

    //timer start
    timer = 0;
}

loadData();

//click continue button function
continueBtn.addEventListener("click" , ()=>{
    quiz.style.display = "block";
    rules.style.display = "none";

    interval = setInterval(countDown, 1000);
    loadData();

    choice_que.forEach(removeActive =>{
        removeActive.classList.remove("active");
    })
});

choice_que.forEach( (choices, choiceNo) =>{
    choices.addEventListener("click" , ()=>{
        choices.classList.add("active");
        //check answer
        if(choiceNo === MCQS[index].answer)
        {
            correct++;
        }
        else
            {
                correct += 0;
            }
        clearInterval(interval);

        for(i=0; i <= 3; i++)
        {
            choice_que[i].classList.add("disabled");
        }
    })
});

//click next button function
next_question.addEventListener("click", () => {
    if (index !== MCQS.length - 1) {
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        })

        loadData();

        clearInterval(interval);
    }
    else
    {
        index = 0;
    }
    for(i=0; i <= 3; i++)
    {
        choice_que[i].classList.remove("disabled");
    }
})