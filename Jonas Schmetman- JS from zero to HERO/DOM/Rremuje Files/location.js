


let div = document.createElement('div');
    div.className = 'header';
    div.id = 'border';

document.body.appendChild(div);

   let p = document.createElement('p');
   p.className = 'paragraph1';
   p.textContent = 'This is a paragraph';
   
   div.appendChild(p);

   let p2 = document.createElement('p');
   p2.textContent = "Replaced Paragraph";


let div2 = document.createElement('div');
    div2.className = 'footer';   
    document.body.appendChild(div2);


    /**The main idea of the application */
    let lista = document.querySelector('.lista');
    
    
    let item1 = document.createElement('li');
    item1.textContent = 'The product number 1';
    let item2 = document.createElement('li');
    item2.textContent = 'The product number 2';
    
    lista.appendChild(item1);
    lista.appendChild(item2);
    
    
    const theContent = document.querySelector('.input');
    const button = document.querySelector('.submitBtn');
    
    console.log(theContent, button)
    


    
    button.addEventListener('click' , function () {
       let element  = document.createElement('li');
       element.textContent = theContent.value;
       
       let lista = document.querySelector('.lista');
       
       lista.appendChild(element);
        
       theContent.value = ' ' ; 
    });





