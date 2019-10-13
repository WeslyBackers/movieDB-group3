//1. declaratie loginnaam
const naam = "Wesly";

//2. import van globale functies en variabelen die nodig zijn binnen 'wesly.js':
import { API_KEY } from "./config.js";
import Axios from "axios";

//3. uitvoeren van api-data themoviedb.org '20 populairste films'
//3.a exporteren van funtie voor gebruik in andere index.js
export function loadMovies() {
    console.log("login: " + naam);

    //3.b ophalen van de data en in 'response' steken met Axios-functies
    Axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + API_KEY)
        .then(function(response) {

            //3b-1: als check: data printen in console(enkel de filmdata-lijst = response.data.results)
            // console.log(response.data.results);

            //3b-2: uitvoeren van de functie writeMovies to 'Overview' met de data van de filmdata-lijst =response.data.results)
            writeMovies(response.data.results);
        });
}

//4. plaatsen van data in html
function writeMovies(data) {
    //4.a console print data als check of deze opgenomen wordt in de functie
    //console.log(data);

    //4.b Loop door de filmlijst om deze in html te droppen met forEach ipv for-loop
    data.forEach(el => {
        //console.log(el);

        //4.b-1: aanmaken Bootstrap jumbotron 
        var jumbo = document.createElement('div');

        //4.b-2: attributen instellen voor opmaak en click-relaties
        jumbo.setAttribute('class', 'jumbotron p-0 m-2');
        jumbo.setAttribute('id', el.id);

        //4.b-3 opmaak datastring voor in jumbotron
        var movieData = `            
            <div class="mvInfo card">
                <img src=https://image.tmdb.org/t/p/w300/${el.poster_path}>
                <div class="card-body">
                    <h3 class="card-title">${el.title}</h3>
                    <p class="card-text">Score: ${el.vote_average}/10</p>
                    <p class="card-text">Release: ${el.release_date}</p>      
                    <a class="readmore btn" href="index.html?id=${el.id}">Read more</a>
                </div>
            </div>
        `;

        //4.b-4: datastring in jumbotron
        jumbo.innerHTML = movieData;
        jumbo.style.backgroundImage = "url('https://image.tmdb.org/t/p/w1280" + el.backdrop_path + "')";
        jumbo.style.backgroundSize = "cover";
        jumbo.style.backgroundPosition = "center";

        //4.b-5:jumbotron in HTML
        document.getElementById('p01').appendChild(jumbo);

    });
};