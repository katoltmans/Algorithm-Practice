const minToFront = (arr) => {
    let min = arr[0];
    let newArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    // console.log("MIN: ", min);
    newArr.push(min);

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== min) {
            newArr.push(arr[j]);
        }
    }
    // console.log("NEWARR: ", newArr);
    return newArr;
};

console.log("Min to Front");
console.log(minToFront([4, 2, 1, 3, 5]));
console.log(minToFront([7, 19, 10000023, 0.5, -2]));
console.log(minToFront([-10, 9, -3, 88, 92, 1345]));
