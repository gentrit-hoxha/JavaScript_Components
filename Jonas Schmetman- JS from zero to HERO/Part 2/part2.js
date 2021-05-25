'use strict ';


// var name = "Gentrit";
// var surname = "Hoxha";
// console.log(`hello ${name} ${surname}`);


// function Hello(name) {
//     var message ;
//     message = `Hello ${name}`;
//     return message;
// }

// function fruitProcessor(apples, oranges) {
   // console.log(apples, oranges);
//    const msg = `Juice with ${apples} apples and ${oranges} oranges`;
//    return msg;
// }


// const apples = fruitProcessor(5,10);
// console.log(apples);


// const value1 = fruitProcessor(1,5);
// console.log(value1);

// const value2 = fruitProcessor(4,2);
// console.log(value2);







function calcAge1(birthYear) {
    var msg = 2037 - birthYear;
    return msg ;
}

const age1 = calcAge1(1995);
console.log(age1);




const calcAge2 = function (birthYear) {
    var msg = 2037 - birthYear;
    return msg ;
};

const age2 = calcAge2(1995);
console.log(age2);

const yearUntilRetirement = (birthYear) =>{
        const age  = 2021 - birthYear;
        var ageUntilRetirement =  65-age;
        return "You have  " + ageUntilRetirement + " until retirement";
};

const ageRetirement = yearUntilRetirement(1984);
console.log(ageRetirement);



function cutPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
     const applePieces = cutPieces(apples);
     const orangePieces = cutPieces(oranges);

   const msg = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
   return msg;
}


const drinkType = fruitProcessor(2,3);
console.log(drinkType);






const avgTeam = (a,b,c) =>{
    var result = (a+b+c)/3;
    return result;
};

function checkWinner(avgDolphins, avgKoalas) {
    var winner; 
    if (avgDolphins > 2*avgKoalas) {
         winner = "Dolphins team are the winneers";
     } else if(avgKoalas > 2*avgDolphins) {
         winner = "Koalas team are the winners";
     }
     else{
         winner = "We dont have a winner";
     }
     return winner;
}


var WINNER = checkWinner(avgTeam(10,58,96), avgTeam(5,4,25));
console.log(WINNER);







