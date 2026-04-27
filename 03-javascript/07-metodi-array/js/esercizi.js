/* -------------------------------------------------------------------------- */
/*                            ESERCIZI METODI ARRAY                           */
/* -------------------------------------------------------------------------- */
const products = [
    { id: 1, name: "Mouse Wireless", category: "accessori", price: 24.99, stock: 12, rating: 4.2 },
    { id: 2, name: "Tastiera Meccanica", category: "accessori", price: 79.99, stock: 5, rating: 4.8 },
    { id: 3, name: "Monitor 27", category: "monitor", price: 189.99, stock: 3, rating: 4.5 },
    { id: 4, name: "Laptop Pro 15", category: "computer", price: 1299.99, stock: 2, rating: 4.9 },
    { id: 5, name: "Webcam HD", category: "accessori", price: 49.99, stock: 0, rating: 4.0 },
    { id: 6, name: "Hub USB-C", category: "accessori", price: 34.99, stock: 18, rating: 4.3 },
    { id: 7, name: "Monitor 24", category: "monitor", price: 149.99, stock: 7, rating: 4.1 },
    { id: 8, name: "Notebook Air 13", category: "computer", price: 999.99, stock: 4, rating: 4.6 }
];

const users = [
    { id: 1, name: "Luca", city: "Torino", isPremium: true, age: 28 },
    { id: 2, name: "Marta", city: "Milano", isPremium: false, age: 34 },
    { id: 3, name: "Giulia", city: "Roma", isPremium: true, age: 22 },
    { id: 4, name: "Paolo", city: "Torino", isPremium: false, age: 41 },
    { id: 5, name: "Elena", city: "Bologna", isPremium: true, age: 30 }
];

const orders = [
    { id: 101, userId: 1, total: 89.97, status: "spedito", payment: "carta" },
    { id: 102, userId: 2, total: 1299.99, status: "in lavorazione", payment: "paypal" },
    { id: 103, userId: 3, total: 49.99, status: "consegnato", payment: "carta" },
    { id: 104, userId: 1, total: 149.99, status: "consegnato", payment: "bonifico" },
    { id: 105, userId: 4, total: 24.99, status: "annullato", payment: "carta" },
    { id: 106, userId: 5, total: 224.98, status: "spedito", payment: "paypal" },
    { id: 107, userId: 2, total: 34.99, status: "consegnato", payment: "carta" }
];

/* -------------------------------------------------------------------------- */
/*                                   FILTER                                   */
/* -------------------------------------------------------------------------- */

/* ------------------------- 1) Prodotti disponibili ------------------------ */
/*
    Crea un nuovo array con tutti i prodotti che hanno stock maggiore di 0.
    Obiettivo: mostrare solo i prodotti acquistabili.
*/
const availableProducts = products.filter(product => product.stock > 0);
console.log(availableProducts);

/* ---------------------------- 2) Utenti premium --------------------------- */
/*
    Crea un array con tutti gli utenti che hanno isPremium uguale a true.
    Obiettivo: inviare una promozione solo agli utenti premium.
*/
const premiumUsers = users.filter(user => user.isPremium);
console.log(premiumUsers);

/* -------------------------------------------------------------------------- */
/*                                     MAP                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------- 3) Nomi dei prodotti -------------------------- */
/*
    Crea un array contenente solo i nomi dei prodotti.
    Obiettivo: generare una lista rapida di titoli per autocomplete o menu.
*/
const productsNames = products.map(product => product.name);
console.log(productsNames);

/* ---------------------- 4) Ordini con testo leggibile --------------------- */
/*
    Trasforma l’array orders in un nuovo array di stringhe del tipo:
    "Ordine 101 - totale: 89.97€ - stato: spedito"
    Obiettivo: preparare dati da stampare in dashboard o pannello admin.
*/
const readableOrders = orders
    .map(order => `Ordine ${order.id} - totale: ${order.total}€ - stato: ${order.status}`);
