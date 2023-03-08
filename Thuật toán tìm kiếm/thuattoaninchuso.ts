let arr = ["khong", "mot","hai","ba","bon","nam","sau","bay","tam","chin","muoi","hai muoi"]
// let nhapso = 20;
// if(nhapso>10){
//     console.log(arr[10]+ arr[nhapso-10]);
// }if(nhapso>20){
//     console.log(arr[11]+ arr[nhapso-20] )
// }
let a =24;
let kq = '';
let hangDonVi = a % 10;
let hangChuc = Math.floor(a/10)
if(hangChuc <= 1){
    if(hangDonVi===5)kq ='muoi lam';
    if(hangDonVi!==0)kq ='muoi' + arr[hangDonVi]
    if(hangDonVi===0)kq ='muoi';
}else{
    kq = arr[hangChuc]+ 'muoi';
    if(hangDonVi===1){
        kq += 'mot'
    }else if(hangDonVi ===4){
        kq += 'tu'
    }else if(hangDonVi===5){
        kq+= 'lam'
    }else if(hangDonVi>0){
        kq+= arr[hangDonVi]
    }
}
console.log(kq);
