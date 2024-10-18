/*Crea una función que convierta una cadena de texto en mayúsculas usando el
método toUpperCase().
Ejemplo: "Hola" → "HOLA" */

function convertirMayusculas(cadena) {
    return cadena.toUpperCase();
}

const texto = prompt("Por favor, introduce una palabra:");
const resultado = convertirMayusculas(texto);
console.log(`La palabra en mayúsculas es: ${resultado}`);
