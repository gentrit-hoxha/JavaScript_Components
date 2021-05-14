

const form = document.getElementById("form");
const name = document.getElementById("nameField");
const surname = document.getElementById("surnameField");
const email = document.getElementById("emailField");


form.addEventListener('submit', (e) =>{
     e.preventDefault();

      checkInput();
      checkSurname();
      checkMail();
});


function checkInput() {
    const nameValue = name.value;
 
    if(nameValue === '') {
		setErrorFor(name, "Shenoni Emrin, nuk mund te lihet zbrazet");
    } 
     else if(nameValue.length>5){
           setErrorFor(name, "Nuk duhet te jete gjatesia me e madhe se 5");
     }
    else if (nameValue) {
		setSuccessFor(name, "Ne Rregull");
    }
     


    
}

function checkSurname() {
    const surnameValue = surname.value;
    if(surnameValue === '') {
		setErrorFor(surname, "Plotesoni fushen e mbiemrit");
	} else if (surnameValue) {
		setSuccessFor(surname, "Në Rregull");
    }
}


function checkMail() {
    const emailValue = email.value;
    if(emailValue === '') {
		setErrorFor(email, "Shenoni emailin ne menyre korrekte, e.g username@domain.com");
    } 
    else if (emailValue) {
		setSuccessFor(email,"Në Rregull");
    }
}


  function setErrorFor(input, message) {
            var formControl = input;
            formControl.className = 'form-control error';

            var small = formControl.nextElementSibling;
            small.innerText = message;
            small.className = 'errorMsg no';
        }



     function setSuccessFor(input, message) {
            const formControl = input;
            formControl.className = 'form-control success';

            var small = formControl.nextElementSibling;
            small.innerText = message;
            small.className = 'succesMsg no';
        }


























































