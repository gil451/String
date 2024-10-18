/*Crea una función que devuelva el último carácter de una cadena sin usar length.
Ejemplo: "Hola" → "a" */

const obtenerUltimoCaracter = (cadena) => {
    let ultimoCaracter = ""; 
    for (let i = 0; ; i++) {
        if (cadena.charAt(i) === "") {
            ultimoCaracter = cadena.charAt(i - 1);
            break; 
        }
    }
    return ultimoCaracter;
};
let cadena = prompt("Introduce una cadena:");
let resultado = obtenerUltimoCaracter(cadena);
console.log("El último carácter de la cadena es:", resultado);
