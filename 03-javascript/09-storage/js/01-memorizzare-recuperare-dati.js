/*
    Finora abbiamo creato applicazioni che, se refreshate, tornavano al loro stato iniziale, perdendo i dati inseriti dall'utente.

    O creiamo un database o utilizziamo la Local Storage per memorizzare i dati e recuperarli a piacimento.

    Local Storage è un tipo di archiviazione web che ci permette di salvare dati direttamente nel browser dell'utente.

        - Persistenza: i dati rimangono memorizzati anche dopo la chiusura del browser, a meno che non vengano esplicitamente rimossi

        - Accesso: i dati possono essere facilmente letti e scritti tramite JS, utilizzando metodi come stItem, getItem e removeItem.

        - Semplicità: è facile da usare e non richiede configurazioni complesse.

        - Limitazioni: non è adatta per memorizzare dati sensibili, perché i dati sono accessibili a qualsiasi script in esecuzione nella stessa origine.

    Possiamo quindi salvare dati nel browser sotto forma di coppie chiave/valore. Ogni valore che salviamo in Local Storage deve essere di tipo stringa, ma non vuol dire che non possiamo salvare array, oggetti, ecc. Semplicemente dovremo parsarli come facciamo per il JSON quando li recuperiamo.

    Possiamo controllare la Local Storage dalla proprietà localStorage dell'oggetto window, oppure dalla tab "Application" dei DevTools (strumenti per sviluppatori del browser).
*/
// Salvare dati in local storage: localStorage.setItem('key', 'value');
localStorage.setItem('name', 'milo');
localStorage.setItem('age', 34); // Anche se scritto come number, diventa stringa

// Recuperare dati dalla local storage: localStorage.getItem('key');
let nome = localStorage.getItem('name');
let eta = localStorage.getItem('age');
console.log(nome, eta);

// Aggiornare dati in local storage
localStorage.setItem('name', 'yoshi');
localStorage.age = 20;

nome = localStorage.getItem('name');
eta = localStorage.getItem('age');
console.log(nome, eta);