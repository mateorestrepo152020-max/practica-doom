let formularioDividir=document.getElementById("formulariodividir");

formularioDividir.addEventListener("submit",dividir);
function dividir(event) {
    event.preventDeFault();
    let numero1=parseFloat(document.getElementById("num1").value);
    let numero2=parseFloat(document.getElementById("num2").value);
    if (numero2===0){
        alert("noes posible dividir entre cero.");
        return;
    }else if (isNaN(numero1)|| isNaN(numero2)) {
        alert("escribe los dos numeros.");
        return;
    }else {
        alert(`division:${numero1/numero2}`);
    }
}