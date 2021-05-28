

var button = document.querySelector('.btn.check');
var again  = document.querySelector('.btn.again');
var input = document.querySelector('.guess');

const secretNumber = Math.trunc(Math.random()*20 + 1);
let score = 20;
//const message = document.querySelector('.number').textContent = secretNumber;

function print() {
    const value  = Number(input.value);
    input.value = '';
    
    if (!value) {
        console.log('You havent type a number');
    }
    else if (value > secretNumber){
        if (score>1) {
            score--;
            document.body.style.backgroundColor = "red";
            document.querySelector('.message').textContent ='📈 Number is to high';
            document.querySelector('.score').textContent = score;   
            
        }
        
        else{
            document.body.style.backgroundColor = "red";
            document.querySelector('.message').textContent = "💣 You Lost the Game";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.score').textContent = 0;   
            document.querySelector('.highscore').textContent = 0;
        }
        
        
    }
    
    else if (value<secretNumber){
        
        if (score>1) {
            score--;
            document.body.style.backgroundColor = "red";
            document.querySelector('.message').textContent = '📉 Number is to low';
            document.querySelector('.score').textContent = score;      
        }
        else{
            document.body.style.backgroundColor = "red";
            document.querySelector('.message').textContent = "💣 You Lost the Game";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.score').textContent = 0;   
            document.querySelector('.highscore').textContent = 0;
        }
        
    }
    
    else if (value === secretNumber) {
        document.body.style.backgroundColor = "green";
        document.querySelector('.message').textContent = "🎉 Correct Answer";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = score;
        document.querySelector('.btn.check').disabled = true;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.guess').style.backgroundColor = 'green';
        document.querySelector('.guess').value = secretNumber;
        
        
    }
    
    
}

function refreshPage(){
    window.location.reload();
} 


function winingMessage() {
        document.body.style.backgroundColor = "green";
        document.querySelector('.message').textContent = "🎉 Correct Answer";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = score;
        document.querySelector('.btn.check').disabled = true;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.guess').style.backgroundColor = 'green';
        document.querySelector('.guess').value = secretNumber;
}


   function refreshPage1() {
    document.body.style.backgroundColor = "blue";
   }

button.addEventListener('click' , print);
again.addEventListener('click',   refreshPage1);

