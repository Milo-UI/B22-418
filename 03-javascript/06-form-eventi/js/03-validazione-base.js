const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Validazione
    let username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,}$/;

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
})