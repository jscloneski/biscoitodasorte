const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let contadorCliques = 0;

//Eventos
//btnTry.addEventListener('click', handleTryClick) 
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



function handleTryClick () {
    toggleScreen()
}

function handleResetClick() {
    toggleScreen()
    contadorCliques = 0;
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
