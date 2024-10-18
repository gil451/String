/*Escribe una función que reciba una cadena de texto y devuelva su longitud.
Ejemplo: "Hola" → 4 */

function Longitud(cadena) {
    return cadena.length;
}

const texto = prompt("Por favor, introduce una palabra:");
console.log(`La longitud de "${texto}" es: ${Longitud(texto)}`);
