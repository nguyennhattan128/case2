// triển khai băng vòng lặp
// function binarySearch(numbers: number[],
//                       needle: number): boolean {
//     let left = 0;
//     let right = numbers.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((right + left) / 2);
//         if (numbers[mid] == needle) {
//             return true;
//         } else if (numbers[mid] > needle) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return false;
// }
//
// let arr = [1, 2, 3, 4, 5, 6, 8, 10];
// console.log(binarySearch(arr, 6)); // true
// console.log(binarySearch(arr, 7)); // false

// dùng đệ quy
function binarySearch(numbers: number[],
                      needle: number,
                      left: number,
                      right: number): boolean {

    if (right < left) {
        return false;
    }

    let mid = Math.floor((right + left) / 2);
    if (numbers[mid] == needle) {
        return true;
    } else if (numbers[mid] > needle) {
        return binarySearch(numbers, needle, left, mid - 1);
    } else {
        return binarySearch(numbers, needle, mid + 1, right);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 8, 10];
console.log(binarySearch(arr, 6, 0, arr.length - 1)); // true
console.log(binarySearch(arr, 7, 0, arr.length - 1)); // false