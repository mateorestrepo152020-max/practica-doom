// TALLER 1: Par o impar.

// 1. Seleccionamos el formulario y el párrafo de resultados.
let formulario = document.getElementById("formTaller1");
let resultado = document.getElementById("resultado");

// 2. Escuchamos el envío del formulario.
formulario.addEventListener("submit", function (event) {

    // Evitamos que la página se recargue.
    event.preventDefault();

    // 3. Obtener el valor del campo.
    let texto = document.getElementById("numero").value;

    // 4. Validar. Si algo está mal: mostrar el error y usar return.
    if (texto.trim() === "") {
        resultado.className = "mensaje error";
        resultado.textContent = "Escribe un número.";
        return;
    }

    let numero = Number(texto);

    if (!Number.isInteger(numero)) {
        resultado.className = "mensaje error";
        resultado.textContent = "Escribe un número entero.";
        return;
    }

    // 5. Si todo está bien: calcular y mostrar el resultado.
    // % devuelve el residuo de la división: si es 0, el número es par.
    let tipo;
    if (numero % 2 === 0) {
        tipo = "par";
    } else {
        tipo = "impar";
    }

    resultado.className = "mensaje exito";
    resultado.textContent = `El número ${numero} es ${tipo}.`;
});

// Al pulsar "Limpiar" también se borra el mensaje.
formulario.addEventListener("reset", function () {
    resultado.className = "mensaje";
    resultado.textContent = "";
});
