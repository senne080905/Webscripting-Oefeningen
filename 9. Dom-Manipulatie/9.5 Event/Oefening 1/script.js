function changeText(){
    let button = document.querySelector('button');
    button.innerHTML = 'Subscribed!';

    if(button.innerHTML == 'Subscribed!'){
        button.innerHTML = 'Subscribe';
    }
    else{
        button.innerHTML = 'Subscribed!';
    }
}