let formulario = document.getElementById("formTaller2");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", taller2);

function taller2(event) {
    event.preventDefault();

    let number=parseFloat (document.getElementById("nota").value);

    // 1. Validar que el campo no esté vacío
    if (isNaN (nota)) {
        document.getElementById("resultado").innerText=("ingrese la nota.");
        return;
    }

    let nota = parseFloat(notaInput);

    // 2. Verificar que esté entre 0.0 y 5.0
    if (nota < 0 || nota > 5){
        document.getElementById("resultado").innerText="ingrese una nota valida";
        return;
    
    } else if (isNaN(nota)) {
        resultado.textContent = "La nota debe estar entre 0.0 y 5.0";
        resultado.className = "error";
        return;
    }

    let desempeno;
    let resultado="Aprobado"
    
    if(nota>4.5){
        desempeno="excelente";
    } else if (nota >= 4) {
        desempeno = "Bueno";
    } else if (nota >= 3) {
        desempeno = "Aceptable";
    } else {
        desempeno = "Insuficiente";
        estado = "No aprobado";
    }
    document.getElementById("resultado").innerText=`resultado`
    resultado.textContent = `Nota: ${nota}: ${desempeno}. ${estado}.`;
    resultado.className = "exito";
}