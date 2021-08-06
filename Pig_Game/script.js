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

//score0El.textContent = 0;
//score1El.textContent = 0;

//Adding Event Lisnteners to the specific functions to be implemented 
btnRoll.addEventListener('click' , mainFunction);
btnHold.addEventListener('click' , holdFunction);
btnNew.addEventListener('click' , resetTheGame);


dice.classList.add('hidden');
const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
   
   
   
   const switchPlayer = () => {
       document.getElementById(`current--${activePlayer}`).textContent = 0;
       currentScore = 0;
          
        if (activePlayer === 0) { activePlayer = 1; } 
                            else {activePlayer = 0;}
           
           
           
           playerO.classList.toggle('player--active');
           player1.classList.toggle('player--active');
        }
        

  function mainFunction() {
      const diceNum  = Math.ceil(Math.random() * 6);
        dice.classList.remove('hidden');
        dice.src = `dice-${diceNum}.png`;
        

        if (diceNum!==1) {
            currentScore = currentScore + diceNum;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
        }
        
        else {
            
            switchPlayer();
            
        }
    }

    
    function holdFunction() {
        
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        
        if (scores[activePlayer] >= 15) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        
        else {
             switchPlayer();
        }
  }

  function resetTheGame() {
     scores[0] = 0;
     scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;

      score0El.textContent = 0;  
      score1El.textContent = 0;  
      current0El.textContent = 0;
      current1El.textContent = 0;
      
      dice.classList.add('hidden');
    
      playerO.classList.remove('player--winner');
      player1.classList.remove('player--winner');
    
      playerO.classList.add('player--active');
      player1.classList.remove('player--active');
    
    }