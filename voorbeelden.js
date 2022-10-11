/*fetch(url)
.then((response) => {
    if (!response.ok){
        new Error ("Network response was not ok");
    }
    return response.json();
})
.then((data) => {
    /*do something with data zoal iets tonen op je pagine. Je kan hier ook een functie die iets doet aanroepen*//*
})
.catch((error) => {
    console.log(error);
}); 

async getData = (url = 'zet hier url', data = {}) => {
    const response = await fetch (url, {
        method: 'GET',
        /*mode:
        cache:*//*
        headers: {
            'Content-Type': 'application/json'
            /* hier kan ook de API Key!*//*
        },
        body: JSON.stringify(data) /* hier geef je specifieke informatie in. Dat kan bijvoorbeeld value met een number zijn of image met desciption*//*
    });
    return response.json();
}

const getData = async function(){
    const response =  await fecth ('https://api.themoviedb.org/3/genre/movie/list');
    const data = await response.json();
    console.log(data);
}; */

/* DEZE IS GOED EN WERKT
const apiKey = '08c1a61da710c7e91f1ec585942f3264'
const getData = async () => {
    try {
        const response = await fetch((url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=08c1a61da710c7e91f1ec585942f3264'), {
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

const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list';
getData(); */