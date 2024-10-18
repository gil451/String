/*Crea una función que reciba dos cadenas y las concatene usando concat() o +.
Ejemplo: "Hola", "mundo" → "Hola mundo" */

function concatenarCadenas(cadena1, cadena2) {
    let resultado = cadena1.concat(" ", cadena2);
    return resultado;
}

let cadena1 = prompt("Introduce la primera cadena:");
let cadena2 = prompt("Introduce la segunda cadena:");
let resultadoFinal = concatenarCadenas(cadena1, cadena2);
console.log("Resultado de la concatenación:", resultadoFinal);
