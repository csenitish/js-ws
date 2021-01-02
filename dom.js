// dom tree , all html elements converts in DOM objects
//document object model
// pre-define classes, objects, functions are API  
//  In DOM , all the HTML elements are consider as the js objects
//and inside objects property and method

window.addEventListener('DOMContentLoaded', bindEvents);
//DOMContentLoaded (less lazy)
// load (Lazy)
function bindEvents() {
    //alert('Bind Event Call');
    document.getElementById('greet')
        .addEventListener('click', readTxt);
    document.getElementById('clear')
        .addEventListener('click', clearAll);
}

function clearAll() {
    document.getElementById('first').value = '';
    document.getElementById('second').value = '';
    document.getElementById('output').innerText = '';
}

function readTxt() {

    var firstName = window.document.getElementById('first').value;
    var lastName = document.getElementById('second').value;
    //var result = 'Welcome '+firstName + ' '+lastName;
    var result = `Welcome ${firstName} ${lastName}`;
    document.getElementById('output').innerText = result;
}