/**
 * Ejercicio 3: Promedio de 3 notas
 * Rango válido: 0 a 5
 * Formato: toFixed(2)
 * Inputs: 0=nota1, 1=nota2, 2=nota3, 3=promedio
 */

function calcularPromedio() {
  const inputs = document.querySelectorAll("form input");

  const nota1 = parseFloat(inputs[0].value);
  const nota2 = parseFloat(inputs[1].value);
  const nota3 = parseFloat(inputs[2].value);
  const campoPromedio = inputs[3];

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    campoPromedio.value = "Ingresa las 3 notas";
    return;
  }

  // Validación de rango 0–5
  if (
    nota1 < 0 || nota1 > 5 ||
    nota2 < 0 || nota2 > 5 ||
    nota3 < 0 || nota3 > 5
  ) {
    campoPromedio.value = "Notas deben estar entre 0 y 5";
    return;
  }

  const promedio = (nota1 + nota2 + nota3) / 3;
  campoPromedio.value = promedio.toFixed(2);
}
