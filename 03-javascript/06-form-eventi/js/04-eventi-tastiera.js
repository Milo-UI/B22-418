/*
    Per rendere la vita più facile all'utente e dargli velocemente un feedback sulla corretteza di quello che scrive, possiamo intercettare eventi della tastiera.
*/
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    // Validazione
    let username = form.username.value;

    if (usernamePattern.test(username)) {
        // feedback positivo
        feedback.textContent = 'Lo username è valido';
        feedback.classList.remove('text-danger');
        feedback.classList.add('text-success');
        form.username.classList.remove('border-danger');
        form.username.classList.add('border-success');
    } else {
        // feedback negativo
        feedback.textContent = 'Lo username deve contenere solo lettere e deve essere di almeno 6 caratteri';
        feedback.classList.remove('text-success');
        feedback.classList.add('text-danger');
        form.username.classList.remove('border-success');
        form.username.classList.add('border-danger');
    }
});

// Live feedback
form.addEventListener('keyup', e => {
    // console.log(e);
    // console.log(e.target.value, form.username.value);

    if (usernamePattern.test(e.target.value)) {
        // feedback positivo
        feedback.textContent = 'Lo username è valido';
        feedback.classList.remove('text-danger');
        feedback.classList.add('text-success');
        form.username.classList.remove('border-danger');
        form.username.classList.add('border-success');
    } else {
        // feedback negativo
        feedback.textContent = 'Lo username deve contenere solo lettere e deve essere di almeno 6 caratteri';
        feedback.classList.remove('text-success');
        feedback.classList.add('text-danger');
        form.username.classList.remove('border-success');
        form.username.classList.add('border-danger');
    }
});