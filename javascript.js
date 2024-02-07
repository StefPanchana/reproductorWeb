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
    new Song("Marisola Remix", "Cris MJ, Standly, Nicki Nicole, Duki", 2022, "Urbano Latino", "Single"),
    new Song("La Original", "Emilia, Tini", 2023, "Urbano Latino", ".mp3"),
    new Song("Los del Espacio", "LIT killah, Tiago PZK, Maria Becerra, Duki, Emilia, Rusherking, Big One, FMK", 2023, "Urbano Latino", "Los Del Espacio"),
    new Song("Bellakeo", "Peso Pluma, Anitta", 2023, "Urbano Latino", "Bellakeo"),
    new Song("Perro Negro", "Bad Bunny ft. Feid", 2023, "Urbano Latino", "Nadi sabe lo que va a pasar mañana"),
    new Song("Feliz Cumpleaños Ferxxo", "Feid", 2022, "Urbano Latino", "Feliz Cumpleaños Ferxxo"),
    new Song("Provenza", "Karol G", 2022, "Urbano Latino", "Mañana sera bonito"),
    new Song("Eternity", "Anyma & Chris Avantgarde", 2023, "Techno melódico", "Genesys"),
    new Song("Syren", "Anyma & Rebūke", 2023, "Techno melódico", "Genesys"),
    new Song("Simulation", "Anyma & Chris Avantgarde", 2023, "Techno melódico", "Genesys"),
    new Song("Unearth", "Anyma", 2023, "Techno melódico", "Genesys"),
    new Song("Aria", "Argy & Omnya", 2023, "Techno melódico", "Single"),
    new Song("Real Love", "Martin Garrix & Lloyiso", 2023, "EDM", "Real Love")
];

// Resto del código

