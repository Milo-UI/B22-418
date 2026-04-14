/* ---------------------- Rimuovere un elemento dal DOM --------------------- */
const todoList = document.querySelector('.lista');

// Rimuovo l'intera lista dal DOM
// todoList.remove();

// Rimuovo i list item al click su di essi:
const listItems = document.querySelectorAll('.lista li');

listItems.forEach(item => {
    item.addEventListener('click', e => {
        e.target.remove();
    });
});

/* --------------------- Aggiungere un elemento nel DOM --------------------- */
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    // Aggiungiamo un nuovo item alla lista passandoglielo con gli operatori studiati finora
    // todoList.innerHTML += '<li>nuovo item</li>';

    // Creiamo un nuovo elemento privo di contenuto, specificando di che tipo di elemento si tratta ('li')
    const li = document.createElement('li');

    // Aggiungiamo del testo all'interno del nuovo elemento
    li.textContent = 'Nuova cosa da fare';

    // Inseriamo l'elemento nel DOM "appendendolo" o "prependendolo" al genitore
    todoList.append(li); // lo aggiunge al fondo
    // todoList.prepend(li); // lo aggiunge all'inizio
});