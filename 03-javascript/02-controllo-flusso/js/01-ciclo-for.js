/*
    Il ciclo for è un loop che esegue un blocco di codice per un numero determinato di volte deciso dalla sua condizione.
    La sintassi prevede: 
        - Parola chiave for
        - Parentesi tonde che contengono gli elementi necessari per porre la condizione
            - inizializzazione di una variabile
            - condizione per cui la variabile è vera o falsa
            - aggiornamento della variabile
        - Parentesi graffe che contengono il blocco di codice da eseguire finché la condizione viene rispettata
*/
for (let i = 0; i < 5; i++) {
    console.log(`In loop: ${i}`);
}

console.log('Loop finito!');

// Difficilmente la condizione conterrà un numero fisso come il 5 qua sopra, il più delle volte cicleremo dei dati di qualche tipo
const students = ['Erica', 'Sam', 'Michele', 'Arcibaldo'];

for (let i = 0; i < students.length; i++) {
    // console.log(i);
    console.log(students[i]);
}

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/*
    Scrivi un loop che itera da 0 a 15. Per ogni ciclo controlla se il numero è pari o dispari. Mostra il risultato in console.
*/
// Soluzione con if statement
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i, 'è pari');
    } else {
        console.log(i, 'è dispari');
    }
}

// Soluzione senza if statement
const risultati = ["è pari", "è dispari"];

for (let i = 0; i <= 15; i++) {
    console.log(`${i} ${risultati[i % 2]}`);
}