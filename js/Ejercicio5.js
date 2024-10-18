/*Escribe una función que reemplace una palabra específica en una cadena con otra
palabra usando replace().
Ejemplo: "Hola mundo", "mundo", "amigo" → "Hola amigo" */

function reemplace(cadena, palabra, nuevaPalabra) {
    return cadena.replace(new RegExp(palabra, 'g'), nuevaPalabra);
}


const textoOriginal = prompt("Introduce la cadena de texto:");
const palabraABuscar = prompt("Introduce la palabra que deseas cambiar:");
const nuevaPalabra = prompt("Introduce la nueva palabra:");

const textoModificado = reemplace(textoOriginal, palabraABuscar, nuevaPalabra);

console.log("Texto original:", textoOriginal);
console.log("Texto modificado:", textoModificado);
