// ejercicio3.js - Promedio de notas (descarta inválidas)
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const validasTexto = document.getElementById("validas");
const promedioTexto = document.getElementById("promedio");

formulario.addEventListener("submit", function(e) {
  e.preventDefault();
  const valores = document.getElementById("entrada").value.split(",").map(s => s.trim());
  let suma = 0;
  let validas = 0;

  for (let i = 0; i < valores.length; i++) {
    const n = parseFloat(valores[i]);
    if (!Number.isNaN(n) && n >= 0 && n <= 10) {
      suma += n;
      validas++;
    }
    // las inválidas se descartan (no se vuelven a pedir)
  }

  if (validas === 0) {
    mensaje.textContent = "No hay notas válidas.";
    validasTexto.textContent = "0";
    promedioTexto.textContent = "—";
  } else {
    mensaje.textContent = "Promedio calculado (notas inválidas descartadas).";
    validasTexto.textContent = validas;
    promedioTexto.textContent = (suma / validas).toFixed(2);
  }
});
