/* -------------------------------------------------------------------------- */
/*                               PARAMETRO REST                               */
/* -------------------------------------------------------------------------- */
/*
    Il parametro rest ci permette di raccogliere un numero indefinito di argomenti in un array. Viene utilizzato nella definizione di funzioni per gestire in modo flessibile gli argomenti passati.

    Il paramentro rest deve sempre essere l'utlimo parametro nella definizione della funzione e può essere utilizzato una sola volta.
*/
// Se per esempio avessimo una funzione alla quale vogliamo passare degli argomenti, ma non sappiamo quanti possiamo usare rest. Questo prenderà tutti gli argomenti che gli passeremo alla chiamata della funzione e li raccoglierà in un singolo parametro array.
const raddoppia = (...numeri) => {
    // console.log(numeri);
    return numeri.map(num => num * 2);
};

const result = raddoppia(1, 2, 4, 5, 7, 8, 4, 2);
console.log(result);

/* -------------------------------------------------------------------------- */
/*                               SINTASSI SPREAD                              */
/* -------------------------------------------------------------------------- */
/*
    La sintassi spread ci consente di espandere un array in un contesto in cui ci si aspetta più elementi. Viene comunemente utilizzata per copiare, concatenare o passare elementi come argomenti.
*/
/* ------------------------- Sintassi spread (array) ------------------------ */
// Simile a rest, la sintassi spread permette di separare un array nei suoi componenti individuali
const docenti = ['milo', 'dario', 'oscar'];
console.log(...docenti); // Vediamo i tre elementi, ma non all'interno di un array

// Espandere un array
const iel = ['egle', 'stefania', ...docenti];
console.log(iel);

const bodyEl = document.querySelector('body');
const bodyChildren = [...bodyEl.children];
console.log(bodyChildren);

/* ------------------------ Sintassi spread (oggetti) ----------------------- */
const persona = {
    nome: 'milo',
    eta: 35,
    posizione: 'docente'
};
console.log(persona);

// const clonePersona = persona; // Così non creo una copia dell'oggeto persona, ma un riferimento all'oggetto persona già esistente
// clonePersona.citta = 'Torino';

const clonePersona = {
    ...persona,
    citta: 'Torino' // Posso aggiungere nuove proprietà
}; // Così creo un nuovo oggetto ma con gli stessi parametri di persona

console.log(persona);
console.log(clonePersona);