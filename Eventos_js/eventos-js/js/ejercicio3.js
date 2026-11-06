document.getElementById("fomulario").addEventListener("submit", function(event){
    event.preventDefault();
    let numero1=number(document.getElementById("num1").value);
    let numero2=number(document.getElementById("num2").value);

    alert(`multiplicacion:${numero1*numero2}`);
});