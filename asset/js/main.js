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
    //creo tutte le celle
    for (let i = 1; i<= numCelle; i++){        
        let cella = document.createElement(`div`);
        //aggiungo numeri alle celle
        cella.innerHTML += i
        //aggiungo classi alle celle
        if(numCelle == 100){
            cella.classList.add(`box10`);
        }else if(numCelle == 81){           
            cella.classList.add(`box9`);
        }else if(numCelle == 49){           
            cella.classList.add(`box7`);
        }
        
        grid.appendChild(cella)
        //modifico colore celle al click
        cella.addEventListener(`click`,function (){
            console.log(this)
            this.classList.add(`boxCliccato`)
        })
    }   
})