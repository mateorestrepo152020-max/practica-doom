// TALLER 2: Clasificar una nota.

let formulario = document.getElementById("formTaller2");
let resultado = document.getElementById("resultado");

// Función con nombre que se ejecuta al enviar el formulario.
formulario.addEventListener("submit", clasificarNota);

function clasificarNota(event) {

    event.preventDefault();

    let texto = document.getElementById("nota").value;

    // Validar que el campo no esté vacío.
    if (texto.trim() === "") {
        resultado.className = "mensaje error";
        resultado.textContent = "Escribe la nota.";
        return;
    }

    let nota = parseFloat(texto);

    // Validar que la nota esté entre 0 y 5.
    if (isNaN(nota) || nota < 0 || nota > 5) {
        resultado.className = "mensaje error";
        resultado.textContent = "La nota debe estar entre 0.0 y 5.0.";
        return;
    }

    // Clasificar según la tabla.
    let desempeno;
    let estado;

    if (nota >= 4.5) {
        desempeno = "Excelente";
        estado = "Aprobado";
    } else if (nota >= 4.0) {
        desempeno = "Bueno";
        estado = "Aprobado";
    } else if (nota >= 3.0) {
        desempeno = "Aceptable";
        estado = "Aprobado";
    } else {
        desempeno = "Insuficiente";
        estado = "No aprobado";
    }

    resultado.className = "mensaje exito";
    resultado.textContent = `Nota ${nota}: ${desempeno}. ${estado}.`;
}

formulario.addEventListener("reset", function () {
    resultado.className = "mensaje";
    resultado.textContent = "";
});
