


document.body.addEventListener('keydown' , function (event) {

    document.querySelector('#which').textContent = event.which;
    document.querySelector('#keyCode').textContent = event.keyCode;
    document.querySelector('#shiftKey').textContent = event.shiftKey;
    document.querySelector('#altKey').textContent = event.altKey;
    document.querySelector('#ctrlKey').textContent = event.ctrlKey;
    document.querySelector('#metaKey').textContent = event.metaKey;
    document.querySelector('#key').textContent = event.key;


    
});





// document.getElementById('btn').addEventListener('click', function (e) {
//   document.body.classList.toggle('darkbg');
//   var table  = document.getElementById('tb').childNodes;

//  // document.querySelector('table').style.backgroundColor = '#222';
//  // document.querySelector('table').style.color = '#eee';

// });

