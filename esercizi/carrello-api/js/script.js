// URL dell'API
const API_URL = 'https://fakestoreapi.com/products';

// Riferimenti al DOM
const listaProdotti = document.querySelector('.prodotti-grid');
const listaCarrello = document.querySelector('.carrello');
const filtroCategoria = document.querySelector('.filtro-categoria');
const filtroOrdine = document.querySelector('.filtro-ordine');
const conteggioEl = document.querySelector('.conteggio');
const totaleEl = document.querySelector('.totale-valore');
const btnSvuota = document.querySelector('.svuota');
const loadingEl = document.querySelector('.loading');

// Stato dell'app: i prodotti partono vuoti, verranno popolati dall'API.
// Il carrello e i filtri li recuperiamo subito dagli storage.
let prodotti = [];
let carrello = JSON.parse(localStorage.getItem('carrello')) || [];
let categoriaAttiva = sessionStorage.getItem('categoriaAttiva') || 'tutte';
let ordineAttivo = sessionStorage.getItem('ordineAttivo') || 'default';

// 1 - Funzione async per recuperare i prodotti dall'API.
//     Usiamo try/catch per gestire un eventuale errore (rete giù, API down, ecc.)
const caricaProdotti = async () => {
    try {
        const risposta = await fetch(API_URL);

        // fetch non lancia errore per status 4xx/5xx, va controllato manualmente
        if (!risposta.ok) {
            throw new Error(`Errore API: ${risposta.status}`);
        }

        const dati = await risposta.json();
        return dati;
    } catch (errore) {
        console.error('Errore nel caricamento dei prodotti:', errore);
        listaProdotti.innerHTML = `<div class="errore">Impossibile caricare i prodotti. Riprova più tardi.</div>`;
        return [];
    }
};

// 2 - Popoliamo dinamicamente la select delle categorie a partire dai prodotti caricati.
//     Per ottenere i valori unici scorriamo i prodotti e aggiungiamo la categoria a un nuovo
//     array solo se non è già presente (controllo con includes()).
const popolaSelectCategorie = () => {
    const categorie = [];

    prodotti.forEach(p => {
        if (!categorie.includes(p.category)) {
            categorie.push(p.category);
        }
    });

    categorie.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        filtroCategoria.appendChild(option);
    });

    // Ripristino del valore selezionato (se la categoria salvata esiste ancora)
    filtroCategoria.value = categoriaAttiva;
    filtroOrdine.value = ordineAttivo;
};

// 3 - Applica filtri e ordinamento e restituisce l'array di prodotti da mostrare.
const ottieniProdottiVisibili = () => {
    // slice() senza argomenti restituisce una COPIA dell'array originale.
    // Lavorare sulla copia ci permette di filtrare/ordinare senza modificare l'array `prodotti`.
    let risultato = prodotti.slice();

    if (categoriaAttiva !== 'tutte') {
        risultato = risultato.filter(p => p.category === categoriaAttiva);
    }

    if (ordineAttivo === 'prezzo-asc') {
        risultato.sort((a, b) => a.price - b.price);
    } else if (ordineAttivo === 'prezzo-desc') {
        risultato.sort((a, b) => b.price - a.price);
    }

    return risultato;
};

// 4 - Render dei prodotti nella lista visibile.
const renderProdotti = () => {
    const visibili = ottieniProdottiVisibili();

    if (visibili.length === 0) {
        listaProdotti.innerHTML = `<div class="empty">Nessun prodotto trovato</div>`;
        return;
    }

    // Ogni prodotto è una card che andrà a popolare la griglia CSS Grid.
    listaProdotti.innerHTML = visibili.map(p => `
        <article class="card">
            <img src="${p.image}" alt="${p.title}" class="card-img">
            <span class="card-categoria">${p.category}</span>
            <h3 class="card-nome" title="${p.title}">${p.title}</h3>
            <div class="card-prezzo">${p.price.toFixed(2)} $</div>
            <button class="btn btn-add" data-id="${p.id}">
                <i class="fa-solid fa-cart-plus"></i> Aggiungi
            </button>
        </article>
    `).join('');
};

