/*
    asyn e await sono due parole chiave introdotte recentemente che ci permettono di concatenare tra loro delle Promise in maniera facile e leggibile.

    Possiamo mettere tutto il nostro codice asincrono all'interno di una funzione asincrona e usare la parola chiave await all'interno per concatenare le Promise.
*/
const getPosts = async () => {
    
    // La fetch restituisce una Promise e la parola chiave await ferma JS in modo da assegnare il valore della variabile response solo quando la Promise si risolve
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // console.log(response);

    // La response non ci restituisce ancora i dati, dobbiamo quindi usare il metodo di response json()
    const data = await response.json();
    // console.log(data);
    
    return data;
}

console.log(1);
console.log(2);

// Quando richiamiamo una funzione asincrona, ci viene sempre restituita una Promise
getPosts()
    .then(data => console.log(data));

console.log(3);