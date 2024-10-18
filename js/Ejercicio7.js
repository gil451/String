/*Crea una función que elimine los espacios en blanco de los extremos de una cadena
usando trim().
Ejemplo: " Hola mundo " → "Hola mundo" */

function eliminarEspaciosExtremos(cadena) {
    return cadena.trim();
}

const texto = prompt("Introduce una cadena con espacios en blanco en los extremos:");

const resultado = eliminarEspaciosExtremos(texto);
console.log(`Cadena original: "${texto}"`);
console.log(`Cadena sin espacios en blanco: "${resultado}"`);
