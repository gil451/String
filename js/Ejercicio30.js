/*Escribe una función que cuente la frecuencia de cada carácter en una cadena y
devuelva un objeto con los resultados.
Ejemplo: "abbccc" → {a: 1, b: 2, c: 3} */

function contarFrecuencia() {
    var cadena = prompt("Introduce una cadena:");
    var frecuencia = {};

    for (var i = 0; i < cadena.length; i++) {
        var caracter = cadena[i];
        if (frecuencia[caracter]) {
            frecuencia[caracter] += 1;
        } else {
            frecuencia[caracter] = 1;
        }
    }

    console.log("Frecuencia de caracteres:", frecuencia);
}

contarFrecuencia();
