/**
 * Ejercicio 4: Salario de un empleado
 * Regla extra: horas > 8 → recargo del 25% sobre las horas extra
 * Formato dinero: toLocaleString('es-CO')
 * Inputs: 0=horas, 1=valorHora, 2=salario
 */

const HORAS_NORMALES = 8;
const RECARGO_EXTRA = 0.25; // 25%

function calcularSalario() {
  const inputs = document.querySelectorAll("form input");

  const horas = parseFloat(inputs[0].value);
  const valorHora = parseFloat(inputs[1].value);
  const campoSalario = inputs[2];

  if (isNaN(horas) || isNaN(valorHora) || horas < 0 || valorHora < 0) {
    campoSalario.value = "Datos inválidos";
    return;
  }

  let salario;

  if (horas <= HORAS_NORMALES) {
    salario = horas * valorHora;
  } else {
    const horasExtra = horas - HORAS_NORMALES;
    const pagoNormal = HORAS_NORMALES * valorHora;
    const pagoExtra = horasExtra * valorHora * (1 + RECARGO_EXTRA);
    salario = pagoNormal + pagoExtra;
  }

  campoSalario.value = salario.toLocaleString("es-CO");
}
