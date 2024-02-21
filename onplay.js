//poner listener para las canciones
let playSongs = document.getElementsByClassName("icon-playSong");
for(let i = 0; i < listSearch.length; i++) {
    playSongs[1].addEventListener('click', () => {
        this.nameCurrentPlaylist = 'busqueda';
        let id = playSongs[i].parentElement.getAttribute('data-idSong');
        this.currentSong = this.listSearch.find(song => song.id == id);
        this.play();
    });
}

   //listener para las canciones
  
    let iconPlaySong = document.getElementsByClassName("icon-playSong");
    for(let i = 0; i < iconPlaySong.length; i++) {
        iconPlaySong[i].addEventListener('click', () => {
            this.nameCurrentPlaylist = 'busqueda';
            let id = iconPlaySong[i].parentElement.getAttribute('data-idCancion');
            this.currentSong = this.listSearch.find(song => song.id == id);
            this.play
        })
    }
   