function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

function returnMin(a,b){
    return (a>=b)? a: b;
}

function pow(a,b){
    let res = 1;
    for(let i = 0; i < b; i++){
        res *= a;
    }
    return res;
}

let x = prompt("x", '');
let n = prompt("n", '');

if (n >= 1 && n % 1 == 0) {
  alert( pow(x, n) );
} else {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}