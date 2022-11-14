{
    /*
    Add Two Digits

    You are given a two-digit integer n. Return the sum of its digits.
    */
}

function solution(n) {
    let digits = ("" + n).split("");
    sum = parseInt(digits[0]) + parseInt(digits[1]);
    // console.log(sum);

    return sum;
}

console.log("Add Two Digits");
console.log(solution(29)); //expect 11
console.log(solution(48)); //expect 12
console.log();

{
    /*
    Largest Number

    Given an integer n, return the largest number that contains exactly n digits.
    */
}

function largestNum(n) {
    let num = "";
    for (let i = 0; i < n; i++) {
        num += "9";
    }
    return parseInt(num);
}

console.log("Largest Number");
console.log(largestNum(2)); //expect 99
console.log(largestNum(5)); //expect 99999
console.log();

{
    /*
    Candies

    n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. 
    Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.
    */
}

function numCandy(n, m) {
    let candyPieces = Math.floor(m / n);

    let result = n * candyPieces;

    return result;
}

console.log("Candies");
console.log(numCandy(3, 10)); //expect 9
console.log(numCandy(8, 2)); //expect 0
console.log();

{
    /*


    */
}

console.log("");
console.log(); //expect
console.log(); //expect
console.log();

{
    /*


    */
}

console.log("");
console.log(); //expect
console.log(); //expect
console.log();

{
    /*


    */
}

console.log("");
console.log(); //expect
console.log(); //expect
console.log();

{
    /*


    */
}

console.log("");
console.log(); //expect
console.log(); //expect
console.log();

{
    /*


    */
}

console.log("");
console.log(); //expect
console.log(); //expect
console.log();
