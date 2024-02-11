let listSongsDefault;

window.onload = function() {
    //código a ejecutar
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
        new Song("Brother", "Kodaline", "00:03:23", 2018, "Indie", "Politics of Living"),
        new Song("Weast Coast", "Imagine Dragons", "00:03:37", 2018, "Alternative Rock", "Origins"),
        new Song("Hold me tight or don't", "Fall Out Boy", "00:03:27", 2018, "Dance Pop", "MANIA"),
        new Song("Outro: Wings", "BTS", "00:03:45", 2017, "Korean Dance", "You Never Walked Alone"),
        new Song("Mr. Blue Sky", "Electric Light Orchestra", "00:05:02", 1977, "Progressive Pop", "Out of the Blue"),
        new Song("New Romantics (Taylor's Version)", "Taylor Swift", "00:03:50", 2023, "Pop" , "1989 (Taylor's Version)"),
        new Song("In the Shadows", "The Rasmus", "00:03:52", 2003, "Alternative Rock", "Dead Letters"),
        new Song("Livin in a World Without You", "The Rasmus", "00:03:50", 2008, "Pop/Rock", "Black Roses"),
        new Song("Jezebel", "The Rasmus", "00:03:24", 2022, "Rock", "Rise"),
        new Song("One Summer Away", "Joe Hisaishi", "00:04:05", 2001, "Classical", "Spirited Away Soundtrack"),
    ];

    let playerWeb = new Player(listSongsDefault);

    playerWeb.nameCurrentPlaylist = listSongsDefault.nameCurrentPlaylist;
    playerWeb.setstackSongs("listadicional");
};