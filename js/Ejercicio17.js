/*Crea una función que cuente cuántas palabras hay en una cadena usando split() y
length.
Ejemplo: "Aprender JavaScript es divertido" → 4 */

function contar() {
    var cadena = prompt("Introduce una cadena de texto:");
    var palabras = cadena.split(" ");
    var cantidadPalabras = palabras.length;
    console.log("Texto introducido: " + cadena);
    console.log("La cantidad de palabras es: " + cantidadPalabras);
}
contar();
