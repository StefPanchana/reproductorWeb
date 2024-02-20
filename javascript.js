/*=================================================================================================================*/
/*Clase base para el array de canciones a usar en el programa*/
/*=================================================================================================================*/

class Song{
    idSong;
    name;
    author;
    duration;
    album;
    year;
    genre;
    cover;
    urlSong;

    constructor(idSong, name, author, duration, album, year, genre, cover, urlSong){
        this.idSong = idSong;
        this.name = name;
        this.author = author;
        this.duration = duration;
        this.album = album;
        this.year = year;
        this.genre = genre;
        this.cover = cover;
        this.urlSong = urlSong;
    }

    get idSong() {
        return this.idSong;
    }

    set idSong(value) {
        this.idSong = value;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get author() {
        return this.author;
    }

    set author(value) {
        this.author = value;
    }

    get duration() {
        return this.duration;
    }

    set duration(value) {
        this.duration = value;
    }

    get album() {
        return this.album;
    }

    set album(value) {
        this.album = value;
    }

    get year() {
        return this.year;
    }

    set year(value) {
        this.year = value;
    }

    get genre() {
        return this.genre;
    }

    set genre(value) {
        this.genre = value;
    }

    get cover() {
        return this.cover;
    }

    set cover(value) {
        this.cover = value;
    }

    get urlSong() {
        return this.urlSong;
    }

    set urlSong(value) {
        this.urlSong = value;
    }

    getNameAndAuthorOfSong(){
        return `${this.name} - ${this.author}`;
    }
}

/*=================================================================================================================*/
/*Clase base de la lista de canciones a usar dentro del programa
* Lista de Busqueda: ListSearch
* Lista de Canciones en Cola: listPlaylist
* Lista de Favoritos: listFav*/
/*=================================================================================================================*/

class Playlist{
    listName;
    listOfSongs ;

    constructor(listName, listOfSongs) {
        this.listName = listName;
        this.listOfSongs = listOfSongs;
    }

    set addSong(song)
    {
        this.listOfSongs.push(song);
    }

    set removeSong(song)
    {
        this.listOfSongs.filter(s => s !== song);
    }
}

/*=================================================================================================================*/
/*Clase del reproductor del programa*/
/*=================================================================================================================*/
class Player {
    currentSong;
    nameCurrentPlaylist;
    stackOfSongs = [];
    audio;
    muteController;

    constructor() {
        this.audio = new Audio();
        this.muteController = new MuteController(this.audio);
    }

    updateStackOfSongs(listOfPlayer) {
        this.nameCurrentPlaylist = listOfPlayer.listName;
        this.setStackSongs(listOfPlayer.listOfSongs);
        this.currentSong = this.stackOfSongs[0]; // Cambiado a la primera canción en la pila
        this.audio.src = '';
        this.updateStack();

        let playButton = document.getElementById("play");
        playButton.addEventListener('click', () => {
            this.play();
            // Agrega o elimina la clase 'active' según el estado de reproducción
            playButton.classList.toggle('active', !this.audio.paused);
        });

        let stopButton = document.getElementById("stop");
        stopButton.addEventListener('click', () => {
            this.stop();
            // Asegúrate de que el botón de play esté desactivado al detener la reproducción
            playButton.classList.remove('active');
        });

        let muteButton = document.getElementById("mute");
        muteButton.addEventListener('click', () => {
            this.muteController.toggleMute();
            // Agrega o elimina la clase 'active' según el estado de mute
            muteButton.classList.toggle('active', this.audio.muted);

            if (this.audio.muted) {
                playButton.classList.remove('active');
            } else {
                playButton.classList.add('active');
            }
        });

        // Verifico si existe una canción cargada por defecto para mostrar información en el player
        if (this.currentSong !== undefined) {
            this.updateCurrentSong(this.currentSong);
        }
    }

    setStackSongs(listOfSongs) {
        // Limpio la cola de reproducción actual
        this.stackOfSongs = [];

        // Recorro la lista para llenar la pila de cola de canciones para reproducir
        for (let i = 0; i < listOfSongs.length; i++) {
            this.stackOfSongs.push(listOfSongs[i]);
        }
    }

    updateStack() {
        let listContainer = document.getElementById("myplayer");
        listContainer.innerHTML = ''; // Clear the list container

        this.stackOfSongs.forEach(stackOfSong => {
            let listItem = document.createElement("li");
            listItem.className = "li_MyPlaylist_Group";
            listItem.textContent = stackOfSong.getNameAndAuthorOfSong();

            let iconsDiv = document.createElement("div");
            iconsDiv.className = "li_MyPlaylist_Group";
            iconsDiv.innerHTML = '<button class="icon-button"><i class="fa-solid fa-play"></i></button><button class="icon-button"><i class="fa-regular fa-heart"></i></button>';

            listItem.appendChild(iconsDiv);
            listContainer.appendChild(listItem);
        });
    }

    updateCurrentSong(song) {
        // Actualización del Cover de la canción seleccionada
        document.getElementById("cover").src = "./caratulas/" + song.cover;

        // Actualización de los detalles de la canción en los labels
        document.getElementById("nameSong").textContent = song.name;
        document.getElementById("authorSong").textContent = song.author;
        document.getElementById("yearSong").textContent = song.year;
        document.getElementById("genreSong").textContent = song.genre;
        document.getElementById("durationSong").textContent = song.duration;
    }

    // Método para reproducir canción actual al dar clic al botón #play
    play() {
        if (this.currentSong !== undefined) {
            this.audio.src = "canciones/" + this.currentSong.urlSong;
            this.audio.play();
        }
    }
}

// Método para mutear canción actual al dar clic al botón #mute
class MuteController {
    constructor(audio) {
        this.audio = audio;
    }

    toggleMute() {
        this.audio.muted = !this.audio.muted;
    }
}
