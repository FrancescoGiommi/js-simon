/* Descrizione:

Visualizzare in pagina 5 numeri casuali. 

Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri 
che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
da indovinare sono stati individuati.

Potete usare liste, input e bottoni non stilizzati, 
mettendo stampe di debug in console e risultato finale in un alert.
Solo una volta finito, a piacere e facoltativamente, potete aggiungete lo stile.
NOTA:  non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS

Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse 
da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno
> Pensate prima in italiano.
> Dividete in piccoli problemi la consegna.
> Individuate gli elementi di cui avete bisogno per realizzare il programma.
> Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, 
indica quali e quanti numeri ci sono in comune tra i due array" */

// ! RACCOLTA DATI
/* genero gli elementi con l'ID */
const randomNumber1El = document.getElementById("random-number-1");
const randomNumber2El = document.getElementById("random-number-2");
const randomNumber3El = document.getElementById("random-number-3");
const randomNumber4El = document.getElementById("random-number-4");
const randomNumber5El = document.getElementById("random-number-5");

const randomNumber1 = randomNumber1El.Value;
const randomNumber2 = randomNumber2El.Value;
const randomNumber3 = randomNumber3El.Value;
const randomNumber4 = randomNumber4El.Value;
const randomNumber5 = randomNumber5El.Value;

// * PROCEDURA
/* genero 5 numeri casuali */
let numberGenerator1 = Math.floor(Math.random() * 100 + 1);
let numberGenerator2 = Math.floor(Math.random() * 100 + 1);
let numberGenerator3 = Math.floor(Math.random() * 100 + 1);
let numberGenerator4 = Math.floor(Math.random() * 100 + 1);
let numberGenerator5 = Math.floor(Math.random() * 100 + 1);

randomNumber1El.innerText = numberGenerator1;
randomNumber2El.innerText = numberGenerator2;
randomNumber3El.innerText = numberGenerator3;
randomNumber4El.innerText = numberGenerator4;
randomNumber5El.innerText = numberGenerator5;

// ! ELABORAZIONE

// ! OUTPUT
