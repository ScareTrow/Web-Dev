let user = new Object();
user.name = "John";
user.surname = "Smith";
for(let key in user){
    console.log(key, user[key]);
}
user.surname = "Pete";
delete user.name;
for(let key in user){
    console.log(key, user[key]);
}

