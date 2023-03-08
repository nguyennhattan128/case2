// function insertSort(arr: number[]){
//     for (let i = 0; i <arr.length ; i++) {
//         //lấy ra phần tử ở vị trí i
//         let x = arr[i], pos = i -1;
//         while (pos>= 0 && x < arr[pos]){
//             arr[pos + 1] = arr[pos];
//             pos--;
//         }
//         arr[pos + 1] = x
//     }
//     return arr;
// }
//
// console.log(insertSort([4,6,2,7,9]));
// vì các vị trí thay đổi theo giá tri poss
//vì x cần phải cố định
function insertSort(arr:number[]){
    for (let i = 0; i <arr.length; i++) {
            let x = arr[i], pos = i-1;
            while (pos>=0 && x < arr[pos]){
                arr[pos +1] = arr[pos]
                pos--
            }
            arr[pos + 1] = x;
    }
    return arr;
}
console.log(insertSort([4,6,2,7,9]));