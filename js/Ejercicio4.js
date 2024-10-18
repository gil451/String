/*Crea una función que verifique si una palabra específica está contenida dentro de
una cadena usando includes().
Ejemplo: "JavaScript es genial", "genial" → true */

function verificar(cadena, palabra) {
    return cadena.includes(palabra);
}

const cadena = prompt("Por favor, introduce una cadena:");
const palabra = prompt("¿Qué palabra deseas buscar en la cadena?");
const resultado = verificar(cadena, palabra);


console.log(resultado); 

