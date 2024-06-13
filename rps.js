const hands = ['rock' , 'paper' , 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];

}

const player1 = {
    name: 'Player1',
    getHand: getHand
};

const player2 = {
    name: 'Player2',
    getHand: getHand
};

const rules = {
    rock: { winsAgainst: 'scissors', losesAgainst: 'paper' },
    paper: { winsAgainst: 'rock', losesAgainst: 'scissors' },
    scissors: { winsAgainst: 'paper', losesAgainst: 'rock' }
  };

function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();
    console.log(player1.name + ' played ' + hand1);
    console.log(player2.name + ' played ' + hand2);
}

  if (hand1 === hand2) {
    console.log("It's a tie!");
    return null;
} else if (rules[hand1].winsAgainst === hand2) {
    console.log(player1.name + ' wins!');
    return player1;
} else {
    console.log(player2.name + ' wins!');
    return player2;
}

function playGame(player1, player2, rounds) {
    let player1Wins = 0;
    let player2Wins = 0;
    let ties = 0;

    for (let i=0; i < rounds; i++) {
        const winner = playRound(player1, player2);

        if (winner === player1) {
            player1Wins++;
        } else if (winner === player2) {
            player2Wins++;
        } else {
            ties++;
        }
    }

 
console.log("\nGame Over! Results:");
console.log(player1.name + " wins: " + player1Wins);
console.log(player2.name + " wins: " + player2Wins);
console.log("Ties: " + ties);
  
}