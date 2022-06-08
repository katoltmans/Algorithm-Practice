// Remove Blanks
const removeBlanks = (str) => {
    let letterArr = str.split("");
    let newArr = [];
    for (var i = 0; i < letterArr.length; i++) {
        if (letterArr[i] !== " ") {
            newArr.push(letterArr[i]);
        }
    }
    let newStr = newArr.join("");
    return newStr;
};

console.log(removeBlanks("Pl ayTha tF u nkyM usi c")); //output: PlayThatFunkyMusic
console.log(removeBlanks("I can not BELIEVE it's not BUTTER")); //output: IcannotBELIEVEit'snotBUTTER
console.log();

// Get Digits
const getDigits = (str) => {
    let letArr = str.split("");
    let newArr = [];
    for (var i = 0; i < letArr.length; i++) {
        if (!isNaN(letArr[i])) {
            newArr.push(letArr[i]);
        }
    }
    let newStr = newArr.join("");
    return newStr;
};

console.log(getDigits("abc8c0d1ngd0j0!8")); //output: 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); //output: 01357924680
console.log();

// Acronyms
const acronym = (str) => {
    let arr = str.split(" ");
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        letArr = arr[i].split("");
        newArr.push(letArr[0]);
    }
    let newStr = newArr.join("").toUpperCase();
    return newStr;
};

console.log(acronym(" there's no free lunch - gotta pay yer way. ")); //output: TNFL-GPYW
console.log(acronym("Live from New York, it's Saturday Night!")); //output: LFNYISN
console.log();

// Count Non-Spaces
const countNonSpaces = (str) => {
    let letArr = str.split("");
    let count = 0;
    for (var i = 0; i < letArr.length; i++) {
        if (letArr[i] !== " ") {
            count++;
        }
    }
    return count;
};

console.log(countNonSpaces("Honey pie, you are driving me crazy")); //output: 29
console.log(countNonSpaces("Hello world !")); //output: 11
console.log();

// Remove Shorter Strings
const removeShorterStrings = (arr, num) => {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= num) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

console.log(
    removeShorterStrings(
        ["Good morning", "sunshine", "the", "Earth", "says", "hello"],
        4
    )
);
//output: [ 'Good morning', 'sunshine', 'Earth', 'says', 'hello' ]
console.log(
    removeShorterStrings(["There", "is", "a", "bug", "in", "the", "system"], 3)
);
//output: [ 'There', 'bug', 'the', 'system' ]
