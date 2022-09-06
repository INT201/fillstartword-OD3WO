const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
    let fullWord;
    if (word == null||word == undefined) {
        fullWord = undefined;
        return fullWord;
    } else if (startWord === word.substr(0, startWord.length)) {
        fullword = word;
        return fullword;
    }
    else {
        fullWord = startWord + word;
        return fullWord;
    }
}

// console.log(fillStartWord('1-2565-', 'Hello World'));
// console.log(fillStartWord('JS', 'beginner'));
// console.log(fillStartWord('first', 'firststep'));
// console.log(fillStartWord('second', undefined));
// console.log(fillStartWord('third', null));

module.exports = fillStartWord
