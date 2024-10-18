/*Crea una función que elimine las letras consecutivas repetidas en una cadena.
Ejemplo: "aabbccdde" → "abcde" */

function eliminarRepetidos() {
    var cadena = prompt("Introduce una cadena:");
    var resultado = "";

    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i] !== cadena[i - 1]) {
            resultado += cadena[i];
        }
    }
    console.log("Cadena original: " + cadena);
    console.log("Cadena sin letras repetidas: " + resultado);
}

eliminarRepetidos();
