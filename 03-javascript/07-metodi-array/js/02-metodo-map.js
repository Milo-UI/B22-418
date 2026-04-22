/*
    Il metodo map() prende un array e lo "mappa" in un nuovo array, cioè itera per ogni elemento, restituisce un valore aggiornato per ogni elemento dell'array originale e infine lo pusha in un nuovo array.
    Come filter(), anche map() richiede una funzione di callback e non è distruttivo, dal momento che crea un nuovo array lasciando l'originale intatto.
*/
// Abbiamo un array di prezzi e dobbiamo ottenere un nuovo array con i prezzi scontati
const prezzi = [20, 10, 30, 25, 15, 40, 80, 5];

// const prezziScontati = prezzi.map(prezzo => {
//     return prezzo / 2;
// });

const prezziScontati = prezzi.map(prezzo => prezzo / 2);

console.log(prezziScontati);

// Abbiamo un array di prodotti e vogliamo dimezzare il prezzo, ma solo se questo supera i 30€
const prodotti = [
    {
        nome: 'stella',
        prezzo: 20
    },
    {
        nome: 'fungo',
        prezzo: 40
    },
    {
        nome: 'guscio verde',
        prezzo: 30
    },
    {
        nome: 'buccia di banana',
        prezzo: 10
    },
    {
        nome: 'guscio rosso',
        prezzo: 50
    }
];

const prodottiScontati = prodotti.map(prodotto => {
    if (prodotto.prezzo > 30) {
        // Se facessimo così, andremmo a modificare il valore del prezzo del prodotto nell'array originale, rendendo questa operazione distruttiva
        // prodotto.prezzo = prodotto.prezzo / 2;
        // return prodotto;
        return {
            nome: prodotto.nome,
            prezzo: prodotto.prezzo / 2
        }
    } else {
        return prodotto;
    }
});

console.log(prodotti);
console.log(prodottiScontati);
