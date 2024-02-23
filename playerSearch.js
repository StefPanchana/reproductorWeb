let searchControl = document.getElementById("button__search");

searchControl.addEventListener("click", function () {
    let wordSearch = document.getElementById("labelSearch").value.trim();

    // Validar el texto del cajon de busqueda
    if (wordSearch === "") {
        //Si no hay texto en cajon de busqueda llenar de las canciones del catalogo por defecto al reproductor
        listSearch.updateList(listSongsDefault);
        playerWeb.updateStackOfSongs(listSearch, 0, true);
        return;
    }

    //En caso contrario, si existe texto en el cajon de busqueda se procede a actualizar el contenedor de busqueda
    // Eliminar todos los elementos en el listado antes de actualizar con la nueva búsqueda
    document.getElementById("mylistofsearch").textContent = '';

    let expression = new RegExp(wordSearch, "i");

    let filteredSongs = searchingByFilter(listSongsDefault, expression);
    listSearch.updateList(filteredSongs);

    // Agregar nuevos elementos
    playerWeb.updateStackOfSongs(listSearch, 0, true);
});

function searchingByFilter(songs, expression) {
    let filters = new Set();

    // Aplicar filtro: Nombre de la canción
    filters = new Set([...filters, ...songs.filter(song => expression.exec(song.name))]);

    // Aplicar filtro: Nombre del artista
    filters = new Set([...filters, ...songs.filter(song => expression.exec(song.author))]);

    // Aplicar filtro: Género de la canción
    filters = new Set([...filters, ...songs.filter(song => expression.exec(song.genre))]);

    // Devolver canciones filtradas
    return Array.from(filters);
}

