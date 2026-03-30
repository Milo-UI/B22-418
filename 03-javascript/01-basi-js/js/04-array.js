/*
    Gli array ci permettono di memorizzare una collezione di valori correlati fra loro.
    Sono oggetti 0-based.

    - Le parentesi quadre indicano l'inizio e la fine dell'array
    - Ogni elemento è separato da virgola
*/
let studenti = ['Agamennone', 'Achille', 'Patroclo', 'Elena', 'Ettore'];

console.log(studenti);

// Si può estrarre un singolo elemento specifico utilizzando la bracket notation, andando a richiamare l'indice dell'elemento
let primoStudente = studenti[0];
let terzoStudente = studenti[2];

console.log(primoStudente, terzoStudente);

/* ---------------------------- Proprietà length ---------------------------- */
// Possiamo risalire alla lunghezza di un array, ovvero al numero di elementi al suo interno, tramite la proprietà length
let numeroStudenti = studenti.length;
console.log(numeroStudenti);

/* --------------------------- Metodi degli array --------------------------- */
// Si può usar la bracket notation per cambiare il valore di un'elemento
studenti[1] = 'Cassandra';
console.log(studenti);

// AGGIUNGERE ELEMENTI
// Possiamo aggiungere elementi alla FINE di un array
studenti.push('Odisseo', 'Paride');
console.log(studenti);

// Possiamo aggiungere elementi all'INIZIO di un array
studenti.unshift('Aiace');
console.log(studenti);

// RIMUOVERE ELEMENTI
// Rimuovere l'ULTIMO elemento di un array
studenti.pop();
console.log(studenti);

// Rimuovere il PRIMO elementi di un array
studenti.shift();
console.log(studenti);

// JOIN
// Prende gli elementi di un array e li unisce all'interno di una stringa separati dal carattere o caratteri che gli passiamo tra parentesi tonde
let allStudenti = studenti.join(', ');
console.log(allStudenti);

// INDEXOF
// Come per le stringhe, possiamo risalire all'indice di un elemento
console.log(studenti.indexOf('Cassandra'));

// CONCAT
// Prende un array e ne concatena un altro
let studentiAggiornato = studenti.concat(['Circe', 'Penelope']);
console.log(studentiAggiornato);

// SPLICE
// array.splice(indice, quantiElementiRimuovere, elementoDaAggiungere)
studenti.splice(4, 1);
console.log(studenti);

studenti.splice(4, 0, 'Polifemo');

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/*
    Scontrino della spesa

    - Creare due array
        - il primo contiene la lista dei prodotti
        - il secondo i prezzi dei prodotti
    - Stampare in console il secondo elemento dell'array e il suo prezzo

    - Popolare lo scontrino che sarà un UL con id scontrino con un list item per ogni prodotto e il suo costo

    - Costruire un elemento P nel quale verrà stampato il subototale, cioè il totale senza iva

    - Costruire un elemento P nel quale verrà stampato l'ammontare dell'iva (22%)

    - Calcolare il totale dei prezzi compreso di iva e stamparlo all'interno del paragrafo con id totale

    MINIMO 8 prodotti
*/
let elScontrino = document.getElementById('scontrino');


elScontrino.innerHTML = '<li>Ancora nessun prodotto</li>';
