let mezclado=[];
let carta = new Carta();
let palo = new Palo();
let fabrica = new FabricaCarta();
fabrica.crearBarajas();
fabrica.mezclar();
let juego= new Juego();
juego.crearBarajas();

document.getElementById("jugar").addEventListener("click",function(){
juego.mezclar();
console.log(juego.pedir());
})

document.getElementById("cartas").addEventListener('click',function(){
  juego.validar();

})