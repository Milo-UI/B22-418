/*
    Quando si attiva un evento su un elemento, l'evento si propaga "risalendo" attraverso la gerarchia degli elementi genitori.

    - Attivazione dell'evento
    Quando un evento, come un click, si verifica su un elemento, esegue ciò che deve succedere e poi inizia a propagarsi dal target (l'elemento cliccato) fino alla radice del documento.

    - Propagazione
    Durante la fase di bubbling, l'evento viene passato a ciascun elemento genitore, in ordine gerarchico, fino a raggiungere l'elemento HTML e poi il document.

    - Gestione degli eventi
    Ogni elemento lungo il percorso può avere dei gestori di eventi associati. Se un gestore di eventi è definito su un elemento genitore, può "catturare" l'evento e reagire ad esso.

    Se vogliamo impedire che l'evento continui a propagarsi, possiamo utilizzare il metodo stopPropagation()
*/
const todoList = document.querySelector('.lista');
const listItems = todoList.querySelectorAll('li');
const btn = document.querySelector('.btn');
const body = document.querySelector('body');

body.addEventListener('click', () => {
    console.log('Evento click sul body');
});

btn.addEventListener('click', e => {
    e.stopPropagation();

    const li = document.createElement('li');
    li.textContent = 'nuova cosa da fare';
    todoList.append(li);
});

// Qui aggiungiamo un eventListener su ogni elemento della lista. Questo è un dispendiuo di memoria e potrebbe rallentare il programma. In più non funziona sugli elementi che aggiungiamo dopo il caricamentro della pagina.
// listItems.forEach(item => {
//     item.addEventListener('click', e => {
//         // Impedisco all'evento di propagarsi fino al genitore e oltre
//         e.stopPropagation();

//         e.target.remove();
//     });
// });

todoList.addEventListener('click', e => {
    e.stopPropagation();

    console.log(e.target); // Controllo che l'evento parta sull'elemento cliccato

    // Se volessimo eliminare il list item cliccato, potremmo intanto controllare che sia effettivamente stato cliccato un LI e non l'UL
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});