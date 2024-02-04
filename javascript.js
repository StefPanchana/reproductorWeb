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
];
