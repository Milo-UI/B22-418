/*
    Il metodo reduce() non restituisce necessariamente un nuovo array, ma restituisce qualsiasi valore che vogliamo basato sul valore che si trova nell'array iterato.
    reduce() itera un array e chiama una callback function per ogni elemento dell'array, ma non sempre lo si usa per ottenere un array aggiornato.
*/
const punteggi = [10, 20, 60, 40, 70, 90, 30];

// Se volessimo sapere QUANTI di questi punteggi siano superiori a 50:
// Accetta due parametri in genere chiamati accumulator e current
const risultati = punteggi.reduce((acc, curr) => {
    if (curr > 50) {
        acc++;
    }
    return acc;
}, 0); // Settiamo a 0 l'accumulator del metodo passandogli il valore iniziale come secondo argomento

console.log(risultati);

// Se avessimo un cabinato e volessimo accumulare i punteggi di un singolo giocatore che ha giocato più volte:
const giocatori = [
    {
        giocatore: 'mario',
        punteggio: 50,
    },
    {
        giocatore: 'yoshi',
        punteggio: 30,
    },
    {
        giocatore: 'mario',
        punteggio: 70
    },
    {
        giocatore: 'bowser',
        punteggio: 60
    },
    {
        giocatore: 'mario',
        punteggio: 50
    },
    {
        giocatore: 'yoshi',
        punteggio: 30
    },
    {
        giocatore: 'mario',
        punteggio: 70
    },
    {
        giocatore: 'bowser',
        punteggio: 60
    },
    {
        giocatore: 'mario',
        punteggio: 30
    },
    {
        giocatore: 'yoshi',
        punteggio: 30
    },
    {
        giocatore: 'mario',
        punteggio: 90
    },
    {
        giocatore: 'bowser',
        punteggio: 60
    }
];

const totaleMario = giocatori.reduce((acc, curr) => {
    if (curr.giocatore === 'mario') {
        acc += curr.punteggio;
    }
    return acc;
}, 0);

console.log(`Mario ha totalizzato un punteggio di: ${totaleMario} punti`);