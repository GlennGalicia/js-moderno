const reproductor = {
    cancion: '',
    reproducir: (id) => console.log(`Reproduciendo canción con id: ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: (id) => console.log(`borrando canción id: ${id}...`),
    crearPlayList: (nombrePlayList) => console.log(`Creando playlist: ${nombrePlayList}`),
    reproducirPlayList: (nombrePlayList) => console.log(`Reproduciendo playlist: ${nombrePlayList}`),

    set nuevaCancion(cancion){
        this.cancion = cancion
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'nueva cancion jiji'
reproductor.obtenerCancion

reproductor.reproducir(13)
reproductor.pausar()
reproductor.borrar(20)
reproductor.crearPlayList('Salsa')
reproductor.reproducirPlayList('Salsa')