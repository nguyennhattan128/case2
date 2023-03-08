// function S(n : number):number{
//     if(n == 1){
//         return 1;
//     }else {
//         return n + S(n -1)
//     }
// }
//
// console.log(S(4));

// giai thua
 function giaiThua(n:number) : number{
     if(n<=1){
         return 1;
     }
     return n * giaiThua(n-1)
 }

console.log(giaiThua(5));

