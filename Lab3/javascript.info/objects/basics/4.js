let multiplyNumeric = (obj) =>{
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
};

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // после вызова функции
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };




for(let key in menu){
    console.log(key, menu[key]);
}