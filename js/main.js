
const warningCloseBtn = document.querySelector('.warning-close-btn')
const warningModal = document.querySelector('.warning-modal')
const checkAnswersBtn = document.querySelector('.quiz-section__btn')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.closeModal')

const form = document.querySelector('.quiz-section__box')
const allAnswers = Array.from(document.querySelectorAll('.quiz-section__input'))
const allQuestions = document.querySelectorAll('.quiz-section__question')
const scoreInfo = document.querySelector('.score-info__score')





warningCloseBtn.addEventListener('click', () => {
    warningModal.classList.remove('active')
    overlay.classList.remove('active')
})

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active')
    overlay.classList.remove('active')
})

const handleQuiz = (e) => {
    e.preventDefault()

    const checkedAnswers = allAnswers.filter(answer => answer.checked)
     
    const pointsSummary = checkedAnswers.map(answer => parseInt(answer.getAttribute('value'))).reduce((acc, curr) => acc + curr, 0)

    const allChecked = checkedAnswers.length === allQuestions.length

    if(allChecked === false) {
        warningModal.classList.add('active')
        overlay.classList.add('active')
    }

    if(allChecked) {
        modal.classList.add('active')
        overlay.classList.add('active')
        scoreInfo.innerText = `${pointsSummary * 10} %`

    }


}




form.addEventListener('submit', handleQuiz)

// QUIZ-TWO SECTION=================

const warningCloseBtn1 = document.querySelector('.warning-close-btn1')
const warningModal1 = document.querySelector('.warning-modal1')
const checkAnswersBtn1 = document.querySelector('.quiz-section1__btn')
const modal1 = document.querySelector('.modal1')
const closeModalBtn1 = document.querySelector('.closeModal1')

const form1 = document.querySelector('.quiz-section1__box')
const allAnswers1 = Array.from(document.querySelectorAll('.quiz-section1__input'))
const allQuestions1 = document.querySelectorAll('.quiz-section1__question')
const scoreInfo1 = document.querySelector('.score-info1__score')

console.log(allAnswers1, allQuestions1)



warningCloseBtn1.addEventListener('click', () => {
    warningModal1.classList.remove('active')
    overlay.classList.remove('active')
})

closeModalBtn1.addEventListener('click', () => {
    modal1.classList.remove('active')
    overlay.classList.remove('active')
})

const handleQuiz1 = (e) => {
    e.preventDefault()

    const checkedAnswers1 = allAnswers1.filter(answer => answer.checked)
     
    const pointsSummary1 = checkedAnswers1.map(answer => parseInt(answer.getAttribute('value'))).reduce((acc, curr) => acc + curr, 0)

    const allChecked1 = checkedAnswers1.length === allQuestions1.length

    if(allChecked1 === false) {
        warningModal1.classList.add('active')
        overlay.classList.add('active')
    }

    if(allChecked1) {
        modal1.classList.add('active')
        overlay.classList.add('active')
        scoreInfo1.innerText = `${pointsSummary1 * 10} %`

    }


}




form1.addEventListener('submit', handleQuiz1)

