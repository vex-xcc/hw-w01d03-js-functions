const userChoice = function(userChoice){


    const choiceStack = ['paper', 'rock', 'scissors'];
    
    const random = Math.floor(Math.random() * 3);
    
    const computerChoice = choiceStack[random];
    
     
    if (userChoice === computerChoice){
    console.log('Your choice is ' + userChoice + ' the computers choice is ' + computerChoice + ' Tie! ');
    }else if (userChoice === 'paper' && computerChoice === 'rock'){
    console.log(' Your choice is ' + userChoice + ' the computers choice is ' + computerChoice+' You win! ');
    }else if (userChoice === 'rock' && computerChoice === 'scissors'){
    console.log('Your choice is ' + userChoice + ' the computers choice is ' + computerChoice+' You win! ');
    }else if (userChoice === 'scissors' && computerChoice === 'rock'){
    console.log('Your choice is ' + userChoice + ' the computers choice is ' + computerChoice+' You lose! ' );
    }else if (userChoice === 'rock' && computerChoice === 'paper'){
    console.log('Your choice is ' + userChoice + ' the computers choice is ' + computerChoice+' You lose! ');
    }else if (userChoice === 'paper' && computerChoice === 'scissors'){
    console.log('Your choice is ' + userChoice + ' the computers choice is ' + computerChoice+' You lose! ');
    }else if (userChoice === 'scissors' || computerChoice === 'paper'){
    console.log('Your choice is ' + userChoice + ' the computers choice is ' + computerChoice+' You win! ');
    }else{
    console.log("Invalid input, please try again");    
    
    }
    }