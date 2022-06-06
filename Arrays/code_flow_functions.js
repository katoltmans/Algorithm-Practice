var x = 5;

function setX(newValue) {
    x = newValue;
}

console.log(x);
setX(15);
console.log(x);
console.log();

// result will be:
//     5
//     15

var x = 5;

function addToX(amount) {
    return x + amount;
    console.log("hello there"); //NOTE: this is not returned and only exists inside this function
}

console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);
console.log();

// result will be:
//      5
//      -5
//      5

// Function to check for a palindrome (keeps track of 2 indexes)
function isPal(arr) {
    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        if (arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);
// result will be: Not a pal-indrome!

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);
// result will be Pal-indrome!

// ALternate palindrome check code (exits loop when false)
function palindromeCheck(checkString) {
    length = checkString.length;
    for (i = 0; i < length / 2; i++) {
        console.log(checkString[i], checkString[length - 1 - i]); // logs letters that have been checked
        if (checkString[i] !== checkString[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindromeCheck("prettysurethisisnotapalendrome"));
// result will be p e false
console.log(palindromeCheck("kayak"));
// result will be k k a a y y true
console.log();

// ALternate palindrome check code (loops backwards)
function isPalindrome(howABoutThisString) {
    length = howABoutThisString.length;
    for (i = length - 1; i >= 0; i--) {
        console.log(howABoutThisString[i], howABoutThisString[length - 1 - i]);
        if (howABoutThisString[i] !== howABoutThisString[length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("mother"));
// result will be r m false
console.log(isPalindrome("mom"));
// result will be m m o o m m true
