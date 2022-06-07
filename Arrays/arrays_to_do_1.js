// Push Front
const pushFront = (arr, num) => {
    var newArr = [];
    newArr.push(num);
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
};

console.log(pushFront([5, 7, 2, 3], 8)); //output: [ 8, 5, 7, 2, 3 ]
console.log(pushFront([99], 7)); //output: [ 7, 99 ]
console.log();

// Pop Front
const popFront = (arr) => {
    for (var i = 0; i < arr.length - 1; i++) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    temp = arr[arr.length - 1];
    arr.pop();
    console.log(arr);
    return temp;
};

console.log(popFront([0, 5, 10, 15])); //output: [ 5, 10, 15 ]
console.log(popFront([4, 5, 7, 9])); //output: [ 5, 7, 9 ]
console.log();

// Insert At
const insertAt = (arr, O, val) => {
    arr.push(val);
    for (var i = arr.length - 1; i > O; i--) {
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }
    return arr;
};

console.log(insertAt([100, 200, 5], 2, 311)); //console.log: [ 5, 10, 15 ], output:  0
console.log(insertAt([9, 33, 7], 1, 42)); //console.log: [ 9, 42, 33, 7 ],  output: 4
console.log();

// Remove At
const removeAt = (arr, O) => {
    for (var i = O; i < arr.length - 1; i++) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    temp = arr[arr.length - 1];
    arr.pop();
    console.log(arr);
    return temp;
};

console.log(removeAt([1000, 3, 204, 77], 1)); //console.log: [ 1000, 204, 77 ], output:  3
console.log(removeAt([8, 20, 55, 44, 98], 3)); //console.log: [ 8, 20, 55, 98 ], output:  44
console.log();

//Swap Pairs
