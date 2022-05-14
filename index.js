const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 2000

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})




//data la seguente API:  //http://api.weatherapi.com/v1/current.json?key=f2e389d442374d30a9695716220905&q=Milan&aqi=no
//create una api usando axios che vada a chiamare questa API e ritorni il json dei seguenti campi:
//1.nome della citta 2.country 3.latitudine 4.longitudine 5.temperatura 6.umidita 9.descrizione 10.icona 11.texto
//il capo cordinate deve essere una stringa che contenga latitudine e longitudine separati da una virgola
app.get('/api/weather', (req, resp) => {
    const axios = require('axios').default;
    const country = req.query.country


    axios.get(`http://api.weatherapi.com/v1/current.json?key=f2e389d442374d30a9695716220905&q=${country}&aqi=no`)
        .then(function (response) {
            // handle success

            const myObj = {
                nome: response.data.location.name,
                country: response.data.location.country,
                temperatura: response.data.current.temp_c,
                descrizione: response.data.current.condition.text,
                icona: response.data.current.condition.icon,
                texto: response.data.current.condition.text,
                longitudine: response.data.location.lon,
                latitudine: response.data.location.lat,
                cordinate: { latitudine: response.data.location.lat, longitudine: response.data.location.lon }
            }

            resp.json(myObj)



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
}
)


//https://api.themoviedb.org/3/search/movie?api_key=a39e12e45742a56081665355c89ed801&query=Superman&page=1&include_adult=false
app.get('/api/movie', (req, resp) => {
    const axios = require('axios').default;
    const film = req.query.film
    let index = []
    const page = 1
    let maxPage = 1
    let filmArray = []


    //quindi faccio un ciclo per aumentare il numero di pagina fino a quando non ci sono pagine vuote
    //mi stampo il numero di film trovati
    for (let i = 0; i < maxPage; i++) {
        let page = 1
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a39e12e45742a56081665355c89ed801&query=${film}&page=${page}&include_adult=false`)
            .then(function (response) {
                // handle success
                maxPage = 1//response.data.total_pages
                for (let i = 0; i < response.data.results.length; i++) {
                    //faccio un conteggio per salvarmi i dai dei film in un array per poi stamparli in una pagina html(id,title, overview, poster_path, release_date, popularity)

                    index.push(response.data.results[i])
                    id = {
                        id: response.data.results[i].id,
                        title: response.data.results[i].title,
                        overview: response.data.results[i].overview,
                        poster_path: response.data.results[i].poster_path,
                        release_date: response.data.results[i].release_date,
                        popularity: response.data.results[i].popularity
                    }
                    filmArray.push(id)
                }
                resp.json(filmArray)
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
    }
}
)






//https://api.themoviedb.org/3/tv/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=1
//prendo le serie tv piu popolari

app.get('/api/tv/popular', (req, resp) => {
    const axios = require('axios').default;
    let index = []
    let maxPage = 1
    let tvArray = []

    for (let i = 0; i < maxPage; i++) {
        let page = 1
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=${page}`)
            .then(function (response) {
                // handle success
                maxPage = 1//response.data.total_pages
                for (let i = 0; i < response.data.results.length; i++) {
                    //faccio un conteggio per salvarmi i dai dei film in un array per poi stamparli in una pagina html(id,title, overview, poster_path, release_date, popularity)

                    genres: {
                        for (let i = 0; i < response.data.results[i].genre_ids.length; i++) {
                            console.log(response.data.results[i].genre_ids[i])

                        }
                    }
                    index.push(response.data.results[i])
                    id = {
                        id: response.data.results[i].id,
                        title: response.data.results[i].name,
                        overview: response.data.results[i].overview,
                        poster_path: response.data.results[i].poster_path,
                        release_date: response.data.results[i].first_air_date,
                        popularity: response.data.results[i].popularity
                    }
                    tvArray.push(id)
                }
                resp.json(tvArray)
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
    }
}
)

//api.themoviedb.org/3/movie/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=1
//prendo i film piu popolari


app.get('/api/movie/popular', (req, resp) => {
    const axios = require('axios').default;
    let index = []
    let maxPage = 1
    let movieArray = []
    for (let i = 0; i < maxPage; i++) {
        let page = 1
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a39e12e45742a56081665355c89ed801&language=en-US&page=${page}`)
            .then(function (response) {
                // handle success
                maxPage = 1//response.data.total_pages
                for (let i = 0; i < response.data.results.length; i++) {
                    //faccio un conteggio per salvarmi i dai dei film in un array per poi stamparli in una pagina html(id,title, overview, poster_path, release_date, popularity)

                    genres: {
                        for (let i = 0; i < response.data.results[i].genre_ids.length; i++) {
                            console.log(response.data.results[i].genre_ids[i])

                        }
                    }
                    index.push(response.data.results[i])
                    id = {
                        id: response.data.results[i].id,
                        title: response.data.results[i].title,
                        overview: response.data.results[i].overview,
                        poster_path: response.data.results[i].poster_path,
                        release_date: response.data.results[i].release_date,
                        popularity: response.data.results[i].popularity
                    }
                    movieArray.push(id)
                }
                resp.json(movieArray)
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
    }
}
)



//https://api.themoviedb.org/3/genre/movie/list?api_key=a39e12e45742a56081665355c89ed801&language=en-US
app.get('/api/genre', (req, resp) => {
    const axios = require('axios').default;
    const genre = req.query.genre
    let index = []

    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=a39e12e45742a56081665355c89ed801&language=en-US`)
        .then(function (response) {
            // handle success
            for (let i = 0; i < response.data.genres.length; i++) {

                index.push(response.data.genres[i].id)
                index.push(response.data.genres[i].name)
            }

            resp.json(index)
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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}
)





//rs