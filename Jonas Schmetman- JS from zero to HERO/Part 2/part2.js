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


const numbers  = [1,2,3,4,5,6,6];


/*Coding challenge 3 in the Part 2 */
 


    const John = {
        firstName: 'John',
        lastName: 'Smith',
        mass: 40,
        height: 1.68, 
         calcBMI: function (mass, height) {
             this.bmi = this.mass / (this.height*this.height);
              return  this.bmi;
         }
    }

    const Mark = {
        firstName: 'Mark',
        lastName: 'Miller',
        mass: 100,
        height: 1.95,
        calcBMI: function (mass, height) {
            this.bmi = this.mass / (this.height*this.height);
            return this.bmi;
        }
    }


John.calcBMI();
Mark.calcBMI();

  
   console.log(John.bmi); 
   console.log(Mark.bmi);

   if (John.bmi > Mark.bmi) {
       console.log(`${John.firstName} BMI ${John.bmi} is higher than ${Mark.firstName} BMI ${Mark.bmi}`);
    } else if (Mark.bmi > John.bmi) {
        console.log(`${Mark.firstName} BMI ${Mark.bmi} is higher than ${John.firstName} BMI ${John.bmi}`);
   } 



//    console.log("Lifting weights repetition 1");
//    console.log("Lifting weights repetition 2");
//    console.log("Lifting weights repetition 3");
//    console.log("Lifting weights repetition 4");
//    console.log("Lifting weights repetition 5");
//    console.log("Lifting weights repetition 6");
//    console.log("Lifting weights repetition 7");
//    console.log("Lifting weights repetition 8");
//    console.log("Lifting weights repetition 9");
//    console.log("Lifting weights repetition 10");

   for(let i=1; i<=10; i++){
       console.log(`Liftin weights repetition ${i}`);
   }




   const jonas = ['Jonas','Miller', 26 , 'teacher' ];
   const jonascopy = [];

    for (let i = 0; i < jonas.length; i++) {
      console.log(jonas[i], typeof(jonas[i]));
        jonascopy.push(jonas[i]);
    }


console.log(jonascopy, typeof(jonascopy));


console.log(`------ ONLY STRINGS --------`);

    for (let i = 0; i < jonas.length; i++) {
            if (typeof(jonas[i]) !== 'string') {continue} ;
            console.log(jonas[i]);
    }


    console.log(`----------- ONLY NUMBERS ---------`)

    for (let i = 0; i < jonas.length; i++) {
        if (typeof(jonas[i]) === 'number') {break} ;
        console.log(jonas[i]);
     } 




     /** for loop inside another for loop */


      for (let exercise = 1; exercise <= 3; exercise++) {
          console.log(`-------- Starting Exercise ${exercise}`);
          
          for (let rep = 1; rep < 6; rep++) {
              console.log(` * Lifting weights repetition ${rep}`);
          }
      }



      /**   Coding challenge 4 part 2 */

      const array_bills   = [25,10,48,58,96,14,25];
      const array_tips    = [];
      const array_totals  = [];


      for (let i = 0; i < array_bills.length; i++) {
          array_tips.push(calcTip(array_bills[i]));

          array_totals.push(array_bills[i] + array_tips[i]);
          
      }


      console.log(array_bills);
      console.log(array_tips);
      console.log(array_totals);

      

      const calcAvg = function (num) {
                let sum = 0;

                for (let i = 0; i < num.length; i++) {
                   sum = sum + num[i];                   
                }

                return sum / num.length;
      }



      

console.table(John);



   



function displatTemp(temperatures) {
    var str = '';
    
    for (let i = 0; i < temperatures.length; i++) {
        str = str + `.....${temperatures[i]}°C in ${0} days  `;
    }
    
    return str;
}

const temperatures = [10,15,47];
console.log(displatTemp(temperatures));
