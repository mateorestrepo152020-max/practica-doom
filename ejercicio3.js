// EJERCICIO 3: Uso de una función anónima y el evento submit del formulario.

// Seleccionamos el formulario (no el botón) porque escuchamos su evento submit.
// El evento submit se dispara al presionar "Aceptar" o al pulsar Enter en un campo.
document.getElementById("formulario").addEventListener("submit", function (event) {

    // Evitamos que el formulario se envíe y la página se recargue.
    event.preventDefault();

    let valor1 = parseFloat(document.getElementById("num1").value);
    let valor2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Escribe los dos números.");
        return;

    } else {
        let resultado = valor1 * valor2;
        alert(`Multiplicación: ${resultado}`);
    }
});
