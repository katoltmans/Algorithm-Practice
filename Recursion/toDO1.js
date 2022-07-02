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
