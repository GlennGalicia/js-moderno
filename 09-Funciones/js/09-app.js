const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con id: ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    borrar: function(id){
        console.log(`borrando canción id: ${id}...`)
    },
    crearPlayList: function(nombrePlayList){
        console.log(`Creando playlist: ${nombrePlayList}`)
    },
    reproducirPlayList: function(nombrePlayList){
        console.log(`Reproduciendo playlist: ${nombrePlayList}`)
    }
}

reproductor.reproducir(13)
reproductor.pausar()
reproductor.borrar(20)
reproductor.crearPlayList('Salsa')
reproductor.reproducirPlayList('Salsa')