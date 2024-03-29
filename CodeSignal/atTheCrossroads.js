{
    /*
    Reach Next Level

    You are playing an RPG game. Currently your experience points (XP) total is equal to experience. 
    To reach the next level your XP should be at least at threshold. If you kill the monster in front of you, 
    you will gain more experience points in the amount of the reward.
    Given values experience, threshold and reward, check if you reach the next level after killing the monster.
    */
}

function reachLevel(experience, threshold, reward) {
    let nextLevel = false;

    if (experience + reward >= threshold) {
        nextLevel = true;
    }

    return nextLevel;
}

console.log("Reach Next Level");
console.log(reachLevel(10, 15, 5)); //expect true
console.log(reachLevel(235, 293, 4)); //expect false
console.log();

{
    /*
    Knapsack Light

    You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. 
    What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for 
    the items later?
    Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.
    */
}

function maxTreasure(value1, weight1, value2, weight2, maxW) {
    let result = 0;

    if (weight1 + weight2 <= maxW) {
        result = value1 + value2;
    } else if (weight1 <= maxW && weight2 <= maxW) {
        value1 > value2 ? (result = value1) : (result = value2);
    } else if (weight1 <= maxW && weight2 > maxW) {
        result = value1;
    } else if (weight2 <= maxW && weight1 > maxW) {
        result = value2;
    }

    return result;
}

console.log("Knapsack Light");
console.log(maxTreasure(10, 5, 6, 4, 8)); //expect 10
console.log(maxTreasure(3, 5, 3, 8, 10)); //expect 3
console.log();

{
    /*
    Extra Number

    You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?
    */
}

function thirdInteger(a, b, c) {
    let thirdInteger = 0;

    if (a === b) {
        thirdInteger = c;
    } else if (b === c) {
        thirdInteger = a;
    } else {
        thirdInteger = b;
    }
    return thirdInteger;
}

console.log("Extra Number");
console.log(thirdInteger(2, 7, 2)); //expect 7
console.log(thirdInteger(469992838, 66019520, 66019520)); //expect 469992838
console.log();

{
    /*
    Is Infinite Process?

    Given integers a and b, determine whether the following pseudocode results in an infinite loop
        while a is not equal to b do
        increase a by 1
        decrease b by 1
    Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.
    */
}

function infiniteCheck(a, b) {
    let isInfinite = false;

    while (a !== b) {
        if (a > b) {
            isInfinite = true;
            break;
        }
        a++;
        b--;
    }
    return isInfinite;
}

console.log("Is Infinite Process?");
console.log(infiniteCheck(2, 6)); //expect false
console.log(infiniteCheck(5, 10)); //expect true
console.log();

{
    /*
    Arithmetic Expression

    Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.
    */
}

function possibleOperator(a, b, c) {
    let isPossible = false;

    if (a + b === c || a - b === c || a * b === c || a / b === c) {
        isPossible = true;
    }
    return isPossible;
}

console.log("Arithmetic Expression");
console.log(possibleOperator(2, 3, 5)); //expect true
console.log(possibleOperator(5, 2, 2)); //expect false
console.log();

{
    /*
    Tennis Set

    In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner 
    unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.
    Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2.
    */
}

function possibleScore(score1, score2) {
    let isPossible = false;
    if (
        (score1 === 6 && score2 < 5) ||
        (score2 === 6 && score1 < 5) ||
        (score1 === 7 && (score2 === 6 || score2 === 5)) ||
        (score2 === 7 && (score1 === 6 || score1 === 5))
    ) {
        isPossible = true;
    }

    return isPossible;
}

console.log("Tennis Set");
console.log(possibleScore(3, 6)); //expect true
console.log(possibleScore(7, 2)); //expect false
console.log();

{
    /*
    Will You?

    Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". 
    Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put 
    her belief to the test.
    Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.
    A person contradicts Mary's belief if one of the following statements is true:
        they are young and beautiful but not loved;
        they are loved but not young or not beautiful.
    */
}

function contradictsBelief(young, beautiful, loved) {
    let result = false;

    // console.log(typeof young, typeof beautiful, typeof loved);

    if (loved === true && (young === false || beautiful === false)) {
        result = true;
    } else if (loved === false && young === true && beautiful === true) {
        result = true;
    }
    return result;
}

console.log("Will You?");
console.log(contradictsBelief(true, true, true)); //expect false
console.log(contradictsBelief(false, true, true)); //expect true
console.log();

{
    /*
    Metro Card

    You just bought a public transit card that allows you to ride the Metro for a certain number of days.

    Here is how it works: upon first receiving the card, the system allocates you a 31-day pass, which equals the number of days in January. 
    The second time you pay for the card, your pass is extended by 28 days, i.e. the number of days in February (note that leap years are not considered), 
    and so on. The 13th time you extend the pass, you get 31 days again.

    You just ran out of days on the card, and unfortunately you've forgotten how many times your pass has been extended so far. However, you do remember the number 
    of days you were able to ride the Metro during this most recent month. Figure out the number of days by which your pass will now be extended, and return all the 
    options as an array sorted in increasing order.
    */
}

function numOfExtensionDays(lastNumberOfDays) {
    let possibleNext = [];

    if (lastNumberOfDays === 28 || lastNumberOfDays === 30) {
        possibleNext = [31];
    } else {
        possibleNext = [28, 30, 31];
    }

    return possibleNext;
}

console.log("Metro Card");
console.log(numOfExtensionDays(30)); //expect 31
console.log(numOfExtensionDays(31)); //expect [29, 30, 31]
console.log();
