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

console.log("Remove Negatives");
console.log(removeNegatives([1, -4, 6, 8, -7, -3, 10]));
console.log(removeNegatives([-100]));
console.log(removeNegatives([-17, 12, 15, -18, -10000008, 100000578, -35]));
console.log(removeNegatives([-17, 12, 15, -18, 33, 42, 51]));
console.log();

// Second-to-last

const secondToLast = (arr) => {
    // If there are less than 2 items in an array, return null
    if (arr[1] === undefined) {
        return null;
    }

    // If more than two items exits in an array, return the second to last item
    return arr[arr.length - 2];
};

console.log("Second To Last");
console.log(secondToLast([42, true, 4, "Kate", 7]));
console.log(secondToLast(["one"]));
console.log(secondToLast(["one", 2]));
console.log();

//second -Largest

const secondLargest = (arr) => {
    let temp;
    let largest = arr[1];
    let second = arr[0];

    // If there are less than 2 items in an array, return null
    if (arr[1] === undefined) {
        return null;
    }

    if (largest < second) {
        // Swap largest and second if arr[0] is greater than arr[1]
        temp = largest;
        largest = second;
        second = temp;
    }

    for (let i = 2; i < arr.length; i++) {
        // If arr[i] is greater than both largest and second, make largest arr[i] and move largest to second
        if (arr[i] > second && arr[i] > largest) {
            temp = largest;
            largest = arr[1];
            second = temp;
        } else if (arr[i] > second && arr[i] < largest) {
            // If arr[i] is in between largest and second, replace second with arr[i]
            second = arr[i];
        }
    }
    return second;
};

console.log("Second Largest");
console.log(secondLargest([42, 1, 4, Math.PI, 7]));
console.log(secondLargest([42]));
console.log();

// Nth-to-Last

const nthToLast = (arr, num) => {
    if (arr[num - 1] === undefined) {
        return null;
    }

    return arr[arr.length - num];
};

console.log("Nth to Last");
console.log(nthToLast([5, 2, 3, 6, 4, 9, 7], 3));
console.log(nthToLast([1, 2, 3], 4));
console.log();

// Nth-Largest

const nthLargest = (arr, num) => {
    let left = [];
    let right = [];
    let pivot = arr.pop();

    if (arr[num] === undefined) {
        return null;
    }

    // Quicksort algprithm help: https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-1.php
    const quickSort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= pivot) {
                left.push(arr[i]);
            } else;
            {
                right.push(arr[i]);
            }
        }
        newArr.concat(quickSort(left), pivot, quickSort(right));
    };

    return arr[arr.length - num];
};

console.log("Nth Largest");
console.log(nthLargest([5, 2, 3, 6, 4, 9, 7], 3));
console.log(nthLargest([1, 2, 3], 4));
console.log();

// Skyline Heights

const skylineHeights = (arr) => {
    let tallest = 0;
    let visible = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > tallest) {
            visible.push(arr[i]);
            tallest = arr[i];
        }
    }
    return visible;
};

console.log("Skyline Heights");
console.log(skylineHeights([-1, 7, 3]));
console.log(skylineHeights([-1, 1, 1, 7, 3]));
console.log(skylineHeights([0, 4]));
console.log(skylineHeights([2, 1, 7, 3]));
console.log();
