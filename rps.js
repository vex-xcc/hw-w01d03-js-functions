
//you have to run this function first and pick one of 'paper', 'rock', 'scissors'
let userChoice =function(ChoiceOne){
    return ChoiceOne
}

//after that you can run all code
let choiceStack = ['paper', 'rock', 'scissors'];

let random = Math.floor(Math.random() * 3);

let computerChoice = choiceStack[random];

console.log(`Your choice is ${userChoice}, the computer's choice is ${computerChoice}.`);

if (userChoice === computerChoice){
console.log("Tie!");
}else if (userChoice === 'paper' && computerChoice === 'rock'){
console.log("You win!");
}else if (userChoice === 'rock' && computerChoice === 'scissors'){
console.log("You win!");
}else if (userChoice === 'scissors' && computerChoice === 'rock'){
console.log("You lose!");
}else if (userChoice === 'rock' && computerChoice === 'paper'){
console.log("You lose!");
}else if (userChoice === 'paper' && computerChoice === 'scissors'){
console.log("You lose!");
}else if (userChoice === 'scissors' || computerChoice === 'paper'){
console.log("You win!");
}else{
console.log("Invalid input, please try again");
}