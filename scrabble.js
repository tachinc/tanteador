


let suma = 0
function init () {
    var sumaButton = document.getElementById("sumaButton");
    sumaButton.onclick = handleSumaButton;
    var puntos = document.getElementById("puntos");
    puntos.onkeypress = handleKeyPress;
    // let buscador = document.querySelector('#buscador');
    // let botonBuscar = document.querySelector('#botonBuscar');
    // botonBuscar.addEventListener('click', ()=>{
    //     buscarRAE(buscador.value)
    // })

}
// const raeClient = require('rae').create()
// async function  buscarRAE(palabra){
//     let resultado = await raeClient.search(palabra)
//     console.log(resultado)
// }

function handleKeyPress (e) {
    var sumaButton = document.getElementById("sumaButton");
    if (e.keyCode === 13) {
        sumaButton.onclick();
        return false;
    }
}
function handleSumaButton () {
    
    var puntos = document.getElementById("puntos");
    var puntosASumar = puntos.value;
    console.log(puntosASumar);
 
    let puntosASumarEnNumero = parseInt(puntosASumar, 10);
    console.log(puntosASumarEnNumero);
    suma = suma + puntosASumarEnNumero;
    console.log(suma);
    
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = "RESULTADO:  " + suma;
  }

let suma2 = 0
function init2 () {
    var sumaButton2 = document.getElementById("sumaButton2");
    sumaButton2.onclick = handleSumaButton2;
    var puntos2 = document.getElementById("puntos2");
    puntos2.onkeypress = handleKeyPress2;
}
function handleKeyPress2 (e) {
    var sumaButton2 = document.getElementById("sumaButton2");
    if (e.keyCode === 13) {
        sumaButton2.onclick();
        return false;
    }
}
function handleSumaButton2 () {
    var puntos2 = document.getElementById("puntos2");
    var puntosASumar2 = puntos2.value;
    console.log(puntosASumar2);
 
    let puntosASumarEnNumero2 = parseInt(puntosASumar2, 10);
    console.log(puntosASumarEnNumero2);
    suma2 = suma2 + puntosASumarEnNumero2;
    console.log(suma2);
    var messageArea2 = document.getElementById("messageArea2");
    messageArea2.innerHTML = "RESULTADO:  " + suma2;
    startTimer();
}
function lanzadera () {
    init();
    init2();
}
    

window.onload = lanzadera;

function refreshPage(){
    window.location.reload();
} 
/*En esta seccion hacemos el contador de tiempo*/
var timer;
function startTimer () {
    timer = setInterval(ticker, 1000);
    var tick = 0;
        function ticker () {
            console.log(tick);
            var reloj = document.getElementById("reloj");
            reloj.innerHTML = tick;
            tick++;
            
        }
 
}

function stopTimer() {
    clearInterval(timer);
    }
