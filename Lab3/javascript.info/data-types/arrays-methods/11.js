function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let mishka = { name: "Bear", age: 25 };
let pyatachock = { name: "Piggy", age: 21 };
let katze = { name: "Tommy", age: 28 };

let users = [mishka, pyatachock, katze];

let names = users.map(item => item.name);


console.log(getAverageAge(users)); 
