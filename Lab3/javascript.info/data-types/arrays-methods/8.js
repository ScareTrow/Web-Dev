let mishka = { name: "Bear", surname: "Honeylover", id: 1 };
let pyatachock = { name: "Piggy", surname: "The little one", id: 2 };
let katze = { name: "Tommy", surname: "Zoller", id: 3 };

let users = [mishka, pyatachock, katze];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

console.log(...usersMapped);

// alert(usersMapped[0].id);
// alert(usersMapped[0].fullName); 
