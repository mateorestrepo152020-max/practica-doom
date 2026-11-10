//EJERCICIO 2:Uso de una funcion con nombre y el evento click

let botonRestar=document.getElementById("botonRestar");

botonRestar.addEventListener("click",resta);

function resta(event){
  event.preventDefault();
  let valor1=parseFloat(document.getElementById("num1").value);
  let valor2=parseFloat(document.getElementById("num2").value);
  
  if(isNaN(valor1)|| isNaN(valor2)){
    alert("Escribe los dos numeros:")
    return;
  }else{
    alert(`Resta: ${valor1 - valor2}`);
  }
}