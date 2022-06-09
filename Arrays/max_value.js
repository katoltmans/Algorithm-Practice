// Max Numbers
const maxNumber = (arr) => {
    var temp = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > temp) {
            temp = arr[i];
        }
    }
    return temp;
};

console.log(maxNumber([1, 3, 5, 4, 8]));
console.log(maxNumber([1, 4, -5, 8, 3]));
console.log(maxNumber([-4, -6, -3, -6]));
console.log();

// Second Highest Value
const secHighest = (arr) => {
    var temp = arr[0];
    var temp2 = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > temp) {
            temp = arr[i];
        } else if (arr[i] > temp2 && arr[i] < temp) {
            temp2 = arr[i - 1];
        }
    }
    return temp2;
};

console.log(secHighest([1, 3, 5, 4, 8]));
console.log(secHighest([1, 4, -5, 8, 3]));
console.log(secHighest([-4, -6, -3, -6]));
