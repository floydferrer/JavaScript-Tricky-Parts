function guessingGame() {
    //Create winning number at random
    let winningNumber = Math.floor(Math.random() * 100)
    //Create guess counter
    let guessCounter = 0;
    //Create check if game is over
    let gameEnd = false;
    //Create function with number guess as parameter
    return function game(num) {
        // Check if game is over
        if (gameEnd) return 'The game is over, you already won!'
        
        //increment guess counter with each guess
        guessCounter++;
        
        //Create boolean check between number guess and winning number
        if (num > winningNumber) {
            return `${num} is too high!`
        } else if (num < winningNumber) {
            return `${num} is too low!`
        } else { //upon guessing winning number, return guess counter and change return to game over message
            gameEnd = true;
            return `You win! You found ${winningNumber} in ${guessCounter} guesses.`
        }
    }
    

    
}

module.exports = { guessingGame };
