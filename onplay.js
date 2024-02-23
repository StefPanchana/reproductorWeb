// //poner listener para las canciones
// let playSongs = document.getElementsByClassName("icon-playSong");
// for(let i = 0; i < listSearch.length; i++) {
//     playSongs[1].addEventListener('click', () => {
//         this.nameCurrentPlaylist = 'busqueda';
//         let id = playSongs[i].parentElement.getAttribute('data-idSong');
//         this.currentSong = this.stackOfSongs.find(song => song.id == id);
//         this.play();
//     });
// }

//    //listener para las canciones
  
//     let iconPlaySong = document.getElementsByClassName("icon-playSong");
//     for(let i = 0; i < iconPlaySong.length; i++) {
//         iconPlaySong[i].addEventListener('click', () => {
//             this.nameCurrentPlaylist = 'busqueda';
//             let id = iconPlaySong[i].parentElement.getAttribute('data-idCancion');
//             this.currentSong = this.listSearch.find(song => song.id == id);
//             this.play
//         })
//     }


//    onPlay () {
//         //poner listener para las canciones
//     let playSongs = document.getElementsByClassName("icon-playSong");
//     for(let i = 0; i < playSongs.length; i++) {
//         playSongs[i].addEventListener('click', () => {
//             this.nameCurrentPlaylist = 'busqueda';
//             let id = playSongs[i].getAttribute('data-idSong');
//             this.currentSong = this.stackOfSongs.find(song => song.id == id);
//             // this.currentIndex = i
//             this.play();
            
//         });
//     }
//     }

    // onPlay() {
    //     // Seleccionar todos los botones de reproducción
    //     let playSongs = document.getElementsByClassName("icon-playSong");

    //     // Iterar sobre cada botón de reproducción
    //     Array.from(playSongs).forEach((playSong, index) => {
    //         playSong.addEventListener('click', () => {
    //             this.nameCurrentPlaylist = 'busqueda';
    //             let id = playSong.getAttribute('data-idSong');
    //             this.currentSong = this.stackOfSongs.find(song => song.id == id);
    //             this.currentIndex = i; // Establecer currentIndex como el índice actual
    //             this.play();
    //         });
    //     });
    // }
   
        //   document.addEventListener('icon-playSong', (e) => {
        //     this.currentSong = e.detail.song;
        //     this.lastActive = e.detail.nombre; 
        //     this.onPlay()
        // })



                    // let iconPlaySong = document.getElementsByClassName("icon-playSong");
            // Array.from(iconPlaySong).forEach(button => {
            //     button.addEventListener('click', () => {
            //         this.nameCurrentPlaylist = 'mylistofsearch';
            //         let id = button.getAttribute('data-idSong');
            //         this.currentSong = this.stackOfSongs.find(song => song.id == id);
            //         // console.log("play")
            //         this.play();
            //     })
            // } )

            // let iconPlaySong = document.getElementsByClassName("icon-playSong");
            // Array.from(iconPlaySong).forEach(button => {
            //     button.addEventListener('click', () => {
            //         this.nameCurrentPlaylist = 'mylistofsearch';
            //         let id = button.getAttribute('data-idSong'); // Accede directamente al atributo del botón
            //         this.currentSong = this.stackOfSongs.find(song => song.id == id);
            //         console.log(currentSong);
            //         // this.play();
            //     });
            // });