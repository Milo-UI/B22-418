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

// Se volessimo ricavare il primo carattere di una stringa potremmo usare la bracket notation
let firstLetterOfFirstName = firstName[0]; // le stringhe sono 0-based
console.log(firstLetterOfFirstName);

// Possiamo ricavare l'ultimo carattere di una stringa anche se non ne conosciamo la lunghezza
let nome = "Agamennone";
let lastLetterOfName = nome[nome.length - 1];
console.log(lastLetterOfName);

/* ----------------------------- Metodi stringhe ---------------------------- */
let txt = 'Oggi ho svolto 6 ore di lezione';

// Metodi di ricerca
let search1 = txt.indexOf('lezione'); // restituisce l'indice in cui la parola passata come argomento inizia
console.log(search1);

let search2 = txt.lastIndexOf('e'); // restituisce l'indice dell'ultima occorrenza
console.log(search2);

let search3 = txt.charAt(3); // restituisce il carattere in quella posizione
console.log(search3);

// Metodi per il taglio
let testo = 'Sono le 9 e tutto va bene';

// I metodi slice() e substring() estraggono una sezione della stringa e la restituiscono come una nuova stringa senza modificare l'originale
let taglio1 = testo.slice(4, 10);
console.log(taglio1);

let taglio2 = testo.substring(4, 10);
console.log(taglio2);

// Metodi per sostituzione
let affermazione = 'Il miglior browser del mondo è Internet Explorer';

// Il metodo replace() restituisce una nuova stringa rimpiazzando la prima occorrenza del pattern dato con una sostituzione
let sost = affermazione.replace('Internet Explorer', 'Google Chrome');
console.log(sost);

//  Il metodo toUpperCase() converte tutti i caratteri in maiuscolo
let upp = affermazione.toUpperCase();
console.log(upp);

// Il metodo toLowerCase() converte tutti i caratteri in minuscolo
let low = affermazione.toLowerCase();
console.log(low);

// Il metodo split() divide una stringa in una lista ordina di sotto-stringhe, le raggruppa in un array e restituisce questo array. La divisione avviene cercando un pattern fornito come parametro che indica dove il metodo deve andare a separare
// Fornendo come pattern una stringa vuota, il metodo separa ogni singolo carattere, spazi compresi
// Fornendo come pattern uno spazio, il metodo separa ogni volta che trova uno spazio, quindi parola per parola
let string1 = 'Ciao mi chiamo Menelao';

let array1 = string1.split(' ');
console.log(array1);

// Se invece si parte da un array di stringhe, con il metodo join() è possibile ottenere una stringa che concatena tutti gli elementi dell'array separati da virgole, oppure dal carattere specificato come argomento del metodo
let array2 = ['M', 'i', 'l', 'o'];

let string2 = array2.join('');
console.log(string2);

/* -------------------------------------------------------------------------- */
/*                                  Esercizi                                  */
/* -------------------------------------------------------------------------- */
// Salvare un nome in una variabile e stamparlo senza l'iniziale
let mioNome = 'Milo';
console.log(mioNome.substring(1));

// Data una stringa, stamparla in console al contrario
let strEs = 'i topi non avevano nipoti';
let fraseAlContrario = strEs.split('').reverse().join('');
console.log(fraseAlContrario);

// Crea uno script per estrarre l'estensione di un file, indipendentemente dalla sua lunghezza
// Esempio: immagine.jpg -> "L'estensione del file è: jpg"
let nomeFile = 'bootstrap.min.css';

// Metodo 1
console.log("L'estensione del file è: " + nomeFile.slice(nomeFile.lastIndexOf('.')));

// Metodo 2
let estensione = nomeFile.split('.').pop();
console.log("L'estensione del file è: " + estensione);

// Crea uno script per rendere maiuscola l'iniziale di ogni parola di una stringa
//  oggi sono a lezione -> Oggi Sono A Lezione
let frase = 'oggi sono a lezione da casa!';

let fraseArray = frase.split(' ');
let fraseCapitalized = '';

for (let i = 0; i < fraseArray.length; i++) {
    let inizialeMaiusc = fraseArray[i][0].toUpperCase();
    let restoParola = fraseArray[i].substring(1);
    fraseCapitalized += inizialeMaiusc + restoParola + ' ';
}

console.log(fraseCapitalized);