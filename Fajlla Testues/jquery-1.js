
console.log('A test that is working');

/*
$('li.hot').addClass('complete');

const a = $.isNumeric($(':text').val());
const b = $('ul');

console.log(a);
console.log(b);*/

/*

fetch('sample1.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
});


 function appendData(data) {
    let mainContainer = document.getElementById('myData');
          for (let i = 0; i < data.length; i++) {
            let div = document.createElement('div');
                div.classList.add('user');

                let nameEL = document.createElement('h1');
                  nameEL.classList.add('name');
                  nameEL.textContent = data[i].firstName;
                  
                  let surnameEL = document.createElement('h1');
                  surnameEL.classList.add('surname');
                  surnameEL.textContent = data[i].lastName;

                  div.appendChild(nameEL);
                  div.appendChild(surnameEL);
                  
            
            mainContainer.appendChild(div);
          }
    } */



      fetch('https://restcountries.eu/rest/v2/all')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
       // console.log("The capital of " + data[0].name + " is " + data[0].population);
           displayCountries(data);
           
      });

      function displayData(data) {
        let country = document.querySelector('.countries');
        for (let i = 0; i < 100; i++) {
         //   console.log(`Country: ${data[i].name}, Language ${data[i].languages[0].name}`);      
        
         country.innerHTML += `Country: ${data[i].name}, Language ${data[i].languages[0].name}`+ '</br>';
          }
      }

      function displayCountries(data) {
        let mainContainer = document.getElementById('myData');
              for (let i = 0; i < data.length; i++) {
                let div = document.createElement('div');
                    div.classList.add('user');
    

                    

                    let nameEL = document.createElement('h1');
                      nameEL.classList.add('name');
                      nameEL.textContent = 'Country: ' + data[i].name;
                      
                      let surnameEL = document.createElement('h3');
                      surnameEL.classList.add('surname');
                      surnameEL.textContent = 'Language: ' +  data[i].languages[0].name;
    
                     let image = document.createElement('img');
                     image.classList.add('size');
                     image.src = data[i].flag + "";    
                      
                      div.appendChild(nameEL);
                      div.appendChild(surnameEL);
                      div.appendChild(image);

                      
                
                mainContainer.appendChild(div);
              }
        } 


     