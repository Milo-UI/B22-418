/*
    Classi:
        - Cart              -> gestione carrello e localStorage
        - ProductCatalog    -> fetch API, filtri, ordinamento e sessionStorage
        - App               -> rendering DOM, event listeners, comunicazione tra gli altri oggetti
*/

/* ---------------------------------- Cart ---------------------------------- */
// Responsabilità: CRUD del carrello e persistenza in localStorage
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('carrello')) || [];
    }

    // Aggiungere un prodotto. Se è già presente, incrementa la quantità
    add(id) {
        const esistente = this.items.find(item => item.id === id);

        if (esistente) {
            esistente.quantita++;
        } else {
            this.items.push({ id: id, quantita: 1 });
        }

        this.save();
    }

    // Modificare la quantità. Se scende a 0, rrimuovere l'articolo
    updateQty(id, delta) {
        const item = this.items.find(i => i.id === id);
        if (!item) return;

        item.quantita += delta;

        if (item.quantita <= 0) {
            this.remove(id);
            return; // save() già chiamato in remove()
        }

        this.save();
    }

    // Rimuovere un articolo per id
    remove(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.save();
    }

    // Svuotare completamente il carrello
    clear() {
        this.items = [];
        this.save();
    }

    // Calcolare il costo totale. Riceve l'array prodotti come parametro, perché Cart non ha accesso diretto ai dati dell'API
    getTotal(products) {
        return this.items.reduce((acc, item) => {
            const prodotto = products.find(p => p.id === item.id);
            if (!prodotto) return acc;

            return acc + prodotto.price * item.quantita;
        }, 0);
    }

    // Contare il numero totale di articoli
    getTotalQty() {
        return this.items.reduce((acc, item) => acc + item.quantita, 0);
    }

    // Salvare in localStorage SOLO id e quantità
    save() {
        localStorage.setItem('carrello', JSON.stringify(this.items));
    }
}

/* ----------------------------- ProductCatalog ----------------------------- */
// Fetch API, filtri, ordinamento, persistenza filitri in sessionStorage
class ProductCatalog {
    constructor() {
        this.API_URL = 'https://fakestoreapi.com/products';
        this.products = [];
        this.category = sessionStorage.getItem('categoriaAttiva') || 'tutte';
        this.order = sessionStorage.getItem('ordineAttivo') || 'default';
    }

    // Caricare i prodotti dall'API
    async load() {
        try {
            const risposta = await fetch(this.API_URL);

            if (!risposta.ok) {
                throw new Error(`Errore API: ${risposta.status}`);
            }

            this.products = await risposta.json();
            return true;
        } catch (errore) {
            console.error('Errore nel caricamento dei prodotti:', errore);
            this.products = [];
            return false;
        }
    }

    // Impostare la categoria attiva e la persistenza in sessionStorage
    setCategory(value) {
        this.category = value;
        sessionStorage.setItem('categoriaAttiva', value);
    }

    // Impostare l'ordinamento attivo e la persistenza in sessionStorage
    setOrder(value) {
        this.order = value;
        sessionStorage.setItem('ordineAttivo', value);
    }

    // Ottenere le categorie uniche presenti nei prodotti
    getCategories() {
        const categorie = [];

        this.products.forEach(p => {
            if (!categorie.includes(p.category)) {
                categorie.push(p.category);
            }
        });

        return categorie;
    }

    // Retituire una copia di products filtrata e ordinata
    getVisible() {
        let risultato = this.products.slice();

        if (this.category !== 'tutte') {
            risultato = risultato.filter(p => p.category === this.category);
        }

        if (this.order === 'prezzo-asc') {
            risultato.sort((a, b) => a.price - b.price);
        } else if (this.order === 'prezzo-desc') {
            risultato.sort((a, b) => b.price - a.price);
        }

        return risultato
    }
}

