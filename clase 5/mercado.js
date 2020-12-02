let mercado=JSON.parse(localStorage.getItem("mercado"))
if(mercado == null) mercado=[]
let lista = document.querySelector("#listaMercado")


function addElemento(nombre){
    let elemento = document.createElement("li")
    elemento.innerHTML = nombre;
    lista.appendChild(elemento);
}
function generarlistaHtml(){
    lista.innerHTML="";
    for(let elem of mercado){
        addElemento(elem);}
}
let btn =document.querySelector("#btnAdd");
let input = document.querySelector("inputAdd");

function btnPresionado(){
    let nombre = input.value;
    input.value = "";
    mercado.push(nombre);
    generarlistaHtml();
    localStorage.setItem("mercado", JSON.stringify(mercado));

}

btn.onclick = btnPresionado;
generarlistaHtml()
//localStorage.setItem("mercado", JSON.stringify(mercado));
//console.log(JSON.parse(localStorage.getItem("mercado")));
//localStorage.setItem("Nombre","Apellido")

