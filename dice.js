
/*
Dice Roller

Create a file in this repo and name it dice.js
Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
Example: rollDice() // Dice rolled are 6 and 1. Sum is 7
BONUS: have your function take an argument of the # of dice to be rolled.*/

const rollDice = function(){

  const myarray = [1,2,3,4,5,6];

   const random = Math.floor(Math.random() * 6);
   const random2 = Math.floor(Math.random() * 6);

  const num = myarray[random]+myarray[random2]

  return   console.log('Dice rolled are  '+myarray[random] +
   ' and ' + myarray[random2]+' = '+num)
}


  /*
  BONUS: have your function take an argument of the # of dice to be rolled.
   Example: rollDice(3) // Dice rolled are 4, 2, and 7. Sum is 13.
*/
const rollDiceBonus = function(argument){
  const myarray = [1,2,3,4,5,6];

    const random = Math.floor(Math.random() * 6);
    const random2 = Math.floor(Math.random() * 6);   

   
   const sum = myarray[random]+myarray[random2];
   const num = sum + argument;

   return   console.log('Dice rolled are  '+myarray[random] +
    ' , ' + myarray[random2]+' and '+ argument +' = '+num)
  }