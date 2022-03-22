//array nutrito da funzione numero random
let array = [];
//funzione per stampa griglia
let btnPlay= document.getElementById(`play`);
//al click del bottone play parte
btnPlay.addEventListener(`click`,function(){
    //ottengo e salvo la difficoltà selezionata
    let sceltaUtente = document.getElementById(`difficulty`).value;
    console.log(`la difficoltà è la numero ${sceltaUtente} `);
    //stampare griglia come richiesto da utente. Ho 3 opzioni
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
        //aggiungo numeri casuali da 1 a 100 alle celle (no doppioni)
        cella.innerHTML += array[i];
        //aggiungo classi alle celle
        if(numCelle == 100){
            cella.classList.add(`box10`);
        }else if(numCelle == 81){           
            cella.classList.add(`box9`);
        }else if(numCelle == 49){           
            cella.classList.add(`box7`);
        }          
        //modifico colore celle al click
        cella.addEventListener(`click`,function (){
            console.log(this)
            this.classList.add(`boxCliccato`)
        })
    }       
});
//funzione per generare numero random tra 1 e 100 
//DA RISOLVERE DUPLICATI
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
};    

for(y = 1; y <= 100; y++){   
    let numeroRandom = getRandomInt(1, 100);
    do{
        array.push(numeroRandom)
    } while (!array.includes(numeroRandom));
}
console.log(array);