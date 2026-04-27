/*
    Esiste un metodo più semplice e moderno per fare richieste HTTP ed è quello di usare la fetch API, che è una funzione già esistente all'interno di JS.

    - Mandiamo la richiesta all'endpoint
    - Prendiamo la response e utilizziamo il metodo json() per prendere i dati e parsarli
    - Usiamo i dati come preferiamo
    - Intercettiamo i possibili errori delle varie Promise
*/
// La fetch richiede come argomento la sorgente di dati che vogliamo recuperare e restituisce una Promise
// Simulando un errore nell'endpoint riceviamo l'errore 404 in console, ma la Promise viene comunque risolta, perché la fetch rifiuta la promise solo quando abbiamo un errore del network, ma troviamo nella response uno status di 404. Dobbiamo quindi ricorrere a un if in questi casi
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        console.log('Risolta', response);
        // Nella response vediamo tutta una serie di proprietà, ma non vediamo i dati. Per ottenerli dobbiamo usare il metodo json() dell'oggeto response, che recupera i dati, li parsa, ovvero li trasforma da JSON a JS, e restituisce un'altra Promise
        return response.json();
    })
    .then(data => { // Risolta la promise del metodo json() otteniamo i dati
        console.log(data);
    })
    .catch(err => {
        console.log('Rifiutata', err);
    });