function truncate(str, maxLenght){
    let newStr = "";
    let it = 0;
    for(let i = 0;i < str.length; i++){
        if(it == maxLenght-1){
            return newStr += "...";
        }
        newStr += str[i];
        it++;
    }
    return newStr;
}

console.log(truncate("Всем привет!", 20));