const startBtn = document.querySelector('.start-btn');
const pop= document.querySelector('.pop-inf');
const exitBtn = document.querySelector('.exit');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue');
const quizSection= document.querySelector('.quiz-section');
const quizBox= document.querySelector('.quiz-box');
const resultBox= document.querySelector('.resultat-box');
const tryAgain= document.querySelector('.try-btn');
const goHome= document.querySelector('.goHome');



   startBtn.onclick = () => {
    pop.classList.add('active');
    main.classList.add('active')
}
exitBtn.onclick = () => {
    pop.classList.remove('active');
    main.classList.remove('active');
}
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    pop.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
}
tryAgain.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    

    questionCount = 0;
    questionNumb = 1;
    userScore =0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();

}
goHome.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    

    questionCount = 0;
    questionNumb = 1;
    userScore =0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();

}

let questionCount = 0;
let questionNumb = 1;
let userScore =0;
const nextBtn = document.querySelector('.next-btn');
nextBtn.onclick = () => {
    if (questionCount < questions.length -1){
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');

    }
    else {
        showResultBox();
    }
    
}
const optionList = document.querySelector('.option-list');
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `
    <div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;
    const option = document.querySelectorAll('.option');
    for (let i =0 ; i < option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    var correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
if( userAnswer == correctAnswer)
    {
        console.log('answer is correct');
        answer.classList.add('correct');
        userScore+= 1;
        headerScore();
       
    }
    else {
        answer.classList.add('incorrect');
        for (let i=0; i < allOptions; i++){
            if (optionList.children[i].textContent == correctAnswer){
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }
    for (let i=0; i<allOptions; i++){
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.classList.add('active');
}
function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}
function headerScore(){
    const headerScoreText= document.querySelector('.header-score');
    headerScoreText.textContent= `Score: ${userScore} / ${questions.length}`;
}
function showResultBox(){
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
    const scoreText = document.querySelector('.score-text');
    scoreText.textContent =`Your Score ${userScore} out of ${questions.length}`;
    const circuleProgress =document.querySelector('.circular-prog');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue =-1;
    let progressEndtValue = (userScore / questions.length) *100;
    let speed =20;
     
    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circuleProgress.style.background =`conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255 , .1) 0deg)`;
        if (progressStartValue == progressEndtValue){
            clearInterval(progress);
        }
    }, speed);


}