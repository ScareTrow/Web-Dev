const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

rl.question('x? ', (x) => {
    rl.question('n? ', (n) => {
        x = Number(x);
        n = Number(n);

        if (isNaN(x) || isNaN(n)) {
            console.log('Please enter valid numbers');
        } else if (n <= 0) {
            console.log(`Power ${n} is not supported, please enter an integer number greater than zero`);
        } else {
            console.log(pow(x, n));
        }

        rl.close();
    });
});
