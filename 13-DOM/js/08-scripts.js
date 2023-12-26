// Traversing de DOM

const nav = document.querySelector('.navegacion')
console.log(nav);
console.log(nav.childNodes)
console.log(nav.children)

console.log(nav.children[0].nodeName);
console.log(nav.children[0].nodeType);

const card = document.querySelector('.card')

card.children[1].children[1].textContent = 'Nuevo texto desde travesing de DOM'
card.children[0].src = './img/hacer2.jpg'

console.log(card.children);

// Traversing de hijo a padre
console.log(card.parentElement.parentElement);

// Traversion de hermano al sig hermano
console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);