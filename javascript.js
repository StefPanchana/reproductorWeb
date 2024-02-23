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

    updateList(listOfSongs){
        this.listOfSongs = listOfSongs;
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
    currentIndex;
    lastActive; 
    

    constructor() {
        this.audio = new Audio();
        this.muteController = new MuteController(this.audio);
        this.currentSongTime = 0;
        // Define el índice de la canción actual
        this.currentIndex = 0;
        // Define la canción actual basada en el índice
        this.currentSong = this.stackOfSongs[this.currentIndex];
        this.isStopped = false;

        //Escucha click del boton #previous y ejecuta metodo previous
        let previousButton = document.getElementById("previous");
        previousButton.addEventListener('click', () => {
            this.previous();
        })

        // Escucha click del boton #play y #pause ejecuta metodo play/pause
        let playButton = document.getElementById("play");
        let pauseButton = document.getElementById("pause");
        playButton.addEventListener('click', () => {
            playButton.style.display = 'none';
            pauseButton.style.display = 'inline';
            this.play();
            // Agrega o elimina la clase 'active' según el estado de reproducción
            playButton.classList.toggle('active', !this.audio.paused);
        });

        pauseButton.addEventListener('click', () => {
        pauseButton.style.display = 'none';
        playButton.style.display = 'inline';
        this.pause();
        });

        //Escucha click del boton #next y ejecuta metodo next
        let nextButton = document.getElementById("next");
        nextButton.addEventListener('click', () => {
            this.next();
        })

        // Escucha click del boton #stop y ejecuta metodo stop
        let stopButton = document.getElementById("stop");
        stopButton.addEventListener('click', () => {
            pauseButton.style.display = 'none';
            playButton.style.display = 'inline';
            this.stop();
            // Bbotón de play desactivado al detener la reproducción
            playButton.classList.remove('active');
        });

        // Escucha click del boton #mute y ejecuta metodo mute
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
    }

    updateStackOfSongs(listOfPlayer, indexSong) {
        this.nameCurrentPlaylist = listOfPlayer.listName;
        this.setStackSongs(listOfPlayer.listOfSongs);
        this.currentIndex = indexSong;
        this.currentSong = this.stackOfSongs[this.currentIndex]; // Cambiado a la primera canción en la pila
        this.audio.src = '';

        //Actualizacion de HTML
        switch (this.nameCurrentPlaylist) {
            case 'playlist':
                this.updateStackPlaylist();
                break;
            case 'searchList':
                this.updateStackSearchList();
                break;
            case 'favList':
                this.updateStackFav();
                break;
            default:
                break;
        }

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

    //Carga de canciones en contenedor de busqueda
    updateStackSearchList() {
        let listContainer = document.getElementById("mylistofsearch");
        listContainer.innerHTML = ''; // Clear the list container

        this.stackOfSongs.forEach(stackOfSong => {
            let listItem = document.createElement("li");
            listItem.className = "li_SearchResult_Group";
            listItem.textContent = stackOfSong.getNameAndAuthorOfSong();

            let iconsDiv = document.createElement("div");
            iconsDiv.className = "li_SearchResult_Group";
            iconsDiv.innerHTML = '<button class="icon-favs"  data-idSong = "' + stackOfSong.idSong + '"><i class="fa-regular fa-heart"></i></button><button class="icon-addPlaylist" data-idSong = "' + stackOfSong.idSong + '"><i class="fa-regular fa fa-plus"></i></button><button class="icon-playSong" id="songButton' + stackOfSong.idSong + '" data-idSong = "' + stackOfSong.idSong + '"><i class="fa-solid fa-play"></i></button>';

            listItem.appendChild(iconsDiv);
            listContainer.appendChild(listItem);

            

        });
    }



    //Carga de canciones en contenedor de Playlist
    updateStackPlaylist() {
        let listContainer = document.getElementById("myplayer");
        listContainer.innerHTML = ''; // Clear the list container

        this.stackOfSongs.forEach(stackOfSong => {
            let listItem = document.createElement("li");
            listItem.className = "li_MyPlaylist_Group";
            listItem.textContent = stackOfSong.getNameAndAuthorOfSong();

            let iconsDiv = document.createElement("div");
            iconsDiv.className = "li_MyPlaylist_Group";
            iconsDiv.innerHTML = '<button class="icon-favs" data-idSong = "' + stackOfSong.idSong + '"><i class="fa-regular fa-heart"></i></button><button class="icon-addPlaylist" data-idSong = "' + stackOfSong.idSong + '"><i class="fa-regular fa fa-plus"></i></button><button class="icon-playSong" data-idSong = "' + stackOfSong.idSong + '"><i class="fa-solid fa-play"></i></button>';

            listItem.appendChild(iconsDiv);
            listContainer.appendChild(listItem);
        });
    }

    //Carga de canciones en contenedor de Favoritos
    updateStackFav() {
        let listContainer = document.getElementById("myFavs");
        listContainer.innerHTML = ''; // Clear the list container

        this.stackOfSongs.forEach(stackOfSong => {
            let listItem = document.createElement("li");
            listItem.className = "li_favslist_Group";
            listItem.textContent = stackOfSong.getNameAndAuthorOfSong();

            let iconsDiv = document.createElement("div");
            iconsDiv.className = "li_favslist_Group";
            iconsDiv.innerHTML = '<button class="icon-favs" data-idSong = "' + stackOfSong.idSong + '"><i class="fa-regular fa-heart"></i></button><button class="icon-addPlaylist" data-idSong = "' + stackOfSong.idSong + '"><i class="fa-regular fa fa-plus"></i></button><button class="icon-playSong" data-idSong = "' + stackOfSong.idSong + '"><i class="fa-solid fa-play"></i></button>';

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

    //Metodo para retroceder una cancion

    previous() {
                // Verifica si hay canciones anteriores en la lista
        if (this.currentIndex > 0) {
            // Disminuye el índice para retroceder a la canción anterior
            this.currentIndex--;
            // Actualiza la canción actual basada en el nuevo índice
            this.currentSong = this.stackOfSongs[this.currentIndex];
            // Actualiza la informacion de la cancion actual en el reproductor
            this.updateCurrentSong(this.currentSong);
            // Reproduce la nueva canción
            this.play();
        } else {
            // No hay canciones anteriores, muestra un mensaje o maneja la situación según sea necesario
            alert("No hay canciones anteriores en la lista.");
    }
    }

    // Método para reproducir canción actual al dar clic al botón #play
    play() {
        if (this.currentSong !== undefined && this.isStopped === false) {
            this.audio.src = "canciones/" + this.currentSong.urlSong;
            this.audio.currentTime = this.currentSongTime;
            this.audio.play();

        } else if (this.isStopped) {
            this.audio.currentTime = 0;
            this.isStopped = false; // Reinicia la bandera
            this.audio.play();
        } 
        // else if (this.currentSong == undefined ) {
        //     console.log("undefined")
        // }
    }

    pause() {
        if (!this.audio.paused) {
            this.audio.pause();
            this.currentSongTime = this.audio.currentTime;
        }
    }

    next() {
    // Verifica si hay canciones siguientes en la lista
        if (this.currentIndex < this.stackOfSongs.length - 1) {
            // Aumenta el índice para avanzar a la siguiente canción
            this.currentIndex++;
            // Actualiza la canción actual basada en el nuevo índice
            this.currentSong = this.stackOfSongs[this.currentIndex];
            // Actualiza la informacion de la cancion actual en el reproductor
            this.updateCurrentSong(this.currentSong);
            // Reproduce la nueva canción
            this.play();
        } else {
            // No hay más canciones siguientes, muestra un mensaje o maneja la situación según sea necesario
            console.log("No hay más canciones siguientes en la lista.");
        }
    }

    stop() {
    // Verifica si el audio no está pausado.
        // Si el audio no está pausado, lo pausa.
        this.audio.pause();
        // Restablece el tiempo de reproducción a cero.
        this.audio.currentTime = 0;
        this.isStopped = true;
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
