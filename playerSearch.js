let searchControl = document.getElementById("button__search");

searchControl.addEventListener(
    "click",
    function(){
        let wordSearch = document.getElementById("labelSearch").value;
        
        //Eliminar todos los items que se encuentren en el listado antes de actualizar con la nueva busqueda
        document.getElementById("mylistofsearch").innerHTML = '';

        if (wordSearch != "")
        {
                let expression = new RegExp(wordSearch, "i");

                let songs = listSongs;
                songs = searchingByFilter(songs, expression);

                //Agregar nuevos items
                addItemsOfSearch(songs);
        }
        else
        {
                document.getElementById("mylistofsearch").innerHTML = "No hay datos para presentar..!";
        }
    }
);

 function searchingByFilter(songs, express) {
        let filters = [];
        let searchEnding = [];

        //Se aplica primer filtro: Nombre de cancion
        let tempFilter =  songs.filter(song => express.exec(song.name));
        for (let i = 0; i < tempFilter.length; i++) {
                filters.push(tempFilter[i]);
        }

        //Se aplica primer filtro: Nombre de artista
        tempFilter =  songs.filter(song => express.exec(song.author));
        for (let i = 0; i < tempFilter.length; i++) {
                 filters.push(tempFilter[i]);
        }

        //Se aplica primer filtro: Genero de la cancion
        tempFilter =  songs.filter(song => express.exec(song.genre));
        for (let i = 0; i < tempFilter.length; i++) {
                 filters.push(tempFilter[i]);
        }

        //Verificar que no existan canciones repetidas
         for (let i = 0; i < filters.length; i++) {
                 if (searchEnding.length > 0)
                 {
                         let validSong = false;

                         for (let j = 0; j < searchEnding,length; j++) {
                                 if (filters[i] == searchEnding[j]){
                                         validSong = true;
                                 }
                         }

                         if (!validSong)
                         {
                                 searchEnding.push(filters[i]);
                         }
                 }
                 else
                 {
                         searchEnding.push(filters[i]);
                 }
         }

        //Devolver canciones filtradas
        return searchEnding;
}

function addItemsOfSearch(songs)
{
    for (let i = 0; i < songs.length; i++) {
        document.getElementById("mylistofsearch").insertAdjacentHTML('beforeend',
            `<li class="li_SearchResult_Group">${songs[i].name}<div class="li_SearchResult_Group"><a href="#"><i class="fa-solid fa-play"></i><a href="#"><i class="fa-regular fa-heart"></i></a><a href="#"><i class="fa-solid fa-plus"></i></a></a></div></li>`);
    }
}