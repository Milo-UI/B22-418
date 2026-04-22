/*
    filter() è un metodo per array che possiamo usare quando per esempio otteniamo dei dati da un database e vogliamo filtrare determinati elementi dall'array che riceviamo in base a una certa condizione.
    filter() quindi itera un array, come il forEach(), ed effettua un controllo su ogni elemento all'interno di una funzione di callback. Se un elemento passa il controllo, questo viene mantenuto all'interno dell'array, ma se non passato l'elemento viene rimosso dall'array.

    È un metodo "non distruttivo", cioè non altera l'array originale.
*/
let punteggi = [10, 30, 15, 25, 50, 40, 5];

let punteggiFiltrati = punteggi.filter(punteggio => punteggio > 20);

console.log(punteggiFiltrati);

// Essendo non distruttivo, l'array punteggi rimane invariato
console.log(punteggi);

// Per esempio, possiamo usare filter() per ottenere dall'elenco degli utenti di un sito solo quelli che hanno abbonamento premium
const utenti = [
    {
        nome: 'milo',
        premium: false
    },
    {
        nome: 'dario',
        premium: true
    },
    {
        nome: 'oscar',
        premium: true
    },
    {
        nome: 'luca',
        premium: false
    }
];

// const utentiPremium = utenti.filter(utente => {
//     return utente.premium;
// });

const utentiPremium = utenti.filter(utente => utente.premium);

console.log(utentiPremium);