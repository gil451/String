/*Crea una función que tome una cadena y la devuelva invertida.
Ejemplo: "Hola" → "aloH" */


function invertirCadena() {
    const cadena = prompt("Por favor, introduce una cadena:");
    const cadenaInvertida = cadena.split('').reverse().join('');
    return cadenaInvertida;
}

const resultado = invertirCadena();
console.log("Cadena invertida:", resultado);
