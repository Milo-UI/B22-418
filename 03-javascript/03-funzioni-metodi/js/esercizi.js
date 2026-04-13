/*
    Es1 Scrivi una funzione che accetti due argomenti, una stringa e una lettera. La funzione conterà il numero di occorrenze della specifica lettera nella stringa.

    Es2 Scrivi una funzione che accetta un argomento e restituisce il tipo di dato: oggetto, funzione, stringa, numero, ecc.

    Es3 Scrivi una funzione che accetta una stringa come parametro e trova la parola più lunga all'interno della frase.

    Es4 Scrivi un programma che accetta (da finestra = prompt) un numero come input e inserisce un dash (-) tra due numeri pari. Es ( 823486 -> 8-234-8-6 )

    Es5 Scrivi una funzione che rimuova gli elementi duplicati da un array.

    Es6 Dati due array, calcolare la somma degli elementi presenti allo stesso indice. Esempio:
    array1 = [1,0,2,4,6]
    array2 = [0,4,5,8,7]
    Output = [1,4,7,12,13]

    Es7 Scrivi una funzione che stampa a console tutti i numeri interi di un dato intervallo scelto da te. Per i multipli di 3 stamperà *Zoom! mentre per i multipli di 5 stamperà *Boom!. Controlla anche il caso in cui il numero è divisibile sia per 3 che per 5.
*/

/* ---------------------------------- ES 5 ---------------------------------- */
function rimuoviDuplicati(array) {
    let senzaDuplicati = [];

    for (let i = 0; i < array.length; i++) {
        if (!senzaDuplicati.includes(array[i])) {
            senzaDuplicati.push(array[i]);
        }        
    }

    return senzaDuplicati;
}

let arrayOriginale = [1, 2 ,3 , 4, 5, 5, 5, 6, 7];
let arraySenzaDuplicati = rimuoviDuplicati(arrayOriginale);
console.log(arraySenzaDuplicati);
