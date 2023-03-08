export class Account {
    private _userName: string;
    private _passWord: string;

    constructor( userName: string, passWord: string) {
        this._userName = userName;
        this._passWord = passWord;
    }
    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get passWord(): string {
        return this._passWord;
    }

    set passWord(value: string) {
        this._passWord = value;
    }
}