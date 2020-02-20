class Carta{
    constructor(palos,valor=[],texto){
      this.palos=palos;
      this.valor=valor;
      this.texto=texto;
      
    }
}
class Palo{
    constructor(figura){
      this.figura=figura;
    }
}
  //declaramos los array para crear las cartas con sus simbolos 
let palos = [new Palo("♥"), new Palo("♦"), new Palo("♣"), new Palo("♠")];
let letras=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
let  valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
   
class FabricaCarta {
        mazo=[];
        mazoMezclado=[];
        elemento;
    crearBarajas() {
      //recore los elementos de palos letras y valor para crear las cartas 
      palos.forEach(function (elementPalo) {
      letras.forEach(function (elementLetra, element) {
          if (element == 0) {
            this.mazo.push(new Carta(elementPalo, [11], elementLetra));
            
        } else if (element > 9) {
            this.mazo.push(new Carta(elementPalo, valor[9], elementLetra));
        } else {
            this.mazo.push(new Carta(elementPalo, valor[element], elementLetra));
        }
    },this)
  },this)
   
  }
   //mezclador de cartas  si para no repetir las cartas 
  mezclar(){
        while (this.mazoMezclado.length < 52) {
          let valor = Math.floor(Math.random() * (52));
          this.elemento = this.mazoMezclado.find(element => element == valor)
          let numer = (this.elemento == undefined) ? this.mazoMezclado.push(valor) : valor;
      }
  
      for (let i = 0; i < this.mazo.length - 1; i++) {
          this.elemento = this.mazo[this.mazoMezclado[i]]
          this.mazo[this.mazoMezclado[i]] = this.mazo[i]
          this.mazo[i] = this.elemento;
      }
      return this.mazo   
      }
}
// clase jugador
class Juego extends FabricaCarta { 
    nuevaBaraja=[]
    contador=0;
    pedir(){
      this.nuevaBaraja.push(this.mazo[this.contador].valor+this.mazo[this.contador].palos.figura);
          this.contador++;
          return this.nuevaBaraja;
    }
    validar() {
      //filtra las cartas duracte el juego 
      let filtro = this.nuevaBaraja.reduce(
        function(antes, ahora) {
            if (typeof(antes) == 'symbol') {
                if (antes > 10) {
                    return antes[0] + ahora;
                } else {
         return antes[1] + ahora;
                }
            } else {
                return antes + ahora;
            }
  
        })
  
    if (filtro == 21) {
        console.log("ganas");
        document.getElementById("resultado").innerHTML="felicidades";
    } else if (filtro < 21) {
        console.log("llega a 21 y ganas");
        document.getElementById("resultado").innerHTML="suma tus cartas que te den 21 y ganas";
    } else if (filtro > 21) {
        console.log("no ganaste te pasate de 21");
        document.getElementById("resultado").innerHTML="perdedor no llegaste a 21";
         return innerHTML="perdedor no llegaste a 21";
  
    }
    
    console.log('sumas y gana'+filtro);
    document.getElementById("suma").innerHTML=filtro;
      
    }
  }
  
  
  