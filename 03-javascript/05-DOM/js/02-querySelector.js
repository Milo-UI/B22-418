/*
    Quando lavoriamo sul DOM e editiamo, cambiamo o eliminiamo contenuti, il primo passo da fare è decidere quale elemento vogliamo selezionare per aggiungergli/rimuovergli contenuti o per cambiarlo in qualche modo ed entrare nel DOM per ottenere un riferimento a quell'elemento. Quesot è chiamato 'querying the DOM'

    Salvando in una variabile il riferimento all'elemento che ci interessa, possiamo poi farne ciò che vogliamo. Per farlo richiamiamo l'elemento document e usiamo il metodo querySelector().

    querySelector() va a recuperare la prima occorrenza dell'elemento selezionato tramite il selettore passatogli come argomento e scritto in sintassi CSS.
*/
// Recupero il primo <p> che incontro nel documento
const paragrafo = document.querySelector('p');

console.log(paragrafo);

// Se volessi un <p> specifico a cui è stata assegnata una classe:
const errorMessage = document.querySelector('.alert-danger');

console.log(errorMessage);

// Se però volessimo un altro elemento che non sia un <p> ma che anch'esso abbia la classe .alert-danger:
const errorMessage2 = document.querySelector('div.alert-danger');

console.log(errorMessage2);

/*
    Se volessimo selezionare tutti gli elementi <p> presenti nella pagina, dovremmo ricorrere al metodo querySelectorAll(). Questo metodo crea un riferimento a una NodeList che conterrà tutti gli elementi P della pagina.

    Una NodeList assomiglia molto a un array, ma non lo è. Però possiamo utilizzare la bracket notation per selezionare determinati elementi al suo interno e possiede il metodo forEach()
*/
const paragrafi = document.querySelectorAll('p');

console.log(paragrafi);
console.log(paragrafi[1]);

paragrafi.forEach(paragrafo => {
    console.log(paragrafo);
});

const errori = document.querySelectorAll('.alert-danger');

console.log(errori);
