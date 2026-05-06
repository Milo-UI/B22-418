/*
    Ora che abbiamo visto sia la local storage che la session storage, è utile fermarsi a confrontarle e a capire quali sono i limiti di queste tecnologie, per scegliere consapevolmente quale usare in un progetto.

    DIFFERENZE PRINCIPALI

        - Persistenza
            Local Storage: i dati restano finché non vengono cancellati esplicitamente (dal codice o dall'utente che svuota i dati del browser).
            Session Storage: i dati spariscono quando si chiude la tab.

        - Scope (a chi sono visibili i dati)
            Entrambe sono legate all'origine (origin), cioè alla combinazione di protocollo + dominio + porta. Quindi i dati salvati su https://miosito.it non sono accessibili da https://altrosito.it, e nemmeno da http://miosito.it (protocollo diverso).
            La local storage è condivisa tra tutte le tab della stessa origine. La session storage no: ogni tab ha la sua, anche se aperta sullo stesso sito.

        - Capienza
            Entrambe permettono di salvare in genere intorno ai 5-10 MB per origine, a seconda del browser. Non è uno standard rigido, ma è molto più di quello che servirebbe per dati semplici come preferenze utente o stati di un'applicazione. Per dataset grandi non sono lo strumento giusto: esistono soluzioni come IndexedDB o un database vero e proprio sul server.

        - Tipo di dati
            Entrambe salvano solo stringhe. Per oggetti e array bisogna passare per JSON.stringify e JSON.parse.

        - Sincronicità
            Le operazioni di lettura e scrittura sono sincrone. Significa che bloccano il thread principale finché non sono finite. Per pochi KB non è un problema, ma se proviamo a salvare megabyte di dati in un colpo solo l'interfaccia può rallentare.

    QUANDO USARE COSA

        - Local Storage: preferenze utente (tema chiaro/scuro, lingua), token che vogliamo far sopravvivere alla chiusura del browser (con cautela), bozze di contenuti, todo list che devono restare tra una visita e l'altra.

        - Session Storage: stato temporaneo di un form a più step, filtri di ricerca attivi solo per la sessione corrente, dati di navigazione che non vogliamo conservare oltre la chiusura della tab.

    LIMITI E COSE DA TENERE A MENTE

        - Sicurezza: i dati salvati nello storage del browser sono leggibili da qualsiasi script in esecuzione sulla stessa origine. Non vanno mai usati per dati sensibili (password, dati di pagamento). Anche per i token di autenticazione è una scelta da fare con consapevolezza.

        - L'utente può svuotare lo storage in qualsiasi momento dalle impostazioni del browser. Il nostro codice deve essere pronto a gestire il caso in cui i dati che ci aspettiamo non ci siano (getItem restituisce null).

        - In modalità incognito/navigazione privata lo storage funziona, ma viene svuotato alla chiusura della finestra.

        - Esistono anche i cookie, che sono un altro modo di memorizzare dati nel browser, ma servono soprattutto a comunicare con un server (vengono inviati automaticamente nelle richieste HTTP) e sono più piccoli (circa 4 KB).
*/
// Esempio pratico
localStorage.setItem('tema', 'scuro');
sessionStorage.setItem('filtroAttivo', 'prezzo crescente');

console.log(`Local Storage - tema: ${localStorage.getItem('tema')}`);
console.log(`Session Storage - filtro: ${sessionStorage.getItem('filtroAttivo')}`);

// Gestire il caso in cui un dato non esiste
const linguaSalvata = localStorage.getItem('lingua');
if (linguaSalvata === null) {
    console.log('Nessuna lingua salvata, uso il default: italiano');
} else {
    console.log(`Lingua salvata: ${linguaSalvata}`);
}

// Iterare sulle chiavi salvate (utile per il debug)
console.log(`Numero di elementi in local storage: ${localStorage.length}`);
for (let i = 0; i < localStorage.length; i++) {
    const chiave = localStorage.key(i);
    console.log(`${chiave} -> ${localStorage.getItem(chiave)}`);
}