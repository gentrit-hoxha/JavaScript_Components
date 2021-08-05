'use strict';


const score0El   = document.querySelector('#score--0');
const score1El   = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const dice       = document.querySelector('.dice');

const playerO  = document.querySelector('.player--0');
const player1  = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;

  dice.classList.add('hidden');
 
   btnRoll.addEventListener('click' , mainFunction);
    
   let currentScore = 0;
   let activePlayer = 0;


  function mainFunction() {
      const diceNum  = Math.ceil(Math.random() * 6);
        dice.classList.remove('hidden');
        dice.src = `dice-${diceNum}.png`;


        if (diceNum!==1) {
            currentScore = currentScore + diceNum;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
        }
        
        else {
            
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            currentScore = 0;
                  
                if (activePlayer === 0) {
                       activePlayer = 1;
                   }else {activePlayer = 0;}

                   
                   document.getElementById(`current--${activePlayer}`).textContent = currentScore;

            playerO.classList.toggle('player--active');
            player1.classList.toggle('player--active');
            
        }
  }