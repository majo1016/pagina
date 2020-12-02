let canvas = document.querySelector("#funciones");
let tablero=JSON.parse(localStorage.getItem("script.js"))
let ctx = canvas.getContext("2d");
 let color=true

// Vamos  a hacer funciones
// ctx.fillStyle = "rgba(0, 0, 255,0.3)";
// for (let xC = 20; xC <= 380; xC += 20) {
//   for (let yC = 20; yC <= 380; yC += 20) {
//     // circulo(xC, yC, 20);
//     rectangulo(xC, yC, 20, 20);
//   }
// }

function rectangulo(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fill();
    ctx.stroke();
}
for (let nFila = 0; nFila < 8; nFila++) {
  yC = 0 + nFila * 50;
  if (nFila % 2 == 0) {
    for (let xC = 50; xC <= 350; xC += 100) {
      rectangulo(xC, yC, 50, 50);
    }
  } else {
    for (let xC = 50; xC <= 350; xC += 100) {
      rectangulo(xC, 50, 50);
    }
    
    } console.log
  } 
 console.log(JSON.parse(localStorage.getItem("script.js")))

