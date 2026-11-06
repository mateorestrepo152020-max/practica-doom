document.getElementById("botonSuman").addEventListener("click",function (event){
    event.preventDefault();
    let valor1= parseFloat(document.getElementById("n1").value);
    let valor2= parseFloat(document.getElementById("n2").value);
    if (isNaN(valor1) || isNaN(valor2)) {
        alert("escribe los dos numeros.");
        return;       
    } else {
        (`suma:${valor1+valor2}`);
    }
});