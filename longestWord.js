const perf = require('execution-time')();

function findLongestWord(strArr){
    let max_str = strArr[0].length;
    let answer = strArr[0];
    for (let i = 1; i < strArr.length; i++){
        let maxWord = strArr[i].length;
        if (maxWord > max_str){
            answer = strArr[i];
            max_str = maxWord;
        }
    }
    return answer.length;
}
perf.start();
console.log(findLongestWord(['a','not','if','hello']));
let results = perf.stop();
console.log("find longest word function", results.preciseWords);
//function runtime 2.2 ms
