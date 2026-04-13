/*
    Un oggetto è un contenitore di valori eterogenei messi insieme a formare una struttura unica. Viene infatti utilizzato per rappresentare un'entità specifica, per esempio una persona, un ordine, una fattura, una prenotazione, ecc. tramite l'aggregazione di dati e funzionalità.

    Un oggetto tipicamente possiede:
        - Dati, ovvero delle proprietà, rappresentate da un nome e un valore
        - Funzionalità, ovvero dei metodi, rappresentati da funzioni

    ESEMPIO REALE

    Telefono è un oggetto
    Caratteristiche             Funzionalità
    - colore                    - suonare
    - dimensioni                - fare foto
    - modello                   - riprodurre musica

    ESEMPI IN JS

    Utente
            proprietà           metodi
            - username          - login
            - password          - logout
            - email

    Blog post
            proprietà           metodi
            - title             - publish
            - content           - delete
            - author            - edit
*/
/* ---------------------------- creare un oggetto --------------------------- */
// Object literal notation - creare un oggetto in maniera letterale
let user = {
    // le proprietà sono coppie di chiave-valore separate da virgola
    nome: 'Mario',
    eta: 30,
    email: 'mario@idraulico.it',
    paese: 'Italia',
    posts: ['Perché saltare in testa ai goomba?', 'Come salvare una principessa in 10 passi']
};

console.log(user);

// Accedere alle proprietà -> dot notation
console.log(user.nome);
console.log(user.posts[0]);

// Sovrascrivere il valore di una proprietà
user.eta = 26;
console.log(user);

// Una proprietà può assumere qualsiasi valore, compreso un altro oggetto, quindi possiamo creare oggetti annidati
let garage = {
    macchina: {
        interno: {
            vanoOggetti: 'libretto',
            sedilePasseggero: 'briciole'
        },
        esterno: {
            bagagliaio: 'ruota di scorta'
        }
    }
};

let contenutoVanoOggetti = garage.macchina.interno.vanoOggetti;
console.log(contenutoVanoOggetti);

// Posso creare un oggetto vuoto e assegnargli in seguito le proprietà
let persona = {};

persona.nome = 'Milo';
persona.cognome = 'Spandre';
persona.indirizzo = {
    via: 'Via San Mauro',
    numero: 10,
    cap: '10156',
    citta: 'Torino'
};
persona.eta = 34;

console.log(persona);
console.log(persona.indirizzo.citta);