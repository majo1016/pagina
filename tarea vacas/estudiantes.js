let estudiante = {
    nombre: "Maria Jose",
    edad: 16,
    curso: "terza liceo",
    notas:[5,6,7,7.5],
    añadirnota: function (nota){
        this.notas.push(nota);
    },
    mostrarinformacion:function(){
        console.log(this.edad,this.nombre,this.curso);
    },
    mostrarpromedio: function(){
        i=0
    for(nota of this.notas)i+=nota;
        return i/this.nota.lenght;
    },
    function (nombre,edad,curso,notas) {{
        this.nombre=nombre;
        this.edad= edad;
        this.curso= curso;
        this.notas= notas;
        (this.añadirnota= function (nota){
            this.notas.push(nota);
        });
        (this.mostrarpromedio=function(){
            for(notas of this.notas) i+=nota;
                 i/this.nota.lenght;
        });
        (this.mostrarinformacion = function (){console.log(this.nombre,this.edad,this.curso)});
    }}};
        
    

let carro= {
    marca:"Toyota",
    modelo:"Rav4",
    año:2018,
    kilometraje:1000,
    kpg:5.7,
    añadirRecorrido: function (kilometrajes) {
        this.kilometraje.push(kilometrajes);
        
    },
    calcularconsumo: function (kpg) {
        let consumo= kilometros/kpg;
        console.log(consumo);
        
    },
    mostrarinformacion: function (marca,modelo,año,kpg,kilometraje) {
        this.marca= marca;
        this.modelo= modelo;
        this.año= año;
        this.kpg= kpg;
        this.kilometraje= kilometraje;
        (this.añadirRecorrido= function (kilometrajes) {
            this.kilometraje.push(kilometrajes)
            
        });
        (this.calcularconsumo= function (kpg) {
            let consumo= kilometros/kpg;
            console.log(consumo);
            
        });
        (this.mostrarinformacion= function () {console.log(this.marca,this.modelo,this.año,this.kilometraje,this.kpg)
            
        })
        
    }
};
let nuevoestu= new estudiante("Pedro",12,"Prima Liceo",[7,5,3]);console.log(miNuevoVaso.capacidad);
console.log(nuevoestu.nombre);
console.log(nuevoestu.edad);
console.log(nuevoestu.notas);
console.log(nuevoestu.mostrarpromedio);

let nuevoestud= new estudiante("Pepito",15,"Seconda liceo",[8,9,4]);
console.log(nuevoestud.nombre);
console.log(nuevoestud.edad);
console.log(nuevoestud.notas);
console.log(nuevoestud.mostrarpromedio);

let nuevoestudi= new estudiante("Juan",17,"Quarta liceo",[6,7,5]);
console.log(nuevoestudi.nombre);
console.log(nuevoestudi.edad);
console.log(nuevoestudi.notas);
console.log(nuevoestudi.mostrarpromedio);

let carro0= new carro("ford","scape",2018,5000,2.5);
console.log(carro0.kilometrajes);
console.log(carro0.kpg);
console.log(carro0.mostrarinformacion);

carro1= new carro("fiat", "500",2020,3000, 6.5);
console.log(carro1.kilometrajes);
console.log(carro1.kpg);
console.log(carro1.mostrarinformacion);

carro2= new carro("BMW", "X3 premium",2020,1000, 8.5);
console.log(carro2.kilometrajes);
console.log(carro2.kpg);
console.log(carro2.mostrarinformacion);