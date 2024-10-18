/*Escribe una función que determine si una palabra es un palíndromo (se lee igual al
revés).
Ejemplo: "ana" → true */

function esPalindromo(palabra) {

    var palabraMinuscula = palabra.toLowerCase();

    var palabraInvertida = "";

    for (var i = palabraMinuscula.length - 1; i >= 0; i--) {
        palabraInvertida += palabraMinuscula[i];
    }

    if (palabraMinuscula === palabraInvertida) {
        return true; 
    } else {
        return false; 
    }
}

var palabra = prompt("Introduce una palabra:");
if (esPalindromo(palabra)) {
    console.log(palabra + " es un palíndromo.");
} else {
    console.log(palabra + " no es un palíndromo.");
}
