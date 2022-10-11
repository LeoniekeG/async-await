const apiKey = '08c1a61da710c7e91f1ec585942f3264'
const getData = async () => {
    try {
        const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key='+apiKey;
        const response = await fetch((url = apiUrl), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log("Get request", data);
        return data;
    } catch (err) {
        console.log(err, "No data");
    }
};
