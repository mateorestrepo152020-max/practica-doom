// EJERCICIO 1: Uso de una función anónima y el evento click.

// Seleccionamos el botón mediante su id y utilizamos
// addEventListener() para ejecutar una función cuando se haga clic.
document.getElementById("botonSumar").addEventListener("click", function (event) {

    // Evitamos el comportamiento predeterminado del formulario,
    // como enviar los datos y recargar la página.
    event.preventDefault();

    // Obtenemos los valores ingresados por el usuario en los campos n1 y n2.
    // Un input siempre entrega su valor como texto, aunque sea de tipo "number".
    // Usamos parseFloat() para convertirlo en número: a diferencia de parseInt(),
    // no recorta los decimales (parseFloat("2.5") da 2.5, parseInt("2.5") daría 2).
    let valor1 = parseFloat(document.getElementById("n1").value);
    let valor2 = parseFloat(document.getElementById("n2").value);

    // Verificamos si alguno de los valores ingresados no es un número válido.
    // isNaN() devuelve true cuando el resultado de la conversión no es un número;
    // esto también detecta un campo vacío, porque parseFloat("") da NaN.
    if (isNaN(valor1) || isNaN(valor2)) {

        // Mostramos un mensaje para solicitar que se ingresen los dos números.
        alert("Escribe los dos números.");

        // Detenemos la ejecución de la función para evitar continuar.
        return;

    } else {

        // Sumamos los dos valores y mostramos el resultado en una ventana emergente.
        alert(`Suma: ${valor1 + valor2}`);
    }
});
