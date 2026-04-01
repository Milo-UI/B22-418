/*
    Possiamo fare in modo che le nostre funzioni restituiscano un valore, invece di limitarsi a scrivere qualcosa in console.

    Per esempio, immaginiamo di avere i prezzi di alcuni prodotti e di voler calcolare il prezzo scontato.
    Invece di stamparlo subito in console, possiamo restituirlo così da usarlo in seguito per altre operazioni o per farne ciò che vogliamo.
*/
function calcolaPrezzoScontato(prezzo, scontoPercentuale) {
    let prezzoScontato = prezzo - (prezzo * scontoPercentuale / 100); // Variabile locale
    return prezzoScontato;

    // Possiamo anche scriverlo in forma abbreviata:
    // return prezzo - (prezzo * scontoPercentuale / 100);
}

let prezzoScontato = calcolaPrezzoScontato(100, 20);
console.log(prezzoScontato);

/*
    return è una parola chiave usata all'interno delle funzioni per restituire il valore specificato.

    Se non viene indicato alcun valore, la funzione restituisce undefined.

    Inoltre, quando JS incontra return, l'esecuzione del codice si interrompe immediatamente. Qualsiasi riga di codice scritta dopo return non verrà eseguita.
*/
// Adesso che abbiamo il prezzo scontato salvato in una variabile, possiamo riutilizzarlo in un'altra funzione. Per esempio, possiamo aggiungere il costo di spedizione

function calcolaTotaleOrdine(prezzo, spedizione) {
    return prezzo + spedizione;
}

let totaleOrdine = calcolaTotaleOrdine(prezzoScontato, 5);
console.log(totaleOrdine);