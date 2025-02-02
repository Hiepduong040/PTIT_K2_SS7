function checkIsPrime(number:number){
    if(number<=1){
        return false;
    }
    for(let i =2 ; i<=Math.sqrt(number);i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}
function checkArray(array: number[]):boolean{
    return array.every(checkIsPrime);
}

let array1:number[] = [1,3,4,2,7,9,32,43,12,45];
let array2:number[] = [3,5,7,11,13];
console.log(checkArray(array1));
console.log(checkArray(array2));
