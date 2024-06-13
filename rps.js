const hands = ['rock' , 'paper' , 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];

};

let player1 = {
    name: 'Player1',
    getHand: getHand
};

let player2 = {
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
}

playRound(player1,player2);
  
