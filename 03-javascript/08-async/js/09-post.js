/*
    Finora abbiamo usato fetch() solo per recuperare dati con una richiesta GET.
    Ma fetch può fare molto di più: possiamo usarla anche per inviare nuovi dati a un server con una richiesta POST.

    Quando facciamo una richiesta POST dobbiamo fornire alcune informazioni aggiuntive rispetto alla GET:
    - method: il tipo di richiesta, in questo caso 'POST'
    - headers: diciamo al server in che formato stiamo inviando i dati. Di solito JSON
    - body: i dati veri e propri che vogliamo inviare, trasformati in stringa JSON con JSON.stringify()

    Il server risponde con i dati appena creati, spesso includendo un id generato automaticamente.
*/

const nuovoPost = {
    userId: 1,
    title: 'Studiare async JavaScript',
    body: 'Devo capire come utilizzare async per poter recuperare dati da un API endpoint con una fetch.'
};

const creaPost = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // I dati devono essere trasformati da oggetto JS a stringa JSON
        body: JSON.stringify(nuovoPost)
    });

    if (response.status !== 201) {
        throw new Error('Non sono riuscito a creare il post. Prova più tardi.');
    }

    // Il server ci risponde con il nuovo post creato, incluso il suo id
    const data = await response.json();

    return data
};

creaPost()
    .then(data => console.log('Post creato:', data))
    .catch(err => console.log('Errore:', err.message));