/**
 * Ejercicio 1: Calculadora de dos números
 * Acceso a inputs sin id ni name → querySelectorAll('input')
 * Posición: 0 = num1, 1 = num2, 2 = resultado
 */

function obtenerInputs() {
  const inputs = document.querySelectorAll("form input");
  return {
    num1: parseFloat(inputs[0].value),
    num2: parseFloat(inputs[1].value),
    resultado: inputs[2]
  };
}

function sumar() {
  const { num1, num2, resultado } = obtenerInputs();
  if (isNaN(num1) || isNaN(num2)) {
    resultado.value = "Ingresa ambos números";
    return;
  }
  resultado.value = num1 + num2;
}

function restar() {
  const { num1, num2, resultado } = obtenerInputs();
  if (isNaN(num1) || isNaN(num2)) {
    resultado.value = "Ingresa ambos números";
    return;
  }
  resultado.value = num1 - num2;
}

function multiplicar() {
  const { num1, num2, resultado } = obtenerInputs();
  if (isNaN(num1) || isNaN(num2)) {
    resultado.value = "Ingresa ambos números";
    return;
  }
  resultado.value = num1 * num2;
}

function dividir() {
  const { num1, num2, resultado } = obtenerInputs();
  if (isNaN(num1) || isNaN(num2)) {
    resultado.value = "Ingresa ambos números";
    return;
  }
  if (num2 === 0) {
    resultado.value = "Error: no se puede dividir por cero";
    return;
  }
  resultado.value = num1 / num2;
}
