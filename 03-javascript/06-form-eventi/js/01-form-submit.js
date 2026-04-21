/*
    I form esistono per ottenere dati da parte degli utenti.

    Per catturare queste informazioni, utilizzeremo degli eventi e più nello specifico l'evento di 'submit' dei form.
    Cliccare il bottone presente al fondo dei form fa partire un evento di submit.

    Quando vogliamo catturare un evento di submit, anche se per lanciarlo l'utente deve cliccare sul bottone, dobbiamo "ascoltarlo" sul form. Anche perché il submit può avvenire senza il click sul bottone, ma al semplice invio dell'utente col tasto 'invio' o 'return'.

    L'azione di default che il submit di un form compie è il refresh della pagina. Noi raramente vogliamo che questo accada, quindi usiamo il metodo preventDefault() per evitare l'azione di default dell'evento.
*/
const form = document.querySelector('.signup-form');

// Per ottenere le informazioni inserite dall'utente nei campi di input, abbiamo diversi metodi. Possiamo prendere i singoli campi di input e ottenerne il value oppure usare direttamente il form
// const inputUsername = document.querySelector('#username');

form.addEventListener('submit', e => {
    // Impediamo all'evento submit di refreshare la pagina
    e.preventDefault();

    // console.log(inputUsername.value);

    // Possiamo usare la dot notation sul form per prendere l'input con l'attributo id o l'attributo name che ci interessa
    console.log(form.username.value);

    console.log(e);

});