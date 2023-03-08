export type stt = "Ready" | "Empty" | "Busy" | null;
export  type price = 5000 | 10000 | 15000 ;
export class Room{
    private _id: number;
    private _nameRoom : string;
    private _priceRoom: price;
    private _status : stt;
    private _toiletNumber : number;
    private _numberOfBedroom: number;

    constructor(id: number, nameRoom: string, priceRoom: price, status: stt, toiletNumber: number, numberOfBedroom: number) {
        this._id = id;
        this._nameRoom = nameRoom;
        this._priceRoom = priceRoom;
        this._status = status;
        this._toiletNumber = toiletNumber;
        this._numberOfBedroom = numberOfBedroom;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nameRoom(): string {
        return this._nameRoom;
    }

    set nameRoom(value: string) {
        this._nameRoom = value;
    }

    get priceRoom(): price {
        return this._priceRoom;
    }

    set priceRoom(value: price) {
        this._priceRoom = value;
    }

    get status(): stt {
        return this._status;
    }

    set status(value: stt) {
        this._status = value;
    }

    get toiletNumber(): number {
        return this._toiletNumber;
    }

    set toiletNumber(value: number) {
        this._toiletNumber = value;
    }

    get numberOfBedroom(): number {
        return this._numberOfBedroom;
    }

    set numberOfBedroom(value: number) {
        this._numberOfBedroom = value;
    }
    getInfoRoom(){
        return `id: ${this.id} | Name room: ${this.nameRoom} | Price room: ${this.priceRoom}
        Status: ${this.status} |Toilet number: ${this.toiletNumber} |Number of bedroom: ${this.numberOfBedroom}`
    }
    setInfoRoom(id:number,nameRoom: string,priceRoom:price,status: stt,toiletNumber:number,numberOfBedroom:number){
         this.id = id;
         this.nameRoom = nameRoom;
         this.priceRoom = priceRoom;
         this.status = status;
         this.toiletNumber = toiletNumber;
         this.numberOfBedroom= numberOfBedroom;

    }
}
