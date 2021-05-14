

const form = document.getElementById("form");
const name = document.getElementById("nameField");
const surname = document.getElementById("surnameField");
const email = document.getElementById("emailField");


form.addEventListener('submit', (e) =>{
     e.preventDefault();

      checkInput();
});


function checkInput() {
    const nameValue = name.value;
 
    if(nameValue === '') {
		setErrorFor(name,  "Emri eshte i zbrazet");
	} else if (nameValue) {
		setSuccessFor(name, "");
	}
}



function setErrorFor(input, message) {
	const formControl = input;
    formControl.className = 'form-control error';
    
    
	const small = document.getElementById('nameMsg');
    small.innerText = message;
    small.className = 'errorMsg no';
}

function setSuccessFor(input,message) {
	const formControl = input;
    formControl.className = 'form-control success';
    

    let small = document.getElementById('nameMsg');
    small.innerText = message;
    small.className = 'yes';
}












































/*
function show() {
    var name = document.getElementById("nameField").value;
    var surname = document.getElementById("surnameField").value;

   if (!(name=="")  ) {
       let msg  = document.getElementById("nameMsg");
       msg.innerHTML = "The name is correct"; 

    }

    else{
        let msg2  = document.getElementById("nameMsg2");
         msg2.innerHTML = "The name is incorrect";
    }

    if (!(surname=="")) {
        let surMsg = document.getElementById("surMsg1");
       surMsg.innerHTML = "The surname is correct"; 

     
    } else if(surname == "") {
        let surMsg = document.getElementById("surMsg2");
        surMsg.innerHTML = "The surname is incorrect"; 

    }


  
}

document.getElementById("button").addEventListener("click" , show);




console.log();*/









