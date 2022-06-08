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
