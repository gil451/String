/*Escribe una función que convierta una frase a formato camelCase.
Ejemplo: "hola mundo en javascript" → "holaMundoEnJavascript" */

function convertirACamelCase() {
    var frase = prompt("Introduce una frase:");
    var palabras = frase.split(" ");
    var camelCase = palabras[0];
    
    for (var i = 1; i < palabras.length; i++) {
        var palabra = palabras[i];
        camelCase += palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }
    
    console.log("Frase en camelCase: " + camelCase);
}

convertirACamelCase();
