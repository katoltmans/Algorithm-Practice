const reverseCompare = (arr) => {
    let isLess = true;

    for (let i = 0; i < arr.length - 1; i++) {
        // console.log(arr[i]);
        let toFlip = arr[i].toString();
        // console.log(typeof toFlip);
        let flipped = parseInt(toFlip.split("").reverse().join(""));
        // console.log("FLIPPED:", flipped, "TYPE:", typeof flipped);
        if (flipped >= arr[i + 1]) {
            isLess = false;
            // console.log("IS GREATER OR EQUAL");
            break;
        }
    }
    return isLess;
};

console.log(reverseCompare([1, 2, 900, 10])); // expect true
console.log();
console.log(reverseCompare([13, 31, 30])); // expect false
console.log();
console.log(reverseCompare([1, 5, 10, 20])); // expect true
