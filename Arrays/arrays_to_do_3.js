// Remove Negatives

const removeNegatives = (arr) => {
    let temp;

    //Walk backwards through array to find a negative value
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 0) {
            // When negative value is found, shift all other values forward and remove the last index of the array
            for (let j = i; j < arr.length - 1; j++) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            arr.length--;
        }
    }
    return arr;
};

console.log(removeNegatives([1, -4, 6, 8, -7, -3, 10]));
console.log(removeNegatives([-100]));
console.log(removeNegatives([-17, 12, 15, -18, -10000008, 100000578, -35]));
console.log(removeNegatives([-17, 12, 15, -18, 33, 42, 51]));
