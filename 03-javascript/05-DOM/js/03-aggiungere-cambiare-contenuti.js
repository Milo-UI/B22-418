/*
    Una volta recuperato un elemento HTML dal DOM, possiamo cambiarne il contenuto HTML o il contenuto testuale.

    Per farlo utilizziamo 2 diverse proprietà di un elemento HTML:
        - innerText
        - innerHTML
*/
const parag = document.querySelector('p');

console.log(parag.innerText);

// Sostituisco il contenuto testuale. Volessimo aggiungere del testo lasciando quello già presente, useremmo += invece del solo =
parag.innerText = ' Il contenuto testuale è cambiato';

const parags = document.querySelectorAll('p');

parags.forEach(parag => {
    parag.innerText += ' "nuovo testo"';
})

// Per cambiare l'HTML interno a un elemento dobbiamo usare innerHTML
const content = document.querySelector('.content');

console.log(content);
console.log(content.innerHTML);

content.innerHTML = '<h2>Questo è un nuovo H2</h2>';

const docenti = ['Milo', 'Dario', 'Luca'];

docenti.forEach(docente => {
    content.innerHTML += `<p>${docente}</p>`;
});