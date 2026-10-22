/**
 * Ejercicio 2: Total de una venta
 * IVA: 19%
 * Descuento: 5% si cantidad > 10
 * Inputs sin id/name → querySelectorAll
 * Orden: 0=nombre, 1=cantidad, 2=precio, 3=subtotal, 4=iva, 5=descuento, 6=total
 */

const IVA_PORCENTAJE = 0.19;
const DESCUENTO_PORCENTAJE = 0.05;
const CANTIDAD_MIN_DESCUENTO = 10;

function calcularVenta() {
  const inputs = document.querySelectorAll("form input");

  const cantidad = parseFloat(inputs[1].value);
  const precioUnitario = parseFloat(inputs[2].value);

  const campoSubtotal = inputs[3];
  const campoIva = inputs[4];
  const campoDescuento = inputs[5];
  const campoTotal = inputs[6];

  if (isNaN(cantidad) || isNaN(precioUnitario) || cantidad < 0 || precioUnitario < 0) {
    campoSubtotal.value = "";
    campoIva.value = "";
    campoDescuento.value = "";
    campoTotal.value = "Datos inválidos";
    return;
  }

  const subtotal = cantidad * precioUnitario;
  const iva = subtotal * IVA_PORCENTAJE;
  let descuento = 0;

  if (cantidad > CANTIDAD_MIN_DESCUENTO) {
    descuento = subtotal * DESCUENTO_PORCENTAJE;
  }

  const total = subtotal + iva - descuento;

  campoSubtotal.value = subtotal.toLocaleString("es-CO");
  campoIva.value = iva.toLocaleString("es-CO");
  campoDescuento.value = descuento.toLocaleString("es-CO");
  campoTotal.value = total.toLocaleString("es-CO");
}
