/*
    Le HTTP request sono le tipiche azioni che richiedono tempo per le quali useremo l'asincronia.

    Spesso vorremo mostrare sulla nostra pagina dei dati che si trovano su un database o su un server (post, commenti, utenti, lista di canzoni, ecc). Utilizziamo una richiesta HTTP per raggiungere quel server o database per ottenere i dati che ci interessano e usarli come vogliamo. Per dire cosa vogliamo, facciamo delle richieste a quelli che si chiamano API endpoint, ovvero degli URL che il server rende accessibili. 

    La richiesta all'endpoint ci restituisce i dati sotto forma di JSON (JavaScript Object Notation), un formato di scambio dati facilmente leggibile da macchine e umani, molto simile a come vengono scritti gli oggetti in JS. Nasce infatti da JS, ma è utilizzabile da tutti i linguaggi di programmazione.

    Esistono diversi tipi di richieste HTTP che indicano l'azione da eseguire:

    - GET:      per recuperare dei dati
    - POST:     per inviare nuovi dati
    - PUT:      per aggiornare dati esistenti
    - DELETE:   per eliminare dati
*/
// Vecchio metodo che veniva usato prima dell'arrivo del JSON, ma funziona ancora. Invia una richiesta per ottenere dei dati
const request = new XMLHttpRequest();

// readyStateChange è un evento che monitora lo stato di un oggetto XMLHttpRequest durante il processo di richiesta e risposta di un API. Questo evento viene attivato ogni volta che cambia lo stato della richiesta
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);

    if (request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    } else if (request.readyState === 4) {
        console.log(`Non sono riuscito a recuperare i dati. Errore: ${request.status}`);
    }
});

// Il metodo open() "prepara" la richiesta e ha bisogno di due argomenti: il tipo di richiesta che vogliamo fare e dove vogliamo mandare la richiesta, quindi l'endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

// Il metodo send() invia effettivamente la richiesta
request.send();