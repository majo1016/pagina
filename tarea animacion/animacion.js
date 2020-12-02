let terza = document.querySelector("#terza");
let guion= document.querySelector("#no");
function cambiarColor() {
  terza.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  guion.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// setInterval> ejecuta una función cada cierto tiempo. El tiempo se debe escribir en milisegundos
let x = 1;
let y=1
let dX = 10;
let angle = 0;
let dAngle = 5;
let a=parseInt(prompt("variable a"));
let b=parseInt(prompt("variable b"));
let c=parseInt(prompt("variable c"));
let solucion1=(-b+(Math.pow(b,2)-(4*a*c))/(2*a))
solucion2=(-b-(Math.pow(b,2)-(4*a*c))/(2*a))
alert("primera solucion:"+solucion1);
alert("segunda soluion:"+ solucion2);
function mover() {
  x = x + dX;
  angle = angle + dAngle;
  terza.style.transform = `translate(${x}px) rotate(${angle})`;
}
let idMovimiento;
let idColor;
let corriendo = false;
let sucede= false;
function start() {
  corriendo = true;
  //idMovimiento = window.setInterval(mover, 100);
  idColor = window.setInterval(cambiarColor, 30);
}
function stop() {
  corriendo = false;
  window.clearInterval(idMovimiento);
  window.clearInterval(idColor);
}
window.onkeydown = function (evento) {
  if (evento.key == "w") {
    if (corriendo) stop();
    else start();
  }
};
function mover(){
    sucede= true;
    idMovimiento=(window.setInterval(mover,solucion1,solucion2))
    if(mover.key=="s"){
        if(corriendo) stop()
    }
}
function parar(){

}
(JSON.parse(localStorage.getItem("animacion.js")))