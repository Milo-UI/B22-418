/*
    I parametri di una funzione sono dei segnaposto che verranno poi valorizzati quando la funzione viene chiamata
*/
function saluta(name) { // name -> variabile locale che possiamo usare nel blocco della funzione
    console.log(`Buongiorno ${name}!`);
}

saluta('Sandro'); // Passo il valore di name quando richiamo la funzione -> argomento

function salutaMeglio(name, time) { // separiamo i parametri con le virgole
    console.log(`${time} ${name}!`);
}

salutaMeglio('Lorenzo', 'Buonasera'); // L'ordine è importante

// Se richiamiamo una funzione che richiede dei parametri senza passarle delgi argomenti, i parametri assumono il valore di undefined. Per evitare che si richiami una funzione che richiede dei parametri senza valorizzarli, possiamo assegnare dei valori di default.
function salutaSicuro(name = 'Utente', time = 'Salve') {
    console.log(`${time} ${name}!`);
}

salutaSicuro(); // Se non passiamo alcun argomento, la funzione assegnerà i valori di default
salutaSicuro('Paola', 'Buon pomeriggio'); // Se passo degli argomenti, questi sovrascriveranno quelli di default

/*
    - Un parametro è la variabile elencata tra parentesi nella dichiarazione della funzione (fa parte della dichiarazione)
    - Un argomento è il valore passato alla funzione quando viene chiamata (fa parte della chiamata)
*/