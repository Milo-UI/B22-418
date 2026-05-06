/*
    La Session Storage ̀e un altro tipo di archiviazione web messa a disposizione dal browser. L'API è praticamente identica a quella della Local Storage (setItem, getItem, removeItem, clear), quindi se sappiamo usare una sappiamo usare anche l'altra.

    La differenza fondamentale ̀e il ciclo di vita dei dati:

        - Local Storage: i dati persistono finché non vengono cancellati esplicitamente. Anche se chiudiamo il browser e lo riapriamo, i dati sono ancora lì

        - Session Storage: i dati vivono solo per la durata della sessione, cioè finché la tab del browser resta aperta. Quando chiudiamo la tab i dati spariscono. Se apriamo lo stesso sito in una nuova tab, parte una nuova Session Storage vuota.

    Quando conviene usare la Session Storage al posto della Local? Quando dobbiamo memorizzare dati temporanei che hanno senso solo durante la visita corrente: lo stato di un form a più step, dei filtri applicati a una lista, dei dati di navigazione che non vogliamo far sopravvivere alla chiusura della tab.
*/
// Salvare i dati in session storage
sessionStorage.setItem('utente', 'Milo');
sessionStorage.setItem('livello', 3);

// Recuperare i dati dalla session storage
let utente = sessionStorage.getItem('utente');
let livello = sessionStorage.getItem('livello');
console.log(utente, livello);

// Aggiornare dati in session storage
sessionStorage.setItem('utente', 'Yoshi');

utente = sessionStorage.getItem('utente');
console.log(utente);

// Cancellare dati
sessionStorage.removeItem('livello');
// sessionStorage.clear();

// Anche la session storage memorizza solo stringhe, quindi per oggetti e array vale la stessa regola di stringify e parse vista per local storage
const carrello = [
    { prodotto: 'Maglietta', quantita: 2 },
    { prodotto: 'Cappello', quantita: 1 }
];

sessionStorage.setItem('carrello', JSON.stringify(carrello));

const carrelloSalvato = JSON.parse(sessionStorage.getItem('carrello'));
console.log(carrelloSalvato);