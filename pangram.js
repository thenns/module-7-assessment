function isPangram(str){
    let strArr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < alphabet.length; i++){
        if(strArr.indexOf(alphabet[i]) < 0){
            return false;
        }
    }
    return true;
}

console.log(isPangram('the quick brown fox jumps over the lazy dog'));
