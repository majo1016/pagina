import {IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'
let balon = {
    //PROPIEDADES
    x:0,
    y:0,
    vX: 50,// px por segundo
    vY: 30,
    x1: 100,
    y1: 15,
    x2:150,
    y2:30,
    y3:30,
    // imagen: undefined,
    //METODOS
    dibujarse:function(){
        // ctx.drawImage(this.imagen, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
        ctx.fillRect(this.x.this.y,100,30)
        ctx.beginPath();
        ctx.moveTo(this.x+100,this.y)
        ctx.lineTo(this.x2,this.y2)
        ctx.lineTo(this.x1,this.y3)
    },
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
        this.x1 = this.y + this.vX * dT/1000;
        this.x2= this.y + this.vX* dT/1000;
        this.y1= this.y + this.vY * dT/1000;
        this.y2= this.y3 + this.vY * dT/1000;
    }

}
run()
// CREACIón del objeto balón
// PROPIEDADES> x, y, vX, vY, r, imagen
// METODOS> dibujarse

// console.log(images)



