
const modalEl = document.getElementById('modal')
const modalCloseBtnEl = document.getElementById('modal-close-btn')
const formEl = document.getElementById('form-el')
const modalTextEl = document.getElementById('modal-text')
const modalInnerEl = document.getElementById('modal-inner')
const declineBtnEl = document.getElementById('decline-btn')
const modalChoiceBtn = document.getElementById('modal-choice-btn')

formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    const loginForm = new FormData(formEl)
    const name = loginForm.get('fullName')

    modalTextEl.innerHTML =
        `
        <img src="loading.svg">
        <p id="upload-text">Uploading your data to the dark web</p>

    `
    setTimeout(function () {
        document.getElementById('upload-text').innerHTML = 'Selling your data'
    }, 1500)

    setTimeout(function () {
        modalInnerEl.innerHTML = `<h1><span>${name}, </span> you're hacked!</h1>`
    }, 3000)

    modalCloseBtnEl.disabled = false
})

declineBtnEl.addEventListener('mouseenter', function() {
    modalChoiceBtn.classList.toggle('reverse')

})

setTimeout(function () {
    modalEl.style.display = 'inline'
}, 3000)

modalCloseBtnEl.addEventListener('click', function () {
    modalEl.style.display = 'none'
})

