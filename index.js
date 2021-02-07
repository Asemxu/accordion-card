import preguntas from './questions.js';


function Estructura(question){
    return  `<div class="question__container">
                 <div class="question_fixed">
                     <div class="question">
                        ${question.pregunta}
                        <img src="/images/icon-arrow-down.svg" alt="arrow">
                     </div>
                     <div class="answer">
                        ${question.respuesta}
                     </div>
                 </div>
                 <hr>
             </div>`
}

function loadQuestions (){
    let faq_container_questions = document.querySelector('.faq__container-questions');
    preguntas.forEach(pregunta => {;
        let newPregunta = {pregunta:pregunta.question,respuesta:pregunta.answer};
        faq_container_questions.innerHTML = faq_container_questions.innerHTML + Estructura(newPregunta);
        
        let isOpen = false;
        let questions_container = document.querySelectorAll('.question__container');

        questions_container.forEach(question_container => {
            question_container.addEventListener('click' ,() =>{
                let arrow_question = question_container.childNodes[1].childNodes[1].childNodes[1];
                let question_title = question_container.childNodes[1].childNodes[1];
                let question_fixed = question_container.childNodes[1];
                if(!isOpen){
                    question_title.classList.add('active_question');
                    arrow_question.classList.add('active');
                    question_container.classList.add('open_question');
                    question_fixed.classList.add('question_fixed_active');
                    isOpen = true;
                }else{
                    arrow_question.classList.remove('active');
                    question_title.classList.remove('active_question');
                    question_container.classList.remove('open_question'); 
                    question_fixed.classList.remove('question_fixed_active');
                    isOpen = false;
                }
            })
        });
    });
}

loadQuestions();


setInterval(() => {
    let width = window.innerWidth;
    let imageMobileDesktop = document.getElementById('img_desktop_mobile');
    let imgDesktopFixed = document.querySelector('.img__desktop-fixed');
    if(width <= 375){
        imgDesktopFixed.classList.add('center-flex');
        imageMobileDesktop.classList.remove('img__desktop');
        imageMobileDesktop.classList.add('img__mobile');
        imageMobileDesktop.setAttribute('src','images/bg-pattern-mobile.svg');
    }else{
        imgDesktopFixed.classList.remove('center-flex');
        imageMobileDesktop.classList.add('img__desktop');
        imageMobileDesktop.classList.remove('img__mobile');
        imageMobileDesktop.setAttribute('src','images/bg-pattern-desktop.svg');
    }
}, 300);