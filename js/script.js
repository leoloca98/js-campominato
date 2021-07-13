/*

Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.

I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi).

Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero.

Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.

*/

// * PREPARAZIONE, VARIABILI, ARRAY
// 1 - Creare un array che conterrà le bombe
// 2 - Generare numeri random da 1 a 100 (compresi)
// 3 - Controllare se i numeri sono contenuti nell'array delle bombe, se no aggiungerli. Se si richiedere finchè non si arriva a 16 bombe
// 4 - Creare un array che conterrà i numeri scelti dall'utente

// * LOGICA DEL GIOCO
// 1 - Chiedere il numero all'utente
// 2 - Controllare se il numero è gia presente nell'array delle bombe
// 3 - Se è presente mostrare alert "GAME OVER" + stampare il risultato ottenuto dal giocatore. (arrayNumeri.lenght)
// 4 - Se non è presente controllare se c'è in quello dei numeri scelti dall'utente
// 5 - Se si richiedere finchè non da un numero diverso da quelli presenti
// 6 - Se non è presente neanche in questo pushare il numero nell'array
// 7 - Far ricominciare il gioco dal punto //#1

// |DICHIARAZIONE VARIABILI

let bombsContainer = [];
let userNumContainer = [];
let randomNum = 0;                                                                          // Conterrà i numeri generati random per le bombe
let gameOver = false;                                                                       // Verrà usata come flag per il GameOver

// |INSERIMENTO DEI NUMERI BOMBA NELL'ARRAY (NO DOPPIONI)

while (bombsContainer.length < 16) {
    randomNum = Math.floor(Math.random() * (101 - 1) + 1);                                  // Genero un numero random da 1 a 100 (compresi)
    if (!bombsContainer.includes(randomNum)) {                                              // Se il numero non è incluso nell'array bombe
        bombsContainer.push(randomNum);                                                     // Allora lo pusho al suo interno
    }
}

console.table(bombsContainer);

while (gameOver == false) {
    const userNum = parseInt(prompt("Inserisci un numero da 1 a 100 (compresi)"));          // Contiene il numero scelto dall'utente
    if (userNum >= 1 && userNum <= 100) {
        if (bombsContainer.includes(userNum)) {                                             // Se il numero inserito è gia nell'array delle bombe...
            gameOver = true;                                                                // Imposto la flag su true
            console.log("GAME OVER");                                                       // Stampo GAME OVER (L'utente ha "colpito" una bomba)
            console.log("Hai ottenuto il punteggio di: " + userNumContainer.length);        // Stampo il punteggio ottenuto dall'utente
        }
        if (!userNumContainer.includes(userNum)) {                                          // Se il numero non è presente nell'array dei numeri scelti
            userNumContainer.push(userNum);                                                 // Pusho al suo interno il numero
        }
        console.log(userNumContainer);
    }
}


