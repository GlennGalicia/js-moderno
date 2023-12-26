// Crear y añadir elementos DOM

const enlace = document.createElement('a')

// añadiendo texto
enlace.textContent = 'Nuevo enlace'

// agregando href
enlace.href = '/nuevo-enlace'

console.log(enlace);

document.querySelector('.navegacion').appendChild(enlace)

// Crear un nuevo card
const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Parrafo 2'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p')
parrafo3.textContent = '$1,200 por persona'
parrafo3.classList.add('precio')

// Crear div con la clase info
const info = document.createElement('div')
info.classList.add('info')
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// Crear la imagen
const img = document.createElement('img')
img.src = 'img/hacer2.jpg'

// Crear el card
const card = document.createElement('div')
card.classList.add('card')

// Asignar img y parrafos
card.appendChild(img)
card.appendChild(info)

//Insertar en el HML
document.querySelector('.hacer .contenedor-cards').appendChild(card)