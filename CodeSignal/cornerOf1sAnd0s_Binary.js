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

{
    /*
    
    */
}

console.log("");
console.log(); //expect
console.log(); //expect
console.log();
