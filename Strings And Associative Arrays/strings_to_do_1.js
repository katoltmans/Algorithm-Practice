// Remove Blanks
const removeBlanks = (str) => {
    letterArr = str.split("");
    newArr = [];
    for (var i = 0; i < letterArr.length; i++) {
        if (letterArr[i] !== " ") {
            newArr.push(letterArr[i]);
        }
    }
    newStr = newArr.join("");
    return newStr;
};

console.log(removeBlanks("Pl ayTha tF u nkyM usi c")); //output: PlayThatFunkyMusic
console.log(removeBlanks("I can not BELIEVE it's not BUTTER")); //output: IcannotBELIEVEit'snotBUTTER
console.log();

// Get Digits
const getDigits = (str) => {
    letArr = str.split("");
    newArr = [];
    for (var i = 0; i < letArr.length; i++) {
        if (!isNaN(letArr[i])) {
            newArr.push(letArr[i]);
        }
    }
    newStr = newArr.join("");
    return newStr;
};

console.log(getDigits("abc8c0d1ngd0j0!8")); //output: 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); //output: 01357924680
console.log();

// Acronyms
