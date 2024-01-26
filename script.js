'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number 👌';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
//Math.trunc is used to remove all floating point numbers inside of math.random
//Math.random ranges from 0 to 1
//Multiply by the range you want it to have and add 1

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //Where there is no imput i.e 0 or no input
    if(!guess){
        document.querySelector('.message').textContent = 'No number provided!';

        //When player wins
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number 👌';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //guess is too high
    }else if(guess > secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = "It's a bit high!";
        document.querySelector('.score').textContent = score -=  1;
        }else{
            document.querySelector('.message').textContent = "You lost the game!";
        }
        
        //Guess is too low
    }else if(guess < secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = "It's a bit low!";
        document.querySelector('.score').textContent = score -= 1;;
    }else{
        document.querySelector('.score').textContent = 'You lost the game!';
    }
}});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';//Since input is number, we use .value to restore its value

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});

