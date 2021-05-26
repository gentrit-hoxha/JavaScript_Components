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


console.log(`------------------------------------------------------`);


const friend1 = "Peter";
const friend2 = "Michael";
const friend3 = "Jonas";

 

 // Arrays jane objekte

   const friends = ['Peter', 'Michael', 'Jonas'];
   console.log(typeof friends);
   console.log(friends);

   const ages  = [16,18,25,58,45,28];
   console.log(ages);

   //mix arrays
    // const mixArray = ["Peter",85.25, 18.25, new Date(), ages, friends];
    // console.log(mixArray);




    /**-----Coding chanllenge 2 from the JavaScript part2 -------*/


    const calcTip = (bill) => {
         var tip ;
         if (bill>=0 & bill<50) {
                 tip = 0;
         }
         else if (bill>= 50 && bill <= 300) {
             tip = bill * 0.15;
         } else if (bill>300) {
              tip = bill * 0.20;
         }
         return tip;
    }
    
    
    const bills = [125,555,44];
   // console.log("Bills: " + bills);

    const tips  = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    //console.log("Tips: " + tips);

    const total  = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
   // console.log("Bills + Tips: " + total);

   console.log("Bills, Tips , Total");
     console.log(bills, tips, total);

console.log('********************************-');




     //objects 
     const person  = {
         firstName: "Michael",
         lastName:  "Schimdt",
         birthYear:   1993,
         job: 'Teacher',
         age: 0,
         hasDriverLicense: false,
         friends: ['Jonas', 'Kevin', 'Maximilian'],
         calcAge: function () {
            const rez = 2025 - this.birthYear;
             return rez;
         },

         getSummary: function () {
             const rez = `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriverLicense ? 'a': 'no'} driver license`
         return rez;     
    }

     };


     console.log(person);
     console.log(person.firstName);
     console.log(person.job);


      //const nameKey = prompt("What you want to know about:  firstName, lastName, age , job or friends");
      //console.log(person[nameKey]);

console.log(person.calcAge());
console.log(person.getSummary());











