
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const historial = document.getElementById("historial");
const titularTexto = document.getElementById("titular");
const saldoFinalTexto = document.getElementById("saldoFinal");
const totalDepositadoTexto = document.getElementById("totalDepositado");
const totalRetiradoTexto = document.getElementById("totalRetirado");
const operacionesTexto = document.getElementById("operaciones");

const PIN_CORRECTO = "1234";
const TITULAR = "Usuario Demo";
const SALDO_INICIAL = 1000;

formulario.addEventListener("submit", iniciarCajero);

function iniciarCajero(evento) {
  evento.preventDefault();

  const pin = document.getElementById("pin").value.trim();
  if (pin !== PIN_CORRECTO) {
    mensaje.textContent = "PIN incorrecto. Acceso denegado.";
    historial.innerHTML = "";
    return;
  }

  const textoOps = document.getElementById("operaciones").value.trim();
  if (!textoOps) {
    mensaje.textContent = "Ingresa al menos una operación.";
    return;
  }

  const lineas = textoOps.split("\n").map(l => l.trim()).filter(l => l.length > 0);

  let saldo = SALDO_INICIAL;
  let totalDepositado = 0;
  let totalRetirado = 0;
  let opsExitosas = 0;
  let sesionActiva = true; 
  historial.innerHTML = "";

  
  let indice = 0;
  do {
    if (indice >= lineas.length) break;

    const partes = lineas[indice].toLowerCase().split(",");
    const op = partes[0].trim();
    const monto = partes.length > 1 ? parseFloat(partes[1]) : 0;

    const li = document.createElement("li");

    if (op === "salir") {
      li.textContent = "Operación: SALIR → Sesión finalizada.";
      historial.appendChild(li);
      sesionActiva = false;
    } else if (op === "consultar") {
      li.textContent = `Operación: CONSULTAR → Saldo actual: $${saldo.toFixed(2)}`;
      historial.appendChild(li);
      opsExitosas++;
    } else if (op === "depositar") {
      if (Number.isNaN(monto) || monto <= 0) {
        li.textContent = `Operación: DEPOSITAR → Monto inválido (${partes[1] || "vacío"}).`;
      } else {
        saldo += monto;
        totalDepositado += monto;
        opsExitosas++;
        li.textContent = `Operación: DEPOSITAR $${monto.toFixed(2)} → Nuevo saldo: $${saldo.toFixed(2)}`;
      }
      historial.appendChild(li);
    } else if (op === "retirar") {
      if (Number.isNaN(monto) || monto <= 0) {
        li.textContent = `Operación: RETIRAR → Monto inválido.`;
      } else if (monto > saldo) {
        li.textContent = `Operación: RETIRAR $${monto.toFixed(2)} → Fondos insuficientes (saldo: $${saldo.toFixed(2)}).`;
      } else {
        saldo -= monto;
        totalRetirado += monto;
        opsExitosas++;
        li.textContent = `Operación: RETIRAR $${monto.toFixed(2)} → Nuevo saldo: $${saldo.toFixed(2)}`;
      }
      historial.appendChild(li);
    } else {
      li.textContent = `Operación desconocida: "${op}"`;
      historial.appendChild(li);
    }

    indice++;
  } while (sesionActiva && indice < lineas.length);

  mensaje.textContent = "Sesión de cajero procesada correctamente.";
  titularTexto.textContent = TITULAR;
  saldoFinalTexto.textContent = `$${saldo.toFixed(2)}`;
  totalDepositadoTexto.textContent = `$${totalDepositado.toFixed(2)}`;
  totalRetiradoTexto.textContent = `$${totalRetirado.toFixed(2)}`;
  operacionesTexto.textContent = opsExitosas;
}
