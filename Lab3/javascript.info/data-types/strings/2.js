let checkSpam = (str) => str.toLowerCase().includes('viagra') || 
                        str.toLowerCase().includes('xxx');
                        
console.log(checkSpam("innocent rabbit")); 
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false