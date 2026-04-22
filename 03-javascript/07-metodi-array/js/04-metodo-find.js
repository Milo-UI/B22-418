/*
    Il metodo find() restituisce il primo valore trovato in un array in grado di passare un controllo che viene eseguito all'interno di una callback function.
    Il metodo itera l'array finché non trova un elemento che soddisfa la condizione specificata nella callback. Appena lo trova, lo restituisce e si ferma.
*/
// Proviamo a trovare il primo valore superiore a 50 all'interno dell'array
const punteggi = [10, 5, 0, 40, 60, 10, 20, 70];

const primoPunteggioAlto = punteggi.find(punteggio => punteggio > 50);

console.log(primoPunteggioAlto);