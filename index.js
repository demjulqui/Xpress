const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 2000
var cors = require('cors')
app.use(cors())




app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})




    /

    //https://api.themoviedb.org/3/search/movie?api_key=a39e12e45742a56081665355c89ed801&query=Superman&page=1&include_adult=false
    app.get('/api/movie', (req, resp) => {
        const axios = require('axios').default;
        const title = req.query.title;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=a39e12e45742a56081665355c89ed801&query=${title}&page=1&include_adult=false`;
        //stampo tutti i rilsultati usando la funzione map
        axios.get(url).then(function (response) {
            const results = response.data.results;
            const movies = results.map(function (movie) {
                return {
                    title: movie.title,
                    poster: movie.poster_path,
                    overview: movie.overview,
                    release_date: movie.release_date,
                    vote_average: movie.vote_average,
                    id: movie.id
                }
            })
            resp.send(movies);
        })
    })




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

    axios.get("https://api.themoviedb.org/3/trending/all/day?", {
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
            language: "en-US",
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
            language: "en-US",
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