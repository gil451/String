/*Crea una función que repita una cadena un número específico de veces usando
repeat().
Ejemplo: "Ho", 3 → "HoHoHo" */

function repetirCadena() {
    let cadena = prompt("Introduce la cadena que deseas repetir:");
    let repeticiones = prompt("Introduce el número de veces que deseas repetir la cadena:");
    repeticiones = parseInt(repeticiones);

    if (isNaN(repeticiones) || repeticiones < 0) {
        console.log("Por favor, introduce un número válido de repeticiones.");
        return;
    }

    let resultado = (cadena + "\n").repeat(repeticiones); 

    console.log("Resultado:");
    console.log(resultado);
}

repetirCadena();

