const perf = require('execution-time')();

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
perf.start();
console.log(isPangram('the quick brown fox jumps over the lazy dog'));
let results = perf.stop();
console.log("is pangram function", results.preciseWords);
//function runtime 2.4 ms
