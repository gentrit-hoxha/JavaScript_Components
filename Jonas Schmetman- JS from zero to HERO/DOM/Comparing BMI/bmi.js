  

  const btnCompare = document.querySelector('#compareButton');
  var markHeight = document.querySelector('#markHeight');
  var markWeight = document.querySelector('#markWeight');

  var johnHeight = document.querySelector('#johnHeight');
  var johnWeight = document.querySelector('#johnWeight');





  btnCompare.addEventListener('click' , function() {
  
    var markDescription = `Mark is ${markHeight.value} cm tall and weighs ${markWeight.value} kg`;
    var johnDescription = `John is ${johnHeight.value} cm tall and weighs ${johnWeight.value} kg`;
      
    console.log(markDescription);
    console.log(johnDescription);
    
  });