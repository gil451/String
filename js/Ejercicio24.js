/*Escribe una función que verifique si una cadena contiene solo números.
Ejemplo: "12345" → true */

function verificarSoloNumeros() {
    var cadena = prompt("Introduce una cadena:");
    var soloNumeros = true;
    
    for (var i = 0; i < cadena.length; i++) {
        var caracter = cadena.charAt(i);
        
        if (caracter < '0' || caracter > '9') {
            soloNumeros = false;
            break;
        }
    }
    
    console.log("La cadena contiene solo números: " + soloNumeros);
}

verificarSoloNumeros();
