const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 2000
var cors = require('cors')
app.use(cors())
const axios = require('axios').default;
var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";








app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})


// VARIABILI UTILI
const API_URL = "https://api.themoviedb.org/3/";
const language = "it";
const region = "IT";
const API_KEY_V3 = "a39e12e45742a56081665355c89ed801"





//SEARCH BY TV/MOVIE NAME, TV/MOVIE ACTOR
app.get("/api/search/multi", (req, resp) => {
    const query = req.query.query;
    axios
        .get(`${API_URL}search/multi`, {
            params: {
                api_key: API_KEY_V3,
                language: language,
                query: query,
                page: 1,
                include_adult: false,
                region: region,
            },
        })
        .then((response) => {
            const results = response.data.results;
            resp.send(results);
        });
});



//https://api.themoviedb.org/3/trending/all/week?api_key=a39e12e45742a56081665355c89ed801
app.get('/api/trending/week', (req, resp) => {
    const axios = require('axios').default;

    axios.get("https://api.themoviedb.org/3/trending/all/week?", {
        params: {
            api_key: 'a39e12e45742a56081665355c89ed801',
        }
    })

        .then(function (response) {
            // handle success
            console.log(response);
            resp.send(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }
        )
        .then(function () {
            // always executed
        }
        );
})


//https://api.themoviedb.org/3/trending/all/day?api_key=a39e12e45742a56081665355c89ed801
app.get('/api/trending/day', (req, resp) => {
    const axios = require('axios').default;

    axios.get(`https://api.themoviedb.org/3/trending/all/day?`, {
        params: {
            api_key: 'a39e12e45742a56081665355c89ed801',
        }
    })

        .then(function (response) {
            // handle success
            console.log(response);
            resp.send(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }
        )
        .then(function () {
            // always executed
        }
        );
})

//https://api.themoviedb.org/3/movie/top_rated?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=
app.get('/api/top_rated/movie', (req, resp) => {
    const axios = require('axios').default;

    axios.get("https://api.themoviedb.org/3/movie/top_rated?", {
        params: {
            api_key: 'a39e12e45742a56081665355c89ed801',
            language: 'it-IT',
            page: 1,
        }
    })

        .then(function (response) {
            // handle success
            console.log(response);
            resp.send(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }
        )
        .then(function () {
            // always executed
        }
        );
})

// https://api.themoviedb.org/3/tv/top_rated?api_key=a39e12e45742a56081665355c89ed801&language=it-It&page=1
app.get('/api/top_rated/tv', (req, resp) => {
    const axios = require('axios').default;

    axios.get("https://api.themoviedb.org/3/tv/top_rated?", {
        params: {
            api_key: 'a39e12e45742a56081665355c89ed801',
            language: 'it-IT',
            page: 1,
        }
    })

        .then(function (response) {
            // handle success
            console.log(response);
            resp.send(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }
        )
        .then(function () {
            // always executed
        }
        );
})


//----------------------------------------------------------------------------------------------------------------------

app.get("/api/tv/ricercaperGenere", (req, resp) => {
    const axios = require("axios").default;
    const selectedPage = req.query.page;
    const selectedGenre = req.query.genre.toLowerCase();
    const img = "https://image.tmdb.org/t/p/w500";
    resp.setHeader("Access-Control-Allow-Origin", "*");
    let series = [];
    let genres = new Map();
    genres.set("azione", "10759");
    genres.set("avventura", "10759");
    genres.set("animazione", "16");
    genres.set("commedia", "35");
    genres.set("crime", "80");
    genres.set("documentario", "99");
    genres.set("dramma", "18");
    genres.set("famiglia", "10751");
    genres.set("kids", "10762");
    genres.set("mistero", "9648");
    genres.set("news", "10763");
    genres.set("reality", "10764");
    genres.set("sci-fi", "10765");
    genres.set("fantasy", "10765");
    genres.set("soap", "10766");
    genres.set("talk", "10767");
    genres.set("war", "10768");
    genres.set("politics", "10768");
    genres.set("western", "37");
    axios
        .get("https://api.themoviedb.org/3/discover/tv", {
            params: {
                api_key: "a39e12e45742a56081665355c89ed801",
                language: "it-IT",
                sort_by: "popularity.desc",
                page: selectedPage,
                with_genres: genres.get(selectedGenre),
                include_null_first_air_dates: false,
            },
        })
        .then(function (response) {
            series = response.data.results.map((elem) => ({
                title: elem.title,
                id: elem.id,
                poster_path: elem.poster_path,
                genre_ids: elem.genre_ids,
                release_date: elem.release_date,
                overview: elem.overview,
            }));
            resp.send(series);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
});


//----------------------------------------------------------------------------------------------------------------------


app.get("/api/movie/ricercaperGenere", (req, resp) => {
    const axios = require("axios").default;
    const selectedPage = req.query.page;
    const selectedGenre = req.query.genre.toLowerCase();
    const img = "https://image.tmdb.org/t/p/w500";
    resp.setHeader("Access-Control-Allow-Origin", "*");
    let series = [];
    let genres = new Map();
    genres.set("azione", "10759");
    genres.set("avventura", "10759");
    genres.set("animazione", "16");
    genres.set("commedia", "35");
    genres.set("crime", "80");
    genres.set("documentario", "99");
    genres.set("dramma", "18");
    genres.set("famiglia", "10751");
    genres.set("kids", "10762");
    genres.set("mistero", "9648");
    genres.set("news", "10763");
    genres.set("reality", "10764");
    genres.set("sci-fi", "10765");
    genres.set("fantasy", "10765");
    genres.set("soap", "10766");
    genres.set("talk", "10767");
    genres.set("war", "10768");
    genres.set("politics", "10768");
    genres.set("western", "37");
    axios
        .get("https://api.themoviedb.org/3/discover/movie", {
            params: {
                api_key: "a39e12e45742a56081665355c89ed801",
                language: "it-IT",
                sort_by: "popularity.desc",
                page: selectedPage,
                with_genres: genres.get(selectedGenre),
                include_null_first_air_dates: false,
            },
        })
        .then(function (response) {
            series = response.data.results.map((elem) => (
                //stampo le serie in un array chiamato results
                {

                    id: elem.id,
                    title: elem.title,
                    poster_path: elem.poster_path,
                    genre_ids: elem.genre_ids,
                    release_date: elem.release_date,
                    overview: elem.overview,
                }
            ));
            resp.send(series);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
});





//https://api.themoviedb.org/3/tv/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=1
//prendo le serie tv piu popolari

app.get('/api/tv/popular', (req, resp) => {
    const axios = require('axios').default;

    axios.get('https://api.themoviedb.org/3/tv/popular?', {
        params: {
            api_key: 'a39e12e45742a56081665355c89ed801',
            language: 'it-IT',
            page: 1,
            include_adult: false,
        }

    })
        .then(function (response) {
            // handle success
            console.log(response);
            resp.send(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }
        )
        .then(function () {
            // always executed
        }
        );
})



//api.themoviedb.org/3/movie/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=1
//prendo i film piu popolari
app.get('/api/movie/popular', (req, resp) => {
    const axios = require('axios').default;

    axios.get("https://api.themoviedb.org/3/movie/popular?", {
        params: {
            api_key: 'a39e12e45742a56081665355c89ed801',
            language: 'it-IT',
            page: 1
        }
    })
        .then(function (response) {
            // handle success
            console.log(response);
            resp.send(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }
        )
        .then(function () {
            // always executed
        }
        );
})



app.get('/api/movie/discover', (req, resp) => {
    const axios = require('axios').default;
    const page = req.query.page
    //make a request to the api url
    axios.get("https://api.themoviedb.org/3/discover/movie?", {
        params: {
            api_key: "a39e12e45742a56081665355c89ed801",
            language: "it-IT",
            sort_by: "popularity.desc",
            include_adult: "false",
            page: 1,

        },
    })
        .then((response) => {
            const data = response.data;
            resp.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
})


//https://api.themoviedb.org/3/genre/movie/list?api_key=a39e12e45742a56081665355c89ed801&language=en-US

app.get('/api/movie/genre', (req, resp) => {
    const axios = require('axios').default;
    axios.get("https://api.themoviedb.org/3/genre/movie/list?", {
        params: {
            api_key: "a39e12e45742a56081665355c89ed801",
            language: "it-IT",
        },
    })
        .then((response) => {
            const data = response.data;
            resp.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
})






app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}
)





//rs