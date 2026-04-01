/*
    Lo scope (o ambito) si riferisce alla visibilità delle variabili e delle funzioni in diverese parti del codice.
*/
// Si parla di variabili GLOBALI quando dichiarate al di fuori di qualsiasi funzione o blocco i codice circoscritto e sono accessibili da qualsiasi parte del codice.
let age = 30;

console.log(`Fuori dal blocco: ${age}`);

if (true) {
    console.log(`Dentro al blocco: ${age}`);
}

// Si parla di variabili LOCALI quando queste vengono dichiarate all'interno di un blocco di codice (come un ciclo, un if statement o una funzione)
if (true) {
    let varLocale = 'Sono una variabile locale';
    console.log(`Dentro al blocco: ${varLocale}`); // Accessibile all'interno del blocco in cui è stata dichiarata
}

// console.log(`Fuori dal blocco: ${varLocale}`); // Non accessibile al di fuori del blocco in cui è stata dichiarata

let email = 'mia@mail.it';
console.log(email);

// let email = 'altra@mail.it'; // La parola chiave let non ci permette di dichiarare una variabile con lo stesso nome di un'altra perché si trovano nello stesso scope

if (true) {
    let email = 'ennesima@mail.it'; // Lo scope di questa variabile rimane all'interno del blocco di codice dell'if, non ci restituisce errore perché non può essere usata all'esterno
    console.log(email);
}

console.log(email);