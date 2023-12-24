// Añadir funciones en un objeto

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción con id > ${id}`);
    },
    pausar: function () {
        console.log('Pausando canción...');
    },
    borrar: function (id) { 
        console.log(`Borrando canción con id > ${id}`);
    },
    crearPlayList: function(nombrePlayList) {
        console.log(`Creando la playlist > ${nombrePlayList}`);
    },
    reproducirPlayList: function(playList){
        console.log(`Reproduciendo playlist > ${playList}`);
    }
}

reproductor.reproducir(13)
reproductor.pausar()
reproductor.borrar(13)

reproductor.crearPlayList('Trance')
reproductor.reproducirPlayList('Hip-Hop')