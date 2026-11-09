// ejercicio5.js - Inicio de sesión con bandera
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const estadoTexto = document.getElementById("estado");
const usadosTexto = document.getElementById("usados");

const PIN = "1234";
const MAX = 3;

formulario.addEventListener("submit", function(e) {
  e.preventDefault();
  const intentos = document.getElementById("intentos").value.split(",").map(s => s.trim());
  let sesionIniciada = false; // bandera
  let usados = 0;
  let i = 0;

  while (i < intentos.length && i < MAX && !sesionIniciada) {
    usados++;
    if (intentos[i] === PIN) {
      sesionIniciada = true; // cambia la bandera
    }
    i++;
  }

  if (sesionIniciada) {
    mensaje.textContent = "¡Acceso concedido!";
    estadoTexto.textContent = "Sesión iniciada";
  } else {
    mensaje.textContent = "Acceso denegado. Se agotaron los intentos.";
    estadoTexto.textContent = "Sesión no iniciada";
  }
  usadosTexto.textContent = usados;
});
