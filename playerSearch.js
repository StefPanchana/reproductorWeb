let searchControl = document.getElementById("button__search");

searchControl.addEventListener("click", function () {
    let wordSearch = document.getElementById("labelSearch").value.trim();

    // Validar la entrada
    if (wordSearch === "") {
        document.getElementById("mylistofsearch").textContent = "No hay datos para presentar..!";
        return;
    }

    // Eliminar todos los elementos en el listado antes de actualizar con la nueva búsqueda
    document.getElementById("mylistofsearch").textContent = '';

    let expression = new RegExp(wordSearch, "i");

    let filteredSongs = searchingByFilter(listSongsDefault, expression);

    // Agregar nuevos elementos
    addItemsOfSearch(filteredSongs);
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

function addItemsOfSearch(songs) {
    let listContainer = document.getElementById("mylistofsearch");

    songs.forEach(song => {
        let listItem = document.createElement("li");
        listItem.className = "li_SearchResult_Group";
        listItem.textContent = `${song.name} - ${song.author}`;

        let iconsDiv = document.createElement("div");
        iconsDiv.className = "li_SearchResult_Group";
        iconsDiv.innerHTML = '<button class="icon-button"><i class="fa-solid fa-play"></i></button><button class="icon-button"><i class="fa-regular fa-heart"></i></button>';

        listItem.appendChild(iconsDiv);
        listContainer.appendChild(listItem);
    });
}
