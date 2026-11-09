// ejercicio7.js - Nómina de empleados

// 1. Referencias
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const detalleEmpleados = document.getElementById("detalleEmpleados");
const cantidadEmpleadosTexto = document.getElementById("cantidadEmpleados");
const conExtrasTexto = document.getElementById("conExtras");
const totalNominaTexto = document.getElementById("totalNomina");

// 2. Evento
formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
  evento.preventDefault();

  const texto = document.getElementById("empleadosEntrada").value.trim();
  if (!texto) {
    mensaje.textContent = "Ingresa al menos un empleado.";
    return;
  }

  const lineas = texto.split("\n").map(l => l.trim()).filter(l => l.length > 0);
  let cantidad = 0;
  let totalNomina = 0;
  let conExtras = 0;
  detalleEmpleados.innerHTML = "";

  for (let i = 0; i < lineas.length; i++) {
    const datos = lineas[i].split(",");
    if (datos.length < 2) {
      const li = document.createElement("li");
      li.textContent = `Línea ${i + 1}: formato inválido (usa horas,valorHora)`;
      detalleEmpleados.appendChild(li);
      continue;
    }

    const horas = parseFloat(datos[0]);
    const valorHora = parseFloat(datos[1]);

    if (Number.isNaN(horas) || Number.isNaN(valorHora) || horas <= 0 || valorHora <= 0) {
      const li = document.createElement("li");
      li.textContent = `Empleado ${i + 1}: datos inválidos (horas y valor deben ser positivos)`;
      detalleEmpleados.appendChild(li);
      continue;
    }

    cantidad++;
    let pago = 0;
    let extras = 0;

    if (horas <= 40) {
      pago = horas * valorHora;
    } else {
      const ordinarias = 40;
      extras = horas - 40;
      pago = ordinarias * valorHora + extras * valorHora * 1.25;
      conExtras++;
    }

    totalNomina += pago;

    const li = document.createElement("li");
    li.textContent = `Empleado ${cantidad}: ${horas} h × $${valorHora.toFixed(2)} = $${pago.toFixed(2)}${extras > 0 ? ` (incluye ${extras} h extra)` : ""}`;
    detalleEmpleados.appendChild(li);
  }

  if (cantidad === 0) {
    mensaje.textContent = "No se pudo calcular ninguna nómina válida.";
  } else {
    mensaje.textContent = `Se procesaron ${cantidad} empleados correctamente.`;
  }

  cantidadEmpleadosTexto.textContent = cantidad;
  conExtrasTexto.textContent = conExtras;
  totalNominaTexto.textContent = `$${totalNomina.toFixed(2)}`;
}
