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
    Seats in Theater

    Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: 
    the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to 
    the left. All you need to do is climb over your seat and make your way to the exit.
    The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and 
    in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit 
    without disturbing too many people.
    Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, 
    return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.
    */
}

function numDisturbed(nCols, nRows, col, row) {
    let result = (nCols - (col - 1)) * (nRows - row);
    return result;
}

console.log("Seats in Theater");
console.log(numDisturbed(16, 11, 5, 3)); //expect 96
console.log(numDisturbed(1000, 1000, 1000, 1000)); //expect 0
console.log();

{
    /*
    Max Multiple

    Given a divisor and a bound, find the largest integer N such that:
        N is divisible by divisor.
        N is less than or equal to bound.
        N is greater than 0.
    It is guaranteed that such a number exists.
    */
}

function maxMultiple(divisor, bound) {
    let result = divisor;
    let i = divisor;

    while (i <= bound) {
        if (i % divisor === 0) {
            result = i;
        }
        i++;
        // console.log("RESULT", result);
    }

    return result;
}

console.log("Max Multiple");
console.log(maxMultiple(3, 10)); //expect 9
console.log(maxMultiple(7, 100)); //expect 98
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
