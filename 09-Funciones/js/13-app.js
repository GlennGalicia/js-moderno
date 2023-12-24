// Arrow functions dentro de objetos

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con id > ${id}`),
    pausar: () => console.log('Pausando canción...'),
    borrar: id => console.log(`Borrando canción con id > ${id}`),
    crearPlayList: nombrePlayList => console.log(`Creando la playlist > ${nombrePlayList}`),
    reproducirPlayList: playList => console.log(`Reproduciendo playlist > ${playList}`),

    set nuevaCancion(cancion){
        this.cancion = cancion
        console.log(`Añadiendo... ${cancion}`);
    },
    get obteniendoCancion() {
        console.log(`Obteniendo canción > ${this.cancion}`);
    }
}

reproductor.nuevaCancion ='Martillazo en el *'
reproductor.obteniendoCancion


reproductor.reproducir(13)
reproductor.pausar()
reproductor.borrar(13)

reproductor.crearPlayList('Trance')
reproductor.reproducirPlayList('Hip-Hop')