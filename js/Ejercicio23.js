/*Crea una función que trunque una cadena a un número específico de caracteres,
agregando ... al final si es más larga.
Ejemplo: "JavaScript es genial", 10 → "JavaScri..." */

function truncarCadena() {
    var cadena = prompt("Introduce una cadena de texto:");
    var longitudMaxima = parseInt(prompt("¿Cuántos caracteres quieres que tenga?"));
    
    if (cadena.length > longitudMaxima) {
        var cadenaTruncada = cadena.slice(0, longitudMaxima) + "...";
    } else {
        var cadenaTruncada = cadena;
    }
    
    console.log("Cadena truncada: " + cadenaTruncada);
}

truncarCadena();
