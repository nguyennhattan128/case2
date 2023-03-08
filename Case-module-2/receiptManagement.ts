import {Receipt} from "./receipt";
import {log} from "util";

export class ReceiptManagement{
    private listReceipt : Receipt[];
    constructor() {
        this.listReceipt = [];
    }
    addRceipt(item:Receipt){
        this.listReceipt.push(item);
    }
    findIdReceipt(id:number):number{
        for (let i = 0; i < this.listReceipt.length; i++) {
            if(id = this.listReceipt[i].id){
                return i
            }

        }
            return -1;
    }
    searchReceipt(id:number){
        if(id !== -1){
            return this.listReceipt[this.findIdReceipt(id)];
        }else {
            console.log('Không tìm thấy hoá đơn')
        }

    }
    showReceipt():Receipt[]{
        return this.listReceipt;
    }
    deleteReceipt(id:number){
        return this.listReceipt.splice(id,1);
    }
    setStartTime(id:number,newStartTime:Date):Date|null{
        let index = this.findIdReceipt(id);
        if(index !== -1){
            return this.listReceipt[index].startTime = newStartTime;
        }else {
            return null;
        }
    }
    setEndTime(id:number,newEndTime:Date):Date | null{
        let index = this.findIdReceipt(id);
        if(index !==-1){
            return this.listReceipt[index].endTime = newEndTime;
        }else {
            return null;
        }
}
}

