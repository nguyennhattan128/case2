import {AccountManage} from "./accountManagement";
import {Account} from "./Account"
import {RoomManagement} from "./RoomManagement";
import {price, Room, stt} from "./Room";
import {ReceiptManagement} from "./receiptManagement";
import {Receipt} from "./receipt";

let input = require('readline-sync');
function mainMenu(){
    let choice = -1;
    do {
        console.log(`
       ------MENU-----
       1.Đăng ký
       2.Đăng nhập
        `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                signUp();
                break;
            case 2:
                logIn();
                break;
        }
    }
    while (choice !== 0) ;
}
function signUp(){
    let userNameRegExp = /^[_a-z0-9]{8,}$/;
    let userName: string =  input.question("Enter username: ");
    if (userNameRegExp.test(userName)) {
        if (newAccountManager.checkAccount(userName)) {
            console.log("Tên tài khoản đã có, vui lòng dùng tên khác!")
        } else {
            let passWord: string = input.question("Enter password: ");
            let passWordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if (passWordRegExp.test(passWord)) {
                let newAccount = new Account(userName,passWord);
                newAccountManager.addAccount(newAccount);
                console.log("-----Đăng ký thành công!-----");
            }
            else {
                console.log( "Tên password phải nhập ít nhất 8 ký tự, bao gồm tối thiểu một chữ cái viết hoa và số!");
            }
        }

    } else {
        console.log("Tên tài khoản phải nhập ít nhất 8 ký tự, bao gồm cả ký tự chữ và số!");
    }

}
let newAccountManager = new AccountManage();
function logIn() {
    let userName: string =  input.question("Enter username: ");
    if (newAccountManager.checkAccount(userName)) {
        let passWord: string = input.question("Enter password: ");
        if (newAccountManager.checkPass(passWord)) {
            main()
        }
        else {
            console.log("Sai mật khẩu, vui lòng đăng nhập lại!");
        }
    }
    else {
        console.log("Tài khoản không tồn tại, vui lòng đăng ký lại!");
    }
}


let roomManagement = new RoomManagement();
let room1 = new Room(1,'phong 1',5000,"Busy",1,2)
let receiptManagement = new ReceiptManagement();
let receipt1 = new Receipt(1,new Date(2023,3,7),new Date(2023,3,8),'tan',1);
roomManagement.addRoom(room1);
receiptManagement.addRceipt(receipt1);
function main() {
    let choice = -1;
    do {
        console.log(`
        -------Menu chính ------
        1.Quản lý phòng
        2.Quản lý hoá đơn
        0.Thoát`
        )
        choice = +input.question('Enter choice: ');
        switch (choice){

            case 1:
                roomManagerMenu();
                break;
            case 2:
                receiptManagerMenu();
                break;

        }
    }
    while(choice !== 0);
}

