import {IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'

// CREACIón del objeto balón
// PROPIEDADES> x, y, vX, vY, r, imagen
// METODOS> dibujarse

// console.log(images)

let lapiz ={
    x:100,
    y:100,
    r:15,
    vX: 50,// px por segundo
    vY: -50,
    dibujarse:function(){
        // ctx.drawImage(this.imagen, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
        ctx.beginPath();
        ctx.moveTo(70,40);
        ctx.lineTo(10,10);
        ctx.lineTo(15,20);
        ctx.lineTo(15,40);
        ctx.lineTo(50,40);
        ctx.lineTo(50,20);
        ctx.lineTo(15,20);
        ctx.stroke();
        ctx.fill();
    },
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
    }

}
let lapiz2 = Object.create(lapiz)
lapiz2.x = 0;
lapiz2.y = 0;
lapiz2.vX = 10;
lapiz2.vY = 10;
drawObj.draw =  function(){
    ctx.clearRect(0, 0, 400, 400);
    lapiz.dibujarse();
    lapiz2.dibujarse();
    lapiz.moverse();
    lapiz2.moverse();
}
run()

