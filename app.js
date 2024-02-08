let listaNumerosSorteados = [];
let numeroSecreto = 0;
let intentos = 1;
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', 'Acertaste el número en ' + intentos + ((intentos === 1) ? ' vez' : ' veces'));
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p' , 'Ya se sortearon todos los números posibles');
    } else {
            if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesInicialesciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', 'Indica un número del 1 al ' + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesInicialesciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesInicialesciales();