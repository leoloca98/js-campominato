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

// |FORM
const userNumField = document.getElementById("user-number");
const selectDiff = document.getElementById("select-difficulty");
const diffBtn = document.getElementById("difficulty-btn");
const verifyBtn = document.getElementById("verify-btn");
const youLose = document.getElementById("game-over");
const result = document.getElementById("result");
const counter = document.getElementById("counter");
const numMessage = document.getElementById("message-number");
const numberRight = document.getElementById("number-right");
const resetBtn = document.getElementById("reset-btn");

// |SECTION
const gameDiffSection = document.getElementById("game-difficulty");
const numberSection = document.getElementById("number");
const buttonVerifySection = document.getElementById("button-verify");
const counterSection = document.getElementById("increase");
const endGameSection = document.getElementById("end-game");


// |ELEMENTS    

let bombsContainer = [];                                                                            // Array per le bomber
let userNumContainer = [];                                                                          // Array per i numeri dell'utente
let randomNum = 0;                                                                                  // Conterrà i numeri generati random per le bombe
let userNum = 0;                                                                                    // Numero scelto dall'utente
let difficulty = 100;                                                                               // Verrà usata per scegliere la difficoltà
let gameOver = false;                                                                               // Verrà usata come flag per il GameOver 

// |PREPARAZIONE
numberSection.classList.add("d-none");                                                              // Rimuovo dal flusso la sezione NUMBER
buttonVerifySection.classList.add("d-none");                                                        // Rimuovo dal flusso la sezione BUTTON
endGameSection.classList.add("d-none");                                                             // Rimuovo dal flusso la sezione END-GAME

// |GIOCO

// #CLICK DIFFICULTY
diffBtn.addEventListener("click", function () {                                                     // Alla pressione del button SELECT DIFFICULTY...

    // |SELEZIONARE DIFFICOLTA'
    difficulty = selectDiff.value;                                                                  // Imposta la difficoltà del gioco

    // |INSERIMENTO DEI NUMERI BOMBA NELL'ARRAY IN BASE ALLA DIFFICOLTA' (NO DOPPIONI)
    while (bombsContainer.length < 16) {                                                            // Se il vettore non ha raggiunto il 16 "posti occupati"
        randomNum = Math.floor(Math.random() * (difficulty) + 1);                                   // Genero un numero random da 1 a 100 (compresi)
        if (!bombsContainer.includes(randomNum)) {                                                  // Se il numero non è incluso nell'array bombe
            bombsContainer.push(randomNum);                                                         // Allora lo pusho al suo interno
        }
    }
    console.table(bombsContainer);                                                                  // Stampo in console la tabella delle posizioni delle bombe

    gameDiffSection.classList.add("d-none");                                                        // Rimuovo dal flusso la sezione DIFFICULTY
    numberSection.classList.remove("d-none");                                                       // Rimetto nel flusso la sezione NUMBER
    buttonVerifySection.classList.remove("d-none");                                                 // Rimetto nel flusso la sezione BUTTON
    counterSection.classList.remove("d-none");                                                      // Rimetto nel flusso la sezione COUNTER


    numMessage.innerHTML = "Inserire un numero da 1 a " + difficulty;                               // Messaggio che anticipa l'input del numero (in base alla difficoltà)

});


// #CLICK VERIFY   

verifyBtn.addEventListener("click", function () {                                                   // Alla pressione del button VERIFY...
    userNum = parseInt(userNumField.value);                                                         // Numero inserito dall'utente                                                                       

    if (gameOver == false) {                                                                        // Controllo se la flag è stata beccata una bomba
        if (userNum >= 1 && userNum <= difficulty) {                                                // Controllo se è compreso tra 1 e difficulty
            if (bombsContainer.includes(userNum)) {                                                 // Se il numero inserito è gia nell'array delle bombe...    
                //|GAME OVER
                gameOver = true;                                                                    // Imposto la flag su true

                endGameSection.classList.remove("d-none");                                          // Rimetto nel flusso la sezione END-GAME
                numberSection.classList.add("d-none");                                              // Tolgo dal flusso la sezione NUMBER
                buttonVerifySection.classList.add("d-none");                                        // Tolgo dal flusso la sezione BUTTON

                youLose.innerHTML = "GAME OVER";                                                    // Stampo il messaggio di sconfitta
                result.innerHTML = "Hai ottenuto il punteggio di: " + userNumContainer.length;      // Stampo il punteggio ottenuto dall'utente 
                numberRight.innerHTML = "Hai indovinato i seguenti numeri: " + userNumContainer;    // Stampo tutti i numeri che ha indovinato l'utente

            }
            if (!userNumContainer.includes(userNum)) {                                              // Se il numero non è presente nell'array dei numeri scelti                                               
                userNumContainer.push(userNum);                                                     // Pusho al suo interno il numero
                userNumField.value = "";                                                            // Azzero il campo dei numeri
            }
            else {
                alert("Numero già inserito");                                                       // ALERT per numero gia inserito
            }
        } else alert("Inserire un numero da 1 a " + difficulty + " (compresi)");                    // ALERT per numero non compreso in 1 e difficulty

    }
});

// #CLICK RESET

resetBtn.addEventListener("click", function () {                                                    // Alla pressione del button RESET...

    gameOver = false;                                                                               // Reiposto la flag su false
    bombsContainer = [];                                                                            // Svuoto l'array delle bombe
    userNumContainer = [];                                                                          // Svuoto l'array dei numeri scelti dall'utente

    gameDiffSection.classList.remove("d-none");                                                     // Rimetto nel flusso la sezione DIFFICULTY
    numberSection.classList.add("d-none");                                                          // Tolgo dal flusso la sezione NUMBER
    buttonVerifySection.classList.add("d-none");                                                    // Tolgo dal flusso la sezione BUTTON
    counterSection.classList.add("d-none");                                                         // Tolgo dal flusso la sezione COUNTER
    endGameSection.classList.add("d-none");                                                         // Tolgo dal flusso la sezione END-GAME
});
