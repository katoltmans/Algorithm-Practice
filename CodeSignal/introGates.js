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
    Circle of Numbers

    Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal 
    (note that 0 and n - 1 are neighboring, too).
    Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
    */
}

function circleOfNums(n, firstNumber) {
    // If result is larger than n, subtract n
    // If result = n, return 0
    let distance = (n + 1) / 2;
    let result = Math.floor(firstNumber + distance);

    if (result >= n) {
        result -= n;
    }

    return result;
}

console.log("Circle of Numbers");
console.log(circleOfNums(10, 2)); //expect 7 (directly across from 2)
console.log(circleOfNums(18, 5)); //expect 14
console.log();

{
    /*
    Late Ride

    One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, 
    in minutes. Off you go to explore the neighborhood.
    When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, 
    you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.
    Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.
    */
}

function rideTimeSum(n) {
    // Calculate minutes with %60
    // Calculate hours using Math.floor
    // Stringify hours and minutes and then iterate through, summing parseInt digits of the string
    let hours = n % 60;
    let minutes = Math.floor(n / 60);
    let timeString = "" + hours + minutes;

    // console.log("TIMESTRING:", timeString);

    let result = 0;

    for (let i = 0; i < timeString.length; i++) {
        result += parseInt(timeString[i]);
    }

    return result;
}

console.log("Late Ride");
console.log(rideTimeSum(240)); //expect 4 (0 + 4 + 0 + 0 = 4)
console.log(rideTimeSum(1439)); //expect 19 (5 + 9 + 2 + 3 = 19)
console.log();

{
    /*
    Phone Call

    Some phone usage rate may be described as follows:
        first minute of a call costs min1 cents,
        each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
        each minute after 10th costs min11 cents.
    You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?
    */
}

function calculateCallTime(min1, min2_10, min11, s) {
    let callTime = 0;

    if (s < min1) {
        return 0;
    } else {
        callTime += 1;
        s -= min1;
    }

    for (let i = 2; i <= 10; i++) {
        if (s - min2_10 > 0) {
            callTime += 1;
            s -= min2_10;
        } else {
            return callTime;
        }
    }

    while (s - min11 >= 0) {
        callTime += 1;
        s -= min11;
    }

    return callTime;
}

console.log("Phone Call");
console.log(calculateCallTime(3, 1, 2, 20)); //expect 14
console.log(calculateCallTime(10, 10, 10, 8)); //expect 0
console.log(calculateCallTime(10, 1, 2, 22)); //expect 11
console.log();
