var person = {
                 name: "Gentrit",
                 surname: "Hoxha",
                 age: 20
            };

           person.name = "Lorik";

           console.log(person.name + " " + person.surname)


           var array1 = [1,2,3,4,5,6,7];
                
           console.log(array1.push(25));
           array1.push("Gentrit");
           console.log(array1);



              function dayOfTheWeek(dayNum) {
                  var rez;

                switch (dayNum) {
                case 1:
                      rez = "Monday"
                      break;
                case 2:
                      rez = "Tuesday"
                      break;
              
                  default:
                      rez = "You havent choosen any day of the week"
                      break;
                }

                return rez;
              }

              var a = 50;
              var b  = (a>56) ? "Hello" : "World" ;
              console.log(b)



                  function name(params) {
                      console.log("Filan Fisteku");
                  }

                  var namee  = function() {
                      return "Filan Fisteku2";
                  }

                  name();
                  console.log(typeof(namee));


                 (function phoneNumber() {
                     console.log("The phone number is: +383 55 555 555");
                 })();

                 var x = (function name() {
                     return 5585849594;
                 })();
                        

             let now = 2021;

             var ageJonas = now - 1991;
             var ageSarah = now - 2000;

             console.log(ageJonas, ageSarah)


             //Mark and John
             //mass and height
             //BMI = mass / height*height
             //markHigherThanJohn BMI




             /*------------BMI CALCULATION-------*/
             var massJohn    = 70;     //kg
             var heightJohn  = 1.56    //m
             var JohnBMI  = massJohn/(heightJohn*heightJohn);

             var massMark    = 200;     //kg
             var heightMark  = 1.87    //m
             var MarkBMI  = massMark/(heightMark*heightMark);


             var markHigherBMI = MarkBMI>JohnBMI;
             console.log("John's weight is " + massJohn + " kg and is " + heightJohn + "m tall. His BMI is " + JohnBMI);
             console.log("Mark's weight is " + massMark + " kg and is " + heightMark + "m tall. His BMI is " + MarkBMI);
             console.log("Mark's BMI is higher than John's:   " + markHigherBMI);
console.log("------------------------------------------------")
              
var rez;
               if (MarkBMI>JohnBMI) {
                    rez = `Marks BMI (${MarkBMI}) is higher than John's BMI (${JohnBMI})`;
                   console.log(rez);
                } else {
                     rez = `John's BMI (${JohnBMI}) is higher than Mark's BMI (${MarkBMI})`;
                    console.log(rez)
               }


console.log("----------------------------------");



/*-------------     TEMPLATE LITERAL     -----------------*/
            // var firstName = "Gentrit";
            // var lastName  = "Hoxha";
            // var birthYear = 2001;
            // var noww       = 2023;
            // var proffesion= "Software Developer";

            // const gentrit = `Hi i am ${firstName} ${lastName} and i am ${noww-birthYear} years old`;

            // console.log(gentrit);



            //  var number1 = "5584";
            //  console.log(Number(number1),number1);

            //  let n = "1";
            //  n = n+1;
            //  n=n-1;



/*Loose equality == and strict equality ===*/
   
   
   
    //    var age = '19';

    //    if (age == 19) {
    //        console.log("You are an adult, (loose)")
    //    }

    //    if (age === 19) {
    //        console.log("You are and adult Strict")
    //    }



    //    var favourite = Number(prompt("Enter a favourite Number"));
    //    console.log(favourite);
    //    console.log(typeof favourite);

    //        if (favourite === 23) {
    //            console.log("You have entered  number 23");
    //        }
    



    /*------- Logical Operator -------------*/


    // var hasDriverLicense = true;
    // var hasGoodVision    = true;

    // console.log(hasDriverLicense || hasGoodVision);

    //  if (hasDriverLicense && hasGoodVision) {
    //      console.log("Sarah can drive the car");
    //  }
    //  else{
    //      console.log("Someone else should drive");
    //  }



    /**------- PROJECT 3 -------------*/

    var avgDolphins = (96 + 108 + 89)/3;
    var avgKoalas   = (88 + 91 + 110)/3;
console.log("Dolphins AVG:" + avgDolphins, "Koalas AVG: " + avgKoalas);

     if ((avgDolphins > avgKoalas) && (avgDolphins>=100)) {
         console.log("Dolphins team WON the game 🏆");
     }
     else if ((avgKoalas > avgDolphins) && (avgKoalas>=100)){
         console.log("Koalas team WON the game 🏆");
     }

     else if(avgDolphins === avgKoalas){
        console.log("They hasve DRAWN the game");
     }

     else {
         console.log("No one wins the trophy .");
     }




     var voteAge = 17;
     let voteMsg;

     voteAge >=18 ? voteMsg = "You CAN Vote" : voteMsg = "You CANNOT vote";
     console.log(voteMsg);


     var pass = 52;
     pass >=50 ? console.log("You have passed the EXAM") : console.log("You FAILED");

    console.log("--------------------------");
    
    
    
    
    
    
     /*------ CODING CHALLENGE 4 --------*/
    
     var bill = 230;
     var tip;

  bill>=50 && bill<=300 ? tip = bill * 0.15 : tip = bill * 0.20;
  console.log(`The bill was ${bill}, the tip was ${tip} and the total Value was ${bill+tip}`);

    
    
    
    var base = 1.1;
    var exponent = 365;

var rez = (Math.pow(base, exponent));

    console.log(rez);
    
    
    
    /*Mesatarja ne nje funksion*/
    //    function Mesatarja(vlerat) {
    //     var sum;
    //      sum = avg1.reduce(function (a,b) {
    //          return a+b;
    //     },0);

    //     return sum/(avg1.length);         
    //    }

    //     var avg1 = [1,2,3,4,56];
    //     console.log(Mesatarja(avg1));