/*
    Quando dobbiamo creare molti oggetti dello stesso tipo, viene scomodo usare la literal notation. Abbiamo più modi per farlo in maniera semplice e veloce.

    Uno di questi metodi è con l'utilizzo delle classi, che mantengono il codice più pulito e più facile da leggere.

    Una classe è come il progetto di un oggetto che descrive come questo debba essere creato. Mappa quindi tutte le proprietà e le funzionalità che l'oggetto deve avere. Alla creazione di un oggetto tramite una classe, ci basterà specificare i valori delle sue proprietà.

    All'interno di una classe, troviamo la funzione costruttore, ovvero la funzione che sarà incaricata di creare gli oggetti. Quando creeremo un nuovo oggetto utilizzando la parola chiave new, verrà chiamata la funzione costruttore che si trova dentro la classe per settare tutte le proprietà del nuovo oggetto.

    - parola chiave class
    - nome dell'oggetto che vogliamo creare, sempre con la prima lettera maiuscola
    - tra le graffe riportiamo la funzione costruttore
*/
// Creiamo una classe per gli oggetti User
class User {
    constructor(username, email) {
        // settiamo le proprietà dell'oggetto
        this.username = username;
        this.email = email;
    }
};

const userOne = new User('mario', 'mario@mail.it'); // passiamo i valori come argomento
const userTwo = new User('luigi', 'luigi@mail.it');

console.log(userOne, userTwo);

/*
    La parola chiave new:
        1 - Crea un nuovo oggetto vuoto {}
        2 - Lega il valore di 'this' al nuovo oggetto vuoto all'interno della classe
        3 - Richiama la funzione costruttore per cotruire l'oggetto
*/