console.log(readableOrders);

/* -------------------------------------------------------------------------- */
/*                                   REDUCE                                   */
/* -------------------------------------------------------------------------- */

/* --------------------------- 5) Totale incassato -------------------------- */
/*
    Calcola la somma totale di tutti gli ordini.
    Obiettivo: ottenere il fatturato totale.
*/
const ordersTotal = orders.reduce((acc, curr) => {
    acc += curr.total;
    return acc;
}, 0);
console.log(ordersTotal);

/* ----------------- 6) Numero totale prodotti in magazzino ----------------- */
/*
    Calcola quanti pezzi ci sono in totale sommando tutti gli stock dei prodotti.
    Obiettivo: avere una panoramica dell’inventario.
*/
const inventoryTotal = products.reduce((acc, curr) => {
    acc += curr.stock;
    return acc;
}, 0);
console.log(`In magazzino ci sono in totale ${inventoryTotal} pezzi disponibili`);

/* -------------------------------------------------------------------------- */
/*                                    FIND                                    */
/* -------------------------------------------------------------------------- */

/* --------------------- 7) Cerca un prodotto specifico --------------------- */
/*
    Crea una funzione per trovare il prodotto tramite il suo id.
    Usa la funzione per trovare il prodotto con id 4.
*/
const findProductById = id => products.find(product => product.id === id);
console.log(findProductById(4));

/* ------------------------ 8) Primo ordine annullato ----------------------- */
/*
    Trova il primo ordine con status uguale a "annullato".
    Obiettivo: cercare rapidamente un caso problematico.
*/
const firstCanceledOrder = orders.find(order => order.status === 'annullato');
console.log(firstCanceledOrder);

/* -------------------------------------------------------------------------- */
/*                                    SORT                                    */
/* -------------------------------------------------------------------------- */

/* -------------- 9) Prodotti dal più economico al più costoso -------------- */
/*
    CREA UNA COPIA DELL’ARRAY products e ordinala per price crescente.
    Obiettivo: ordinamento per prezzo in un e-commerce.
*/
const productsAscendingPrice = [...products].sort((a, b) => a.price - b.price);
console.log(productsAscendingPrice);

/* ---------------- 10) Utenti dal più giovane al più anziano --------------- */
/*
    CREA UNA COPIA DELL’ARRAY users e ordinala per age crescente.
    Obiettivo: segmentazione o analisi utenti.
*/
const usersAscendingAge = [...users].sort((a, b) => a.age - b.age);
console.log(usersAscendingAge);

/* -------------------------------------------------------------------------- */
/*                               Esercizi bonus                               */
/* -------------------------------------------------------------------------- */

/* -------------------- 11) Nomi dei prodotti disponibili ------------------- */
/*
    Usa i metodi studiati per ottenere un array contenente solo i nomi dei prodotti disponibili in magazzino.
    Output atteso: un array di stringhe.
    Obiettivo: elenco veloce dei prodotti acquistabili.
*/
const availableProductsNames = products
    .filter(product => product.stock > 0)
    .map(product => product.name);

console.log(availableProductsNames);

/* ---------------------- 12) Totale ordini consegnati ---------------------- */
/*
    Usa i metodi studiati per calcolare la somma totale degli ordini con status uguale a "consegnato".
    Obiettivo: sapere quanto è stato effettivamente portato a termine e a quanto ammonta il guadagno.
*/
const deliveredOrdersTotal = orders
    .filter(order => order.status === 'consegnato')
    .reduce((acc, curr) => {
        acc += curr.total;
        return acc;
    }, 0);

console.log(deliveredOrdersTotal.toFixed(2));

/* ------------------------- 13) Prodotti top rated ------------------------- */
/*
    Trova tutti i prodotti con rating maggiore o uguale a 4.5 e restituisci solo i loro nomi.
*/
const topRatedProducts = products
    .filter(product => product.rating >= 4.5)
    .map(product => product.name);

console.log(topRatedProducts);
