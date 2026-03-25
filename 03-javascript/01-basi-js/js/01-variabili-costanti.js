/* -------------------------------- VARIABILI ------------------------------- */
/*
    Le variabili ci permettono di salvare dei valori, come un nome un numero o una mail, e di utilizzare quel valore ogni volta che vogliamo.
    Ci sono diversi modi di creare una variabile in JS.
*/
// let è una parola chiave per indicare una variabile e impedisce di dichiarare due variabili con lo stesso nome
let age = 25;
let year = 2026;

console.log(age, year);

// Possiamo sovrascrivere il valore di una variabile e da qui il nome variabile. Per farlo ci basta richiamare la variabile utilizzando il suo nome e assegnarle il valore che preferiamo
age = 34;

console.log(age);

// Posso anche dichiarare una variabile e assegnarle un valore in seguito
let firstName;
firstName = 'Milo';

console.log(firstName);

/* -------------------------------- COSTANTI -------------------------------- */
/*
    Se vogliamo creare una variabile con un valore che non deve mai cambiare, allora ci serve una costante.
    Per creare una costante, usiamo la parola chiave const (per convenzione il nome sarà scritto in all-caps, ma non è obbligatorio)
*/
const POINTS = 100;

// POINTS = 50;

console.log(POINTS);

/*
    Esiste una terza parola chiave per creare variabili: var, che NON impedisce di dichiarare due variabili con lo stesso nome.
*/
var score = 75;

console.log(score);

/* -------------------------- NOMI DELLE VARIABILI -------------------------- */
/*
    I nomi delle variabili seguono delle regole molto precise e delle convenzioni che aiutano a rendere il codice leggibile da chiunque:
    - niente spazi (errore)
    - possiamo usare il camel-case (myAge)
    - può contenere solo lettere, numeri, underscore o $, ma non possono mai cominciare con un numero (errore)
    - non possiamo utilizzare le keyword adottate da JS come let, const, var, for, if...
    - il nome deve avere un senso, deve far capire all'istante cosa viene salvato in quella variabile
*/