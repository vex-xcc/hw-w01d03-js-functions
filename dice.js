
/*
Dice Roller

Create a file in this repo and name it dice.js
Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
Example: rollDice() // Dice rolled are 6 and 1. Sum is 7
BONUS: have your function take an argument of the # of dice to be rolled.*/

const rollDice = function(){
  const ar1 = [1,2,3,4,5,6];
  const random = Math.floor(Math.random() * 6);
  const random2 = Math.floor(Math.random() * 6);
  return    num = ar1[random]+ar1[random2]

  }


  /*
  BONUS: have your function take an argument of the # of dice to be rolled.
   Example: rollDice(3) // Dice rolled are 4, 2, and 7. Sum is 13.
*/
const rollDice = function(argument){
  const ar1 = [1,2,3,4,5,6];
  const random = Math.floor(Math.random() * 6);
  const random2 = Math.floor(Math.random() * 6);   
   const num = ar1[random]+ar1[random2]

  return    userAr = argument + num
  }