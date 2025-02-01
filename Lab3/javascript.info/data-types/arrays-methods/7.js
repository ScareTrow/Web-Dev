let mishka = { name: "Bear", age: 25 };
let pyatachock = { name: "Piggy", age: 30 };
let katze = { name: "Tommy", age: 28 };

let users = [mishka, pyatachock, katze];

let names = users.map(item => item.name);


console.log(...names);

