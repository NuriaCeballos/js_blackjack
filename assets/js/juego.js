
(() => {
    'use strict'


    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K']
    // let puntosJugador = 0,
    //     puntosComputadora = 0;
    let puntosJugadores = [];


    //referecias al html
    const btnPedir = document.querySelector('#btnpedir'),
          btnDetener = document.querySelector('#btndetener'),
          btnNuevo = document.querySelector('#btnnuevo');

    
    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          contador = document.querySelectorAll('small');

    // Esta función inicializa el juego
    const inicializarJuego = (numJugadores = 2)=>{
         deck = createDeck();
         for (let i = 0; i<numJugadores; i++){
             puntosJugadores.push(0);

         }

        
    }


     // esta función crea un nuevo deck es decir toma las cartas y las baraja
    const createDeck = () => {
        deck = []

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo)
            }
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo)
            }
        }

        return  _.shuffle(deck) // aplicamos underscore para barajar cartas


    }

    
    // esta funcion permite tomar una carta
    
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en la baraja'
        }
        return  deck.pop()
        

    }
    
    //saber el valor de la carta
    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1)//cojo de la posición 0 al final menos la útima
        return (isNaN(valor)) ?// isNaN () dice,evalua lo que hay en los parentesis y dime si es un número o no
            (valor === 'A') ? 11 : 10
            : valor * 1;

    }
    // Turno 0 es primer jugador y la última posición del array es la computadora
    const acumularPuntos = (carta, turno)=>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
        contador[turno].innerText = puntosJugadores[turno]
        return puntosJugadores[turno]

    }
    const crearCarta =(carta,turno)=>{
        const imgCarta = document.createElement('img')
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('cartas');
            divCartasJugadores[turno].append(imgCarta);

    }

    //***** */ Turno de la computadora // *****
    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;

        do {

            const carta = pedirCarta()
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length -1);
            crearCarta(carta, puntosJugadores.length -1)

        
            // const imgCarta = document.createElement('img')
            // imgCarta.src = `assets/cartas/${carta}.png`;
            // imgCarta.classList.add('cartas');
            // divCartasComputadora.append(imgCarta);
            
            if (puntosMinimos > 21) {
                break
            }

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));


        setTimeout(() => {

            if (puntosJugadores[0] === 21 && puntosComputadora > 21) {
                alert('has ganado')
                console.log('has ganado');
            } else if (puntosJugadores[0] <= 21 && puntosComputadora > 21) {
                alert('has ganado')

            } else if (puntosJugadores[0] < 21 && puntosComputadora > 21) {
                alert('has ganado')
                console.log('has ganado');
            } else if (puntosComputadora === puntosJugadores[0]) {
                alert('Ha habido un empate')

            } else {
                alert('has perdido')
            }
        }, 100);
    }
    // Eventos
    // con esta fución pulsamos el botón pedir carta y nos muestra una carta y suma los 
    // resultados

    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta,0);
        
        crearCarta( carta,0);
        
       

        if (puntosJugador > 21) {
           
            btnPedir.disabled = true;// decimos que cuando se cumpla la condicion se desabilite el boton
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador)

        } else if (puntosJugador === 21) {
           
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador)

        }
        //  console.log(puntosJugador);
        // console.log(deck);

    });

    btnDetener.addEventListener('click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador)




    })
    btnNuevo.addEventListener('click', () => {
        // deck = [];
        // createDeck();
        inicializarJuego();

        // console.log(deck);

        // puntosJugador = 0;
        // puntosComputadora = 0;
        // contador[0].innerText = 0;
        // contador[1].innerText = 0;

        // divCartasComputadora.innerHTML = '';
        // divCartasJugador.innerHTML = '';
        // btnPedir.disabled = false;
        // btnDetener.disabled = false;


    })

})()





