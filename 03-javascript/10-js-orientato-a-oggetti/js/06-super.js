/*
    Se la sottoclasse non riporta una funzione costruttore, allora prenderà quella della classe che estende.
    Ma se volessimo aggiungere delle proprietà solo a Admin che la classe estesa User non ha, dobbiamo creare la funzione costruttore anche dentro alla sottoclasse.
*/
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }

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

class Admin extends User {
    // Siccome definisco un costruttorte, verrà preso in considerazione questo e non quello di User
    constructor(username, email, title) {
        // Chiediamo di eseguire il costruttore di User con super() che va a recuperarlo e gli passa le proprietà che vogliamo
        super(username, email);
        this.title = title;
    }

    deleteUser(user) {
        users = users.filter(u => u.username !== user.username);
    }
};

const userOne = new User('mario', 'mario@mail.it');
const userTwo = new User('luigi', 'luigi@mail.it');
// Aggiungo un argomento per la proprietà che avranno solo gli admin
const userThree = new Admin('milo', 'milo@mail.it', 'admin');

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userOne);
console.log(users);