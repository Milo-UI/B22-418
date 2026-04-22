const addForm = document.querySelector('.add-form');
const searchForm = document.querySelector('.search-form');
const searchInput = searchForm.search;
const todoList = document.querySelector('.todos');

const generaTemplate = todo => {
    const html = `
        <li>
            <span>${todo}</span>
            <i class="fa-solid fa-trash delete"></i>
        </li>`;

    todoList.innerHTML += html;
};

const filtraTodos = query => {
    // console.log(query);
    // console.log(Array.from(todoList.children));

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

    Array.from(todoList.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(query))
        .forEach(todo => todo.classList.add('d-none'));

    Array.from(todoList.children)
        .filter(todo => todo.textContent.toLowerCase().includes(query))
        .forEach(todo => todo.classList.remove('d-none'));
};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    // Uso il metodo trim() per rimuovere gli spazi bianchi a inizio e fine di una stringa
    let todo = addForm.add.value.trim();

    // Se todo.length è un intero, restituirà true, se invece è 0 restituirà false
    if (todo.length) {
        generaTemplate(todo);

        // reset di un campo specifico di un form
        // addForm.add.value = '';

        // metodo per resettare tutti i campi di input di un form
        addForm.reset();
    }
});

todoList.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

searchInput.addEventListener('keyup', () => {
    let query = searchInput.value.trim().toLowerCase();

    filtraTodos(query);
});

searchForm.addEventListener('submit', e => {
    e.preventDefault();
});