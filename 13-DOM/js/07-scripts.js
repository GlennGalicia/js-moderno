// Cambiando estilos CSS en JS

const title = document.querySelector('h1')
title.style.backgroundColor = 'red'
title.style.fontFamily = 'Arial'
title.style.textTransform = 'uppercase'

const card = document.querySelector('.card')
card.classList.add('nueva-clase')
card.classList.remove('nueva-clase')
console.log(card);