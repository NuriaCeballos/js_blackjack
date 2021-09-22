// 2C treboles
// 2D diamantes
// 2H corazones
// 2S 2 espadas

let deck = [];
let tipos = ['C','D','H','S']
let especiales = ['A','J','Q','K']
// esta función crea un nuevo deck es decir toma las cartas y las baraja
const createDeck=()=>{

    for (let i = 2; i<=10; i++){
        for ( let tipo of tipos){
            deck.push(i + tipo)
        } 
    }

    for (let tipo of tipos){
        for (let esp of especiales){
            deck.push(esp + tipo)
        }
    }
        
        // console.log(deck);
        deck = _.shuffle(deck) // aplicamos underscore para barajar cartas
        console.log(deck);
        return deck;
        
}
    
createDeck()
// esta funcion permite tomar una carta
    let cartaEscogida = []
const pedirCarta= ()=>{
    if(deck.length === 0 ){
        throw 'No hay cartas en la baraja'
    }
    let carta = deck.pop()
    

    console.log(carta);
    console.log(deck );
    return carta;
   
}
// for (let i = 0; i <= 52; i++ )
// pedirCarta()

//saber el valor de la carta
const valorCarta =(carta)=>{

    const valor = carta.substring(0,carta.length -1)//cojo de la posición 0 al final menos la útima
    return ( isNaN(valor) ) ?
            (valor === 'A') ? 11 : 10
            : valor * 1 ;        

}

const valor = valorCarta (pedirCarta());//pedirCarta trae la función anterior
console.log({ valor });