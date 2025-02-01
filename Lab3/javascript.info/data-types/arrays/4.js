function sumInput() {
    let inputArr = [];
    while (true) {
        let input = prompt("Enter your number: ");
        if (input === "" || input === null || !isFinite(input)) break;
        inputArr.push(+input);
    }
    let sum = 0;
    for (let number of inputArr) {
        sum += number;
    }
    return sum;
}

alert(sumInput());

