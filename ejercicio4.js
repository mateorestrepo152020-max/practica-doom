// ejercicio4.js - Registro de ventas (negativas se "re-piden" / se saltan)
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const totalTexto = document.getElementById("total");
const cantidadTexto = document.getElementById("cantidad");

formulario.addEventListener("submit", function(e) {
  e.preventDefault();
  const valores = document.getElementById("entrada").value.split(",").map(s => s.trim());
  let total = 0;
  let cantidad = 0;
  let i = 0;

  while (i < valores.length) {
    const n = parseFloat(valores[i]);
    if (Number.isNaN(n) || n === 0) break;
    if (n < 0) {
      // venta negativa → se "vuelve a pedir" (se salta y continúa)
      i++;
      continue;
    }
    total += n;
    cantidad++;
    i++;
  }

  mensaje.textContent = "Ventas procesadas (negativas descartadas / re-pedidas).";
  totalTexto.textContent = `$${total.toFixed(2)}`;
  cantidadTexto.textContent = cantidad;
});
