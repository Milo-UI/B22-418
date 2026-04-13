// Selezione l'elemento con id demo
const elemento = document.getElementById('demo');

console.log(elemento);

// Modifico il contenuto dell'elemento
// elemento.innerHTML = '<strong>IL MIO TESTO È CAMBIATO!!</strong>';

// Modifico il contenuto dell'elemento al click di un bottone
const btn = document.getElementById('btn');

function cambiaTesto() {
    elemento.innerHTML = 'IL MIO TESTO È CAMBIATO!!';
}

// Faccio in modo che il bottone registri l'azione di click dell'utente per lanciare la funzione
btn.addEventListener('click', cambiaTesto)