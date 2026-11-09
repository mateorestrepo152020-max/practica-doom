// TALLER 3: El mayor de tres números (sin usar Math.max).

let formulario = document.getElementById("formTaller3");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    let textoA = document.getElementById("numeroA").value;
    let textoB = document.getElementById("numeroB").value;
    let textoC = document.getElementById("numeroC").value;

    // Validar que ninguno de los tres campos esté vacío.
    if (textoA.trim() === "" || textoB.trim() === "" || textoC.trim() === "") {
        resultado.className = "mensaje error";
        resultado.textContent = "Completa los tres números.";
        return;
    }

    let a = parseFloat(textoA);
    let b = parseFloat(textoB);
    let c = parseFloat(textoC);

    // Los tres iguales.
    if (a === b && b === c) {
        resultado.className = "mensaje exito";
        resultado.textContent = "Los tres números son iguales.";
        return;
    }

    // Buscamos el mayor con condicionales.
    let mayor = a;
    if (b > mayor) {
        mayor = b;
    }
    if (c > mayor) {
        mayor = c;
    }

    resultado.className = "mensaje exito";
    resultado.textContent = `El número mayor es ${mayor}.`;
});

formulario.addEventListener("reset", function () {
    resultado.className = "mensaje";
    resultado.textContent = "";
});
