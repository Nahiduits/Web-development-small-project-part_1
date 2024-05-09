const quizData = [
    {
        question: "What does HTML stand for?",
        options:[
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language",
        ],
        correct : 0,
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options : ["margin","padding","spacing","border-spacing"],
        correct: 1,
    },
    {
        question: "What is the Javascript function used to select an HTML element by its id?",
        options:[
            "document.query",
            "getElementById",
            "selectElement",
            "findElementById",
        ],
        correct : 1,
    },
    {
        question: "In React.js, which hook is used to perform side effects in a function component?",
        options:["useEffect","useState","useContext","useReducer"],
        correct : 0,
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options:["<ul>","<li>","<ol>","<dl>"],
        correct : 2,
    },

];

const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");
const answerElm = document.querySelectorAll(".answer");
const[questionElm,option_1,option_2,option_3,option_4] = document.querySelectorAll(
    "#question, .option_1,.option_2,.option_3,.option_4" 
);

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;


const loadQuiz = () =>{
    const {question,options} = quizData[currentQuiz];
    questionElm.innerText = `${currentQuiz +1}:${question}`;

    questionElm.innerText = question;
    options.forEach(
     (curOption,index)=>(window[`option_${index+1}`].innerText= curOption)
     );
}

loadQuiz();

const getSelectedOption = () =>{
    let answerElement = Array.from(answerElm);
    return  answerElement.findIndex((curElem)=>curElem.checked);
}

const deselectedAnswer = () =>{
   return  answerElm.forEach((curElem)=>curElem.checked=false);
}

submitBtn.addEventListener("click",()=>{
    const selectedOptionIndex = getSelectedOption();
    if(selectedOptionIndex == quizData[currentQuiz].correct){
        score = score + 1;
    }

    currentQuiz++;

    if(currentQuiz<quizData.length){
        deselectedAnswer();
        loadQuiz();
    }else{
        quiz.innerHTML = `
        <div class = "result">
        <h2>Your score: ${score}/${quizData.length}correct Answer</h2>
        <p>Congratulations on completing the quiz!</p>
        <button class = "reload-button" onclick ="location.reload()">Play again </button>
       </div>
        `;
    }
})

























