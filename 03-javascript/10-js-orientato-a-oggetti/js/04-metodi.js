/*
    Ora che possiamo creare quanti oggetti User vogliamo, ognuno con le sue proprietà, sarebbe bello fare in modo che abbiano anche dei metodi che ogni oggetto possa utilizzare.

    Per definire i metodi all'interno di una classe, non lo facciamo dentro la funzione costruttore, ma subito fuori.
*/
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    // Non usiamo una arrow function, perché non sarebbe in grado di utilizzare la parola chiave this
    login() {
        console.log(`${this.username} ha effettuato il login`);
        return this;
    }

    logout() {
        console.log(`${this.username} ha effettuato il logout`);
        return this;
    }

    increaseScore() {
        this.score++;
        console.log(`${this.username} ha un punteggio di ${this.score}`);
        return this;
    }
};

const userOne = new User('mario', 'mario@mail.it');
const userTwo = new User('luigi', 'luigi@mail.it');

console.log(userOne, userTwo);
// userOne.login();
// userTwo.login();
// userOne.logout();
// userTwo.logout();

// Al momento, se volessimo utilizzare un metodo dell'utente e subito dopo usarne un altro, dovremmo per forza scrivere due statement uno dopo l'altro
userOne.login();
userOne.increaseScore();

// Non possiamo concatenare i due metodi (o più di due) perché al momento non ci restituiscono nessun valore. Quando non specifichiamo cosa un metodo debba restituire, di default restituirà undefined e non possiamo chiamare un metodo su udefined concatenandolo.
// La soluzione è di far restituire ai metodi l'oggetto stesso, così che noi possiamo concatenare altri metodi che verranno lanciati su ciò che viene restituito dal metodo precedente.
userOne.login().logout();
userOne.login().increaseScore().increaseScore().increaseScore().logout();
console.log(userOne);