// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarTweet)

    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || []
        crearHTML()
    })
}

// Funciones
function agregarTweet(e) {
    e.preventDefault()
    const tweet = document.querySelector('#tweet').value

    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacío')
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }
    tweets = [...tweets, tweetObj]

    crearHTML()

    formulario.reset()
}

function mostrarError(error) {
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error
    mensajeError.classList.add('error')
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    setTimeout(() => {
        mensajeError.remove()
    }, 3000)
}

function crearHTML() {

    limpiarHTML()

    if (tweets.length > 0) {

        tweets.forEach(tweet => {
            const li = document.createElement('li')
            li.innerHTML = tweet.tweet
            listaTweets.appendChild(li)
        })

    }

    sincronizarStorage()
}

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild)
    }
}