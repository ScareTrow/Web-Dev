let filterRange = (arr, a, b) => arr.filter(item => item >= a && item <= b);


let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);