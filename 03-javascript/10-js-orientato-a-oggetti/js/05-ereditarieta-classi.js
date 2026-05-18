/*
    Le sottoclassi sono classi che ereditano funzionalità da un'altra classe, ma aggiungono anche delle loro proprietà e dei loro metodi.
    In poche parole 'estendono' un'altra classe.
*/
// Se volessimo creare uno User admin, questo avrà uno username, un'email, ecc, ma magari avrà anche un metodo extra per poter eliminare altri utenti. Non dobbiamo scrivere una nuova classe che riporti tutto ciò che già viene creato da User, ci basta crearne una che estenda User e aggiunge quello che ci serve.
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
    deleteUser(user) {
        users = users.filter(u => u.username !== user.username);
    }
};

const userOne = new User('mario', 'mario@mail.it');
const userTwo = new User('luigi', 'luigi@mail.it');
const userThree = new Admin('milo', 'milo@mail.it');

console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userOne);
console.log(users);