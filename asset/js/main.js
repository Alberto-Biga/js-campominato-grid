//funzione per stampa griglia
let btnPlay= document.getElementById(`play`);
//al click del bottone play parte
btnPlay.addEventListener(`click`,function(){
    //ottengo e salvo la difficoltà selezionata
    let sceltaUtente = document.getElementById(`difficulty`).value;
    console.log(`la difficoltà è la numero ${sceltaUtente}`);
})

