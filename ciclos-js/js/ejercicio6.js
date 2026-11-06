// ejercicio6.js - Menú de cajero con do...while
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const log = document.getElementById("log");
const saldoTexto = document.getElementById("saldo");

formulario.addEventListener("submit", function(e) {
  e.preventDefault();
  const ops = document.getElementById("entrada").value.split(",").map(s => s.trim());
  let saldo = 1000;
  let i = 0;
  let salir = false;
  log.innerHTML = "";

  do {
    if (i >= ops.length) break;
    const op = ops[i];
    const li = document.createElement("li");

    if (op === "1") {
      li.textContent = `Opción 1: Consultar → Saldo $${saldo.toFixed(2)}`;
    } else if (op === "2") {
      i++;
      const monto = parseFloat(ops[i]);
      if (!Number.isNaN(monto) && monto > 0) {
        saldo += monto;
        li.textContent = `Opción 2: Depositar $${monto} → Nuevo saldo $${saldo.toFixed(2)}`;
      } else {
        li.textContent = `Opción 2: Monto inválido`;
      }
    } else if (op === "3") {
      i++;
      const monto = parseFloat(ops[i]);
      if (!Number.isNaN(monto) && monto > 0 && monto <= saldo) {
        saldo -= monto;
        li.textContent = `Opción 3: Retirar $${monto} → Nuevo saldo $${saldo.toFixed(2)}`;
      } else {
        li.textContent = `Opción 3: Retiro no permitido`;
      }
    } else if (op === "4") {
      li.textContent = "Opción 4: Salir";
      salir = true;
    } else {
      li.textContent = `Opción desconocida: ${op}`;
    }
    log.appendChild(li);
    i++;
  } while (!salir && i < ops.length);

  mensaje.textContent = "Menú procesado con do...while.";
  saldoTexto.textContent = `$${saldo.toFixed(2)}`;
});
