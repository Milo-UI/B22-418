const btn = document.querySelector("#btn");
const statusEl = document.querySelector("#status");
const countEl = document.querySelector("#count");

let count = 0;

btn.addEventListener('click', () => {
    count += 1;
    countEl.textContent = String(count);

    statusEl.textContent = 'JS sta funzionando';

    document.body.classList.toggle('light');
});