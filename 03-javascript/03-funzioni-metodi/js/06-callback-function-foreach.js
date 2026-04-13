/* 
    Abbiamo visto che possiamo passare stringhe, numeri o altro come argomenti di una funzione, ma è possibile anche passare un'altra funzione, per richiamarla o eseguirla all'interno della prima
*/
const myFunc = callbackFunc => {
    // fai qualcosa
    let valore = 50;
    // richiamo la funzione di callback
    callbackFunc(valore);
};

// myFunc(function (valore) {
//     console.log(valore);
// });

myFunc(valore => {
    console.log(valore);
});

/* --------------------------------- forEach -------------------------------- */
/*
    È un metodo degli array che permette di iterare gli elementi di un array e si aspetta come argomento una callback function.

    Nella callback function possiamo passare due parametri:
        - il primo sarà l'elemento dell'array che sta venendo iterato
        - il secondo sarà l'indice dell'elemento iterato
*/
let personaggi = ['Link', 'Zelda', 'Saria', 'Darunia'];

personaggi.forEach((personaggio, indice) => {
    // console.log('qualcosa');
    console.log(indice, personaggio);
})

// Posso anche creare una funzione di callback esterna e richiamarla nel forEach()
const logPersonaggio = (personaggio, indice) => {
    console.log(`${indice} - Ciao ${personaggio}!`);
};

personaggi.forEach(logPersonaggio);

const listaPersonaggi = document.getElementById('personaggi');
let html = ``;

personaggi.forEach(personaggio => {
    html += `<li>${personaggio}</li>`;
});

console.log(html);
listaPersonaggi.innerHTML = html;
