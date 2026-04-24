const prodotti = [
    {
        nome: 'stella',
        prezzo: 30
    },
    {
        nome: 'fungo',
        prezzo: 10
    },
    {
        nome: 'guscio verde',
        prezzo: 40
    },
    {
        nome: 'buccia di banana',
        prezzo: 5
    },
    {
        nome: 'guscio rosso',
        prezzo: 50
    }
];

// Filtro i prodotti che costano più di 20
// const filtrato = prodotti.filter(prodotto => prodotto.prezzo > 20);
// console.log(filtrato);

// Prendo l'array filtrato e lo mappo in un altro array con il prezzo scontato
// const promozioni = filtrato.map(prodottoFiltrato => {
//     return `${prodottoFiltrato.nome} è in promozione e adesso costa ${prodottoFiltrato.prezzo / 2}`;
// });

// console.log(promozioni);

// Possiamo concatenare i metodi, visto che filter restituisce un array e map è un metodo per array
const promozioni = prodotti
    .filter(prodotto => prodotto.prezzo > 20)
    .map(prodotto => `${prodotto.nome} è in promozione e adesso costa ${prodotto.prezzo / 2} euro`);

console.log(promozioni);