let canvas= document.querySelector("#canvas")
let ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.moveTo(50,200);
ctx.lineTo(100,100);
ctx.lineTo(150,200);
ctx.lineTo(150,400);
ctx.lineTo(50,400);
ctx.lineTo(50,200);
ctx.lineTo(150,200);
ctx.fillStyle="RGB(255, 140, 0)"
ctx.stroke();

ctx.beginPath();
ctx.arc(100,400,50,0,Math.PI,false);
ctx.fillStyle="rgb(255, 140, 0)";
ctx.stroke();
