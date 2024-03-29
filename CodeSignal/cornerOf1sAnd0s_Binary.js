{
    /*
    Kill K-th Bit

    In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. 
    The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, 
    and making all the people on Earth grumpy and sad.

    You figured out that some numbers have a modified single digit in their binary representation. 
    More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. 
    It's now up to you to write a function that will change the kth bit of n back to 0.
    */
}

function convertKthBit(n, k) {
    return n & ~(1 << (k - 1));
}

console.log("Kill K-th Bit");
console.log(convertKthBit(37, 3)); //expect 33
console.log(convertKthBit(2147483647, 16)); //expect 2147450879
console.log();

{
    /*
    Array Packing

    You are given an array of up to four non-negative integers, each less than 256.
    Your task is to pack these integers into one number M in the following way:
        The first element of the array occupies the first 8 bits of M;
        The second element occupies next 8 bits, and so on.
    Return the obtained integer M.

    Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer.
    */
}

function packArray(a) {
    // Convert to bits and combine into string in reverse order
    // reconvert back to new number

    let newNum = "";

    for (let i = a.length - 1; i >= 0; i--) {
        newNum += a[i].toString(2).padStart(8, 0);
    }

    return parseInt(newNum, 2);
}

console.log("Array Packing");
console.log(packArray([24, 85, 0])); //expect 21784
console.log(packArray([5])); //expect 5
console.log();

{
    /*
    Range Bit Count

    You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. 
    You need to count the number of 1s in the binary representations of all the numbers in the array.
    */
}

function numOnes(a, b) {
    // Convert each number to bit form
    // Count number of ones in binary representation and add to total coount

    let onesCount = 0;

    for (let i = a; i <= b; i++) {
        let numCount = i.toString(2).split("1").length - 1;
        // console.log("I:", i, "NUMBER:", i.toString(2), "ONES:", numCount);
        onesCount += numCount;
    }
    return onesCount;
}

console.log("Range Bit Count");
console.log(numOnes(2, 7)); //expect 11
console.log(numOnes(1, 10)); //expect 17
console.log();

{
    /*
    Mirror Bits

    Reverse the order of the bits in a given integer.

    Example:

    For a = 97, the output should be
    solution(a) = 67.

    97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

    For a = 8, the output should be
    solution(a) = 1.
    */
}

function mirrorBits(a) {
    // Convert integer to bits
    // reverse the string and reconvert to an integer

    let numStr = a.toString(2);
    // console.log("A:", a, "BINARY:", numStr);

    // console.log("REVERSE:", numStr.split("").reverse().join(""), "NEW NUM:", parseInt(numStr.split("").reverse().join(""), 2));

    // console.log(parseInt("1000011", 2));

    return parseInt(numStr.split("").reverse().join(""), 2);
}

console.log("Mirror Bits");
console.log(mirrorBits(97)); //expect 67
console.log(mirrorBits(5)); //expect 5
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
