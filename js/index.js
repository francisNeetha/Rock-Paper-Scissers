const game = () => {
    let moves = 0;
    let computerScore = 0;
    let playerScore = 0;


    // Function to play game
    const playGame = () => {
        const rockbtn = document.querySelector('.rock');
        const sisbtn = document.querySelector('.scissor');
        const paperBtn = document.querySelector('.paper');
        const playerOptions = [rockbtn, paperBtn, sisbtn];
        const computerOption = ['rock', 'paper', 'scissor'];

        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;

                const choiceNum = Math.floor(Math.random() * 3);
                const computerChoice = computerOption[choiceNum];

                winner(this.innerText, computerChoice);

                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }

            });
        });
    };


    // Function for winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player === computer) {
            result.textContent = 'Tie';
        } else if (player === 'rock') {
            if (computer === 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player === 'paper') {
            if (computer === 'scissors') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player === 'scissors') {
            if (computer === 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    // GameOver
    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reload = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        });

        chooseMove.innerHTML = "Game Over";
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.innerHTML = `You Won!`;
            result.style.fontSize = '2rem';
        }
        else if (computerScore > playerScore) {
            result.innerHTML = `You Lost`;
            result.style.fontSize = '2rem';
        }
        else {
            result.innerHTML = `Tie`;
            result.style.fontSize = '2rem';
        }

        reload.addEventListener('click', () => {
            window.location.reload();
        });
    };
    playGame();

};

game();