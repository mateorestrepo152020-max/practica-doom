// ejercicio2.js - Tabla de multiplicar
let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let tabla = document.getElementById("tabla");

formulario.addEventListener("submit", function(e) {
  e.preventDefault();
  let n = parseInt(document.getElementById("numero").value, 10);
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
