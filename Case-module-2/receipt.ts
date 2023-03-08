import {roomManagement, RoomManagement} from "./RoomManagement";
import {Room} from "./Room";

export class  Receipt{
    private _id : number;
    private _startTime: Date ;
    private _endTime : Date ;
    private _rentalAgentName: string;
    private _roomID :number;


    constructor(id: number, startTime: Date , endTime: Date, rentalAgentName: string, roomID: number) {
        this._id = id;
        this._startTime = startTime;
        this._endTime = endTime;
        this._rentalAgentName = rentalAgentName;
        this._roomID = roomID;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get startTime(): Date {
        return this._startTime;
    }

    set startTime(value: Date) {
        this._startTime = value;
    }

    get endTime(): Date {
        return this._endTime;
    }

    set endTime(value: Date) {
        this._endTime = value;
    }

    get rentalAgentName(): string {
        return this._rentalAgentName;
    }

    set rentalAgentName(value: string) {
        this._rentalAgentName = value;
    }

    get roomID(): number {
        return this._roomID;
    }

    set roomID(value: number) {
        this._roomID = value;
    }

    totalTime(): number{
        return    ((this.endTime.getTime() -  this.startTime.getTime())/(1000 * 3600 * 24));
    }
    totalPayAmonth():number{
        return this.totalTime() * this.getRoomPrice(this.roomID);
    }

    // có thể lấy thuộc tính của room nếu nhập tham số là listRoom
    getRoomPrice(roomID: number, roomManager:RoomManagement = roomManagement): number {
        return roomManager.searchRoom(roomID)!.priceRoom;
    }
    getNameRoom(roomID:number,roomManager: RoomManagement = roomManagement):string {
        let room = roomManager.searchRoom(roomID);
        if (room !== undefined) {
            return room.nameRoom;
        }
        console.log('khong tim thay');
        return '';
    }
}
let receipt = new Receipt(1,new Date(2023,3,1,),new Date(2023,3,3),"tan", 2);
