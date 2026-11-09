// TALLER 5: Calculadora con selector.

let formulario = document.getElementById("formTaller5");
let resultado = document.getElementById("resultado");

// Función con nombre que se ejecuta al enviar el formulario.
formulario.addEventListener("submit", calcular);

function mostrarError(mensaje) {
    resultado.className = "mensaje error";
    resultado.textContent = mensaje;
}

function calcular(event) {

    event.preventDefault();

    let textoPrimero = document.getElementById("primero").value;
    let textoSegundo = document.getElementById("segundo").value;
    let operacion = document.getElementById("operacion").value;

    // Validar que ninguno de los dos números esté vacío.
    if (textoPrimero.trim() === "" || textoSegundo.trim() === "") {
        mostrarError("Escribe los dos números.");
        return;
    }

    // Validar que se haya elegido una operación.
    if (operacion === "") {
        mostrarError("Selecciona una operación.");
        return;
    }

    let primero = parseFloat(textoPrimero);
    let segundo = parseFloat(textoSegundo);

    // Si es división, el segundo número no puede ser cero.
    if (operacion === "division" && segundo === 0) {
        mostrarError("No es posible dividir entre cero.");
        return;
    }

    // Elegimos la operación con switch.
    let texto;
    switch (operacion) {
        case "suma":
            texto = `${primero} + ${segundo} = ${primero + segundo}`;
            break;
        case "resta":
            texto = `${primero} - ${segundo} = ${primero - segundo}`;
            break;
        case "multiplicacion":
            texto = `${primero} × ${segundo} = ${primero * segundo}`;
            break;
        case "division":
            texto = `${primero} ÷ ${segundo} = ${primero / segundo}`;
            break;
    }

    resultado.className = "mensaje exito";
    resultado.textContent = texto;
}

formulario.addEventListener("reset", function () {
    resultado.className = "mensaje";
    resultado.textContent = "";
});
