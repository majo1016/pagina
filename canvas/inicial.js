let canvas= document.querySelector("#inicial");
let ctx= canvas.getContext("2d")
ctx.fillRect(100,200,200,100)
ctx.fillStyle= "red"
ctx.strokeStyle="rgba(0,0,200,0.5)"

ctx.fillRect(200, 100, 100, 200)
ctx.clearRect(150, 225,100,50)

ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(300,100);
ctx.lineTo(0,200);
ctx.lineTo(200,200)
ctx.stroke();

ctx.beginPath()
ctx.arc()