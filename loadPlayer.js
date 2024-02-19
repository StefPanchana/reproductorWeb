//======================================================================================================//
//                          Variables generales para el reproductor
//======================================================================================================//
let listDefault; //Lista contenedora de todas las canciones del reproductor
let listSearch; //Lista contenedora de canciones filtradas por busqueda
let listFav; //Lista contenedora de canciones marcadas como favoritas

let playerWeb;//Instancia del reproductor Web

let listSongsDefault; //Array de canciones cargadas por defecto al reproductor

window.onload = function() {
    //======================================================================================================//
    //                              Carga de canciones por defecto
    //======================================================================================================//

    listSongsDefault = [
        new Song("Fire", "BTS", "00:02:00", "Younth", 2016, "Kpop", "1.png","1.mp3"),
        new Song("Aurora", "Dero", "00:04:00", "Oid Mortales Records", 1992, "Dance/Electronic", "2.jpeg", "2.mp3"),
        new Song("Blah Blah Blah","Armin van Buuren","00:03:50","Live at Ultra Music Festival Miami 2018 (Highlights)",2018,"Dance/Electronic","3.jpg", "3.mp3"),
        new Song("Fire on fire", "Sam Smith", "00:04:00", "Let’s Dance - Das Tanzalbum 2019", 2019,  "Dance/Electronic", "4.jpg", "4.mp3"),
        new Song("Marisola", "Cris MJ, Standly, Nicki Nicole, Duki", "00:03:04", "Single", 2022, "Urbano Latino","5.jpeg", "5.mp3"),
        new Song("La Original", "Emilia, Tini", "00:02:21", ".mp3", 2023, "Urbano Latino", "6.jpeg", "6.mp3"),
        new Song("Los del Espacio", "LIT killah, Tiago PZK, Maria Becerra, Duki, Emilia, Rusherking, Big One, FMK", "00:05:38",  "Los Del Espacio", 2023, "Urbano Latino", "7.jpeg", "7.mp3"),
        new Song("Bellakeo", "Peso Pluma, Anitta", "00:03:17", "Bellakeo", 2023, "Urbano Latino", "8.jpeg", "8.mp3"),
        new Song("Perro Negro", "Bad Bunny ft. Feid", "00:02:43", "Nadi sabe lo que va a pasar mañana", 2023, "Urbano Latino", "9.jpeg", "9.mp3"),
        new Song("Feliz Cumpleaños Ferxxo", "Feid",  "00:02:36", "Feliz Cumpleaños Ferxxo", 2022, "Urbano Latino", "10.jpeg", "10.mp3"),
        new Song("Provenza", "Karol G", "00:03:30", "Mañana sera bonito", 2022, "Urbano Latino", "11.jpeg", "11.mp3"),
        new Song("Eternity", "Anyma & Chris Avantgarde", "00:05:20", "Genesys", 2023, "Techno melódico", "12.jpeg", "12.mp3"),
        new Song("Syren", "Anyma & Rebūke", "00:03:17", "Genesys", 2023, "Techno melódico", "13.jpeg", "13.mp3"),
        new Song("Simulation", "Anyma & Chris Avantgarde", "00:03:15", "Genesys", 2023, "Techno melódico", "14.jpeg", "14.mp3"),
        new Song("Unearth", "Anyma", "00:04:15", "Genesys", 2023, "Techno melódico", "15.jpeg", "15.mp3"),
        new Song("Aria", "Argy & Omnya", "00:05:15", "Genesys", 2023, "Techno melódico", "16.jpeg", "16.mp3"),
        new Song("Real Love", "Martin Garrix & Lloyiso", "00:03:11",  "Real Love", 2023, "EDM", "17.jpeg", "17.mp3"),
        new Song("Dancing Like Butterfly Wings", "ATEEZ", "00:03:02", 2019, "Kpop", "TREASURE EP.3: One To All", "18.mp3"),
        new Song("Wild Flower", "RM & Youjeen", "00:04:35", 2022, "Kpop", "Indigo", "19.mp3"),
        new Song("Love Lost", "Mac Miller & The Temper Trap", "00:02:43", 2022, "Hip Hop", "I Love Life, Thank You", "20.mp3"),
        new Song("Brother", "Kodaline", "00:03:23", 2018, "Indie", "Politics of Living", "21.mp3"),
        new Song("Weast Coast", "Imagine Dragons", "00:03:37", 2018, "Alternative Rock", "Origins", "22.mp3"),
        new Song("Hold me tight or don't", "Fall Out Boy", "00:03:27", 2018, "Dance Pop", "MANIA", "23.mp3"),
        new Song("Outro: Wings", "BTS", "00:03:45", 2017, "Korean Dance", "You Never Walked Alone", "24.mp3"),
        new Song("Mr. Blue Sky", "Electric Light Orchestra", "00:05:02", 1977, "Progressive Pop", "Out of the Blue", "25.mp3"),
        new Song("New Romantics (Taylor's Version)", "Taylor Swift", "00:03:50", 2023, "Pop" , "1989 (Taylor's Version)", "26.mp3"),
        new Song("In the Shadows", "The Rasmus", "00:03:52", 2003, "Alternative Rock", "Dead Letters", "27.mp3"),
        new Song("Livin in a World Without You", "The Rasmus", "00:03:50", 2008, "Pop/Rock", "Black Roses", "28.mp3"),
        new Song("Jezebel", "The Rasmus", "00:03:24", 2022, "Rock", "Rise", "29.mp3"),
        new Song("One Summer Away", "Joe Hisaishi", "00:04:05", 2001, "Classical", "Spirited Away Soundtrack", "30.mp3"),
        new Song("1","Fire", "BTS", "00:02:00", "Younth", 2016, "Kpop", "1.png","1.mp3"),
        new Song("2","Aurora", "Dero", "00:04:00", "Oid Mortales Records", 1992, "Dance/Electronic", "2.jpeg", "2.mp3"),
        new Song("3","Blah Blah Blah","Armin van Buuren","00:03:50","Live at Ultra Music Festival Miami 2018 (Highlights)",2018,"Dance/Electronic","3.jpg", "3.mp3"),
        new Song("4","Fire on fire", "Sam Smith", "00:04:00", "Let’s Dance - Das Tanzalbum 2019", 2019,  "Dance/Electronic", "4.jpg", "4.mp3"),
        new Song("5","Marisola", "Cris MJ, Standly, Nicki Nicole, Duki", "00:03:04", "Single", 2022, "Urbano Latino","5.jpeg", "5.mp3"),
        new Song("6","La Original", "Emilia, Tini", "00:02:21", ".mp3", 2023, "Urbano Latino", "6.jpeg", "6.mp3"),
        new Song("7","Los del Espacio", "LIT killah, Tiago PZK, Maria Becerra, Duki, Emilia, Rusherking, Big One, FMK", "00:05:38",  "Los Del Espacio", 2023, "Urbano Latino", "7.jpeg", "7.mp3"),
        new Song("8","Bellakeo", "Peso Pluma, Anitta", "00:03:17", "Bellakeo", 2023, "Urbano Latino", "8.jpeg", "8.mp3"),
        new Song("9","Perro Negro", "Bad Bunny ft. Feid", "00:02:43", "Nadi sabe lo que va a pasar mañana", 2023, "Urbano Latino", "9.jpeg", "9.mp3"),
        new Song("10","Feliz Cumpleaños Ferxxo", "Feid",  "00:02:36", "Feliz Cumpleaños Ferxxo", 2022, "Urbano Latino", "10.jpeg", "10.mp3"),
        new Song("11","Provenza", "Karol G", "00:03:30", "Mañana sera bonito", 2022, "Urbano Latino", "11.jpeg", "11.mp3"),
        new Song("12","Eternity", "Anyma & Chris Avantgarde", "00:05:20", "Genesys", 2023, "Techno melódico", "12.jpeg", "12.mp3"),
        new Song("13","Syren", "Anyma & Rebūke", "00:03:17", "Genesys", 2023, "Techno melódico", "13.jpeg", "13.mp3"),
        new Song("14","Simulation", "Anyma & Chris Avantgarde", "00:03:15", "Genesys", 2023, "Techno melódico", "14.jpeg", "14.mp3"),
        new Song("15","Unearth", "Anyma", "00:04:15", "Genesys", 2023, "Techno melódico", "15.jpeg", "15.mp3"),
        new Song("16","Aria", "Argy & Omnya", "00:05:15", "Genesys", 2023, "Techno melódico", "16.jpeg", "16.mp3"),
        new Song("17","Real Love", "Martin Garrix & Lloyiso", "00:03:11",  "Real Love", 2023, "EDM", "17.jpeg", "17.mp3"),
        new Song("18","Dancing Like Butterfly Wings", "ATEEZ", "00:03:02", 2019, "Kpop", "TREASURE EP.3: One To All", "18.jpg","18.mp3"),
        new Song("19","Wild Flower", "RM & Youjeen", "00:04:35", 2022, "Kpop", "Indigo", "19.jpg", "19.mp3"),
        new Song("20","Love Lost", "Mac Miller & The Temper Trap", "00:02:43", 2022, "Hip Hop", "I Love Life, Thank You", "20.jpg","20.mp3"),
        new Song("21","Brother", "Kodaline", "00:03:23", 2018, "Indie", "Politics of Living", "21.jpg","21.mp3"),
        new Song("22","Weast Coast", "Imagine Dragons", "00:03:37", 2018, "Alternative Rock", "Origins", "22.png","22.mp3"),
        new Song("23","Hold me tight or don't", "Fall Out Boy", "00:03:27", 2018, "Dance Pop", "MANIA", "23.png","23.mp3"),
        new Song("24","Outro: Wings", "BTS", "00:03:45", 2017, "Korean Dance", "You Never Walked Alone", "24.jpg","24.mp3"),
        new Song("25","Mr. Blue Sky", "Electric Light Orchestra", "00:05:02", 1977, "Progressive Pop", "Out of the Blue", "25.jpg","25.mp3"),
        new Song("26","New Romantics (Taylor's Version)", "Taylor Swift", "00:03:50", 2023, "Pop" , "1989 (Taylor's Version)", "26.jpg","26.mp3"),
        new Song("27","In the Shadows", "The Rasmus", "00:03:52", 2003, "Alternative Rock", "Dead Letters","27.jpg","27.mp3"),
        new Song("28","Livin in a World Without You", "The Rasmus", "00:03:50", 2008, "Pop/Rock", "Black Roses", "28.jpg","28.mp3"),
        new Song("29","Jezebel", "The Rasmus", "00:03:24", 2022, "Rock", "Rise", "29.png","29.mp3"),
        new Song("30","One Summer Away", "Joe Hisaishi", "00:04:05", 2001, "Classical", "Spirited Away Soundtrack", "30.jpg","30.mp3"),
    ];

    //======================================================================================================//
    //                              Instancia de listas de reproducción
    //======================================================================================================//

    //Creación del listado por defecto de canciones del reproductor
    listDefault = new Playlist("defaultList", listSongsDefault);

    //Creación del listado de canciones favoritas de la sesión
    listSearch = new Playlist("searchList", []);

    //Creación del listado de canciones filtradas por busqueda de la sesión (se actualizara en base al evento generado del usuario)
    listFav = new Playlist("favList", []);

    //======================================================================================================//
    //                              Instancia del Reproductor Web
    //======================================================================================================//
    playerWeb = new Player();
    playerWeb.updateStackOfSongs(listDefault);

};