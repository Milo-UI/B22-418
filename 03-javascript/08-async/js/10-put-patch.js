/*
    Per modificare dati esistenti su un server possiamo utilizzare 2 tipi di richiesta:

    - PUT:  sostituisce completamente la risorsa con i nuovi dati che inviamo.
            Se non includi un campo, il server lo considera rimosso o vuoto.
    - PATCH: aggiorna solo i campi che specifichiamo, lasciando invariati gli altri

    - Vuoi aggiornare tutto l'oggetto? -> PUT
    - Vuoi cambiare solo una proprietà? -> PATCH

    La struttura della fetch è molto simile a quella della POST: cambia solo il method e, nel caso del PATCH, il body conterrà solo i campi da modificare.
*/

// PUT - sostituisce completamente il post con id 1
const aggiornaPostCompleto = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        // Dobbiamo inviare tutti i campi, anche quelli che non cambiano
        body: JSON.stringify({
            userId: 1,
            id: 1,
            title: 'Titolo aggiornato',
            body: 'Body del post modificato correttamente'
        })
    });

    if (!response.ok) {
        throw new Error('Non sono riuscito ad aggiornare il post');
    }

    const data = await response.json();

    return data
};

aggiornaPostCompleto()
    .then(data => console.log('Post aggiornato con PUT:', data))
    .catch(err => console.log('Errore:', err.message));

// PATCH - modifica solo il campo "body" del post con id 1
const aggiornaCampo = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        // Inviamo solo il campo che vogliamo modificare
        body: JSON.stringify({
            body: 'Body patchato'
        })
    });

    if (!response.ok) {
        throw new Error('Non sono riuscito ad aggiornare il campo');
    }

    const data = await response.json();

    return data;
};

aggiornaCampo()
    .then(data => console.log('Post aggiornato con PATCH:', data))
    .catch(err => console.log('Errore:', err.message));