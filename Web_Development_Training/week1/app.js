console.log('console is working');


let person = 'John';


let person2 = {
    name: 'Vjosa' ,
    surname: 'Krasniqi',
    eyeColor: 'Kalter',
    yearOfBirth: 2003,
    age: function agee() {
        let currentYear =  new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    }
}

   console.table(person2);
   console.log(`Age of: ${person2.name} is ${person2.age()} years old`);


   
   let date1 = new Date(2001, 4 , 7);
   let date2 = new Date(2001, 4 , 7);
const months = ['January', 'February', 'March', 'April', 'May', 'June'];


    console.log(date1);
    console.log(date2);
    console.log(months[date1.getMonth()]);


     function clonearray(array1 , array2) {
         for (let i = 0; i < array1.length; i++) {
              array1[i] = array2[i];
         }
     }


     let originalNumbers = [5,8,4,9,6,3,2,5,8,8];

     let clonedNum = [...originalNumbers];

     console.log(originalNumbers);
     console.log(clonedNum);

