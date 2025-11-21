function changeText(){
    let button = document.querySelector('button');
    button.innerHTML = 'Stop clicking me!';
    button.style.backgroundColor = 'pink';
}

// Inhoud input toevoegen aan een div, die toevoegen aan body
function addToBody(){
    let input = document.querySelector('input');
    let div = document.createElement('div');

    div.innerHTML = input.value;
    document.body.appendChild(div);
}

function removeDivs(){
    let divs = document.querySelectorAll('div');
    

    for(let div of divs){
        div.parentNode.removeChild(div);
    }
}