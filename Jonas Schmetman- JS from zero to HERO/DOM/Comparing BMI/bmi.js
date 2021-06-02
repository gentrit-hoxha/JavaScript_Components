
  const btnCompare = document.querySelector('#compareButton');
  var markHeight = document.querySelector('#markHeight');
  var markWeight = document.querySelector('#markWeight');

  var johnHeight = document.querySelector('#johnHeight');
  var johnWeight = document.querySelector('#johnWeight');





  btnCompare.addEventListener('click' , function() {
  
    var markDescription = `Mark is ${markHeight.value} cm tall and weighs ${markWeight.value} kg`;
    var johnDescription = `John is ${johnHeight.value} cm tall and weighs ${johnWeight.value} kg`;
      
    

      displayDataInTables();
      displayBMItable();

    // console.log(markDescription);
    // console.log(johnDescription);

    markHeight.value = '';
    markWeight.value = '';

 johnHeight.value = '';
 johnWeight.value = '';
    
  });


  function calcBmi( height , weight ) {
    
      var h = height/100;
        var rez = weight / (h*h); 
          rez = rez.toFixed(2);
         return  rez;
     
      }

      function displayDataInTables() {
        document.querySelector('.markHeightTable').textContent = markHeight.value;
           document.querySelector('.markWeightTable').textContent = markWeight.value;
               
        document.querySelector('.johnHeightTable').textContent = johnHeight.value;
                  document.querySelector('.johnWeightTable').textContent = johnWeight.value;
      }

      function displayBMItable() {

        const markBMI = calcBmi(markHeight.value , markWeight.value);
        document.querySelector('.markBmiTable').textContent = markBMI;

        const johnBMI = calcBmi(johnHeight.value , johnWeight.value);
        document.querySelector('.johnBmiTable').textContent = johnBMI;

        if (markBMI > johnBMI) {
          document.querySelector('.compareResult').textContent = "Mark's BMI is Higher than JOHN's BMI";
        }
        else if ( johnBMI > markBMI) {
          document.querySelector('.compareResult').textContent = "JOHN's BMI is Higher than MARK's BMI";
          
        }

      }









