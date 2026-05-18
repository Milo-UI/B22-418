/*
    Per cancellare una risorsa su un server utilizziamo una richiesta DELETE.

    È il tipo di richiesta più semplice da costruire:
    - Specifichiamo l'id della risorsa direttamente nell'URL
    - Non serve inviare nessun body, perché stiamo solo dicendo al server cosa eliminare
    - La risposta del server è spesso un oggetto vuoto {} oppure uno status 200/204

    Una risposta 204 significa "No Content": l'operazione è andata a buon fine, ma il server non ha nulla da restituire (la risorsa è stata eliminata).
*/
const eliminaPost = async (id) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    });

    // 204 = No Content: eliminazione avvenuta, nessun dato da restituire
    // 200 = OK: alcune API restituiscono 200 con un body vuoto
    if (response.status !== 200 && response.status !== 204) {
        throw new Error('Non sono riuscito a eliminare il post');
    }

    console.log(`Post con id ${id} eliminato con successo (${response.status})`);
};

eliminaPost(1)
    .catch(err => console.log('Errore:', err.message));

/*
    Riepilogo dei metodi HTTP visti fin'ora:

    GET     → recupera dati             (nessun body)
    POST    → crea una nuova risorsa    (body con i nuovi dati)
    PUT     → sostituisce una risorsa   (body con tutti i campi)
    PATCH   → modifica campi specifici  (body con solo i campi da aggiornare)
    DELETE  → elimina una risorsa       (nessun body, id nell'URL)

    La struttura della fetch è sempre la stessa: cambia il method, l'URL e il body a seconda di quello che vogliamo fare
*/