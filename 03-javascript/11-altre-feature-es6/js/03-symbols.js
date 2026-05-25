/*
    Symbol è l'ultimo tipo primitivo che ci manca da vedere. Non possono essercene due uguali e una volta creati non possono essere modificati.

    I simboli possono essere usati come chiavi o poprietà di oggetti
*/
const symbolUno = Symbol('nome');
const symbolDue = Symbol('nome');

console.log(symbolUno, symbolDue, typeof symbolUno); // Sembrano uguali
console.log(symbolUno === symbolDue); // false, perché ogni simbolo è unico

const docente = {};

docente.eta = 35;
docente['materia-insegnata'] = 'HTML e CSS';
docente['materia-insegnata'] = 'JavaScript';

docente[symbolUno] = 'dario';
docente[symbolDue] = 'milo';

console.log(docente);
console.log(docente[symbolUno]);

// Se ricevessimo un oggetto da una libreria esterna e volessimo aggiungere una nostra proprietà senza rischiare di svrascrivere qualcosa che già esiste, con Symbol non abbiamo problemi

const utente = { nome: 'Dario', ruolo: 'admin' }; // viene da un'API

// Con una stringa normale, rischiamo collisioni di nomi:
utente.id = 'mio-id-interno'; // 'id' probabilmente è già usato dalla libreria

// Con un Symbol, la collisione è praticamente impossibile:
const ID_INTERNO = Symbol('id');
utente[ID_INTERNO] = 'mio-id-interno'; // Garantito che sia unico -> nessun rischio

// I Symbol sono invisibili ai metodi standard
const prodotto = {
    nome: 'Laptop',
    prezzo: 999
};

const _metadati = Symbol('metadati');
prodotto[_metadati] = { aggiuntoIl: '2026-01-01', fonte: 'interna' };

console.log(prodotto);
console.log(Object.keys(prodotto)); // nome e prezzo, ma il Symbol è escluso
console.log(JSON.stringify(prodotto)); // stampa l'oggetto intero, ma Symbol è escluso

// Questo comportamento è utile per dati "interni" che non devono essere serializzato o iterati accidentalmente