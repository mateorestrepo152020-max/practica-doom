// ejercicio2.js - Tabla de multiplicar
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const tabla = document.getElementById("tabla");

formulario.addEventListener("submit", function(e) {
  e.preventDefault();
  const n = parseInt(document.getElementById("numero").value, 10);
  if (Number.isNaN(n) || n < 1) {
    mensaje.textContent = "Número inválido.";
    return;
  }
  tabla.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = `${n} × ${i} = ${n * i}`;
    tabla.appendChild(li);
  }
  mensaje.textContent = `Tabla del ${n}`;
});
