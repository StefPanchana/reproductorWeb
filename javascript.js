/*=================================================================================================================*/
/*Clase base para el array de canciones a usar en el programa*/
/*=================================================================================================================*/

class Song{
    // name;
    // author;
    // duration;
    // album;
    // year;
    // genre;
    // cover;


    constructor(name, author, duration, album, year, genre, cover, urlSong){
        this.name = name;
        this.author = author;
        this.duration = duration;
        this.album = album;
        this.year = year;
        this.genre = genre;
        this.cover = cover;
        this.urlSong = urlSong;
    }

    name() {
        return this.name;
    }

    name(value) {
        this.name = value;
    }

    author() {
        return this.author;
    }

    author(value) {
        this.author = value;
    }

    duration() {
        return this.duration;
    }

    duration(value) {
        this.duration = value;
    }

    album() {
        return this.album;
    }

    album(value) {
        this.album = value;
    }

    year() {
        return this.year;
    }

    year(value) {
        this.year = value;
    }

    genre() {
        return this.genre;
    }

    genre(value) {
        this.genre = value;
    }

    cover() {
        return this.cover;
    }

    cover(value) {
        this.cover = value;
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
    listOfSongs = new Array.of(new Song());

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
    stackOfSongs= [];
    play;
    

    constructor(lists) {
        this.nameCurrentPlaylist = "";
        this.setstackSongs(lists);
        this.currentSong = (this.stackOfSongs)[0];
        this.updateStackOfSongs();
        this.audio = new Audio();
        this.play();
        let play_button = document.getElementById("play");

        play_button.addEventListener('click', () => {
            this.play();
        } )
    }

    setstackSongs = function(listofsongs)
    {
        //Limpio la cola de reproduccion actual
        if (this.stackOfSongs.length > 0)
        {
            this.stackOfSongs = [];
        }

        //Recorro la lista para llenar la pila de cola de canciones para reproducir
        for (let i = 0; i < listofsongs.length; i++)
        {
            this.stackOfSongs.push(listofsongs[i]);
        }
    }

    updateStackOfSongs = function()
    {
        let listContainer = document.getElementById("myplayer");

        this.stackOfSongs.forEach(stackOfSongs => {
            let listItem = document.createElement("li");
            listItem.className = "li_MyPlaylist_Group";
            listItem.textContent = stackOfSongs.getNameAndAuthorOfSong();

            let iconsDiv = document.createElement("div");
            iconsDiv.className = "li_MyPlaylist_Group";
            iconsDiv.innerHTML = '<button class="icon-button"><i class="fa-solid fa-play"></i></button><button class="icon-button"><i class="fa-regular fa-heart"></i></button>';

            listItem.appendChild(iconsDiv);
            listContainer.appendChild(listItem);
        });
    }

    //Metodo para reproducir cancion actual al dar click al boton #play

    play = function() {
        if (this.currentSong !== undefined){
            this.audio.src = "/canciones/"+this.currentSong.urlSong;
            this.audio.play();
        }
    }
}


