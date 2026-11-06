/**
 * Ejercicio 5: Presupuesto de un evento
 * Resultados se escriben en las celdas <td> de la tabla (columna Valor)
 * Sin id ni name → querySelectorAll('tbody tr') + children
 * Formato dinero: toLocaleString('es-CO')
 */

function calcularPresupuesto() {
  const formInputs = document.querySelectorAll("form input");

  const invitados = parseFloat(formInputs[0].value);
  const costoComida = parseFloat(formInputs[1].value);
  const costoBebida = parseFloat(formInputs[2].value);
  const costoDecoracion = parseFloat(formInputs[3].value);
  const costoMusica = parseFloat(formInputs[4].value);
  const porcentajePropina = parseFloat(formInputs[5].value);

  // Validación: invitados 0 o vacío
  if (isNaN(invitados) || invitados <= 0) {
    alert("El número de invitados debe ser mayor que 0");
    return;
  }

  if (
    isNaN(costoComida) || isNaN(costoBebida) ||
    isNaN(costoDecoracion) || isNaN(costoMusica) ||
    isNaN(porcentajePropina)
  ) {
    alert("Completa todos los campos con valores válidos");
    return;
  }

  // Cálculos
  const comidaTotal = invitados * costoComida;
  const bebidaTotal = invitados * costoBebida;
  const subtotal = comidaTotal + bebidaTotal + costoDecoracion + costoMusica;
  const propina = subtotal * (porcentajePropina / 100);
  const totalGeneral = subtotal + propina;
  const costoPorInvitado = totalGeneral / invitados;

  // Acceder a las celdas de valor de la tabla (segunda columna de cada fila)
  const filas = document.querySelectorAll("table tbody tr");

  // Orden de las filas:
  // 0 Comida total
  // 1 Bebida total
  // 2 Decoración
  // 3 Música/animación
  // 4 Subtotal
  // 5 Propina
  // 6 Total general
  // 7 Costo por invitado

  const valores = [
    comidaTotal,
    bebidaTotal,
    costoDecoracion,
    costoMusica,
    subtotal,
    propina,
    totalGeneral,
    costoPorInvitado
  ];

  filas.forEach((fila, index) => {
    const celdaValor = fila.children[1]; // segunda celda (Valor)
    celdaValor.textContent = valores[index].toLocaleString("es-CO");
  });
}
