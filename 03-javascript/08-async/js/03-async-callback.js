/*
    Abbiamo visto come fare una richiesta Http per ricevere dati da un endpoint e come gestire gli errori. Come usiamo questi dati?
*/
// Avvolgiamo la request in una funzione che possiamo richiamare a piacimento per ottenere i dati
const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback('Non sono riuscito a recuperare i dati', undefined)
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
};

// Prova async
console.log(1);
console.log(2);

// Ora possiamo fare la richiesta quando vogliamo e possiamo passare una funzione di callback per fare quello che vogliamo coi dati ricevuti
getTodos((err, data) => {
    console.log('callback lanciata');
    // console.log(err, data);
    
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
