let lista= document.querySelector("#miLista");
console.log(lista);
// lista.style-display="none";
lista.style.backgroundColor="puple";
let bb= document.querySelector("#bb")
function ocultarLista(){
    lista.style.display="none"
}
bb.onlick = ocultarLista;