// TALLER 4: Formulario de registro.

let formulario = document.getElementById("formTaller4");
let resultado = document.getElementById("resultado");

// Función con nombre que se ejecuta al enviar el formulario.
formulario.addEventListener("submit", validarRegistro);

// Muestra un error en el párrafo de resultados.
function mostrarError(mensaje) {
    resultado.className = "mensaje error";
    resultado.textContent = mensaje;
}

function validarRegistro(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let textoEdad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;
    let confirmar = document.getElementById("confirmar").value;

    // Se muestra solo el primer error que se encuentre.
    if (nombre === "") {
        mostrarError("Escribe tu nombre.");
        return;
    }

    if (textoEdad.trim() === "") {
        mostrarError("Escribe tu edad.");
        return;
    }

    let edad = Number(textoEdad);
    if (!Number.isInteger(edad) || edad < 18 || edad > 100) {
        mostrarError("La edad debe ser un número entero entre 18 y 100.");
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        mostrarError("Escribe un correo válido.");
        return;
    }

    if (clave !== confirmar) {
        mostrarError("Las contraseñas no coinciden.");
        return;
    }

    // Todo es válido.
    resultado.className = "mensaje exito";
    resultado.textContent = `Registro exitoso. Bienvenido(a), ${nombre}.`;
}

formulario.addEventListener("reset", function () {
    resultado.className = "mensaje";
    resultado.textContent = "";
});
