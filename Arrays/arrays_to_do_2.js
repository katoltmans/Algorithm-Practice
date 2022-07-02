// Reverse an array
const reverse = (arr) => {
    let temp = 0;
    for (let i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
};

console.log("Reverse an array");
console.log(reverse([1, 2, 3, 4, 5])); //output: [ 5, 4, 3, 2, 1 ]
console.log(reverse([-5, -4, -3, -2, -1])); //output: [ -1, -2, -3, -4, -5 ]
console.log(reverse([1.2, 500, "max", true, "first"])); //output: [ 'first', true, 'max', 500, 1.2 ]
console.log();

// Rotate an array

const rotateArr = (arr, num) => {
    let temp = 0;
    let tempArr = [];

    for (let i = arr.length - num; i <= arr.length - 1; i++) {
        tempArr.push(arr[i]);
    }
    for (let j = 0; j <= arr.length - 1 - num; j++) {
        tempArr.push(arr[j]);
    }
    return tempArr;
};

// const rotateArr = (arr, num) => {
//     let temp = 0;
//     let pointer = num - 1;

//     for (let i = arr.length - 1; i >= Math.abs(num); i--) {
//         console.log(
//             JSON.stringify(arr) +
//                 " temp:" +
//                 temp +
//                 " pointer:" +
//                 pointer +
//                 " i:" +
//                 i
//         );

//         temp = arr[i];
//         arr[i] = arr[pointer];
//         arr[pointer] = temp;
//         pointer--;
//         if (pointer < 0) {
//             pointer = arr.length - 1;
//             break;
//         }
//     }
//     for (let j = arr.length - 1 - num; j >= num - 1; j--) {
//         console.log(
//             JSON.stringify(arr) +
//                 " temp:" +
//                 temp +
//                 " pointer:" +
//                 pointer +
//                 " j:" +
//                 j
//         );

//         temp = arr[j];
//         arr[j] = arr[pointer];
//         arr[pointer] = temp;
//         pointer--;
//     }
//     return arr;
// };

console.log("Rotate an array");
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(rotateArr([-3, -1, 2, 5, 7], 4));

//Filter Range
const filterRange = (arr, min, max) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min || arr[i] > max) {
            for (let j = i + 1; j < arr.length; j++) {
                arr[j - 1] = arr[j];
            }
            arr.length--;
            i--;
        }
    }
    return arr;
};

console.log("Filter Range");
console.log(filterRange([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 6));
console.log();

console.log(filterRange([1, 2, 3, 4, 5], 2, 4)); //output:
console.log();

// Concat two arrays
const concatArrays = (arr1, arr2) => {
    newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++) {
        newArr.push(arr2[j]);
    }
    return newArr;
};

console.log("Concat two arrays");
console.log(concatArrays([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])); //output: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
console.log(concatArrays(["Always"], ["better", "together", "!"])); ///output: [ 'Always', 'better', 'together', '!' ]
