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
