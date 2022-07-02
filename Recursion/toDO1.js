// Recursive Sigma - when given a number, function sums all integers from 1 to that number
const rSigma = (num) => {
    if (num <= 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    let sum = num + rSigma(num - 1);
    return sum;
};

console.log("Recursive Sigma");
console.log(rSigma(4));
console.log(rSigma(10));
console.log();

//Recursive Factorial -  when given a number, function finds the product of all integers from 1 to that number
const rFact = (num) => {
    if (num <= 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    let sum = Math.floor(num) * rFact(Math.floor(num - 1));
    return sum;
};

console.log("Recursive Sigma");
console.log(rFact(3));
console.log(rFact(6.5));
console.log();
