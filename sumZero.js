function addToZero(arr, sum){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === sum){
                return true;
            }
        }
    }
    return false;
}
console.log(addToZero([1,2,3,4, -2], 0));
