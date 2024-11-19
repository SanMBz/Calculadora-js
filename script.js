function resultado(resultado) {
    document.getElementById("respuesta").value = resultado;
}

function suma() {
    let numero1 = +document.getElementById("numero1").value;
    let numero2 = +document.getElementById("numero2").value;
    resultado(numero1 + numero2)
}

function resta() {
    let numero1 = +document.getElementById("numero1").value;
    let numero2 = +document.getElementById("numero2").value;
    resultado(numero1 - numero2)
}

function multiplicacion() {
    let numero1 = +document.getElementById("numero1").value;
    let numero2 = +document.getElementById("numero2").value;
    resultado(numero1 * numero2)
}

function division() {
    let numero1 = +document.getElementById("numero1").value;
    let numero2 = +document.getElementById("numero2").value;
    resultado(numero1 / numero2)
}

function raiz() {
    let numero2 = +document.getElementById("numero2").value;
    resultado(Math.sqrt(numero2));
}

function potencia() {
    let numero1 = +document.getElementById("numero1").value;
    let numero2 = +document.getElementById("numero2").value;
    resultado(Math.pow(numero1, numero2));
}

function absoluto() {
    let numero2 = +document.getElementById("numero2").value;
    resultado(Math.abs(numero2));
}

function random() {
    let minimo = +document.getElementById("numero1").value;
    let maximo = +document.getElementById("numero2").value;
    maximo = maximo + 1;
    resultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
}

function round() {
    let respuesta = +document.getElementById("respuesta").value;
    resultado(Math.round(respuesta));
}

function floor() {
    let respuesta = +document.getElementById("respuesta").value;
    resultado(Math.floor(respuesta));
}

function ceil() {
    let respuesta = +document.getElementById("respuesta").value;
    resultado(Math.ceil(respuesta));
}
