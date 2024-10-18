/*Crea una función que elimine todos los caracteres especiales (como @, #, !) de una
cadena.
Ejemplo: "Hola@mundo!" → "Holamundo" */

function eliminarCaracteresEspeciales() {
    var cadena = prompt("Introduce una cadena de texto:");
    var cadenaLimpia = ""; 
    
    for (var i = 0; i < cadena.length; i++) {
        var caracter = cadena.charAt(i);
        
        if ((caracter >= 'a' && caracter <= 'z') || 
            (caracter >= 'A' && caracter <= 'Z') || 
            (caracter >= '0' && caracter <= '9')) {
            cadenaLimpia += caracter; 
        }
    }
    
    console.log("Cadena sin caracteres especiales: " + cadenaLimpia);
}

eliminarCaracteresEspeciales();
