
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const sumaTexto = document.getElementById("suma");
const cantidadTexto = document.getElementById("cantidad");

formulario.addEventListener("submit", function(e) {
  e.preventDefault();
  const valores = document.getElementById("entrada").value.split(",").map(s => s.trim());
  let suma = 0;
  let cantidad = 0;
  let i = 0;

  while (i < valores.length) {
    const n = parseFloat(valores[i]);
    if (Number.isNaN(n) || n === 0) break;
    if (n > 0) {
      suma += n;
      cantidad++;
    }
    i++;
  }

  mensaje.textContent = "Cálculo terminado.";
  sumaTexto.textContent = suma.toFixed(2);
  cantidadTexto.textContent = cantidad;
});
