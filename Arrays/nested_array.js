// Nested array example (2 dimensional array)
var arr2d = [
    [26, 5, 31],
    [54, 101, 17],
    [1000, 23, 56],
];

console.log(arr2d[1][2]);
console.log();

// Loop through the array
for (var i = 0; i < arr2d.length; i++) {
    for (var j = 0; j < arr2d[i].length; j++) {
        console.log(arr2d[i][j]);
    }
}