// 5 - Render del carrello + conteggio + totale.
const renderCarrello = () => {
    if (carrello.length === 0) {
        listaCarrello.innerHTML = `<li class="empty">Il carrello è vuoto</li>`;
    } else {
        listaCarrello.innerHTML = carrello.map(item => {
            // "Rigonfiamo" l'id incrociandolo con la lista prodotti caricata dall'API
            const prodotto = prodotti.find(p => p.id === item.id);

            return `
                <li>
                    <img src="${prodotto.image}" alt="${prodotto.title}" class="carrello-img">
                    <div class="carrello-info">
                        <span class="carrello-nome" title="${prodotto.title}">${prodotto.title}</span>
                        <span class="carrello-prezzo">${prodotto.price.toFixed(2)} $ × ${item.quantita}</span>
                    </div>
                    <div class="qta-controls">
                        <button class="qta-meno" data-id="${prodotto.id}">−</button>
                        <span class="qta">${item.quantita}</span>
                        <button class="qta-piu" data-id="${prodotto.id}">+</button>
                        <button class="rimuovi" data-id="${prodotto.id}" title="Rimuovi">
                            <i class="fa-regular fa-trash-alt"></i>
                        </button>
                    </div>
                </li>
            `;
        }).join('');
    }

    const totaleArticoli = carrello.reduce((acc, item) => acc + item.quantita, 0);
    conteggioEl.textContent = totaleArticoli;

    const totalePrezzo = carrello.reduce((acc, item) => {
        const prodotto = prodotti.find(p => p.id === item.id);
        // Se il prodotto non esiste più nell'API, non lo conteggiamo nel totale
        if (!prodotto) return acc;
        return acc + (prodotto.price * item.quantita);
    }, 0);
    totaleEl.textContent = `${totalePrezzo.toFixed(2)} $`;
};

// 6 - Salviamo SOLO id e quantita in localStorage (non l'intero prodotto).
const salvaCarrello = () => {
    localStorage.setItem('carrello', JSON.stringify(carrello));
};

// 7 - Aggiungere un prodotto al carrello.
const aggiungiAlCarrello = (id) => {
    const esistente = carrello.find(item => item.id === id);

    if (esistente) {
        esistente.quantita++;
    } else {
        carrello.push({ id: id, quantita: 1 });
    }

    salvaCarrello();
    renderCarrello();
};

// 8 - Modificare la quantità dei prodotti, se arriva a 0 rimuoviamo l'articolo.
const modificaQuantita = (id, delta) => {
    const item = carrello.find(i => i.id === id);
    if (!item) return;

    item.quantita += delta;

    if (item.quantita <= 0) {
        carrello = carrello.filter(i => i.id !== id);
    }

    salvaCarrello();
    renderCarrello();
};

// 9 - Rimuovere un articolo dal carrello
const rimuoviDalCarrello = (id) => {
    carrello = carrello.filter(item => item.id !== id);
    salvaCarrello();
    renderCarrello();
};

// 10 - Event delegation sulla lista prodotti.
listaProdotti.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add')) {
        const id = parseInt(e.target.dataset.id);
        aggiungiAlCarrello(id);
    }
});

// 11 - Event delegation sul carrello
listaCarrello.addEventListener('click', e => {
    const target = e.target.closest('button');
    if (!target) return;

    const id = parseInt(target.dataset.id);

    if (target.classList.contains('qta-piu')) {
        modificaQuantita(id, 1);
    } else if (target.classList.contains('qta-meno')) {
        modificaQuantita(id, -1);
    } else if (target.classList.contains('rimuovi')) {
        rimuoviDalCarrello(id);
    }
});

// 12 - Pulsante svuota carrello con conferma
btnSvuota.addEventListener('click', () => {
    if (carrello.length === 0) return;

    if (confirm('Vuoi davvero svuotare il carrello?')) {
        carrello = [];
        salvaCarrello();
        renderCarrello();
    }
});

// 13 - Listener sui filtri: salviamo in sessionStorage e re-rendirizziamo.
filtroCategoria.addEventListener('change', e => {
    categoriaAttiva = e.target.value;
    sessionStorage.setItem('categoriaAttiva', categoriaAttiva);
    renderProdotti();
});

filtroOrdine.addEventListener('change', e => {
    ordineAttivo = e.target.value;
    sessionStorage.setItem('ordineAttivo', ordineAttivo);
    renderProdotti();
});

// 14 - Inizializzazione: carichiamo i prodotti dall'API e poi facciamo i render.
//      IIFE = Immediately Invoked Function Expression - una funzione che si definisce e si chiama nello stesso momento
(async () => {
    prodotti = await caricaProdotti();

    // Nascondiamo il messaggio di loading
    loadingEl.style.display = 'none';

    if (prodotti.length > 0) {
        popolaSelectCategorie();
        renderProdotti();
    }

    renderCarrello();
})();