function search(numbers: number[],needle:number):boolean{
    for(const number of numbers){
        if(number === needle){
            return true;
        }
    }
    return false;
}
let arr = [2,4,6,8,4,1];
console.log(search(arr,2))