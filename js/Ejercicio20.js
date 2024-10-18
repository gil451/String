/*Escribe una función que verifique si una cadena termina con una palabra específica
usando endsWith().
Ejemplo: "JavaScript es genial", "genial" → true */

function verificar() {
    var cadena = prompt("Introduce una cadena de texto:");
    var palabraFinal = prompt("La palabra con la que termina es:");
    var terminaCon = cadena.endsWith(palabraFinal);
    console.log("La cadena termina con '" + palabraFinal + "': " + terminaCon);
}

verificar();
