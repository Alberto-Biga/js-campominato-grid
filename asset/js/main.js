//funzione per stampa griglia
let btnPlay= document.getElementById(`play`);
//al click del bottone play parte
btnPlay.addEventListener(`click`,function(){
    //ottengo e salvo la difficoltà selezionata
    let sceltaUtente = document.getElementById(`difficulty`).value;
    console.log(`la difficoltà è la numero ${sceltaUtente} `);
    //STAMPARE GRIGLIA COME CHIESTO DA UTENTE (3 OPZIONI)
    //griglia 10x10
    let numCelle;
    if( sceltaUtente == "1"){
        numCelle = 100
    }else if( sceltaUtente == "2"){
        numCelle = 81;
    }else if( sceltaUtente == "3"){
        numCelle = 49;
    } 
    // se premo play pulisco griglia o ne creo un'altra
    grid.innerHTML = "";   
    //creo tutte le celle
    for (let i = 1; i<= numCelle; i++){        
        let cella = document.createElement(`div`);
        grid.appendChild(cella);
        //AGGIUNGO NUMERI ALLE CELLE (RANDOM, NO DOPPIONI)
        //array nutrito da funzione numero random
        let array = [];
        //ogni ciclo pusho un numero
        for( y=0 ; y < numCelle +1 ;y++){
            array.push(y);
        }
        //funzione per generare numero random
        function shuffle(array) {
            return array.sort(() => Math.random() - 0.5 );    
        }
        array = shuffle(array);     
        //stampo numeri dentro le celle
        cella.innerHTML += array[i];
        //AGGIUNGO CLASSI ALLE CELLE
        if(numCelle == 100){
            cella.classList.add(`box10`);
        }else if(numCelle == 81){           
            cella.classList.add(`box9`);
        }else if(numCelle == 49){           
            cella.classList.add(`box7`);
        }          
        //MODIFICO CELLE AL CLICK DEL MOUSE
        cella.addEventListener(`click`,function (){               
            console.log(this.innerHTML)
            cella.classList.add(`boxCliccato`)
            
        })
    }       
});
