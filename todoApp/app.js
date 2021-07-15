//SELECTORS

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');




//Event Listeners

todoButton.addEventListener('click', addTodo);



//Functions
function addTodo(event) {
    //Preventing from submiting the form
    event.preventDefault();
    console.log('Button working');


    //Creating the todoDiv
    const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');

    //Creating the li of the todoList

    const newTodo = document.createElement('li');
     newTodo.innerText = 'hey';
     newTodo.classList.add('todo-item');

     todoDiv.appendChild(newTodo);

     //Creating the check button
     const checkBtn = document.createElement('button');
     checkBtn.innerHTML = '<i class="fas fa-check"> </i>';
     checkBtn.classList.add('complete-btn');

     todoDiv.appendChild(checkBtn);

     //Creating the Delete BUTTON

     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
     trashButton.classList.add('trash-btn');

     todoDiv.appendChild(trashButton);


     todoList.append(todoDiv);
   

}