// EJERCICIO 4: Uso de una función con nombre y el evento submit del formulario.

// Seleccionamos el formulario y le asignamos el evento submit con la función dividir.
let formularioDividir = document.getElementById("formularioDividir");
formularioDividir.addEventListener("submit", dividir);

function dividir(event) {

    // Evitamos que el formulario se envíe y la página se recargue.
    event.preventDefault();

    let valor1 = parseFloat(document.getElementById("num1").value);
    let valor2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Escribe los dos números.");
        return;

    } else if (valor2 === 0) {
        // No se puede dividir entre cero.
        alert("No es posible dividir entre cero.");
        return;

    } else {
        let resultado = valor1 / valor2;
        alert(`División: ${resultado}`);
    }
}
