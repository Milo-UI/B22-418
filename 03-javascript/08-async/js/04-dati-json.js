/*
    Abbiamo detto che quando facciamo una richiesta GET a un endpoint ottenimao i dati richiesti in formato JSON, che assomigliano a un array con tanti oggetti JS all'interno, però non lo sono!!! Si tratta di una semplice stringa, ovvero un tipo di dato riconosciuto da ogni linguaggio.

    Dobbiamo quindi prendere questa stringa di JSON e trasformarla in qualcosa che sappiamo utilizzare per ottenere ciò che ci interessa: oggetti in un array.
*/
const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // Trasformiamo il JSON in un array di oggetti JS
            let data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Non sono riuscito a recuperare i dati', undefined)
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
};

getTodos((err, data) => {
    console.log('callback lanciata');
    
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});