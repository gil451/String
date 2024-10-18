/*Escribe una función que convierta una cadena a minúsculas utilizando
toLowerCase().
Ejemplo: "MUNDO" → "mundo"*/

function convertirMinusculas(cadena) {
    return cadena.toLowerCase();
}

let texto = prompt("Por favor, introduce una palabra:");
let resultado = convertirMinusculas(texto);
console.log(`La palabra en minusculas es: ${resultado}`);

  