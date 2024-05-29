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