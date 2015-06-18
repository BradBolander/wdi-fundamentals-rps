////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;

     if (playerMove == "paper" && computerMove == "paper")
    {
        winner = 'tie';
    }
     if (playerMove == "rock" && computerMove == "rock")
    {
        winner = 'tie';
    }
     if (playerMove == "scissors" && computerMove == "scissors")
    {
        winner = 'tie';
    }

    if (playerMove == "rock" && computerMove == "scissors")
    {
        winner = 'player';
    }

     if (playerMove == "rock" && computerMove == "paper")
    {
        winner = 'computer';
    }

      if (playerMove == "scissors" && computerMove == "rock")
    {
        winner = 'computer';
    }

    if (playerMove == "scissors" && computerMove == "paper")
    {
        winner = 'player';
    }

    if (playerMove == "paper" && computerMove == "scissors")
    {
        winner = 'computer';
    }

      if (playerMove == "paper" && computerMove == "rock")
    {
        winner = 'player';
    }  
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

