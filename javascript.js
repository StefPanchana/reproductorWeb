class Song{
    name;
    author;
    duration;
    album;
    year;
    genre;
    cover;

    constructor(name, author, duration, album, year, genre, cover){
        this.name = name;
        this.author = author;
        this.duration = duration;
        this.album = album;
        this.year = year;
        this.genre = genre;
        this.cover = cover;
    }
}

let listSongs = [
    new Song("Fire", "BTS", "00:02:00", "Younth", 2016, "Kpop", "1.png"),
    new Song("Aurora", "Dero", "00:04:00", "Oid Mortales Records", 1992, "Dance/Electronic", "2.jpeg"),
    new Song("Blah Blah Blah","Armin van Buuren","00:03:50","Live at Ultra Music Festival Miami 2018 (Highlights)",2018,"Dance/Electronic","3.jpg"),
    new Song("Fire on fire", "Sam Smith", "00:04:00", "Let’s Dance - Das Tanzalbum 2019", 2019,  "Dance/Electronic", "4.jpg"),
    new Song("Marisola", "Cris MJ, Standly, Nicki Nicole, Duki", "00:03:04", "Single", 2022, "Urbano Latino","5.jpeg"),
    new Song("La Original", "Emilia, Tini", "00:02:21", ".mp3", 2023, "Urbano Latino", "6.jpeg"),
    new Song("Los del Espacio", "LIT killah, Tiago PZK, Maria Becerra, Duki, Emilia, Rusherking, Big One, FMK", "00:05:38",  "Los Del Espacio", 2023, "Urbano Latino", "7.jpeg"),
    new Song("Bellakeo", "Peso Pluma, Anitta", "00:03:17", "Bellakeo", 2023, "Urbano Latino", "8.jpeg"),
    new Song("Perro Negro", "Bad Bunny ft. Feid", "00:02:43", "Nadi sabe lo que va a pasar mañana", 2023, "Urbano Latino", "9.jpeg"),
    new Song("Feliz Cumpleaños Ferxxo", "Feid",  "00:02:36", "Feliz Cumpleaños Ferxxo", 2022, "Urbano Latino", "10.jpeg"),
    new Song("Provenza", "Karol G", "00:03:30", "Mañana sera bonito", 2022, "Urbano Latino", "11.jpeg"),
    new Song("Eternity", "Anyma & Chris Avantgarde", "00:05:20", "Genesys", 2023, "Techno melódico", "12.jpeg"),
    new Song("Syren", "Anyma & Rebūke", "00:03:17", "Genesys", 2023, "Techno melódico", "13.jpeg"),
    new Song("Simulation", "Anyma & Chris Avantgarde", "00:03:15", "Genesys", 2023, "Techno melódico", "14.jpeg"),
    new Song("Unearth", "Anyma", "00:04:15", "Genesys", 2023, "Techno melódico", "15.jpeg"),
    new Song("Aria", "Argy & Omnya", "00:05:15", "Genesys", 2023, "Techno melódico", "16.jpeg"),
    new Song("Real Love", "Martin Garrix & Lloyiso", "00:03:11",  "Real Love", 2023, "EDM", "17.jpeg")
];

// Resto del código

