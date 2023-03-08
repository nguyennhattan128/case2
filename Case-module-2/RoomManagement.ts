import {price, Room, stt} from "./Room";
import {monitorEventLoopDelay} from "perf_hooks";

export class RoomManagement{
    private listRoom : Room[];
    constructor() {
        this.listRoom = [];
    }
    addRoom(item:Room){
        this.listRoom.push(item);
    }
    searchRoom(id:number):Room | undefined{
        for (let i = 0; i <this.listRoom.length ; i++) {
            if(this.listRoom[i].id === id){
                return this.listRoom[i];
            }
        }
        return undefined;
    }
    roomInformation(){
        return this.listRoom;
    }
    deleteRoom(id:number){
        let index = this.findIndex(id);
        if (index !== -1) {
            this.listRoom.splice(index, 1);
        }
    }
    findIndex(id:number):number{
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].id === id){
                return i
            }
        }
        return -1

    }
    setId(id:number, newId: number ){
        let index = this.findIndex(id);
        if (index !== -1) {
            this.listRoom[index].id = newId;
        }
    }
    setNameRoom(id:number,NewNameRoom:string){
        let index = this.findIndex(id);
        if (index !== -1) {
            this.listRoom[index].nameRoom = NewNameRoom;
        }
    }
    setPriceRoom(id:number,newPriceRoom:price){
        let index = this.findIndex(id);
        if (index !== -1) {
            this.listRoom[index].priceRoom = newPriceRoom;
        }
    }
    setStatus(id:number,newStatus:stt){
        let index = this.findIndex(id);
        if (index !== -1) {
            this.listRoom[index].status = newStatus;
        }
    }
    setToiletNumber(id:number,newToiletNumber:number){
        let index = this.findIndex(id);
        if(index !== -1){
            this.listRoom[index].toiletNumber = newToiletNumber;
        }
    }
    setNumberOfBedroom(id:number,newNumberOfBedroom:number){
        let index = this.findIndex(id);
        if(index!==-1){
            this.listRoom[index].numberOfBedroom = newNumberOfBedroom;
        }
    }
    checkStatus(id:number):stt{
        let index = this.findIndex(id);
        if(index!==-1) {
            return this.listRoom[index].status;
        }
        return null
    }
    // trả vể Room[]
    checkPrice(priceRoom:number){
        let listRoom = [];
        for (let i = 0; i < this.listRoom.length; i++) {
            if(this.listRoom[i].priceRoom === priceRoom){
                listRoom.push(this.listRoom[i].nameRoom);
            }
        }
        return listRoom;
    }
}
let b = new Room(1,'b',5000,'Empty',1,1);
let c = new Room(2,'c',10000,'Empty',1,1);
export let roomManagement = new RoomManagement();
roomManagement.addRoom(b);
roomManagement.addRoom(c);


