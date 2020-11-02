let disksNumber = 5,
        turnsSpeed = 4074;

console.log( { turns: Math.pow(2,disksNumber) - 1, 
                seconds: Math.floor((Math.pow(2,disksNumber) - 1)/turnsSpeed*3600) }); 