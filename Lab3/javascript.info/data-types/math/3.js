function readNumber() {
    let num;
    
    while(!isFinite(num)){
        num = prompt("Enter ypur number");
    }
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`);