class User{
   private _email;
   private _password;

    constructor(email, password) {
        this._email = email;
        this._password = password;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}
class Regis {
    private arr : User[];

    constructor() {
        this.arr = [];
    }
    addUser(item:User){
        this.arr.push(item);
    }
    deleUser(){

    }
}
let user1 = new User("abc",23)
let regis = new Regis();
regis.addUser(user1);