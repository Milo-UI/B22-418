/*
    Quando abbiamo bisogno di salvare qualcosa di più complesso di semplici stringhe e numeri, visto che la Local Storage lavora solo con le stringhe, dobbiamo prima trasformarlo in una stringa.
    A quel punto possiamo salvare i nostri dati complessi nella Local Storage fino a quando ne avremo bisogno. Quando li recuperiamo, riceviamo una stringa, quindi dobbiamo parsarla in qualcosa con cui possiamo lavorare in JS, come un array o un oggetto.
*/
const todos = [
    {
        testo: 'Giocare a Isaac',
        autore: 'milo'
    },
    {
        testo: 'Sconfiggere Mamma',
        autore: 'Isaac'
    },
    {
        testo: 'Non prendere danno',
        autore: 'The Lost'
    }
];

// Per salvare questo array in local storage, dobbiamo prima trasformarlo in una stringa. Per farlo utilizziamo il metodo stringify() dell'oggetto JSON.
// console.log(JSON.stringify(todos)); // Proprietà adesso tra virgolette
localStorage.setItem('todos', JSON.stringify(todos));

// Ora possiamo recuperare dalla local storage il nostro JSON e convertirlo di nuovo da una stringa a un array con il petodo parse() dell'oggetto JSON
const todosSalvati = localStorage.getItem('todos');
console.log(JSON.parse(todosSalvati));