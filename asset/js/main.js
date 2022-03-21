//funzione per stampa griglia
let btnPlay= document.getElementById(`play`);
//al click del bottone play parte
btnPlay.addEventListener(`click`,function(){
    //ottengo e salvo la difficoltà selezionata
    let sceltaUtente = document.getElementById(`difficulty`).value;
    console.log(`la difficoltà è la numero ${sceltaUtente} `);
    //stampare griglia come richiesto da utente. Ho 3 opzioni
    //griglia 10x10
    if( sceltaUtente == "1"){
        for (let i = 1; i<= 100; i++){
            //creo tutte le celle
            let cella = document.createElement(`div`);
            //aggiungo classi alle celle
            cella.classList.add(`box10`);
            grid.appendChild(cella)
            //modifico colore celle al click
            cella.addEventListener(`click`,function (){
                console.log(this)
                this.classList.add(`boxCliccato`)
            })
        }
    //griglia 9x9
    }else if( sceltaUtente == "2"){
        for (let i = 1; i<= 81; i++){
            //creo tutte le celle
            let cella = document.createElement(`div`);
            //aggiungo classi alle celle
            cella.classList.add(`box9`);
            grid.appendChild(cella)
            //modifico colore celle al click
            cella.addEventListener(`click`,function (){
                console.log(this)
                this.classList.add(`boxCliccato`)
            })
        }
    //griglia 7x7
    }else if( sceltaUtente == "3"){
        for (let i = 1; i<= 49; i++){
            //creo tutte le celle
            let cella = document.createElement(`div`);
            //aggiungo classi alle celle
            cella.classList.add(`box7`);
            grid.appendChild(cella)
            //modifico colore celle al click
            cella.addEventListener(`click`,function (){
                console.log(this)
                this.classList.add(`boxCliccato`)
            })
        }
    }
    
})

