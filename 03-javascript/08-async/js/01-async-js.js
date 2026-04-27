/*
    Async JavaScript è un modo di eseguire del codice che richiede tempo, senza però bloccare il programma.
    Se per esempio stessimo facendo una chiamata a un server per ottenere dei dati, invece di aspettare che il server risponda, il nostro codice continua a funzionare. Quindi, la chiamata inizia, ma finisce quando può, nel mentre viene eseguito il resto del codice.

    JS è un linguaggio sincrono: può eseguire un'istruzione alla volta. Questo può causare dei problemi per azioni come quella dell'esempio, ovvero una chiamata a un database o a un endpoint, la quale bloccherebbe il codice per qualche secondo prima di continuare. Se avessimo più chiamate, la nostra applicazione sarebbe molto lenta.

    Quindi si utilizza async, che ci permette di iniziare qualcosa nel momento in cui viene letto dal browser, ma finisce dopo, senza bloccare il codice. Per farlo si utilizza una callback function che verrà chiamata una volta che la risposta da parte del server è completa.
*/
console.log('linea uno');
console.log('linea due');

setTimeout(() => {
    console.log('callback function');
}, 2000);

console.log('linea tre');
console.log('linea quattro');