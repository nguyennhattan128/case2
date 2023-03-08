// //sắp xếp thứ tự tăng dần chọn số nhỏ nhất
// let arr = [3,6,7,1,0,5,2];
// function selectImport(arr:any){
//     for (let i = 0; i < arr.length - 1; i++) {
//         let min = i
//         for (let j = i +1 ; j < arr.length ; j++) {
//             if(arr[min] > arr[j]){
//               min = j
//             }
//
//         }
//         let term = arr[min];
//         arr[min] = arr[i]
//         arr[i] = term;
//     }
//     console.log(arr);
// }
// selectImport(arr);
let arr = [5,2,8,1,9,0,3];
function selectImport(arr: any){
    for (let i = 0; i < arr.length-1; i++) {
        let min = i;
        for (let j = i+1; j <arr.length; j++) {
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        // let term = arr[min]
        // arr[min] = arr[i]
        // arr[i] = term
        [arr[min],arr[i]] = [arr[i],arr[min]];
    }
    return arr;
}

console.log(selectImport(arr));
