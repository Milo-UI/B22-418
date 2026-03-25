/*
    Usiamo le stringhe per salvare una serie di lettere, numeri, o altri caratteri, come un nome o un indirizzo email.
    Per assegnare una stringa come valore di una variabile, bisogna metterla tra virgolette o apici.
*/
let stringa = "Sono una stringa";

// Se la stringa deve contenere a sua volta degli apici, bisonga far capire che quegli apici fanno parte della stringa e non sono attinenti al codice.
// Un metodo è quello di usare il backslash (\), che è un carattere di escape, prima di ogni apertura di apici
let url = "<a href=\"https://www.google.it\">Vai al sito di Google</a>";
let nomeLibro = 'L\'uomo del boh';

console.log(url, nomeLibro);

/*
    ALTRI UTILIZZI DEL CARATTERE DI ESCAPE
    \'  apostrofo o apice singolo
    \"  apici doppi
    \\  backslash
    \r  a capo (break)
*/

// Un altro metodo è quello di usare gli apici singoli per dichiarare la stringa e gli apici doppi dove servono all'interno della stringa o viceversa
let quote = 'Ieri mi ha detto solo "Ciao"!';
console.log(quote);

// Per concatenare più stringhe tra loro, possiamo usare l'operatore di concatenazione +
let ourString = "Io vengo prima. " + "Io vengo dopo.";
console.log(ourString);

// Possiamo usare l'operatore += per concatenare stringhe
let stringaConc = "Io vengo prima. ";
stringaConc += "Io vengo dopo.";
console.log(stringaConc);

let myName = 'Milo';
let myAge = 34;
let templateLiteral = `Ciao mi chiamo ${myName} e ho ${myAge} anni!`;
console.log(templateLiteral);

// Possiamo calcolare la lunghezza di una stringa utilizzando la proprietà length
let firstNameLength = 0;
let firstName = 'Milo';

firstNameLength = firstName.length;
console.log(firstNameLength);