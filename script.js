/* async function importData () {
    try {
        await getData();
    } catch (err) {
    console.log(err, "Doesn't work");
    }
}

importData();  */

async function getMovieGenres() { 
    try {
        const apiUrlGenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key='+apiKey;
        const response = await fetch((url = apiUrlGenre), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log("Get request genres", data);
        const nameJSON = data.genres;
        const movieGenre = nameJSON.forEach(genre => {
            console.log(genre);
            const getNameAndId = "name: " + nameJSON.name + " id: " + nameJSON.id; 
            return getNameAndId
        });;
        console.log(movieGenre); 
        return data;
    } catch (err) {
        console.log(err, "No genres");
    }
};

getMovieGenres();

const addToDom = function (genre) {
    const genreList = document.getElementById('movie-genres');
    const listItem = document.createElement('li');
    const useData = getMovieGenres(genre);
    const textNode = document.createTextNode(getMovieGenres);
    genreList.append(listItem);
    listItem.appendChild(textNode);
}

addToDom();

const showGenres = async function () {
    const genre = await getMovieGenres();
    const NameAndId = getNameAndId(genre);
    addToDom(genre); 
}

showGenres ();