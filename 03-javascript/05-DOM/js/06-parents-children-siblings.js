/*
    Non sempre siamo noi a scrivere o a generare l'HTML di una pagina, quindi è bene imparare come selezionare gli elementi che ci interessano grazie al loro rapporto di parentela con gli altri elementi.

    parent      <article>
                ____|________________
                  |   |   |   |    |
    children    <h2> <p> <p> <p> <div>
                       siblings    
*/
/* ----------------------------- parent -> child ---------------------------- */
// Mi serve una selezione di tutti gli elementi all'interno di <article> (parent) così da poter assegnare a ognuno (children) una classe

// Creo un riferimeno al parent
const article = document.querySelector('article');

// Potrei recuperare tutti i figli dell'elemento genitore con la proprietà children, ma questo ce li salva in una HTMLCollection sulla quale non c'è il medoto forEach().
console.log(article.children);

// Posso però trasformare la HTMLCollection in un Array
console.log(Array.from(article.children));

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});