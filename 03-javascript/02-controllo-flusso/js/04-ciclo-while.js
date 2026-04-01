/*
    I cicli while funzionano esattamente come i cicli for, non c'è differenza tra loro tranne la sintassi.

    Infatti il while tra parentesi tonde richiede solo la condizione, ma questo porta qualche problema, per esempio se diciamo che la condizione deve essere (i < 5), otteniamo un errore, dal momento che la variabile non è mai stata dichiarata.

    Se dichiariamo i fuori dal ciclo e la inizializziamo a 0, la condizione sarà sempre vera, quindi il programma etrerà in un loop infinito.

    Dobbiamo ricordarci di incrementare la variabile all'interno del blocco di codice che il ciclo deve eseguire ogni volta che la condizione è vera.
*/
let i = 0;

while (i < 5) {
    console.log(`In loop: ${i}`);
    i++;
}

// let index = 0;

/*
    I cicli while sono un'alternativa al ciclo for. In genere si usa un cliclo while quando la condizione di continuazione non è legata a un contatore specifico o quando si ha bisogno di una maggiore flessibilità nella logica di controllo del ciclo. Al contrario, un ciclo for è spesso più adatto quando si ha un numero definito di iterazioni o quando si sta iterando su una sequenza.
*/
// let input;

// while (input !== 'exit') {
//     input = prompt("Inserisci un comando (digita 'exit' per uscire):");
// }