function getMaxSubSum(arr) {
    let maxSum = 0;
    let curSum = 0;
    for (let i = 0; i < arr.length; i++) {
        curSum += arr[i];
        if (curSum > maxSum) {
            maxSum = curSum;
        }
        if (curSum < 0) curSum = 0;
    }
    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));