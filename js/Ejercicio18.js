/*Escribe una función que elimine todas las vocales de una cadena.
Ejemplo: "javascript" → "jvscrpt" */

function EliminarVocales() {
    var cadena = prompt("Introduce una cadena de texto:");
    var nuevaCadena = "";
    for (var i = 0; i < cadena.length; i++) {
        var caracter = cadena.charAt(i);
        if (caracter != 'a' && caracter != 'e' && caracter != 'i' && 
            caracter != 'o' && caracter != 'u' &&
            caracter != 'A' && caracter != 'E' && caracter != 'I' && 
            caracter != 'O' && caracter != 'U') {
            nuevaCadena += caracter; 
        }
    }
    console.log("La cadena original es: " + cadena);
    console.log("Cadena sin vocales: " + nuevaCadena);
}
EliminarVocales();

