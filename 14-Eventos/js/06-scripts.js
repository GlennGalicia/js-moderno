// Eventos Bubbling

const carDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const title = document.querySelector('.titulo')

carDiv.addEventListener('click', evt => {
    evt.stopPropagation()
    console.log('click en el card');
})

infoDiv.addEventListener('click', evt => {
    evt.stopPropagation()
    console.log('click en el div');
})

title.addEventListener('click', evt => {
    evt.stopPropagation()
    console.log('click en el title');
})