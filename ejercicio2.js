// EJERCICIO 2: Uso de una función con nombre y el evento click.

// Seleccionamos el botón mediante su id y lo guardamos en una variable.
let botonRestar = document.getElementById("botonRestar");

// Le asignamos el evento click y la función que debe ejecutar cuando ocurra.
botonRestar.addEventListener("click", resta);

// Declaramos una función con nombre que recibe el objeto event.
// Este objeto proporciona información sobre el evento que ocurrió.
function resta(event) {

    event.preventDefault();

    // parseFloat() admite decimales (a diferencia de parseInt(), que los recorta)
    // y da NaN si el campo está vacío.
    let valor1 = parseFloat(document.getElementById("num1").value);
    let valor2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Escribe los dos números.");
        return;

    } else {
        let resultado = valor1 - valor2;
        alert(`Resta: ${resultado}`);
    }
}
