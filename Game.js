let userScore = 0;
let compScore = 0;

// handle click function, should accept 1 ('rock'),  2 ('paper'), 3 ('scissors') param
function handleClick(userMove) {
    console.log('clicked', userMove);

    const winner = determineWinner(userMove, computerMove());
    console.log(winner);

    // update DOM with winner text
    document.getElementById('result').innerText = winner;
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('comp-score').innerText = compScore;
}

const computerMove = () => {
    // get computer move
    return Math.floor((Math.random() * 3) +1 );
}

const determineWinner = (userMove, computerMove) => {
    // compare user to computer 
    console.log(userMove, computerMove);
    if(userMove == 1 && computerMove == 2){
        compScore++;
        return 'Paper covers rock. You lose!';
    }
    if(userMove == 1 && computerMove == 3){
        userScore++;
        return 'Rock breaks scissors. You win!';

    }
    if(userMove == computerMove){
        return 'Draw';
    }
    if(userMove == 2 && computerMove == 1){
        userScore++;
        return 'Paper covers rock. You win!';
    }
    if(userMove == 2 && computerMove == 3){
        compScore++;
        return 'Scissors cuts paper. You lose!';
    }
    if(userMove == 3 && computerMove == 2){
        userScore++;
        return 'Scissors cuts paper. You win!';
    }
    if(userMove == 3 && computerMove == 1){
        compScore++;
        return 'Rock breaks scissors. You lose!';
    }
    console.log(determineWinner);

}



