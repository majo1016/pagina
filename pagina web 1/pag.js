let pass= document.querySelector("#pass");
console.log(pass)
let color=document.querySelector("#color");
function cambiarpass(){
    pass.style.backgroundColor="blue";
}
color.onclick=cambiarpass
let btn=document.querySelector("#btnocultar");
function ocultarpass(){
    pass.style.display="none";
}
btn.onclick=ocultarpass
let btn1= document.querySelector("#btnaparecer");
function aparecerpass(){
    pass.style.display=""
}
btn1.onclick=aparecerpass