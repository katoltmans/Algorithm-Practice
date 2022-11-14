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

{
    /*


    */
}

console.log("");
console.log(); //expect
console.log(); //expect
console.log();
