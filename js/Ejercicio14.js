/*Escribe una función que devuelva el carácter en una posición específica de una
cadena usando charAt().
Ejemplo: "JavaScript", 0 → "J" */

const obtenerCaracter = () => {
    let cadena = prompt("Introduce una cadena:"); 
    let posicion = parseInt(prompt("Introduce la posición del carácter que quieres obtener (empezando desde 0):"));
    if (posicion >= 0 && posicion < cadena.length) {
        let caracter = cadena.charAt(posicion);
        return caracter; 
    } else {
        return "Posición inválida"; 
    }
};

let resultadoCaracter = obtenerCaracter();
console.log("El carácter en la posición especificada es:", resultadoCaracter);
