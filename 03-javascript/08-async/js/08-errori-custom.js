/*
    Possiamo lanciare errori custom nelle nostre funzioni asincrone.

    Se c'è un errore nel JSON il catch lo trova e lo capisce, ma se l'errore è nella fetch, abbiamo visto che non lancia alcun errore, perché la Promise viene risolta comunque. Otteniamo un errore in seguito quando proviamo a parsare i dati che non sono stati recuperati.

    Quindi dobbiamo controllare manualmente che la response abbia uno status di 200 per essere sicuri che vada tutto a buon fine. In caso contrario lanciamo noi un errore con la parola chiave throw seguita dalla creazione di un nuovo oggetto Errore. Questo verrà preso dal catch().
*/
const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/postss');

    if (response.status !== 200) {
        throw new Error(`Non sono riuscito a fetchare i dati. Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
};

getPosts()
    .then(data => console.log('Risolta', data))
    .catch(err => console.log('Rifiutata', err.message));