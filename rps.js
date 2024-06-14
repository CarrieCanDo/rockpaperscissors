// Define the hands and the function to get a random hand
const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

// Define the rules of the game
const rules = {
    rock: { winsAgainst: 'scissors', losesAgainst: 'paper' },
    paper: { winsAgainst: 'rock', losesAgainst: 'scissors' },
    scissors: { winsAgainst: 'paper', losesAgainst: 'rock' }
};

// Define the function to play a single round
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

// Define the function to play a game until one player wins a certain number of rounds
function playGame(player1, player2, playUntil) {
    let score1 = 0;
    let score2 = 0;

    while (score1 < playUntil && score2 < playUntil) {
        const winner = playRound(player1, player2);
        if (winner === player1) {
            score1++;
        } else if (winner === player2) {
            score2++;
        }
    }

    return score1 > score2 ? player1 : player2;
}

// Define the function to play a tournament
function playTournament(player1, player2, player3, player4, playUntil) {
    const semiFinal1Winner = playGame(player1, player2, playUntil);
    const semiFinal2Winner = playGame(player3, player4, playUntil);
    const finalWinner = playGame(semiFinal1Winner, semiFinal2Winner, playUntil);

    console.log(finalWinner.name + " is the world champion");
}

// Define the player objects
let player1 = {
    name: 'Player1',
    getHand: getHand
};

let player2 = {
    name: 'Player2',
    getHand: getHand
};

let player3 = {
    name: 'Player3',
    getHand: getHand
};

let player4 = {
    name: 'Player4',
    getHand: getHand
};

// Start the tournament
playTournament(player1, player2, player3, player4, 3);
