function addToZero(arr, sum){
    for (let i = 0; i < arr.length; i++){
        let comparator = 0;
        if (arr[comparator] + arr[i] === sum){
            return true;
        } else if (arr[comparator] + arr[i] != sum){
            comparator++;
        } else {
            return false;
        }
    }
};
if (addToZero ([1,2,3,4,-1], 0)) {
    console.log('true')
} else {
    console.log('false')
}
