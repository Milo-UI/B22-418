/*
    Creare una pagina web che abbia un menu di navigazione (che non porta da nessuna parte al momento) e un inizio di pokedex:

    - per ogni oggetto (pokemon) deve esserci una card contenente l'immagine (o sprite) del pokemon, il suo nome, il suo tipo e la sua mossa

    - ogni card avrà un BUTTON 'mostra info', che al click farà comparire le informazioni del pokemon in questione, farà cambiare l'immagine con quella del retro del pokemon e il testo all'interno del bottone stesso, che diventerà 'nascondi info'.
*/
const pokemons = [{
    id: 0,
    nome: "Bulbasaur",
    tipo: "erba",
    abilita: "Foglielama",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    info: "Il best boy. Abbastanza socievole se non infastidito"
}, {
    id: 1,
    nome: "Charmander",
    tipo: "fuoco",
    abilita: "Braciere",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    info: "In caso vada fuori controllo chiamare 112 e farsi passare i pompieri"
}, {
    id: 2,
    nome: "Squirtle",
    tipo: "acqua",
    abilita: "Pistolacqua",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
    info: "Non è un pompiere"
}, {
    id: 3,
    nome: "Pikachu",
    tipo: "elettrico",
    abilita: "Tuonoshock",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    info: "Coloro i quali lo agganceranno al contatore saranno punibili secondo norma cod. Penale"
}];

const pokedex = document.querySelector('.pokedex');

function creaCard() {
    pokemons.forEach(pokemon => {
        let cardTemplate = `
            <div class="col-md-6 col-lg-3">
                <div class="card">
                    <img src="${pokemon.sprite}" class="card-img-top" alt="${pokemon.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${pokemon.nome}</h5>
                        <p class="card-text">
                            Tipo: ${pokemon.tipo} <br>
                            Mossa: ${pokemon.abilita}
                        </p>
                        <button class="btn btn-primary" data-id="${pokemon.id}">Mostra info</button>
                    </div>
                </div>
            </div>`;

        pokedex.innerHTML += cardTemplate;
    });
};

pokedex.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        // console.log(e.target.getAttribute('data-id'));
        // console.log('Sto mostrando le info di', pokemons[e.target.getAttribute('data-id')].nome);
        // console.log(pokemons[e.target.getAttribute('data-id')].info);

        const infoPoke = document.createElement('p');

        if (e.target.textContent === 'Mostra info') {
            infoPoke.textContent = pokemons[e.target.getAttribute('data-id')].info;
            e.target.parentElement.insertBefore(infoPoke, e.target);
            e.target.textContent = 'Nascondi info';
            e.target.classList.remove('btn-primary');
            e.target.classList.add('btn-secondary');
            e.target.parentElement.previousElementSibling.setAttribute('src', pokemons[e.target.getAttribute('data-id')].spriteSpalle);
        } else {
            e.target.previousElementSibling.remove();
            e.target.textContent = 'Mostra info';
            e.target.classList.remove('btn-secondary');
            e.target.classList.add('btn-primary');
            e.target.parentElement.previousElementSibling.setAttribute('src', pokemons[e.target.getAttribute('data-id')].sprite);
        }

    }
});

creaCard();