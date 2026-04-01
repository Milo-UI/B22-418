/*
    Le arrow function sono funzioni scritte in maniera più moderna e concisa, rendendo il codice più breve e leggibile
*/
// const calcolaPrezzoScontato = function (prezzo) {
//     return prezzo - (prezzo * 20 / 100);
// }

// Non abbiamo bisogno della parola chiave
// const calcolaPrezzoScontato = (prezzo) => {
//     return prezzo - (prezzo * 20 / 100);
// }

// Se abbiamo un solo parametro, possiamo omettere le parentesi tonde. Sono OBBLIGATORIE quando abbiamo più parametri o quando non ne abbiamo proprio
// const calcolaPrezzoScontato = prezzo => {
//     return prezzo - (prezzo * 20 / 100);
// }

// Se abbiamo un semplice return statement all'interno della funzione, possiamo anche liberarci della parola chiave return e delle parentesi graffe, portando il blocco di codice sulla stessa linea della dichiarazione
const calcolaPrezzoScontato = prezzo => prezzo - (prezzo * 20 / 80);

const prezzoScontato = calcolaPrezzoScontato(100);
console.log(`Il prezzo scontato è €${prezzoScontato}`);

// Secondo esempio
// const saluta = function () {
//     return 'Ciao Utente';
// };

const saluta = () => 'Ciao Utente';

const saluto = saluta();
console.log(saluto);

// Terzo esempio
// const calcolaTotaleScontrino = function (prodotti, tassa) {
//     let totale = 0;

//     for (let i = 0; i < prodotti.length; i++) {
//         totale += prodotti[i] + prodotti[i] * tassa;
//     }

//     return totale;
// };

const calcolaTotaleScontrino = (prodotti, tassa) => {
    let totale = 0;

    for (let i = 0; i < prodotti.length; i++) {
        totale += prodotti[i] + prodotti[i] * tassa;
    }

    return totale;
};

console.log(calcolaTotaleScontrino([10, 15, 30], 0.2));
