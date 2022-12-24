'use strict';



// generate the right number
let rightNumber = (Math.trunc((Math.random()*20))) + 1;
console.log(rightNumber);

const wrongGuessProcess = function(score){
    if (score > 1){
        document.querySelector('.message').textContent ? 'Too high! -1pts' : 'Too low -1pts';
        score --;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'YOU LOSE!';
        score --;
        document.querySelector('.score').textContent = score;
        document.querySelector('h1').textContent = 'My number is';
        document.querySelector('.number').textContent = rightNumber;
        document.querySelector('body').style.backgroundColor = '#FF0040';
        document.querySelector('.number').style.width = '30rem';
    }
};



document.querySelector('.again').addEventListener('click',function (){
    rightNumber = (Math.trunc((Math.random()*20))) + 1;
    console.log(rightNumber);
    document.querySelector('.score').textContent = 20;document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('h1').textContent = 'Guess My Number!';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value ='';
   
})
// Check button logic: 'on-click' effect
document.querySelector('.check').addEventListener('click',function (){
    let guess = Number(document.querySelector('.guess').value);
    let score = Number (document.querySelector('.score').textContent);
   
    // case 1: no number entry
    if (!guess) {
        document.querySelector(".message").textContent = 'No number!';
    }
    // case 3: correct number
    else if (guess === rightNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        if (score > Number(document.querySelector('.highscore').textContent)){
            document.querySelector('.highscore').textContent = score;
        }
        document.querySelector('h1').textContent = 'My number is';
        document.querySelector('.number').textContent = rightNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    else{
        wrongGuessProcess(score);
    }
})

