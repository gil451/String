/*Escribe una función que convierta la primera letra de cada palabra de una cadena a
mayúscula.
Ejemplo: "javascript es divertido" → "Javascript Es Divertido" */

function convertirPrimeraMayuscula() {
    var frase = prompt("Introduce una frase:");
    var palabras = frase.split(" ");
    var resultado = "";

    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        var primeraLetra = palabra.charAt(0).toUpperCase();
        var restoPalabra = palabra.slice(1).toLowerCase();
        
        resultado = resultado + primeraLetra + restoPalabra + " ";
    }

    console.log("Frase con primeras letras en mayúscula: " + resultado);
}

convertirPrimeraMayuscula();
