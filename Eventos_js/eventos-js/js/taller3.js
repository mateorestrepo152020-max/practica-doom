let formulario = document.getElementById("formTaller3");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let numeroA= document.getElementById("numeroA").value;
    let numeroB = document.getElementById("numeroB").value;
    let numeroC = document.getElementById("numeroC").value;

    // 1. Validar que ninguno de los tres campos esté vacío
    if (isNaN(numeroA)|| isNaN(numeroB) || isNaN(numeroC)){
        document.getElementById("resultado").innerText="completa los tres numeros";
        return;
    }

    let a = parseFloat(valA);
    let b = parseFloat(valB);
    let c = parseFloat(valC);

    // 2. Verificar si los tres números son iguales entre sí
    if (numeroA > numeroB && numeroA > numeroC) {
        document.getElementById("resultado").innerText=`el ${numeroA} es mayor`
    } 
    if (numeroB> numeroA && numeroB > numeroC) {
        document.getElementById("resultado").innerText=`el ${numeroB} es mayor`
    }
    if (numeroA===numeroB && numero===numeroC)
    
    }else{
        document.getElementById("resultado").innerText=`el ${numeroC} es mayor`
    }

    // 3. Determinar cuál es el mayor usando condicionales (sin Math.max)
    let mayor = a;
    if (b > mayor) {
        mayor = b;
    }
    if (c > mayor) {
        mayor = c;
    }

    // 4. Mostrar el resultado final
    resultado.textContent = `El número mayor es ${mayor}.`;
    resultado.className = "mensaje exito";
});