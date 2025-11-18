let list = document.createElement('ul');
let listItem = document.createElement('li');
listItem.innerHTML = 'Banaan';

list.appendChild(listItem);
document.body.appendChild(list);

// element verwijder

let eersteParagraaf = document.querySelector('#EersteParagraaf');
let vervangingParagraaf = document.createElement('p');
vervangingParagraaf.innerHTML = 'Vervangende paragraaf';
eersteParagraaf.parentNode.replaceChild(vervangingParagraaf, eersteParagraaf);

let header = document.querySelector('h1');
header.style.background = '#ddd';
header.style.textDecoration = "underline";

// attributen aanpassen
let link = document.querySelector('a');
link.setAttribute('href' ,'https://www.carrefour.be');