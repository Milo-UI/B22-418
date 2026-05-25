/*
    I Set sono collezioni di valori unici, che significa che non possono contenere duplicati. I Set sono utili quando desideriamo memorizzare una lista di elementi e grarantire che ogni elemento sia presente una sola volta.

    Se proviamo ad aggiungere un valore già presente, questo non verrà aggiunto.
    Gli elementi in un Set mantengono l'ordine di inserimento.

    Possiamo memorizzare qualsiasi tipo di dato, inclusi oggetti e funzioni.

    Metodi principali:
        - add(value):       aggiunge un valore al Set
        - delete(value):    rimuove un valore dal Set
        - has(value):       controlla se un valore è presente nel Set
        - clear():          rimuove tutti i valori dal Set
    Proprietà:
        - size:             proprietà sche restituisce il numero di elementi nel Set
*/
const arrayNomi = ['alessandro', 'federico', 'alice', 'alessandro', 'simone'];
console.log(arrayNomi);

// const setNomi = new Set(['alessandro', 'federico', 'alice', 'alessandro', 'simone']);
const setNomi = new Set(arrayNomi);
console.log(setNomi);

// Se volessimo ottenere un array con i valori contenuti in un Set possiamo utilizzare la sintassi spread
// const nomiUnici = [...setNomi];
// Possiamo fare tutto questo procedimento in una singola linea
const nomiUnici = [...new Set(arrayNomi)];
console.log(nomiUnici);

// Set ha i suoi metodi
const eta = new Set();

// Aggiungo dei valori al Set
eta.add(20);
eta.add(25).add(30);
eta.add(25);

// Rimuovo un valore
eta.delete(25);
console.log(eta);

// Controllo se c'è un elemento nel Set
console.log(eta.has(30), eta.has(25)); // Restituisce un booleano

// Set non ha la proprietà length, ma ha size
console.log(eta.size);

// Rimuovo tutti i valori di un Set
eta.clear();
console.log(eta);

// Posso usare il metodo forEach() sui Set
const personaggi = new Set([
    {
        nome: 'mario',
        eta: 40
    },
    {
        nome: 'luigi',
        eta: 38
    },
    {
        nome: 'yoshi',
        eta: 15
    }
]);

personaggi.forEach(personaggio => {
    console.log(personaggio.nome, personaggio.eta);
});