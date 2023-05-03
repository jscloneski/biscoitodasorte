const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortune = [
    'O sucesso virá em breve, continue trabalhando duro.',
    'A sorte estará ao seu lado quando você menos esperar.',
    'Grandes conquistas exigem grandes esforços.',
    'O amor está a caminho, mantenha o coração aberto.',
    'Acredite em si mesmo e em suas habilidades.',
    'Aproveite as pequenas coisas da vida e você encontrará a felicidade.',
    'Seu espírito aventureiro o levará a lugares incríveis.',
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
]

let contadorCliques = 0;

//Eventos
btnTry.addEventListener('click', function() {
    contadorCliques++;
    if (contadorCliques === 2) {handleTryClick()};
})
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')) {
        handleTryClick()
    } else if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()}
})

//Funções
function pickFortune() {
    let allFortunes = fortune.length
    let randomNumber = Math.floor(Math.random() * allFortunes)
    screen2.querySelector('h2').innerText = `${fortune[randomNumber]}`
}

function handleTryClick () {
    toggleScreen()
    pickFortune()
}

function handleResetClick() {
    toggleScreen()
    contadorCliques = 0;
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
