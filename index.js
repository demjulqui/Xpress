const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 2000
var cors = require('cors')
app.use(cors())




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
    const title = req.query.title

    axios.get("https://api.themoviedb.org/3/search/movie?", {
        api_key: 'a39e12e45742a56081665355c89ed801',
        query: title,
        page: 1,
        include_adult: false,

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