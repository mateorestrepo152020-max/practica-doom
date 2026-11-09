// ejercicio8.js - Juego de adivinar el número

const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const registro = document.getElementById("registro");
const intentosTexto = document.getElementById("intentos");
const puntosTexto = document.getElementById("puntos");

// Número secreto fijo para pruebas (según casos de prueba de la guía)
const SECRETO = 42;
const MAX_INTENTOS = 7;
const PUNTOS_INICIALES = 100;
const PENALIZACION = 10;

formulario.addEventListener("submit", jugar);

function jugar(evento) {
  evento.preventDefault();

  const texto = document.getElementById("intentosEntrada").value.trim();
  if (!texto) {
    mensaje.textContent = "Ingresa al menos un número.";
    return;
  }

  const intentos = texto.split(",").map(s => parseInt(s.trim(), 10));
  registro.innerHTML = "";
  let puntos = PUNTOS_INICIALES;
  let intentosRealizados = 0;
  let adivinado = false;

  let i = 0;
  while (i < intentos.length && i < MAX_INTENTOS && !adivinado) {
    const num = intentos[i];
    intentosRealizados++;

    const li = document.createElement("li");

    if (Number.isNaN(num) || num < 1 || num > 100) {
      li.textContent = `${num} → inválido (debe estar entre 1 y 100). No cuenta.`;
      registro.appendChild(li);
      i++;
      continue;
    }

    if (num === SECRETO) {
      li.textContent = `${num} → ¡Victoria! Adivinaste en ${intentosRealizados} intento(s).`;
      adivinado = true;
    } else if (num < SECRETO) {
      li.textContent = `${num} → el secreto es mayor`;
      puntos -= PENALIZACION;
    } else {
      li.textContent = `${num} → el secreto es menor`;
      puntos -= PENALIZACION;
    }
    registro.appendChild(li);
    i++;
  }

  if (adivinado) {
    mensaje.textContent = `¡Felicidades! Ganaste con ${puntos} puntos.`;
  } else if (intentosRealizados >= MAX_INTENTOS) {
    mensaje.textContent = `Derrota. Se agotaron los ${MAX_INTENTOS} intentos. El secreto era ${SECRETO}.`;
    puntos = Math.max(0, puntos);
  } else {
    mensaje.textContent = `Se procesaron todos los intentos. El secreto era ${SECRETO}.`;
  }

  intentosTexto.textContent = intentosRealizados;
  puntosTexto.textContent = puntos;
}
