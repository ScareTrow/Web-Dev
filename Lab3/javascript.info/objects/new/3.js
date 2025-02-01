function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt('Enter the number');
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);
