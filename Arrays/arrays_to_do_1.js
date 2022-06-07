// Push Front
const pushFront = (arr, num) => {
    var newArr = [];
    newArr.push(num);
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
};

console.log(pushFront([5, 7, 2, 3], 8));
console.log(pushFront([99], 7));
console.log();

// Pop Front
const popFront = (arr) => {
    for (var i = 0; i < arr.length - 1; i++) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    arr.pop();
    return arr;
};

console.log(popFront([0, 5, 10, 15]));
console.log(popFront([4, 5, 7, 9]));
