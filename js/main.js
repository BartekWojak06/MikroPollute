
const warningCloseBtn = document.querySelector('.warning-close-btn')
const warningModal = document.querySelector('.warning-modal')



warningCloseBtn.addEventListener('click', () => {
    warningModal.classList.remove('active')
})