/* ----------------------------------- App ---------------------------------- */
// Rendering del DOM ed event listeners. Tiene i riferimenti agli elementi del DOM e orchestra Cart e ProductCatalog
class App {
    constructor() {
        // Istanze delle altre classi
        this.cart = new Cart();
        this.catalog = new ProductCatalog();

        // Riferimenti al DOM
        this.listaProdotti = document.querySelector('.prodotti-grid');
        this.listaCarrello = document.querySelector('.carrello');
        this.filtroCategoria = document.querySelector('.filtro-categoria');
        this.filtroOrdine = document.querySelector('.filtro-ordine');
        this.conteggioEl = document.querySelector('.conteggio');
        this.totaleEl = document.querySelector('.totale-valore');
        this.btnSvuota = document.querySelector('.svuota');
        this.loadingEl = document.querySelector('.loading');

        this.bindEvents();
    }

    // Punto di ingresso: carica i prodotti e avvia il render
    async init() {
        const successo = await this.catalog.load();

        this.loadingEl.style.display = 'none';

        if (successo) {
            this.renderCategories();
            this.renderProducts();
        } else {
            this.listaProdotti.innerHTML = `<div className="errore">Impossibile caricare i prodotti. Prova più tardi.</div>`;
        }

        // Il carrello si renderizza sempre, indipendentemente dall'esito dell'API
        this.renderCart();
    }

    // Popolare la select delle categorie con le opzioni ricavate dall'API
    renderCategories() {
        this.catalog.getCategories().forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
            this.filtroCategoria.appendChild(option);
        });

        // Ripristino dei valori salvati in sessionStorage
        this.filtroCategoria.value = this.catalog.category;
        this.filtroOrdine.value = this.catalog.order;
    }

    // Render della griglia prodotti
    renderProducts() {
        const visibili = this.catalog.getVisible();

        if (visibili.length === 0) {
            this.listaProdotti.innerHTML = `<div className="empty">Nessun prodotto trovato</div>`;
            return;
        }

        this.listaProdotti.innerHTML = visibili.map(p => `
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
    }

    // Render del carrello, conteggio articoli e totale
    renderCart() {
        if (this.cart.items.length === 0) {
            this.listaCarrello.innerHTML = `<li className="empty">Il carrello è vuoto</li>`;
        } else {
            this.listaCarrello.innerHTML = this.cart.items.map(item => {
                const prodotto = this.catalog.products.find(p => p.id === item.id);

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

        this.conteggioEl.textContent = this.cart.getTotalQty();
        this.totaleEl.textContent = `${this.cart.getTotal(this.catalog.products).toFixed(2)} $`;
    }

    // Registrare tutti gli event listenere (un metodo chiamato una sola volta nel costruttore)
    bindEvents() {
        // Event delegation — prodotti
        this.listaProdotti.addEventListener('click', e => {
            if (e.target.classList.contains('btn-add')) {
                const id = parseInt(e.target.dataset.id);
                this.cart.add(id);
                this.renderCart();
            }
        });

        // Event delegation — carrello
        this.listaCarrello.addEventListener('click', e => {
            const target = e.target.closest('button');
            if (!target) return;

            const id = parseInt(target.dataset.id);

            if (target.classList.contains('qta-piu')) {
                this.cart.updateQty(id, 1);
            } else if (target.classList.contains('qta-meno')) {
                this.cart.updateQty(id, -1);
            } else if (target.classList.contains('rimuovi')) {
                this.cart.remove(id);
            }

            this.renderCart();
        });

        // Filtro categoria
        this.filtroCategoria.addEventListener('change', e => {
            this.catalog.setCategory(e.target.value);
            this.renderProducts();
        });

        // Filtro ordinamento
        this.filtroOrdine.addEventListener('change', e => {
            this.catalog.setOrder(e.target.value);
            this.renderProducts();
        });

        // Svuota carrello
        this.btnSvuota.addEventListener('click', () => {
            if (this.cart.items.length === 0) return;

            if (confirm('Vuoi davvero svuotare il carrello?')) {
                this.cart.clear();
                this.renderCart();
            }
        });
    }
}

/* --------------------------- Avvio applicazione --------------------------- */
const app = new App();
app.init();