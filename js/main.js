
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


// FORM SECTION==================================


const warningCloseBtnForm = document.querySelector('.form-warning-close-btn')
const warningModalForm = document.querySelector('.form-warning-modal')
const checkAnswersBtnForm = document.querySelector('.form-section__btn')
const modalForm = document.querySelector('.form-modal')
const closeModalBtnForm = document.querySelector('.form-closeModal')

const note = document.querySelector('.form-section__box')
const allAnswersForm = Array.from(document.querySelectorAll('.form-section__input'))
const allQuestionsForm = document.querySelectorAll('.form-section__question')
const scoreInfoForm = document.querySelector('.form-score-info__score')





warningCloseBtnForm.addEventListener('click', () => {
    warningModalForm.classList.remove('active')
    overlay.classList.remove('active')
})

closeModalBtnForm.addEventListener('click', () => {
    modalForm.classList.remove('active')
    overlay.classList.remove('active')
})

const handleQuizForm = (e) => {
    e.preventDefault()

    const checkedAnswersForm = allAnswersForm.filter(answer => answer.checked)
     
    const pointsSummaryForm = checkedAnswersForm.map(answer => parseInt(answer.getAttribute('value'))).reduce((acc, curr) => acc + curr, 0)
    const allCheckedForm = checkedAnswersForm.length === allQuestionsForm.length

    if(allCheckedForm === false) {
        warningModalForm.classList.add('active')
        overlay.classList.add('active')
    }

    if(allCheckedForm) {
        modalForm.classList.add('active')
        overlay.classList.add('active')
        if(pointsSummaryForm > 6 && pointsSummaryForm < 11) {
            scoreInfoForm.innerText = 'Twoje codzienne nawyki wskazują na minimalne narażenie na mikroplastik. Stosujesz zdrowe alternatywy i masz niskie ryzyko negatywnych skutków.'
        } else if(pointsSummaryForm > 10 && pointsSummaryForm < 16) {
            scoreInfoForm.innerText = 'Twoje zachowania powodują umiarkowany poziom narażenia. Małe zmiany, jak rezygnacja z wody butelkowanej lub zmiana pojemników, mogą dodatkowo obniżyć ryzyko.'
        } else if(pointsSummaryForm > 15 && pointsSummaryForm < 21) {
            scoreInfoForm.innerText = 'Twoje codzienne wybory narażają Cię na wysoki poziom mikroplastiku. Warto wprowadzić znaczące zmiany, aby ograniczyć potencjalne skutki dla zdrowia.'
        } else if(pointsSummaryForm > 20 && pointsSummaryForm < 26) {
            scoreInfoForm.innerText = 'Twoje nawyki skutkują bardzo wysoką ekspozycją. Jest to sygnał, że konieczne są zdecydowane zmiany w codziennych wyborach, aby zmniejszyć ilość mikroplastiku dostającego się do organizmu.'
        }
        
        

    }


}




note.addEventListener('submit', handleQuizForm)



// QUIZ3 SECTION ====================================

const warningCloseBtn3 = document.querySelector('.warning-close-btn3')
const warningModal3 = document.querySelector('.warning-modal3')
const checkAnswersBtn3 = document.querySelector('.quiz-section3__btn')
const modal3 = document.querySelector('.modal3')
const closeModalBtn3 = document.querySelector('.closeModal3')

const form3 = document.querySelector('.quiz-section3__box')
const allAnswers3 = Array.from(document.querySelectorAll('.quiz-section3__input'))
const allQuestions3 = document.querySelectorAll('.quiz-section3__question')
const scoreInfo3 = document.querySelector('.score-info3__score')

console.log(allAnswers3, allQuestions3)



warningCloseBtn3.addEventListener('click', () => {
    warningModal3.classList.remove('active')
    overlay.classList.remove('active')
})

closeModalBtn3.addEventListener('click', () => {
    modal3.classList.remove('active')
    overlay.classList.remove('active')
})

const handleQuiz3 = (e) => {
    e.preventDefault()

    const checkedAnswers3 = allAnswers3.filter(answer => answer.checked)
     
    const pointsSummary3 = checkedAnswers3.map(answer => parseInt(answer.getAttribute('value'))).reduce((acc, curr) => acc + curr, 0)

    const allChecked3 = checkedAnswers3.length === allQuestions3.length

    if(allChecked3 === false) {
        warningModal3.classList.add('active')
        overlay.classList.add('active')
    }

    if(allChecked3) {
        modal3.classList.add('active')
        overlay.classList.add('active')
        scoreInfo3.innerText = `${pointsSummary3 * 20} %`

    }


}

const footerYear = document.querySelector(".footer__year")

const handleYear = () => {
    const currentYear = (new Date).getFullYear()
    footerYear.innerText = currentYear
}
handleYear()

form3.addEventListener('submit', handleQuiz3)