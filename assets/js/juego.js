// 2C treboles
// 2D diamantes
// 2H corazones
// 2S 2 espadas

let deck = [];
let tipos = ['C','D','H','S']
let especiales = ['A','J','Q','K']
let puntosJugador = 0
let puntosComputadora = 0

//referecias al html
const btnPedir = document.querySelector('#btnpedir');
const btnDetener = document.querySelector('#btndetener');
const btnNuevo = document.querySelector('#btnnuevo');
const contador = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#cartas-computadora');



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
        //  console.log(deck);
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
    

    
    // console.log(deck );
    // console.log(carta);
    return carta;
   
}
// for (let i = 0; i <= 52; i++ )
// pedirCarta()

//saber el valor de la carta
const valorCarta =(carta)=>{

    const valor = carta.substring(0,carta.length -1)//cojo de la posición 0 al final menos la útima
    return ( isNaN(valor) ) ?// isNaN () dice,evalua lo que hay en los parentesis y dime si es un número o no
            (valor === 'A') ? 11 : 10
            : valor * 1 ;        

}

// const valor = valorCarta (pedirCarta());//pedirCarta trae la función anterior
// console.log({ valor });

//***** */ Turno de la computadora // *****
const turnoComputadora=(puntosMinimos)=>{

     do {

        const carta = pedirCarta()

        puntosComputadora = puntosComputadora + valorCarta(carta)
        contador[1].innerText = puntosComputadora
        
       //  <img class ="cartas" src ="assets/cartas/2C.png">
       const imgCarta = document.createElement('img')
       imgCarta.src = `assets/cartas/${carta}.png`;
       imgCarta.classList.add('cartas');
       divCartasComputadora.append(imgCarta);
       console.log(puntosComputadora);
       if ( puntosMinimos > 21){
        break
    }

    } while((puntosComputadora< puntosMinimos) && (puntosMinimos <= 21) );   
    
    
    // setTimeout(()=>{

    //     if (puntosJugador === puntosMinimos){
    //         alert('Nadie gana');
    //     }else if (puntosMinimos > 21){
    //         alert ('Computadora gana')

    //     }else if (puntosComputadora > 21){
    //         alert ('Jugador gana')

    //     }else {
    //         alert('Nadie gana');
    //     }

    // }, 10); 

    setTimeout(()=>{

        if (puntosJugador === 21 && puntosComputadora >21){
            alert ('has ganado')
            console.log('has ganado');
        } else if(puntosJugador<=21 && puntosComputadora >21){
            alert ('has ganado')
            
        }else if (puntosJugador < 21 && puntosComputadora > 21) {
            alert ('has ganado')
            console.log('has ganado');
        }else if(puntosComputadora === puntosJugador){
            alert ('Ha habido un empate')

        }else{
            alert ('has perdido')
        }
    }, 100);      
    

}

// Eventos
// con esta fución pulsamos el botón pedir carta y nos muestra una carta y suma los 
// resultados

btnPedir.addEventListener('click',()=>{

     const carta = pedirCarta()

     puntosJugador = puntosJugador + valorCarta(carta)
     contador[0].innerText = puntosJugador
     
    //  <img class ="cartas" src ="assets/cartas/2C.png">
    const imgCarta = document.createElement('img')
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('cartas');
    divCartasJugador.append(imgCarta);
    
    if (puntosJugador>21){
        // alert('te has pasado');
        btnPedir.disabled = true;// decimos que cuando se cumpla la condicion se desabilite el boton
        btnDetener.disabled =true;
        turnoComputadora(puntosJugador)
   
    }else if(puntosJugador===21) {
        // alert('21 genial !!!!!!!!!!!!');
        btnPedir.disabled = true;
        btnDetener.disabled =true;
        turnoComputadora(puntosJugador)    
        
    }
    //  console.log(puntosJugador);
    console.log(deck);
    
});

btnDetener.addEventListener('click',()=>{

        btnPedir.disabled = true;    
        btnDetener.disabled =true;

        turnoComputadora(puntosJugador)
    
    


})
btnNuevo.addEventListener('click',()=>{
    deck=[];
    createDeck();

    console.log(deck);

    puntosJugador = 0;
    puntosComputadora = 0;
    contador[0].innerText =0;
    contador[1].innerText=0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    btnPedir.disabled = false;    
    btnDetener.disabled =false;
    

})
// deck = createDeck();


// puntosJugador = 0;
// puntosComputadora = 0;
// contador[0] =0;
// contador[1] =0;

// divCartasComputadora.innerHTML = '';
// divCartasJugador.innerHTML = '';

// btnPedir.disabled = false;    
// btnDetener.disabled =false;




// TODO:borrar
