/*
    Spesso la manipolazione del DOM che attuiamo è conseguente a un'interazione da parte dell'utente, per esempio se l'utente clicca su un bottone fa comparire un menù scomparsa.
    Abbiamo la possibilità di catturare queste interazioni per gestire la reazione che deve avere il contenuto della pagina.

    Queste interazioni si chiamano eventi e per gestirli utilizziamo i "listener", che eseguono una funzione specifica quando si verifica un determinato evento.

    Se per esempio volessimo far accadere qualcosa al click di un bottone, ci sono 3 step da seguire:
        - recuperare nel DOM l'elemento dove ci aspettiamo accadrà l'evento
        - aggiungere un eventListener all'elemento
        - scrivere una funzione di callback che parte quando l'utente clicca sul bottone
*/
const btn = document.querySelector('.btn');

// addEventListener() richiede almeno 2 argomenti: quale tipo di evento deve catturare e cosa deve succedere, quindi una callback function
btn.addEventListener('click', () => {
    console.log('Mi hai cliccato!');
});

// Se volessimo che al click su un elemento della mia to do list, questo venga depennato:
const listItems = document.querySelectorAll('.lista li');

listItems.forEach(item => {
    // Quando si verifica un evento per il quale stiamo "ascoltando", il browser inserisce automaticamente nella callback function un parametro che indica un oggetto Evento che contiene info sull'evento avvenuto
    item.addEventListener('click', e => {
        // console.log(e);
        console.log(e.target);
        e.target.classList.add('text-decoration-line-through');
    });
});