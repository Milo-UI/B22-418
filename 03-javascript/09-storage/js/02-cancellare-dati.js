// Salvare dati in local storage: localStorage.setItem('key', 'value');
localStorage.setItem('name', 'milo');
localStorage.setItem('age', 34); // Anche se scritto come number, diventa stringa

// Recuperare dati dalla local storage: localStorage.getItem('key');
let nome = localStorage.getItem('name');
let eta = localStorage.getItem('age');

console.log(nome, eta);

// Cancellare dati dalla local storage: localStorage.removeItem('key');
// localStorage.removeItem('name');
localStorage.clear(); // Non richiede argomenti perché cancella tutti i dati della local storage

nome = localStorage.getItem('name');

eta = localStorage.getItem('age');

console.log(nome, eta); // Otteniamo null perché non trova il valore