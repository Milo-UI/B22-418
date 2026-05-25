/* ----------------------- Gestione lista partecipanti ---------------------- */
/*
    Dati due gruppi di iscritti a un evento, costruisci un sistema che li unisca, divida il primo dagli altri (Principale e Riserve), elimini i duplicati e assegni a ciascuno un ID interno non accessibile dall'esterno
*/

const _id = Symbol('id');

const gruppo1 = ['Dario', 'Oscar', 'Dario', 'Luca'];
const gruppo2 = ['Oscar', 'Milo', 'Stefania'];

// Unisco i gruppi in un unico array con lo spread operator
// const tutti = [...gruppo1, ...gruppo2];
// console.log(tutti);

// function registra(principale, ...riserve) {
//     console.log('Principale:', principale);
//     console.log('Riserve:', riserve);
// };

// registra(...tutti);

// Set accetta un iterabile come un array e scarta automaticamente i duplicati
// const unici = [...new Set(tutti)];
// console.log(unici);
// console.log(`Partecipanti unici: ${unici.length}`);

// Costruisco gli oggetti partecipante con un ID Symbol come chiave
// const partecipanti = unici.map((nome, i) => ({
//     nome,
//     [_id]: i + 1
// }));

// console.log(partecipanti);
// console.log(partecipanti[0][_id]);
// console.log(Object.keys(partecipanti[0]));
// console.log(Object.getOwnPropertySymbols(partecipanti[0]));

function registra(principale, ...riserve) {
    const lista = [principale, ...riserve];
    const unici = [...new Set(lista)];
    return unici.map((nome, i) => ({ nome, [_id]: i = 1 }));
};

const risultato = registra(...[...gruppo1, ...gruppo2]);
console.log(risultato);