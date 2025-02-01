function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let mishka = { name: "Bear", age: 24 };
let pyatachock = { name: "Piggy", age: 21 };
let katze = { name: "Tommy", age: 27 };

let users = [mishka, pyatachock, katze];

sortByAge(users);

let names = users.map(item => item.name);


console.log(...names);