function roomManagerMenu(){
    let choice = -1;
    do {
        console.log(`
    -------Menu chính ------
        1.In danh sách phòng
        2.Check trạng thái phòng
        3.Check phòng bằng giá
        4.Thêm phòng
        5.Xoá phòng
        6.Sửa phòng
        0.Thoát`)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                roomInfo();
                break;
            case 2:
                checkStatusRoom();
                break;
            case 3:
                findRoomByPrice();
                break;
            case 4:
                extraRoom();
                break;
            case 5:
                deleRoom();
                break;
            case 6:editRoom();
                break;

        }
    } while (choice !== 0)
}
function roomInfo(){
     let list = roomManagement.roomInformation();
    let menu = '';
    console.log(`
    ----------Danh sách phòng--------`)
    for (let i = 0; i < list.length; i++) {
        menu += `${i +1}.Tên phòng là: ${list[i].nameRoom}, ID của phòng là: ${list[i].id} \n`
    }
    menu += '0. Thoát'
    console.log(menu);
    let choice = +input.question('Nhập Id để xem thông tin phòng ');
    if (choice === 0) {
        main();
    } else {
        showRoom(choice);
    }
}
function showRoom(choice:number){
    console.log(roomManagement.searchRoom(choice)?.getInfoRoom());
}
function checkStatusRoom(){
    let  choice = +input.question(' Nhập ID để check trạng thái phòng0\nNhập 0 để thoát\n');
    if(choice === 0){
        main();
    }else {
        console.log(`Phòng có ID là ${choice} có trạng thái phòng :  ${roomManagement.checkStatus(choice)}`);
    }
}
function findRoomByPrice(){
    let  choice = +input.question('Nhập giá phòng mong muốn để check phòng\nCó 3 mức  giá là 5000 | 10000 | 15000\nNhập 0 để thoát\n');
    if(choice === 0){
        main();
    }else {
        console.log(`Phòng có mức giá ${choice} là :  ${roomManagement.checkPrice(choice)}`);
    }
}
function extraRoom(){
    let id = +input.question('Nhập id\n');
    let nameRoom = input.question('Nhập tên phòng\n');
    let priceRoom: price = input.question('Nhập giá phòng 5000 | 10000 | 15000\n');
    let status : stt = input.question('Nhập status: Ready | Empty | Busy\n');
    let toiletNumber = +input.question('Nhập số phòng toilet\n');
    let numberOfBedroom = +input.question('Nhập số phòng ngủ\n');
        let newRoom = new Room(id,nameRoom,priceRoom,status,toiletNumber,numberOfBedroom);
        roomManagement.addRoom(newRoom);

}
function deleRoom(){
    let  choice = +input.question(' Nhập ID phòng cần xoá\nNhập 0 để thoát\n');
    if(choice == 0){
        main();
    }else{
        roomManagement.deleteRoom(choice);
    }
}
function editRoom(){
    console.log(`
    --------Chọn mục cần sửa-----
        1.sửa Id
        2.Sửa tên phòng
        3.Sửa giá phòng
        4.Sửa trạng thái phòng
        0.Thoát\``)
    let choice = -1;
    do{
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                editId();
                break;
            case 2:
                editNameRoom();
                break;
            case 3:
                editPriceRoom();
                break;
            case 4:
                editStatus();
                break;
        }
    }while (choice !== 0);
}
function editId(){
    let id = +input.question('Nhập id\n');
    let newId = input.question('Nhập id mới\n');
    roomManagement.setId(id,newId);
}
function editNameRoom(){
    let id = +input.question('Nhập id\n');
    let newNameRoom = input.question('Nhập tên phòng\n');
    roomManagement.setNameRoom(id,newNameRoom);
}
function editPriceRoom(){
    let id = +input.question('Nhập id\n');
    let newPriceRoom: price = input.question('Nhập giá phòng\n');
    roomManagement.setPriceRoom(id,newPriceRoom);

}
function editStatus(){
    let id = +input.question('Nhập id\n');
    let newStatus: stt = input.question('Nhập tình trạng phòng\n');
    roomManagement.setStatus(id,newStatus);

}
function receiptManagerMenu(){
    let choice = -1;
    do{
        console.log(`
    -------Menu chính------
        1.In danh sách hoá đơn
        2.Tạo hoá đơn mới
        3.Sửa hoá đơn
        4.Tìm hoá đơn
        0.Thoát\``)
    choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                receiptInfo();
                break;
            case 2:
                addReceipt();
                break;
            case 3:
                editReceipt();
                break;
            case 4:
                findReceipt();
                break;

        }
    }while (choice !== 0)
}
function receiptInfo(){
    console.log(`
    ------Danh sách hoá đơn-----`)
    let menu = '';
    let listReceipt = receiptManagement.showReceipt();
    for (let i = 0; i < listReceipt.length; i++) {
        menu += `${i + 1}.Hoá đơn có id là :${listReceipt[i].id}\n `;
    }
    console.log(menu);
}
function addReceipt(){
    let id = +input.question('Nhập id\n');
    let startTime:Date = input.question('Nhập tên phòng\n');
    let endTime: Date = input.question('Nhập giá phòng 5000 | 10000 | 15000\n');
    let RentalAgentName = input.question('Nhập tên khách\n');
    let rooID = +input.question('Nhập số phòng toilet\n');
    let newReceipt = new Receipt(id,startTime,endTime,RentalAgentName,rooID);
    receiptManagement.addRceipt(newReceipt);
}
function editReceipt(){
    let choice = -1;
    do {console.log(`
    -----Chọn mục cần xoá----
    1.Sửa thời gian bắt đầu
    2.Sửa thời gian kết thúc`)
    choice = +input.question('Enter choice: ');
    switch (choice) {
        case 1:
            editStartTime();
            break;
        case 2:
            editEndTime();
            break;
    }
    }while (choice !== 0);
}
function editStartTime(){
    let id = +input.question('Nhập id\n');
    let newStartTime:string = input.question('Nhập ngày vào\n');
    let time = newStartTime.split(',')
    let newTime = new Date(+time[0],+time[1] - 1,+time[2] + 1)
    receiptManagement.setStartTime(id,newTime);

}
function editEndTime(){
    let id = +input.question('Nhập id\n');
    let newEndTime:string = input.question('Nhập ngày ra\n');
    let time =newEndTime.split(',');
    let newTime = new Date(+time[0],+time[1] -1,+time[2] +1)
    receiptManagement.setEndTime(id,newTime);

}
function findReceipt(){
    let id = +input.question('Nhập id\n');
    let receipt =  receiptManagement.searchReceipt(id);
    console.log(receipt);
}

mainMenu();