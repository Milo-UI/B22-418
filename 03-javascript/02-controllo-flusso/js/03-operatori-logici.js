/*
    OPERATORI LOGICI

    Gli operatori logici sono fondamentali per la programmazione condizionale e il controllo del flusso.
    Sono utilizzati per combinare espressioni booleane e per prendere decisioni basate su condizioni.
    Li utilizziamo nelle istruzioni condizionali (if, while, ecc) per determinare quale blocco di codice eseguire.
    Ci permettono di combinare più condizioni in un'unica espressione logica per semplificare il codice.

    - &&    and
    Restituisce true se entrambe le espressioni sono vere

    - ||    or
    Restituisce true se almeno una delle espressioni è vera

    - !     not
    Inverte il valore di verità di un'espressione

    Gli operatori logici possono interrompre l'esecuzione non appena il risultato è determinato (ad esempio, se la prima condizione di un && è falsa, non viene neanche valutata la seconda).
*/
// Logical and (&&) e or (||)
let password = '12345@';

if (password.length >= 12 && password.includes('@')) {
    console.log('La tua password è strasicura!');
} else if (password.length >= 8 || password.includes('@') && password.length > 5) {
    console.log('La tua password è abbastanza sicura');
} else {
    console.log('La tua password non è abbastanza sicura :(');
}

// Logical not (!)
console.log(!true);
console.log(!false);

let user = false; // L'utente non è loggato

if (!user) {
    console.log('Devi effettuare l\'accesso per continuare');
}