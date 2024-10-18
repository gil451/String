/*Escribe una función que encuentre la palabra más larga en una cadena.
Ejemplo: "Aprender JavaScript es emocionante" → "emocionante" */

function encontrarPalabraMasLarga() {
    var cadena = prompt("Introduce una cadena de texto:");
    var palabras = cadena.split(" ");
    var palabraMasLarga = ""; 
    
    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra; 
        }
    }
    
    console.log("Cadena ingresada: " + cadena);
    console.log("La palabra más larga es: " + palabraMasLarga);
}

encontrarPalabraMasLarga();
