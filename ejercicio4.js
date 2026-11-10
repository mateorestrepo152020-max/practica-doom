//EJERCICIO 4:funcion con nombre con el evento submit

let formularioDividir=document.getElementById("formularioDividir");
formularioDividir.addEventListener("submit",dividir);
function dividir(event){
  event.preventDefault();

  let numero1=parseFloat(document.getElementById("num1").value);
  let numero2=parseFloat(document.getElementById("num2").value);
  
  if(numero2 ==0){
    alert("No es posible dividir entre cero.");
    return;

  }else if(isNaN(numero1)||isNaN(numero2)){
    alert("Escribe los dos numeros:");
    return;
  }else{
    alert(`Division: ${numero1/numero2}`);
  }
}