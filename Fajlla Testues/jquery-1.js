
console.log('A test that is working');

/*
$('li.hot').addClass('complete');

const a = $.isNumeric($(':text').val());
const b = $('ul');

console.log(a);
console.log(b);*/



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
    } 