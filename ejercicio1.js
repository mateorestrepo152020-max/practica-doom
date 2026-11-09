
document.getElementById("botonSumar").addEventListener("click", function (event) {

    event.preventDefault();

    
    let valor1 = parseFloat(document.getElementById("n1").value);
    let valor2 = parseFloat(document.getElementById("n2").value);

    
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
