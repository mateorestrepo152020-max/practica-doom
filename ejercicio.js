let formulario=document.getElementById("Enunciado2");
let resultado=document.getElementById("resultado");

formulario.addEventListener("submit",validar)

function validar(){
    event.preventDefault()
    resultado.classList.add("exito");

    let Nombre=document.getElementById("nombre").value;
    let Nota1=parseFloat(document.getElementById("nota1").value);
    let Nota2=parseFloat(document.getElementById("nota2").value);
    let Nota3=parseFloat(document.getElementById("nota3").value);
    let Nota4=parseFloat(document.getElementById("nota4").value);



    if(Nombre.trim() === ""){
        document.getElementById("resultado").innerText=`Escribe tu nombre.`;
        return;
    }
    if(isNaN(Nota1)||Nota1<=0||Nota1>5){
        document.getElementById("resultado").innerText="Nota 1 invalida."
        return;

    }else if(isNaN(Nota2)||Nota2<=0||Nota2>5){
        document.getElementById("resultado").innerText="Nota 2 invalida."
        return;
    }else if(isNaN(Nota3)||Nota3<=0||Nota3>5){
        document.getElementById("resultado").innerText="Nota 3 invalida."
        return;
    }else if(isNaN(Nota4)||Nota4<=0||Nota4>5){
        document.getElementById("resultado").innerText="Nota 4 invalida."
        return;
    }
    if(Nota3<3){
        document.getElementById("resultado").innerText="Pasas a Plan de mejoramiento automaticamente";
        return;
    
    }
    let definitiva=((Nota1*0.30)+(Nota2*0.25)+(Nota3*0.35)+(Nota4*0.10));

    
    let juicioFinal;
    if(definitiva>=3.5){
        juicioFinal="Aprobado."
    }else if(definitiva<3.4){
        juicioFinal="Plan de mejoramiento."
    }else{
        juicioFinal="No Aprobado"
    }
    

    document.getElementById("resultado").innerText=`Nombre del aprendiz: ${Nombre}
    Nota final: ${definitiva.toFixed(1)}
    Juicio final obtenido: ${juicioFinal}`;




}