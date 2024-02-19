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
    stackOfSongs= [];
    audio;
    play;

    constructor() {
        this.audio = new Audio();

        /*=================================================================================================================*/
        //      Verificar porcion de codigo que realiza la reproduccion de las canciones dentro del reproductor
        /*=================================================================================================================*/
        // this.play();
        // let play_button = document.getElementById("play");
        //
        // play_button.addEventListener('click', () => {
        //     this.play();
        // } )
    }

    updateStackOfSongs = function(listOfPlayer)
    {
        this.nameCurrentPlaylist = listOfPlayer.listName;
        this.setstackSongs(listOfPlayer.listOfSongs);
        this.currentSong = (this.stackOfSongs)[0];
        this.updateStack();

        //Verifico si existe una cancion cargada por defecto para mostrar informacion en el player
        if (this.currentSong != null) {
            this.updateCurrentSong(this.currentSong);
        }
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

    updateStack = function()
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

    updateCurrentSong = function(song)
    {
        //Actualizacion del Cover de la cancion seleccionada
        document.getElementById("cover").src = "/caratulas/" + song.cover;

        //Actualizacion de los detalles de la cancion en los labels
        document.getElementById("nameSong").textContent = song.name;
        document.getElementById("authorSong").textContent = song.author;
        document.getElementById("yearSong").textContent = song.year;
        document.getElementById("genreSong").textContent = song.genre;
        document.getElementById("durationSong").textContent = song.duration;
    }

    //Metodo para reproducir cancion actual al dar click al boton #play

    /* play = function() {
        if (this.currentSong !== undefined){
            this.audio.src = "./canciones/"+this.currentSong.urlSong;
            this.audio.play();
        }
    } */
}


