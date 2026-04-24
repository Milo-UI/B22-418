/*
    Può capitare di voler organizzare o riordinare un array di dati in un modo particolare (ordine alfabetico, ordine crescente, da chi ha il punteggio più alto in giù, ecc).
    È un metodo distruttivo, quindi agisce sull'array originale.
*/
/* ---------------------- ESEMPIO 1 - ORDINARE STRINGHE --------------------- */
const nomi = ['mario', 'yoshi', 'luigi', 'peach', 'bowser'];

// sort() di default riarrangia l'array in ordine alfabetico
nomi.sort(); // Non restituisce un nuovo valore, non crea un nuovo valore, ma cambia quello originale

console.log(nomi);

// Se volessimo ordinare gli elementi di un array in ordine alfabetico, ma partendo dalla z fino ad arrivare alla a
nomi.sort().reverse();

/* ----------------------- ESEMPIO 2 - ORDINARE NUMERI ---------------------- */
const punteggi = [10, 50, 20, 5, 35, 70, 45];

// Senza specificare nulla, tiene in considerazione solo il primo numero della cifra
// punteggi.sort();

// Ordino dal più grande al più piccolo
punteggi.sort((a, b) => b - a);

// Ordino dal più piccolo al più grande
punteggi.sort((a, b) => a - b);

console.log(punteggi);

/* ---------------------- ESEMPIO 3 - ORDINARE OGGETTI ---------------------- */
const giocatori = [
    {
        giocatore: 'mario',
        punteggio: 20
    },
    {
        giocatore: 'yoshi',
        punteggio: 10
    },
    {
        giocatore: 'peach',
        punteggio: 50
    },
    {
        giocatore: 'luigi',
        punteggio: 30
    },
    {
        giocatore: 'bowser',
        punteggio: 70
    }
];

// Non funziona perché non sa cosa guardare per capire come ordinare gli oggetti (giocatore o punteggio?)
// giocatori.sort();

// Usiamo quindi una funzione come argomento del metodo, la funzione di comparazione. Questa funzione accetta due parametri che rappresentano due elementi consecutivi all'interno dell'array. Nella funzione li compareremo per capire chi viene prima
// giocatori.sort((a, b) => {
//     if (a.punteggio > b.punteggio) {
//         return -1;
//     } else if (b.punteggio > a.punteggio) {
//         return 1
//     } else {
//         return 0
//     }
// });

// giocatori.sort((a, b) => b.punteggio - a.punteggio);

const giocatoriPerPunteggio = [...giocatori].sort((a, b) => b.punteggio - a.punteggio);

console.log(giocatori);
console.log(giocatoriPerPunteggio);