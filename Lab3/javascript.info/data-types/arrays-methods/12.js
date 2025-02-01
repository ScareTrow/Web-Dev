function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["keinen", "keinen", "keiner", "keiner",
    "keiner", "keiner", "keinen", "keinen", "kein"
];

console.log(unique(strings));