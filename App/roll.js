const closeBTN = document.querySelector('.roll_icons');
const ratesBlock = document.querySelector('.exchange__rates');
const converterBlock = document.querySelector('.currency__converter');
const icons = document.querySelectorAll('.head i');

closeBTN.addEventListener('click', () => {
    ratesBlock.classList.toggle('closed');
    converterBlock.classList.toggle('closed');
    icons.forEach(icone => {
        icone.classList.toggle('closed')
    })
})