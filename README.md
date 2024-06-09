# Document Object Model

## Accesar a los elementos HTML con document
```js
let element;

element = document; // selecciona toda la página web
element = document.head; // seleccionamos la etiqueta head
element = document.body; // seleccionamos la etiqueda body
element = document.links[4] // acceder a un enlace en especifico
element = document.links[5].classList // muestra las clases de esta etiqueta
```

## getElementsByClassName -  seleccionar elementos por su clase
```js
const header = document.getElmentsByClassName('header') // header es la clase
const hero = document.getElmentsByClassName('hero')
```

## getElemenById - seleccionar elementos por su id
```js
const form = document.getElementById('formulario') // selecciona max un elemento
```

## querySelector -  seleccionar elemento por clase, id
```js
const card = document.querySelector('.card')

// selectores especificos
const info = document.querySelector('.premium . info') 

// clase
const card = document.querySelector('section.hospedaje .card:nth-child(2)')

// etiqueta
const nav = document.querySelector('nav') 

// id
const form = document.querySelector('#formulario')
```

## querySelectorAll -  seleccionar elementos por clase, id
```js
const form = document.querySelectorAll('#formulario')
```

# Modify elements 
```js
const encabezado = document.querySelector('.contenido-hero h1')

encabezado.innerText // recupera solo texto visibility: hidden
encabezado.textContent // recupera solo texto
encabezado.innerHTML // recupera el html

const portada = document.querySelector('portada').textContent = 'Nueva Portada.'

// modificar estilos
const h1 = document.querySelector('h1')

// forma 1
h1.style.backgroundColor = 'red'
h1.style.fontFamily = 'Arial'
h1.style.textTransform = 'uppercase'

//forma 2
h1.classList.add('nueva-clase', 'segunda-clase')
h1.classList.remove('segunda-clase')
```

# Traversing the DOM
```js
const navegacion = document.querySelector('.navegacion')

console.log(navegacion.childNodes) // los espacios en blanco son considerados elementos

navegacion.childen // elementos reales HTML
navegacion.childen[0] // elemento especifico reales HTML

// traversing de hijo a padre
const card = document.querySelector('.card')
card.parentElement.parentElement

// traversing de hijo a hijo
card.nextElementSibling
card.previousElementSibling
```
# Delete element DOM
```js
// eliminar hijo
const primerEnlace = document.querySelector('a')
primerEnlace.remove()

// eliminar desde el padre
const navegacion = document.querySelector('.navegacion')
navegacion.removeChild(navegacion.children[2])
```